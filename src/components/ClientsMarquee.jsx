import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Pause, Play } from '@phosphor-icons/react';

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
      <img
        src={client.logo}
        alt={decorative ? '' : client.name}
        width="160"
        height="60"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain opacity-60 grayscale invert transition-opacity duration-300 group-hover:opacity-0"
      />
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
    <section className="overflow-hidden py-16 md:py-28">
      <header className="mx-auto mb-16 grid max-w-[1600px] grid-cols-1 gap-6 px-6 md:grid-cols-12 lg:px-12">
        <h2 className="font-display text-5xl leading-[1.05] md:col-span-7 md:text-7xl">
                  <h2 className="font-display max-w-4xl text-5xl leading-[1.02] md:text-8xl">Who trusted me</h2>

        </h2>
        <p className="text-lg leading-relaxed text-white/80 md:col-span-4 md:col-start-9 md:self-end">
          {clients.length} publishers and brands have trusted me so far, with consistent results.
        </p>
      </header>

      {/* Con prefers-reduced-motion l'animazione si ferma e la riga diventa scorrevole a mano */}
      <div className="overflow-x-hidden border-y border-white/20 py-12 motion-reduce:overflow-x-auto">
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
          className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
        >
          {paused ? <Play size={16} weight="fill" aria-hidden="true" /> : <Pause size={16} weight="fill" aria-hidden="true" />}
          {paused ? 'Play logos' : 'Pause logos'}
        </button>
      </div>

      <div className="mx-auto mt-28 max-w-[1600px] px-6 lg:px-12">
        <h2 className="font-display max-w-4xl text-5xl leading-[1.02] md:text-8xl">Do you have a project in mind?</h2>
        <p className="mt-8 flex items-center gap-3 text-lg text-white">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#EC3814] motion-safe:animate-pulse" />
          {AVAILABILITY}
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
          Let's talk about it together and turn your idea into reality.
        </p>
        <Link to="/contact" className="group mt-10 inline-flex items-center gap-3 text-xl text-white transition-colors hover:text-[#EC3814]">
          Get in touch
          <ArrowUpRight size={22} weight="bold" aria-hidden="true" className="transition-transform group-hover:rotate-45" />
        </Link>
      </div>
    </section>
  );
}