import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';

// Cursore personalizzato: un anello che segue il mouse, si ingrandisce sui link
// e mostra un'etichetta (es. "View") sugli elementi con data-cursor.
// È solo decorativo: il cursore del sistema resta visibile, non intercetta click,
// compare solo con mouse/trackpad e non c'è con "riduci movimento".
export default function Cursor() {
  const reduce = useMotionPref();
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState('idle'); // idle | link | view
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const shown = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(mq.matches && !reduce);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!shown.current) {
        shown.current = true;
        setVisible(true);
      }
    };
    const onOver = (e) => {
      const el = e.target instanceof Element ? e.target.closest('[data-cursor], a, button, input, textarea, [role="button"]') : null;
      if (!el) {
        setMode('idle');
        setLabel('');
        return;
      }
      const text = el.getAttribute('data-cursor');
      setMode(text ? 'view' : 'link');
      setLabel(text || '');
    };
    const onLeave = () => {
      shown.current = false;
      setVisible(false);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const scale = mode === 'view' ? 3.2 : mode === 'link' ? 1.8 : 1;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-[400]"
    >
      <motion.span
        animate={{ scale, backgroundColor: mode === 'view' ? '#C72E0E' : 'rgba(236,56,20,0)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="absolute -left-3.5 -top-3.5 block h-7 w-7 rounded-full border-2 border-[#EC3814] shadow-[0_0_0_1px_rgba(255,255,255,0.9)]"
      />
      <motion.span
        animate={{ opacity: mode === 'view' ? 1 : 0, scale: mode === 'view' ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-white"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
