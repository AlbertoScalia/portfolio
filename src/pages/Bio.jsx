import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Minus, Plus } from '@phosphor-icons/react';

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
  { date: '2026 – Present', title: 'Visual & Brand Designer', sub: <A href="https://gyadacosmetics.com/">Gyada Cosmetics S.r.l.</A>, desc: 'I manage the entire packaging cycle for cosmetic lines, from realistic mockups to print-ready artwork.' },
  { date: '2022 – Present', title: 'Visual & Editorial Designer', sub: <><A href="https://www.layoutmagazine.it/">lay0ut magazine</A>, <A href="https://forward.recentiprogressi.it/it/">Forward magazine</A></>, desc: "From underground zines to peer-reviewed science — I've designed both, and they've taught me everything about hierarchy." },
  { date: '2025 – 2026', title: 'Visual & Brand Designer', sub: <A href="https://www.life-electronics.com/it">Life Electronics SpA</A>, desc: 'I dress tech products without forgetting barcodes. I manage the entire packaging cycle by integrating creativity with complex management systems like SAP and EKR KIT.' },
  { date: '2021 – 2026', title: 'Visual & Book Designer', sub: 'Various Independent Publishers', desc: 'I take care of visual identities and typesetting for 12 independent publishers and academic institutions, delivering over 50 book projects.' },
  { date: '2021 – 2023', title: 'Graphic Design Intern', sub: <A href="https://letteraventidue.com/it/">LetteraVentidue Edizioni</A>, desc: 'A total immersion in the world of books: from the choice of paper to the millimetric precision of typographic grids.' },
];

const education = [
  { date: '2025 – 2026', title: 'Growth Marketing & AI Agents Master', sub: 'start2impact', desc: <>A multidisciplinary path that combines strategic marketing, UX/UI design, and data analysis with a strong focus on artificial intelligence. You can view my profile and projects <A href="https://account.start2impact.it/profile/alberto-scalia">here</A>.</> },
  { date: '2024', title: 'Complete UX Design Course', sub: 'corsoux.it', desc: 'Where I understood that a test with a real user is worth more than a thousand hours of brainstorming in an agency.' },
  { date: '2023', title: 'Master in Full Stack Web Developer', sub: 'Boolean', desc: 'Where I stopped asking developers if a design was feasible and started writing the code myself.' },
  { date: '2021', title: 'Master in Publishing', sub: 'Scuola del Libro', desc: 'An intensive program focused on print production, typography grids, and editorial project management.' },
  { date: '2017 – 2020', title: "Bachelor's Degree in Visual Communication Design", sub: 'Accademia di Belle Arti di Catania', desc: 'The foundations of everything I break and rebuild today. From color theory to rigid typography.' },
];

// Pannello che si apre/chiude con animazione (rispetta prefers-reduced-motion)
function Panel({ id, isOpen, children }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={id}
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
  );
}

const Toggle = ({ isOpen }) =>
  isOpen ? (
    <Minus size={18} className="mt-2 shrink-0" aria-hidden="true" />
  ) : (
    <Plus size={18} className="mt-2 shrink-0" aria-hidden="true" />
  );

// Il bottone contiene solo il titolo: i link in "sub" restano fuori (niente link dentro un button)
function Accordion({ items, id }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-t border-white/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.title + item.date} className="grid grid-cols-1 border-b border-white/15 py-6 sm:grid-cols-12 sm:gap-x-4">
            <p className="mb-1 text-sm text-white/60 sm:col-span-4 sm:mb-0 sm:pt-2">{item.date}</p>
            <div className="sm:col-span-8">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${id}-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="font-display text-2xl leading-snug transition-colors group-hover:text-[#EC3814]">{item.title}</span>
                  <Toggle isOpen={isOpen} />
                </button>
              </h3>
              <p className="mt-1 text-[15px] text-white/85">{item.sub}</p>
              <Panel id={`${id}-${i}`} isOpen={isOpen}>
                <div className="max-w-[62ch] pt-3 text-[15px] leading-relaxed text-white/80">{item.desc}</div>
              </Panel>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// Stessa logica degli accordion delle esperienze, per le categorie di skills
function SkillsAccordion({ categories, id }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-t border-white/15">
      {categories.map((cat, i) => {
        const isOpen = open === i;
        return (
          <li key={cat.title} className="border-b border-white/15 py-5">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-4 text-left"
              >
                <span className="font-display text-xl leading-snug transition-colors group-hover:text-[#EC3814]">{cat.title}</span>
                <Toggle isOpen={isOpen} />
              </button>
            </h3>
            <Panel id={`${id}-${i}`} isOpen={isOpen}>
              <ul className="space-y-1 pt-3 text-[15px] leading-7 text-white/80">
                {cat.skills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Panel>
          </li>
        );
      })}
    </ul>
  );
}

export default function Bio() {
  return (
    <main id="main" className="mx-auto min-h-screen max-w-[1600px] px-6 pb-24 pt-40 lg:px-12">
      <header className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-12">
        <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:col-span-7 md:text-9xl">About me</h1>
        <p className="text-lg leading-relaxed text-white/80 md:col-span-4 md:col-start-9 md:self-end">
          An overview of my professional background, skills, and training in design.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:col-span-4">
          <h2 className="font-display mb-8 text-3xl md:text-4xl">Skills & tech</h2>
          <SkillsAccordion categories={skillCategories} id="skills" />
        </aside>

        <div className="space-y-20 lg:col-span-8">
          <section>
            <h2 className="font-display mb-8 text-3xl md:text-4xl">Professional experience</h2>
            <Accordion items={experiences} id="exp" />
          </section>
          <section>
            <h2 className="font-display mb-8 text-3xl md:text-4xl">Education & certifications</h2>
            <Accordion items={education} id="edu" />
          </section>
        </div>
      </div>
    </main>
  );
}