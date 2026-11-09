import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';
import { Link } from 'react-router-dom';
import { ArrowDown, Minus, Plus } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import RollText from '../components/RollText';
import { CV_FILE, CV_URL } from '../utils/site';
import { profilePageLd } from '../utils/seo';
import usePageTitle from '../hooks/usePageTitle';

const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-[#FF0000] underline-offset-4 transition-colors hover:text-[#FF0000]">
    {children}
  </a>
);

// Competenze, nell'ordine e con le voci del CV
const skillCategories = [
  {
    title: 'Design Tools',
    groups: [
      { label: 'Software', items: ['Adobe Creative Suite (InDesign, Illustrator, Photoshop)', 'Figma', 'Affinity Suite'] },
      { label: 'Expertise', items: ['Visual Identity', 'Editorial Design', 'Branding Strategy', 'Typography', 'Wireframing', 'High-Fidelity Prototyping'] },
      { label: 'Support', items: ['Miro', 'Khroma', 'Uizard'] },
    ],
  },
  {
    title: 'AI Tools',
    groups: [
      { label: 'Strategy', items: ['AI Business Strategy', 'Prompt Engineering', 'AI Agents'] },
      { label: 'Efficiency', items: ['Advanced workflow automation with n8n and integrated tools'] },
      { label: 'Platforms', items: ['Lovable', 'Claude', 'Perplexity', 'Gemini', 'ChatGPT'] },
    ],
  },
  {
    title: 'Languages',
    groups: [
      { label: 'Italian', items: ['Native'] },
      {
        label: 'English',
        items: [
          'B1 Level – Cambridge ESOL International (Council of Europe Level B1)',
          <A href="https://efset-pdf-generator-prod-eu-west-1.s3.eu-west-1.amazonaws.com/2026/11/7/1794063224012/EF%20SET%20Certificate.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA4UHWAWPW6GEQKLIL%2F20261107%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20261107T145344Z&X-Amz-Expires=86400&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCWV1LXdlc3QtMSJHMEUCIQDzTcsBRkmZXpgdUespTRnTSVO5l3pitjodPvYkiY23ywIgTo%2BCcJn8jBcNmgU8tiEHvx0d2iiyZKAXVs0jCaNCqRsqlgQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw4NjgwOTkzMzkyNDUiDItty9up692QDI6LISrqA%2FmZCUH%2BSQPBgmWSE9mIqtcoM8HJl%2BoPBuf9mS%2FpgAwkRp1KYArFa68AmffWRHWWb4Qvymn5bOxn3M7msX8111oIEuFfKJrGQRgCV8Fso7Y0%2FEXeg1%2BOZmY78iGzdjmggnOjc%2BMxJrGZypn1Nv0tJTwR9wrY4oBMZp27QqG%2Bm7gxSb6wRZuodHQ6knzbf2K4WMDPkcmqcMIsrubHjyKsAcf%2FGU8nME0H0k38YVCV8cpOnXEHBiH2rF2UwizKzOehHNHDj6VDMpJmWZ4IhqI5bzr6pBFmhsxxkhRAK6oEntEnB%2FSSqnsRJGbMQ8OC0J4U74%2FCFWZ50%2BGoE7yz804wLzngdKJUL0xDOiXS5p%2B5IWc0D025GRPneupEr%2BqurHulDdggu%2BHSyfzVfIR2MhfoNx%2FVbQNrCVuMYdGo6FvoXJIF8%2BeTL6%2F%2B8zIXpU45n9PtBiGv99TRw73LnPQIRtbnUHFlDkK%2B9KDRVVefoTVyFY6Kp%2BfBQfb4%2BXHx%2FusX7xIUOyB0IEnL%2FRb%2B3fveOVoTwR6I3YBKhw6qvLVfsG8J6hf8OKINRsoHdb3dHsGC%2F0ccSNu%2BAh18v6kUQ9XubqquVQqjinMH5mN1AEBXvAkuXirujo9D0lZX8TU5hP%2Fm910OUMQzyewq2%2FU5kMIwwNe81wY6ogHgl7aJRQE7xL8aSGX%2F%2Fyuihr1JAXpjt0Rqivq9btyj82wUv22v4jGh%2BRUcYe1oI54%2BdejQ4MSu9KG0uhQ%2FtaIuGJpgOWh%2BnDAipLsRE6f4iai09Na%2BA5tJ70GYnlbCkQNOV2STWywjNH5fYK7MIL%2BQzyeu2D34py5VAY6iXmT2AL94Jh1GrFLqx3eQFuE6QchQH0H0OWDLH%2FayQYw9We4UxaE%3D&X-Amz-Signature=af9b3c12e0b08296cc77410dadb037a4921fb9b98072986220b29d9611120277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject">
            C2 Level - EF SET English Certificate 73/100 (C2 Proficient)
          </A>,
        ],
      },
    ],
  },
];

