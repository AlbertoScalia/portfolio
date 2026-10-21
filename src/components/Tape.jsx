import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const WORDS = ['Editorial design', 'Visual identity', 'Packaging', 'Typography', 'UX/UI', 'Prototyping'];

// Una fascia di testo che scorre in orizzontale in base allo scroll della pagina.
// Il contenuto è ripetuto tre volte: qualsiasi spostamento tra 0% e -66% copre sempre lo schermo.
function Band({ progress, from, to, className, weight }) {
  const x = useTransform(progress, [0, 1], [from, to]);
  return (
    <motion.div
      style={{ x }}
      className={`absolute -left-[10%] top-1/2 flex w-[120%] -translate-y-1/2 items-center overflow-visible py-5 md:py-7 ${className}`}
    >
      <div className="flex w-max items-center whitespace-nowrap">
        {[0, 1, 2].flatMap((set) =>
          WORDS.map((word) => (
            <span key={`${set}-${word}`} className={`flex items-center gap-8 pr-8 text-[clamp(2.25rem,6vw,5rem)] leading-none tracking-[-0.03em] text-white md:gap-12 md:pr-12 ${weight}`}>
              {word}
              <span className="h-3 w-3 shrink-0 rounded-full bg-white md:h-4 md:w-4" />
            </span>
          ))
        )}
      </div>
    </motion.div>
  );
}

// Decorativa: ripete competenze già presenti nella pagina About, quindi è nascosta agli screen reader.
// Si muove solo mentre scorri la pagina (nessuna animazione automatica).
export default function Tape() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section ref={ref} aria-hidden="true" className="relative h-[17rem] overflow-hidden md:h-[24rem]">
      <div className="absolute inset-0 -rotate-3">
        <Band progress={scrollYProgress} from="0%" to={reduce ? '0%' : '-16%'} className="bg-[#EC3814]" weight="font-semibold" />
      </div>
      <div className="absolute inset-0 rotate-3">
        <Band progress={scrollYProgress} from={reduce ? '-33%' : '-33%'} to={reduce ? '-33%' : '-17%'} className="bg-[#364b9b]" weight="font-light" />
      </div>
    </section>
  );
}
