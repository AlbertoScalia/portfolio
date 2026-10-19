import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from '@phosphor-icons/react';
import { GRAIN } from '../utils/grain';

/* ---------- Contenuti ---------- */

const INTRO =
  "I'm Alberto, a visual and interface designer with a background in high-end editorial design. I build identities, magazines, packaging and interfaces that stay consistent from print to screen.";

const ROLE = 'Visual & Interface Designer';

const PORTRAIT = `${import.meta.env.BASE_URL}assets/images/profile.webp`;

// Titolo: peso semibold sulle prime due righe, light sulle ultime due
const TITLE = [
  { text: 'Editorial', weight: 'font-semibold' },
  { text: 'precision,', weight: 'font-semibold' },
  { text: 'digital', weight: 'font-light' },
  { text: 'performance', weight: 'font-light' },
];

// Quanto ogni riga del titolo "resta indietro" rispetto allo scroll (px): crea l'effetto a ventaglio
const TITLE_LAG = [40, 90, 140, 190];

/* ---------- Livello parallax ---------- */
// Sposta (y) e scala un elemento in base al progresso di scroll della hero (0 → 1).

function Layer({ as = 'div', progress, y = [0, 0], scale = [1, 1], className, style, children }) {
  const Tag = motion[as];
  const ty = useTransform(progress, [0, 1], y);
  const ts = useTransform(progress, [0, 1], scale);
  return (
    <Tag style={{ y: ty, scale: ts, ...style }} className={className}>
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
    <section ref={ref} className="grid min-h-[100svh] grid-cols-1 overflow-hidden md:grid-cols-[58fr_42fr]">
      {/* Colonna sinistra: blocco arancione con titolo */}
      <div className="relative isolate flex items-end overflow-hidden bg-[#EC3814] px-6 pb-14 pt-36 md:items-center md:pb-20 md:pt-28 lg:px-12">
        {/* Profondità: leggera luce in alto a sinistra, ombra in basso a destra */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] to-black/[0.12]" />

        {/* Livello 1 (più lento): grana */}
        <Layer
          progress={scrollYProgress}
          y={[0, px(160)]}
          className="pointer-events-none absolute inset-x-0 -top-1/4 h-[150%] opacity-25 mix-blend-overlay"
          style={{ backgroundImage: GRAIN }}
        />

        {/* Livello 2 (più veloce): cerchio decorativo, eco del ritratto */}
        <Layer
          progress={scrollYProgress}
          y={[0, px(-100)]}
          className="pointer-events-none absolute -bottom-[18%] -right-[24%] aspect-square w-[78%] rounded-full border border-white/25"
        />

        {/* Livello 3: titolo, ogni riga con la sua velocità */}
        <motion.h1
          style={{ opacity: titleOpacity }}
          className="relative text-[clamp(2.75rem,13vw,6rem)] leading-[0.95] tracking-[-0.045em] text-white md:text-[min(8.4vw,10rem)]"
        >
          {TITLE.map(({ text, weight }, i) => (
            <Layer key={text} as="span" progress={scrollYProgress} y={[0, px(TITLE_LAG[i])]} className="block">
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span {...reveal(i)} className={`block ${weight}`}>
                  {text}
                </motion.span>
              </span>
            </Layer>
          ))}
        </motion.h1>

        {/* Indicatore di scroll (decorativo) */}
        <div aria-hidden="true" className="absolute bottom-8 left-6 hidden h-14 w-px overflow-hidden bg-white/30 md:block lg:left-12">
          <motion.span
            className="block h-5 w-px bg-white"
            initial={{ y: -20 }}
            animate={reduce ? { y: 0 } : { y: [-20, 56] }}
            transition={reduce ? { duration: 0 } : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Colonna destra: ritratto e presentazione */}
      <div className="flex flex-col justify-between gap-14 px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-32 lg:px-16">
        <motion.div {...rise(0)} className="w-fit">
          <Layer progress={scrollYProgress} y={[0, px(-120)]} scale={[1, reduce ? 1 : 0.9]}>
            <div className="relative isolate aspect-square w-[clamp(12rem,62vw,18rem)] overflow-hidden rounded-full border-[10px] border-[#fc655e] bg-white md:w-[clamp(12rem,27vw,28rem)]">
              <img
                src={PORTRAIT}
                alt="Portrait of Alberto Scalia"
                decoding="async"
                className="h-full w-full object-cover object-center contrast-125"
              />
            </div>
          </Layer>
        </motion.div>

        <motion.div {...rise(1)} className="max-w-md">
          <Layer progress={scrollYProgress} y={[0, px(60)]}>
            <p className="mb-5 text-sm font-medium text-[#364b9b]/80">{ROLE}</p>
            <div className="border-t border-[#364b9b]/20 pt-6">
              <p className="text-lg leading-snug text-[#364b9b] md:text-xl">{INTRO}</p>
              <a href="#work" onClick={scrollToWork} className="group mt-8 inline-flex items-center gap-4 text-[#364b9b]">
                <span className="font-medium transition-colors duration-300 group-hover:text-[#EC3814]">See selected work</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#364b9b] transition-colors duration-300 group-hover:border-[#EC3814] group-hover:bg-[#EC3814] group-hover:text-white">
                  <ArrowDown size={18} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </a>
            </div>
          </Layer>
        </motion.div>
      </div>
    </section>
  );
}