// Esperienze e formazione: testi identici al CV
const experiences = [
  {
    date: 'Jun. 2026 – Present',
    title: 'Visual & Brand Designer',
    sub: <A href="https://gyadacosmetics.com/">Gyada Cosmetics S.r.l.</A>,
    place: 'Catania, Italy',
    points: [
      ['Action', 'Created and managed the end-to-end graphic design for diverse cosmetic lines, developing packaging layouts, realistic product mockups, and comprehensive print-ready artwork.'],
      ['Result', 'Elevated brand consistency across all new launches, streamlining the print-production workflow and enhancing retail shelf appeal across multiple product lines.'],
    ],
  },
  {
    date: 'Feb. 2025 – Present',
    title: 'Visual & Editorial Designer',
    sub: <A href="https://forward.recentiprogressi.it/it/">Forward magazine (Il Pensiero Scientifico Editore)</A>,
    place: 'Rome, Italy',
    points: [
      ['Action', 'Orchestrated the graphic layout and cross-media identity.'],
      ['Result', 'Streamlined production workflows, shortened approval cycles, and established a cohesive brand language across all issues.'],
    ],
  },
  {
    date: 'May 2022 – May 2026',
    title: 'Visual & Editorial Designer',
    sub: <A href="https://www.layoutmagazine.it/">lay0ut magazine</A>,
    place: 'Milan, Italy',
    points: [
      ['Action', 'Curated the layout design, grid systems, and typography for digital and print content.'],
      ['Result', 'Ensured total visual consistency, optimized the reading experience, and maintained a flawless publishing schedule across all issues.'],
    ],
  },
  {
    date: 'Jun. 2025 – Jan. 2026',
    title: 'Visual & Brand Designer',
    sub: <A href="https://www.life-electronics.com/it">Life Electronics S.p.A.</A>,
    place: 'Riposto, Catania, Italy',
    points: [
      ['Action', 'Designed product packaging and updated website news while utilizing EKR KIT and SAP Business One to manage technical product data.'],
      ['Result', 'Eliminated manual data-entry errors and accelerated time-to-market for new electronic product lines.'],
    ],
  },
  {
    date: 'Jul. 2021 – Jan. 2026',
    title: 'Freelance Visual & Book Designer',
    sub: (
      <>
        12+ publishers (incl. Flaco Edizioni Group, <A href="https://editoririuniti.it">Editori Riuniti</A>, <A href="https://riccaeditore.it">Ricca Editore</A>)
      </>
    ),
    place: 'Italy',
    points: [
      ['Action', 'Directed visual identity and professional typesetting for 12+ independent publishers and academic institutions.'],
      ['Result', 'Successfully Delivered 50+ high-profile editorial projects with 100% on-time print readiness while upholding strict editorial standards.'],
    ],
  },
  {
    date: 'Nov. 2021 – Jan. 2023',
    title: 'Graphic Design Intern',
    sub: <A href="https://letteraventidue.com/it/">LetteraVentidue Edizioni</A>,
    place: 'Syracuse, Italy',
    points: [
      ['Action', 'Collaborated on architectural book design for international authors (Umberto Riva, Giorgio Grassi).'],
      ['Result', 'Contributed to the publication of high-value architectural volumes, ensuring total precision from draft to final print.'],
    ],
  },
];

