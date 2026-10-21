import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from '@phosphor-icons/react';
import Magnetic from './Magnetic';

/* ---------- Contenuti ---------- */

const INTRO =
  "I'm Alberto, a visual and interface designer with a background in high-end editorial design. I build identities, magazines, packaging and interfaces that stay consistent from print to screen.";

const ROLE = 'Visual & Interface Designer';

const PORTRAIT = `${import.meta.env.BASE_URL}assets/images/profile.webp`;

// Titolo: peso semibold e blu per Editorial precision, light e rosso per digital performance
const TITLE = [
  { text: 'Editorial', weight: 'font-semibold', color: 'text-[#364b9b]' },
  { text: 'precision,', weight: 'font-semibold', color: 'text-[#364b9b]' },
  { text: 'digital', weight: 'font-light', color: 'text-[#EC3814]' },
  { text: 'performance', weight: 'font-light', color: 'text-[#EC3814]' },
];

// Quanto ogni riga del titolo "resta indietro" rispetto allo scroll (px): crea l'effetto a ventaglio
const TITLE_LAG = [40, 90, 140, 190];

/* ---------- Livello parallax ---------- */

function Layer({ as = 'div', progress, y = [0, 0], scale = [1, 1], rotate = [0, 0], className, style, children, ...rest }) {
  const Tag = motion[as];
  const ty = useTransform(progress, [0, 1], y);
  const ts = useTransform(progress, [0, 1], scale);
  const tr = useTransform(progress, [0, 1], rotate);
  return (
    <Tag {...rest} style={{ y: ty, scale: ts, rotate: tr, ...style }} className={className}>
      {children}
    </Tag>
  );
}

/* ---------- Hero ---------- */

export default function HeroParallax() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Con "riduci movimento" attivo tutti gli spostamenti sono a zero
  const px = (n) => (reduce ? 0 : n);

  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);

  // Movimento del mouse: ritratto, cerchio e titolo si spostano di poco, a profondità diverse
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });
  const portraitX = useTransform(smx, [-0.5, 0.5], [16, -16]);
  const portraitY = useTransform(smy, [-0.5, 0.5], [16, -16]);
  const ringX = useTransform(smx, [-0.5, 0.5], [-28, 28]);
  const ringY = useTransform(smy, [-0.5, 0.5], [-28, 28]);
  const titleX = useTransform(smx, [-0.5, 0.5], [10, -10]);

  const onPointerMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Entrata della colonna destra
  const rise = (i) => ({
    initial: { opacity: 0, y: reduce ? 0 : 48 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  });

  // Entrata del titolo: ogni riga sale da dietro una maschera
  const reveal = (i) => ({
    initial: { y: reduce ? 0 : '105%' },
    animate: { y: 0 },
    transition: { duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  });

  const scrollToWork = (e) => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section ref={ref} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave} className="grid min-h-[100svh] grid-cols-1 overflow-hidden md:grid-cols-[58fr_42fr]">
      {/* Colonna sinistra: fondo pulito con titolo bicolore */}
      <div className="relative isolate flex items-end overflow-hidden bg-white px-6 pb-14 pt-36 md:items-center md:pb-20 md:pt-28 lg:px-12">
        {/* Cerchio decorativo in rosso/arancione (#EC3814) */}
        <Layer
          progress={scrollYProgress}
          y={[0, px(-100)]}
          className="pointer-events-none absolute -bottom-[18%] -right-[24%] aspect-square w-[78%]"
        >
          <motion.div style={{ x: ringX, y: ringY }} className="h-full w-full rounded-full border border-[#EC3814]/25" />
        </Layer>

        {/* Titolo */}
        <motion.h1
          style={{ opacity: titleOpacity, x: titleX }}
          className="relative text-[clamp(2.75rem,13vw,6rem)] leading-[0.95] tracking-[-0.045em] md:text-[min(8.4vw,10rem)]"
        >
          {TITLE.map(({ text, weight, color }, i) => (
            <Layer key={text} as="span" progress={scrollYProgress} y={[0, px(TITLE_LAG[i])]} className="block">
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span {...reveal(i)} className={`block ${weight} ${color}`}>
                  {text}
                </motion.span>
              </span>
            </Layer>
          ))}
        </motion.h1>

        {/* Indicatore di scroll (decorativo): si ferma dopo qualche secondo */}
        <div aria-hidden="true" className="absolute bottom-8 left-6 hidden h-14 w-px overflow-hidden bg-[#364b9b]/20 md:block lg:left-12">
          <motion.span
            className="block h-5 w-px bg-[#364b9b]"
            initial={{ y: -20 }}
            animate={reduce ? { y: 0 } : { y: [-20, 56] }}
            transition={reduce ? { duration: 0 } : { duration: 1.6, repeat: 2, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Colonna destra: ritratto e presentazione */}
      <div className="flex flex-col justify-between gap-14 px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-32 lg:px-16">
        <motion.div {...rise(0)} className="w-fit">
          <Layer progress={scrollYProgress} y={[0, px(-120)]} scale={[1, reduce ? 1 : 0.9]}>
            <motion.div style={{ x: portraitX, y: portraitY }} className="relative">
              <div className="relative isolate aspect-square w-[clamp(12rem,62vw,18rem)] overflow-hidden rounded-full border-[10px] border-[#EC3814] bg-white md:w-[clamp(12rem,27vw,28rem)]">
                <img
                  src={PORTRAIT}
                  alt="Portrait of Alberto Scalia"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-center contrast-125"
                />
              </div>
              {/* Punto che orbita attorno al ritratto mentre scorri (decorativo) */}
              <Layer
                progress={scrollYProgress}
                rotate={[0, px(200)]}
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 rounded-full"
              >
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#364b9b]" />
              </Layer>
            </motion.div>
          </Layer>
        </motion.div>

        <motion.div {...rise(1)} className="max-w-md">
          <Layer progress={scrollYProgress} y={[0, px(60)]}>
            <p className="mb-5 text-sm font-medium text-[#364b9b]/80">{ROLE}</p>
            <div className="border-t border-[#364b9b]/20 pt-6">
              <p className="text-lg leading-snug text-[#364b9b] md:text-xl">{INTRO}</p>
              <a href="#work" onClick={scrollToWork} className="group mt-8 inline-flex items-center gap-4 text-[#364b9b]">
                <span className="font-medium transition-colors duration-300 group-hover:text-[#EC3814]">See selected work</span>
                <Magnetic>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#364b9b] transition-colors duration-300 group-hover:border-[#EC3814] group-hover:bg-[#EC3814] group-hover:text-white">
                    <ArrowDown size={18} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  </span>
                </Magnetic>
              </a>
            </div>
          </Layer>
        </motion.div>
      </div>
    </section>
  );
}