import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';
import { Minus, Plus } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import usePageTitle from '../hooks/usePageTitle';

const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-[#EC3814] underline-offset-4 transition-colors hover:text-[#EC3814]">
    {children}
  </a>
);

const skillCategories = [
  { title: 'Editorial & Visual Arts', skills: ['Visual Identity', 'Editorial Design', 'Branding Strategy', 'Typography', 'Adobe Creative Suite', 'Affinity Suite'] },
  { title: 'UI & Product', skills: ['Figma', 'Wireframing', 'High-Fidelity Prototyping', 'Miro', 'Khroma', 'Uizard'] },
  { title: 'AI & Workflow Automation', skills: ['AI Business Strategy', 'Prompt Engineering', 'AI Agents', 'n8n Automation', 'Lovable', 'Claude', 'Perplexity', 'Gemini', 'ChatGPT'] },
  { title: 'Tech & Growth', skills: ['HTML5', 'CSS3', 'Responsive Design', 'Tailwind CSS', 'Bootstrap'] },
];

const experiences = [
  { date: 'Jun. 2026 – Present', title: 'Visual & Brand Designer', sub: <A href="https://gyadacosmetics.com/">Gyada Cosmetics S.r.l.</A>, desc: <div className="space-y-2"><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Action: Created and managed the end-to-end graphic design for diverse cosmetic lines, developing packaging layouts, realistic product mockups, and comprehensive print-ready artwork.</span></div><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Result: Elevated brand consistency across all new launches, streamlining the print-production workflow and enhancing retail shelf appeal across multiple product lines.</span></div></div> },
  { date: 'Feb. 2025 – Present', title: 'Visual & Editorial Designer', sub: <A href="https://forward.recentiprogressi.it/it/">Forward magazine (Il Pensiero Scientifico Editore)</A>, desc: <div className="space-y-2"><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Action: Orchestrated the graphic layout and cross-media identity.</span></div><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Result: Streamlined production workflows, shortened approval cycles, and established a cohesive brand language across all issues.</span></div></div> },
  { date: 'May 2022 – May 2026', title: 'Visual & Editorial Designer', sub: <A href="https://www.layoutmagazine.it/">layout magazine</A>, desc: <div className="space-y-2"><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Action: Curated the layout design, grid systems, and typography for digital and print content.</span></div><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Result: Ensured total visual consistency, optimized the reading experience, and maintained a flawless publishing schedule across all issues.</span></div></div> },
  { date: 'Jun. 2025 – Jan. 2026', title: 'Visual & Brand Designer', sub: <A href="https://www.life-electronics.com/it">Life Electronics S.p.A.</A>, desc: <div className="space-y-2"><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Action: Designed product packaging and updated website news while utilizing EKR KIT and SAP Business One to manage technical product data.</span></div><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Result: Eliminated manual data-entry errors and accelerated time-to-market for new electronic product lines.</span></div></div> },
  { date: 'Jul. 2021 – Jan. 2026', title: 'Freelance Visual & Book Designer', sub: <span className="underline decoration-[#EC3814] underline-offset-4">12+ publishers (incl. Flaco Edizioni Group, Editori Riuniti, Ricca Editore)</span>, desc: <div className="space-y-2"><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Action: Directed visual identity and professional typesetting for 12+ independent publishers and academic institutions.</span></div><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Result: Successfully Delivered 50+ high-profile editorial projects with 100% on-time print readiness while upholding strict editorial standards..</span></div></div> },
  { date: 'Nov. 2021 – Jan. 2023', title: 'Graphic Design Intern', sub: <A href="https://letteraventidue.com/it/">LetteraVentidue Edizioni</A>, desc: <div className="space-y-2"><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Action: Collaborated on architectural book design for international authors (Umberto Riva, Giorgio Grassi).</span></div><div className="flex items-start gap-2"><span className="shrink-0 font-bold text-[#EC3814]">•</span><span>Result: Contributed to the publication of high-value architectural volumes, ensuring total precision from draft to final print.</span></div></div> },
];