const education = [
  {
    date: 'Oct. 2025 – Apr. 2026',
    title: 'Master Growth Marketing and AI Agents',
sub: (
    <>
      <A href="https://www.start2impact.it">start2impact</A> /{' '}
      <A href="https://www.unimarconi.it/growth-marketing-e-agenti-ai">Unimarconi</A>
    </>
  ),
      place: 'Rome, Italy',
    points: [
      ['Competencies', 'Funnel Marketing, SEO Audit, Growth Marketing, UX/UI Discovery, Wireframing, User Testing, AI-Optimized UI, Prompt Engineering, Meta/Google Ads, Email Marketing, Advanced Excel, SQL, GA4, Tableau, Looker Studio, HTML/CSS, AI Agent Design.'],
    ],
  },
  {
    date: 'Sep. – Oct. 2024',
    title: 'UX Design Course',
    sub: <A href="https://corsoux.it">CorsoUx.it</A>,
    points: [
      ['Competencies', 'Information Architecture, Low/High-Fidelity Wireframing, Interactive Prototyping.'],
    ],
  },
  {
    date: 'Feb. – Sep. 2023',
    title: 'Master Full Stack Web Developer',
    sub: <A href="https://boolean.careers">Boolean</A>,
    place: 'Milan, Italy',
    points: [['Competencies', 'HTML/CSS, JavaScript, Responsive Web Design, CMS Integration.']],
  },
  {
    date: 'Mar. – Jul. 2021',
    title: 'Master Il lavoro editoriale',
    sub: <A href="https://www.scuoladellibro.it">Scuola del Libro</A>,
    place: 'Rome, Italy',
    points: [['Competencies', 'Editorial Project Management, Fiction & Non-fiction Editing, Proofreading, Publishing Supply Chain, Rights & Copyright, Distribution Strategy, Press Office.']],
  },
  {
    date: 'Sep. 2017 – Sep. 2020',
    title: 'Bachelor’s Degree in Visual Communication Design',
    sub: (
      <>
        <A href="https://www.abacatania.it">Academy of Fine Arts of Catania</A> | 110/110 cum laude
      </>
    ),
    place: 'Catania, Italy',
    points: [['Competencies', 'Editorial Design, Typography, Brand Identity, Visual Strategy, Art History & Semiotics, Web Design, Print Production, Design Theory.']],
  },
];

