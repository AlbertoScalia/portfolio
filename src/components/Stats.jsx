import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';
import Reveal from './Reveal';
import Guides from './Guides';

const STATS = [
  { value: 50, suffix: '+', label: 'Book projects delivered' },
  { value: 12, suffix: '', label: 'Publishers and brands' },
];

// Numero che conta fino al valore quando entra nel viewport.
// Per gli screen reader c'è solo il valore finale; con "riduci movimento" non conta.
function CountUp({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useMotionPref();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setN(to);
      return;
    }
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {n}
        <span className="font-light text-[#EC3814]">{suffix}</span>
      </span>
      <span className="sr-only">
        {to}
        {suffix}
      </span>
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-labelledby="stats-title" className="relative overflow-hidden bg-[#F3F5FB] py-20 md:py-32">
      <Guides />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[12%] top-1/2 aspect-square w-[44%] -translate-y-1/2 rounded-full border border-[#EC3814]/25" />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
        <Reveal as="h2" id="stats-title" className="max-w-4xl text-5xl leading-[1.02] md:text-8xl">
          <span className="font-semibold text-[#364b9b]">The work, </span>
          <span className="font-light text-[#EC3814]">in numbers</span>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-2 md:gap-16">
          {STATS.map(({ value, suffix, label }, i) => (
            <Reveal as="li" key={label} delay={i * 0.12} className="border-t border-[#364b9b]/20 pt-6">
              <p className="text-[clamp(5rem,16vw,14rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-[#364b9b]">
                <CountUp to={value} suffix={suffix} />
              </p>
              <p className="mt-4 text-lg text-[#364b9b]/90">{label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