const education = [
  { date: 'Oct. 2025 – Apr. 2026', title: 'Master Growth Marketing and AI Agents', sub: <A href="https://www.start2impact.it">start2impact</A>, desc: 'Case Study Project: IsolaBio. Competencies: Funnel Marketing, SEO Audit, Growth Marketing, UX/UI Discovery, Wireframing, User Testing, AI-Optimized UI, Prompt Engineering, Meta/Google Ads, Email Marketing, Advanced Excel, SQL, GA4, Tableau, Looker Studio, HTML/CSS, AI Agent Design.' },
  { date: 'Sep. – Oct. 2024', title: 'UX Design Course', sub: <A href="https://corsoux.it">CorsoUx.it</A>, desc: 'Case Study Project: Glacier. Competencies: Information Architecture, Low/High-Fidelity Wireframing, Interactive Prototyping.' },
  { date: 'Feb. – Sep. 2023', title: 'Master Full Stack Web Developer', sub: <A href="https://boolean.careers">Boolean</A>, desc: 'Competencies: HTML/CSS, JavaScript, Responsive Web Design, CMS Integration.' },
  { date: 'Mar. – Jul. 2021', title: 'Master Il lavoro editoriale', sub: <A href="https://www.scuoladellibro.it">Scuola del Libro</A>, desc: 'Competencies: Editorial Project Management, Fiction & Non-fiction Editing, Proofreading, Publishing Supply Chain, Rights & Copyright, Distribution Strategy, Press Office.' },
  { date: 'Sep. 2017 – Sep. 2020', title: "Bachelor’s Degree in Visual Communication Design", sub: <><A href="https://www.abacatania.it">Academy of Fine Arts of Catania</A> | 110/110 cum laude</>, desc: 'Competencies: Editorial Design, Typography, Brand Identity, Visual Strategy, Art History & Semiotics, Web Design, Print Production, Design Theory.' },
];


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
  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#364b9b]/40 text-[#364b9b] transition-colors duration-300 group-hover:border-[#EC3814] group-hover:bg-[#EC3814] group-hover:text-white">
    {isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
  </span>
);