// Elenco puntato di una voce: etichetta in evidenza e cerchietto come segno
function Points({ points }) {
  return (
    <ul className="max-w-[62ch] space-y-2 pt-3 text-[15px] leading-relaxed text-[#000000]/80">
      {points.map(([label, text]) => (
        <li key={label} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF0000]" />
          <span>
            <span className="font-medium text-[#000000]">{label}:</span> {text}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Il contenitore con l'id c'è sempre, così aria-controls punta a un elemento esistente anche a pannello chiuso
function Panel({ id, isOpen, children }) {
  const reduce = useMotionPref();
  return (
    <div id={id}>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Segno più/meno dentro un cerchio: stesso linguaggio dei pulsanti della hero
const Toggle = ({ isOpen }) => (
  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#000000]/40 text-[#000000] transition-colors duration-300 group-hover:border-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white">
    {isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
  </span>
);

function Accordion({ items, id }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-t border-[#000000]/15 text-[#000000]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.title + item.date} className="relative grid grid-cols-1 border-b border-[#000000]/15 py-6 sm:grid-cols-12 sm:gap-x-4">
            {/* Linea del tempo: tratti che collegano il cerchietto alla voce precedente e a quella successiva */}
            {i > 0 && <span aria-hidden="true" className="absolute left-[4px] top-0 h-[29px] w-px bg-[#000000]/25 sm:h-[37px]" />}
            {i < items.length - 1 && <span aria-hidden="true" className="absolute -bottom-px left-[4px] top-[39px] w-px bg-[#000000]/25 sm:top-[47px]" />}
            <p className="mb-1 flex items-center gap-3 self-start text-sm tabular-nums text-[#000000]/80 sm:col-span-4 sm:mb-0 sm:pt-2">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 transition-colors duration-300 ${isOpen ? 'border-[#FF0000] bg-[#FF0000]' : 'border-[#000000]/60'}`}
              />
              {item.date}
            </p>
            <div className="sm:col-span-8">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${id}-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="text-2xl leading-snug text-[#000000] transition-[color,transform] duration-300 group-hover:translate-x-2 group-hover:text-[#FF0000] motion-reduce:transform-none">{item.title}</span>
                  <Toggle isOpen={isOpen} />
                </button>
              </h3>
              <p className="mt-1 text-[15px] text-[#000000]/85">{item.sub}</p>
              {item.place && <p className="text-sm text-[#000000]/80">{item.place}</p>}
              <Panel id={`${id}-${i}`} isOpen={isOpen}>
                <Points points={item.points} />
              </Panel>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function SkillsAccordion({ categories, id }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-t border-[#000000]/15 text-[#000000]">
      {categories.map((cat, i) => {
        const isOpen = open === i;
        return (
          <li key={cat.title} className="border-b border-[#000000]/15 py-5">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-4 text-left"
              >
                <span className="text-xl leading-snug text-[#000000] transition-[color,transform] duration-300 group-hover:translate-x-2 group-hover:text-[#FF0000] motion-reduce:transform-none">{cat.title}</span>
                <Toggle isOpen={isOpen} />
              </button>
            </h3>
            <Panel id={`${id}-${i}`} isOpen={isOpen}>
              <div className="space-y-5 pt-4">
                {cat.groups.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-sm font-medium text-[#000000]/90">{group.label}</p>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <li key={s} className="rounded-[1.25rem] border border-[#000000]/25 px-3.5 py-1.5 text-sm text-[#000000]">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Panel>
          </li>
        );
      })}
    </ul>
  );
}

export default function Bio() {
  usePageTitle('About — Alberto Scalia', 'Experience, education and skills of Alberto Scalia: editorial design for publishers, brand identity, packaging, UI design and AI-assisted workflows.', { jsonLd: profilePageLd() });
  return (
    <main id="main" className="mx-auto min-h-screen max-w-[1600px] px-6 pb-24 pt-40 text-[#000000] lg:px-12">
      <Reveal as="p" className="mb-6 text-sm font-medium text-[#000000]/80">
        02 / About
      </Reveal>

      <header className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
        <Reveal as="h1" className="text-6xl leading-[0.95] md:col-span-7 md:text-9xl">
          <span className="font-semibold text-[#000000]">About </span>
          <span className="font-light text-[#FF0000]">me</span>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
          <p className="text-lg leading-relaxed text-[#000000]/80">
            An overview of my professional background, skills, and training in design.
          </p>
          <a href={CV_URL} download={CV_FILE} className="group mt-6 inline-flex items-center gap-4 text-lg font-medium text-[#000000]">
            <span className="transition-colors duration-300 group-hover:text-[#FF0000]">
              <RollText>Download CV</RollText>
            </span>
            <span className="sr-only">(PDF)</span>
            <Magnetic>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#000000] transition-colors duration-300 group-hover:border-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white">
                <ArrowDown size={20} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </Magnetic>
          </a>
        </Reveal>
      </header>

<Reveal className="my-20 flex flex-col gap-8 border-y border-black/20 py-12 md:flex-row md:items-center md:gap-12">
  <img
    src={`${import.meta.env.BASE_URL}assets/images/profile.webp`}
    alt=""
    decoding="async"
    className="h-28 w-28 shrink-0 rounded-full border-[6px] border-[#FF0000] object-cover contrast-14 md:h-36 md:w-36"
  />
  <dl className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
    {[
      ['Based in', 'Acireale, Italy'],
      ['Currently', <><span className="block">Visual & Brand Designer at <a href="https://gyadacosmetics.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-[#FF0000] underline-offset-4 transition-colors hover:text-[#FF0000]">Gyada Cosmetics</a></span><span className="mt-2 block">Visual & Editorial Designer at <a href="https://forward.recentiprogressi.it/it/" target="_blank" rel="noopener noreferrer" className="underline decoration-[#FF0000] underline-offset-4 transition-colors hover:text-[#FF0000]">Forward magazine</a> (Il Pensiero Scientifico Editore)</span></>],
      ['Availability', 'Open to UX/UI roles — available immediately'],
    ].map(([term, value]) => (
      <div key={term}>
        <dt className="mb-2 text-sm text-[#000000]/90">{term}</dt>
        <dd className="text-xl font-medium leading-snug md:text-2xl">{value}</dd>
      </div>
    ))}
  </dl>
</Reveal>

      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:col-span-4">
          <h2 className="mb-8 text-3xl text-[#000000] md:text-4xl">
            <span className="font-semibold">Skills & </span>
            <span className="font-light text-[#FF0000]">tech</span>
          </h2>
          <SkillsAccordion categories={skillCategories} id="skills" />
        </aside>

        <div className="space-y-20 lg:col-span-8">
          <section>
            <h2 className="mb-8 text-3xl text-[#000000] md:text-4xl">
            <span className="font-semibold">Professional </span>
            <span className="font-light text-[#FF0000]">experience</span>
          </h2>
            <Accordion items={experiences} id="exp" />
          </section>
          <section>
            <h2 className="mb-8 text-3xl text-[#000000] md:text-4xl">
            <span className="font-semibold">Education & </span>
            <span className="font-light text-[#FF0000]">certifications</span>
          </h2>
            <Accordion items={education} id="edu" />
          </section>
        </div>
      </div>
    </main>
  );
}