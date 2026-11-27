import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';
import Reveal from './Reveal';
import Guides from './Guides';

const STATS = [
  { value: 50, suffix: '+', label: 'BOOK PROJECTS DELIVERED', tag: 'Editorial' },
  { value: 12, suffix: '+', label: 'PUBLISHERS AND BRANDS', tag: 'Identity' },
];

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
        <span className="font-semibold text-[#D91616]">{suffix}</span>
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
    <section
      aria-labelledby="stats-title"
      className="relative overflow-hidden border-y border-[#000000]/20 bg-[#0b0b0b] py-20 text-white md:py-20"
    >
      <Guides />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[12%] top-1/2 aspect-square w-[44%] -translate-y-1/2 rounded-full border border-white/15"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">

        <Reveal as="h2" id="stats-title" className="mt-8 max-w-4xl text-5xl leading-[1.02] text-white md:text-8xl">
          <span className="font-semibold">The work, in numbers</span>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 divide-y divide-white/15 border-y border-white/15 md:mt-24 md:grid-cols-2 md:divide-x md:divide-y-0">
          {STATS.map(({ value, suffix, label, tag }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={i * 0.12}
              className="flex flex-col justify-between py-8 md:px-10 md:py-10 first:md:pl-0 last:md:pr-0"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-[clamp(4.5rem,13vw,11.5rem)] font-bold tabular-nums leading-[0.88] tracking-[-0.05em] text-white">
                  <CountUp to={value} suffix={suffix} />
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/15 pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/80">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}