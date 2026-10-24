import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';
import Guides from './Guides';

const TEXT =
  "From high-profile editorial systems to data-driven interfaces — I turn dense content into systems people can scan, trust, and act on.";
const WORDS = TEXT.split(' ');

// Ogni parola passa dal blu all'arancione man mano che scorri.
// Entrambi i colori rispettano il contrasto per il testo grande, quindi la frase è sempre leggibile.
function Word({ progress, index, total, reduce, children }) {
  const start = (index / total) * 0.75;
  const color = useTransform(progress, [start, start + 0.25], ['#364b9b', reduce ? '#364b9b' : '#EC3814']);
  return <motion.span style={{ color }} className="whitespace-nowrap">
      {children}
    </motion.span>;
}

export default function Manifesto() {
  const ref = useRef(null);
  const reduce = useMotionPref();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] });

  return (
    <section ref={ref} aria-label="Approach" className="relative">
      <Guides />
      <div className="relative mx-auto max-w-[1600px] px-6 py-28 md:py-44 lg:px-12">
      <p className="mb-8 text-sm font-medium text-[#364b9b]/80">Approach</p>
      <p className="max-w-[1300px] text-[clamp(2rem,5.6vw,5.5rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
        {WORDS.map((word, i) => (
          <span key={`${word}-${i}`}>
            <Word progress={scrollYProgress} index={i} total={WORDS.length} reduce={reduce}>
              {word}
            </Word>{' '}
          </span>
        ))}
      </p>
      </div>
    </section>
  );
}
