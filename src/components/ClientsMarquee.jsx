import { useState } from 'react';
import useMotionPref from '../hooks/useMotionPref';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Pause, Play } from '@phosphor-icons/react';
import Reveal from './Reveal';
import Magnetic from './Magnetic';
import RollText from './RollText';

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

function Logo({ client, labelled }) {
  // Una sola maschera: il colore cambia con una transizione di background (la metà dei livelli da disegnare)
  return (
    <div className="group relative flex h-12 w-32 shrink-0 items-center justify-center md:w-40">
      {/* Nome del cliente per gli screen reader: i loghi sono solo maschere decorative */}
      {labelled && <span className="sr-only">{client.name}</span>}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#364b9b]/80 transition-colors duration-300 group-hover:bg-[#EC3814]"
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
  const reduce = useMotionPref();
  const group = 'flex shrink-0 items-center gap-16 pr-16 md:gap-32 md:pr-32';

  return (
    <>
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

      {/* Loghi: ai lati due veli bianchi sfumati (più leggeri di una maschera sul contenitore animato) */}
      <div className="relative">
        {/* Con "riduci movimento" la fascia è ferma e scorrevole: serve il focus da tastiera */}
        <div
          role="region"
          aria-label="Clients and publishers"
          tabIndex={reduce ? 0 : undefined}
          className={`border-y border-[#364b9b]/20 py-12 ${reduce ? 'overflow-x-auto' : 'overflow-x-hidden'}`}
        >
          <div className="marquee-track flex w-max will-change-transform" data-paused={paused}>
            <ul className={group}>
              {clients.map((c) => (
                <li key={c.name}><Logo client={c} labelled /></li>
              ))}
            </ul>
            <ul className={group} aria-hidden="true">
              {clients.map((c) => (
                <li key={c.name}><Logo client={c} /></li>
              ))}
            </ul>
          </div>
        </div>
        <div aria-hidden="true" hidden={reduce} className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-white to-transparent" />
        <div aria-hidden="true" hidden={reduce} className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-white to-transparent" />
      </div>
      <div className={`mx-auto mt-4 max-w-[1600px] justify-end px-6 lg:px-12 ${reduce ? 'hidden' : 'flex'}`}>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-2 text-sm text-[#364b9b]/80 transition-colors hover:text-[#364b9b]"
        >
          {paused ? <Play size={16} weight="fill" aria-hidden="true" /> : <Pause size={16} weight="fill" aria-hidden="true" />}
          {paused ? 'Play logos' : 'Pause logos'}
        </button>
      </div>

    </section>

    {/* Chiusura: blocco blu a tutta larghezza, prima del footer rosso */}
    <section aria-labelledby="cta-title" className="on-brand relative overflow-hidden bg-[#364b9b] py-24 text-white md:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute -right-[10%] -top-[40%] aspect-square w-[55%] rounded-full border border-white/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[55%] left-[6%] aspect-square w-[40%] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
        <Reveal as="h2" id="cta-title" className="max-w-4xl text-5xl leading-[1.02] md:text-8xl">
          <span className="font-semibold">Do you have a </span>
          <span className="font-light">project in mind?</span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/40 px-5 py-2.5 text-sm font-medium text-white">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#EC3814] motion-safe:animate-[pulse_1.8s_ease-in-out_2]" />
            {AVAILABILITY}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Let's talk about it together and turn your idea into reality.
          </p>
          <Link to="/contact" className="group mt-10 inline-flex items-center gap-5 text-xl font-medium text-white">
            <RollText>Get in touch</RollText>
            <Magnetic>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#364b9b]">
                <ArrowUpRight size={24} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </Magnetic>
          </Link>
        </Reveal>
      </div>
    </section>
    </>
  );
}
