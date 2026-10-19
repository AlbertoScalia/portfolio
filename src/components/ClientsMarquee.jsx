import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Pause, Play } from '@phosphor-icons/react';
import Reveal from './Reveal';

const AVAILABILITY = 'OPEN TO UX/UI ROLES — AVAILABLE IMMEDIATELY';

const logo = (n) => `${import.meta.env.BASE_URL}assets/images/Logo${n}.webp`;

const clients = [
  { name: 'Apogeo Editore', logo: logo(1) },
  { name: 'LetteraVentidue', logo: logo(2) },
  { name: 'Ricca Editore', logo: logo(3) },
  { name: 'Il Pensiero Scientifico', logo: logo(4) },
  { name: 'Flaco Edizioni', logo: logo(5) },
  { name: 'Editori Riuniti', logo: logo(6) },
  { name: 'Scuola del Libro', logo: logo(7) },
  { name: 'Conservatorio Vicenza', logo: logo(8) },
  { name: 'Life Electronics', logo: logo(9) },
  { name: 'Compagnia Aliberti', logo: logo(10) },
  { name: 'lay0ut magazine', logo: logo(12) },
  { name: 'Gyada Cosmetics S.r.l.', logo: logo(13) },
];

function Logo({ client, decorative }) {
  return (
    <div className="group relative flex h-12 w-32 shrink-0 items-center justify-center md:w-40">
      {/* Maschera Blu (#364b9b) di base */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#364b9b] opacity-80 transition-opacity duration-300 group-hover:opacity-0"
        style={{
          maskImage: `url(${client.logo})`,
          WebkitMaskImage: `url(${client.logo})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
      {/* Maschera Rossa (#EC3814) all'hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#EC3814] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          maskImage: `url(${client.logo})`,
          WebkitMaskImage: `url(${client.logo})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    </div>
  );
}

export default function ClientsMarquee() {
  const [paused, setPaused] = useState(false);
  const group = 'flex shrink-0 items-center gap-16 pr-16 md:gap-32 md:pr-32';

  return (
    <section className="overflow-hidden py-16 md:py-28 text-[#364b9b]">
      <header className="mx-auto mb-16 grid max-w-[1600px] grid-cols-1 gap-6 px-6 md:grid-cols-12 md:items-end lg:px-12">
        <Reveal as="h2" className="max-w-4xl text-5xl leading-[1.02] md:col-span-7 md:text-8xl">
          <span className="font-semibold text-[#364b9b]">Who </span>
          <span className="font-light text-[#EC3814]">trusted me</span>
        </Reveal>
        <Reveal as="p" delay={0.1} className="text-lg leading-relaxed text-[#364b9b]/80 md:col-span-4 md:col-start-9">
          {clients.length} publishers and brands have trusted me so far, with consistent results.
        </Reveal>
      </header>

      {/* Bordi e loghi sfumano ai lati */}
      <div className="overflow-x-hidden border-y border-[#364b9b]/20 py-12 [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:overflow-x-auto">
        <div className="marquee-track flex w-max" data-paused={paused}>
          <ul className={group}>
            {clients.map((c) => (
              <li key={c.name}><Logo client={c} /></li>
            ))}
          </ul>
          <ul className={group} aria-hidden="true">
            {clients.map((c) => (
              <li key={c.name}><Logo client={c} decorative /></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1600px] justify-end px-6 motion-reduce:hidden lg:px-12">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="inline-flex items-center gap-2 text-sm text-[#364b9b]/80 transition-colors hover:text-[#364b9b]"
        >
          {paused ? <Play size={16} weight="fill" aria-hidden="true" /> : <Pause size={16} weight="fill" aria-hidden="true" />}
          {paused ? 'Play logos' : 'Pause logos'}
        </button>
      </div>

      <div className="mx-auto mt-28 max-w-[1600px] px-6 lg:px-12">
        <Reveal as="h2" className="max-w-4xl text-5xl leading-[1.02] md:text-8xl">
          <span className="font-semibold text-[#364b9b]">Do you have a </span>
          <span className="font-light text-[#EC3814]">project in mind?</span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#364b9b]/25 px-5 py-2.5 text-sm font-medium text-[#364b9b]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#EC3814] motion-safe:animate-pulse" />
            {AVAILABILITY}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#364b9b]/80">
            Let's talk about it together and turn your idea into reality.
          </p>
          <Link to="/contact" className="group mt-10 inline-flex items-center gap-5 text-xl font-medium text-[#364b9b]">
            <span className="transition-colors duration-300 group-hover:text-[#EC3814]">Get in touch</span>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#364b9b] transition-colors duration-300 group-hover:border-[#EC3814] group-hover:bg-[#EC3814] group-hover:text-white">
              <ArrowUpRight size={24} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