function Accordion({ items, id }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-t border-[#364b9b]/15 text-[#364b9b]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.title + item.date} className="relative grid grid-cols-1 border-b border-[#364b9b]/15 py-6 sm:grid-cols-12 sm:gap-x-4">
            {/* Linea del tempo: tratti che collegano il cerchietto alla voce precedente e a quella successiva */}
            {i > 0 && <span aria-hidden="true" className="absolute left-[4px] top-0 h-[29px] w-px bg-[#364b9b]/25 sm:h-[37px]" />}
            {i < items.length - 1 && <span aria-hidden="true" className="absolute -bottom-px left-[4px] top-[39px] w-px bg-[#364b9b]/25 sm:top-[47px]" />}
            <p className="mb-1 flex items-center gap-3 self-start text-sm text-[#364b9b]/80 sm:col-span-4 sm:mb-0 sm:pt-2">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 transition-colors duration-300 ${isOpen ? 'border-[#EC3814] bg-[#EC3814]' : 'border-[#364b9b]/60'}`}
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
                  <span className="text-2xl leading-snug text-[#364b9b] transition-[color,transform] duration-300 group-hover:translate-x-2 group-hover:text-[#EC3814] motion-reduce:transform-none">{item.title}</span>
                  <Toggle isOpen={isOpen} />
                </button>
              </h3>
              <p className="mt-1 text-[15px] text-[#364b9b]/85">{item.sub}</p>
              <Panel id={`${id}-${i}`} isOpen={isOpen}>
                <div className="max-w-[62ch] pt-3 text-[15px] leading-relaxed text-[#364b9b]/80">{item.desc}</div>
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
    <ul className="border-t border-[#364b9b]/15 text-[#364b9b]">
      {categories.map((cat, i) => {
        const isOpen = open === i;
        return (
          <li key={cat.title} className="border-b border-[#364b9b]/15 py-5">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-4 text-left"
              >
                <span className="text-xl leading-snug text-[#364b9b] transition-[color,transform] duration-300 group-hover:translate-x-2 group-hover:text-[#EC3814] motion-reduce:transform-none">{cat.title}</span>
                <Toggle isOpen={isOpen} />
              </button>
            </h3>
            <Panel id={`${id}-${i}`} isOpen={isOpen}>
              <ul className="flex flex-wrap gap-2 pt-4">
                {cat.skills.map((s) => (
                  <li key={s} className="rounded-full border border-[#364b9b]/25 px-3.5 py-1.5 text-sm text-[#364b9b]">
                    {s}
                  </li>
                ))}
              </ul>
            </Panel>
          </li>
        );
      })}
    </ul>
  );
}

export default function Bio() {
  usePageTitle(
    'About — Alberto Scalia',
    'Professional background, skills and training of Alberto Scalia, visual and interface designer.'
  );
  return (
    <main id="main" className="mx-auto min-h-screen max-w-[1600px] px-6 pb-24 pt-40 text-[#364b9b] lg:px-12">
      <Reveal as="p" className="mb-6 text-sm font-medium text-[#364b9b]/80">
        02 / About
      </Reveal>

      <header className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
        <Reveal as="h1" className="text-6xl leading-[0.95] md:col-span-7 md:text-9xl">
          <span className="font-semibold text-[#364b9b]">About </span>
          <span className="font-light text-[#EC3814]">me</span>
        </Reveal>
        <Reveal as="p" delay={0.1} className="text-lg leading-relaxed text-[#364b9b]/80 md:col-span-4 md:col-start-9">
          An overview of my professional background, skills, and training in design.
        </Reveal>
      </header>

      <Reveal className="mb-20 flex flex-col gap-8 bg-[#F3F5FB] p-6 md:flex-row md:items-center md:gap-12 md:p-10">
        <img
          src={`${import.meta.env.BASE_URL}assets/images/profile.webp`}
          alt=""
          decoding="async"
          className="h-28 w-28 shrink-0 rounded-full border-[6px] border-[#EC3814] object-cover contrast-125 md:h-36 md:w-36"
        />
        <dl className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
          {[
            ['Based in', 'Acireale, Italy'],
            ['Currently', <><span className="block">Visual & Brand Designer at Gyada Cosmetics</span><span className="mt-2 block">Visual & Editorial Designer at <a href="https://forward.recentiprogressi.it/it/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#EC3814]">Forward magazine (Il Pensiero Scientifico Editore)</a></span></>],
            ['Availability', 'Open to UX/UI roles — available immediately'],
          ].map(([term, value]) => (
            <div key={term}>
              <dt className="mb-2 text-sm text-[#364b9b]/90">{term}</dt>
              <dd className="text-xl font-medium leading-snug md:text-2xl">{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:col-span-4">
          <h2 className="mb-8 text-3xl text-[#364b9b] md:text-4xl">
            <span className="font-semibold">Skills & </span>
            <span className="font-light text-[#EC3814]">tech</span>
          </h2>
          <SkillsAccordion categories={skillCategories} id="skills" />
        </aside>

        <div className="space-y-20 lg:col-span-8">
          <section>
            <h2 className="mb-8 text-3xl text-[#364b9b] md:text-4xl">
            <span className="font-semibold">Professional </span>
            <span className="font-light text-[#EC3814]">experience</span>
          </h2>
            <Accordion items={experiences} id="exp" />
          </section>
          <section>
            <h2 className="mb-8 text-3xl text-[#364b9b] md:text-4xl">
            <span className="font-semibold">Education & </span>
            <span className="font-light text-[#EC3814]">certifications</span>
          </h2>
            <Accordion items={education} id="edu" />
          </section>
        </div>
      </div>
    </main>
  );
}