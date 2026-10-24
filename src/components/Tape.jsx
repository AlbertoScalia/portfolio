import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';

const WORDS = ['Editorial design', 'Visual identity', 'Packaging', 'Typography', 'UX/UI', 'Prototyping'];

// Una riga di parole che scorre in orizzontale in base allo scroll della pagina.
// Il contenuto è ripetuto tre volte: qualsiasi spostamento tra 0% e -66% copre sempre lo schermo.
// Il contorno si disegna prima del riempimento bianco (paint-order): così non si vedono le sovrapposizioni interne dei glifi.
// Il padding sta sul contenitore che ritaglia, così le code delle lettere (g, p, y) non vengono tagliate.
function Track({ progress, from, to, className = '', renderWord }) {
  const x = useTransform(progress, [0, 1], [from, to]);
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex w-max items-center whitespace-nowrap">
        {[0, 1, 2].flatMap((set) => WORDS.map((word) => renderWord(word, `${set}-${word}`)))}
      </motion.div>
    </div>
  );
}

// Decorativa: ripete competenze già presenti nella pagina About, quindi è nascosta agli screen reader.
// Si muove solo mentre scorri la pagina (nessuna animazione automatica).
export default function Tape() {
  const ref = useRef(null);
  const reduce = useMotionPref();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section ref={ref} aria-hidden="true" className="overflow-hidden py-16 md:py-24">
      {/* Fascia piena: arancione, testo bianco */}
      <Track
        progress={scrollYProgress}
        from="0%"
        to={reduce ? '0%' : '-16%'}
        className="bg-[#EC3814] py-5 md:py-7"
        renderWord={(word, key) => (
          <span
            key={key}
            className="flex items-center gap-8 pr-8 text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-white md:gap-12 md:pr-12"
          >
            {word}
            <span className="h-3 w-3 shrink-0 rounded-full bg-white md:h-4 md:w-4" />
          </span>
        )}
      />

      {/* Riga in contorno: blu, più grande, scorre nel verso opposto */}
      <Track
        progress={scrollYProgress}
        from="-33%"
        to={reduce ? '-33%' : '-17%'}
        className="py-6 md:py-10"
        renderWord={(word, key) => (
          <span
            key={key}
            className="flex items-center gap-8 pr-8 text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-white [-webkit-text-stroke:4px_#364b9b] [paint-order:stroke_fill] md:gap-14 md:pr-14"
          >
            {word}
            <span className="h-4 w-4 shrink-0 rounded-full bg-[#EC3814] md:h-6 md:w-6" />
          </span>
        )}
      />
    </section>
  );
}
