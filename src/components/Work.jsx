import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';
import { ArrowRight, ArrowUpRight, X } from '@phosphor-icons/react';
import Reveal from './Reveal';
import Magnetic from './Magnetic';
import RollText from './RollText';

const img = (name) => `${import.meta.env.BASE_URL}assets/images/${name}`;

/* ---------- Dati ---------- */

const sections = [
  {
    title: 'User Interface Design',
    description:
      'I design interfaces where visual hierarchy does the heavy lifting — reducing friction, guiding attention, and making the next action feel obvious.',
    projects: [
      {
        title: 'Isola Bio',
        subtitle:
          'Redesign of the Isola Bio website in desktop and mobile versions, with updated visual hierarchy, layout system, and responsive design.',
        image: img('cover-project1.webp'),
        badges: ['UX/UI Design', 'Web Design'],
        details: {
roleDescription: `A student concept project developed for the Start2Impact Master’s program (non-commercial project for educational purposes) for "Isola Bio", designed to transform brand identity into a fluid and accessible shopping experience. The platform spans both desktop and mobile web interfaces, featuring interactive banners and custom graphics tailored for organic products.
My role covered the full project execution across four key phases:
- Discovery & Strategy: Conducted 1 quantitative survey, 5 competitor analyses, and created 3 user personas with journey maps.
- User Experience (UX): Developed an optimized sitemap, over 10 wireframe screens, and e-commerce navigation flows.
- UI & Visual Design: Built an atomic design system, high-fidelity interactive prototypes, and custom graphical assets.
- User Testing & Validation: Conducted 5 moderated test sessions, achieving a 100% completion rate and an 87.2/100 SUS score.`,
          additionalImages: ['detail1.webp', 'detail2.webp', 'detail3.webp', 'detail4.webp', 'detail5.webp'].map(img),
        },
      },
      {
        title: 'Glacier – Born To Be Cold',
        subtitle:
          'Design a mobile app for extreme cold-weather adventure travel. The challenge was creating an interface that felt immersive and destination-specific without sacrificing usability in a content-heavy travel context.',
        image: img('cover-project2.webp'),
        badges: ['UX/UI Design', 'App Design'],
        details: {
          roleDescription: `A UX/UI design project for "GLACIER - born to be cold", a mobile application dedicated to extreme cold-weather adventure travel. The app features a landing/onboarding screen with options to sign in or register, a home feed with featured expeditions (e.g., Northern Lights in Iceland, North Fjords, Ice Fishing), and curated destination cards.

My role encompassed the end-to-end design process over an 8-week timeline, including user research, user flows, information architecture, sketching, wireframing, UI design, and prototyping. Various design and research tools were utilized to craft the experience, including Figma, Adobe Photoshop, Adobe InDesign, Whimsical, Sketch, Google Forms, and pencil & paper.`,
          additionalImages: ['detail6.webp', 'detail7.webp', 'detail8.webp', 'detail9.webp'].map(img),
        },
      },
    ],
  },
  {
    title: 'Editorial Design',
    description:
      'I design editorial systems — magazines, book series, and cultural projects — where visual consistency and strategic clarity are the same thing.',
    projects: [
      {
        title: 'Forward magazine',
        subtitle:
          'Il Pensiero Scientifico Editore entrusted me with the visual design and layout of four consecutive issues of Forward, their magazine dedicated to healthcare and medical culture.',
        image: img('cover-project3.webp'),
        badges: ['Editorial Design', 'Layout'],
        details: {
          roleDescription: `An editorial design project for Forward #37-43, a magazine published by Il Pensiero Scientifico Editore dedicated to healthcare and medical culture. The project encompasses the layout design and cover design for six consecutive issues across 2025–2026.

My role involved designing the interior spreads to balance complex data, infographics, expert interviews, and long-form articles within a clean, authoritative grid system.`,
          additionalImages: ['detail10.webp', 'detail11.webp', 'detail12.webp', 'detail13.webp', 'detail14.webp'].map(img),
        },
      },
      {
        title: 'lay0ut magazine',
        subtitle:
          'Design a new issue of lay0ut magazine as a standalone editorial project with a specific structural constraint: free signatures, like a newspaper, rather than a fixed page sequence.',
        image: img('cover-project4.webp'),
        badges: ['Editorial Design', 'Layout'],
        details: {
          roleDescription: `An editorial design project for lay0ut magazine, an independent Italian cultural magazine, spanning from 2022 to 2025.

My role focused on the magazine's layout and cover design, developed in collaboration with Giorgia Di Carlo. I worked on ensuring each issue maintained a distinct visual identity while prioritizing conceptual coherence, typographic experimentation, and overall visual consistency across the interior editorial spreads and covers.`,
          additionalImages: ['detail15.webp', 'detail16.webp', 'detail17.webp', 'detail18.webp'].map(img),
        },
      },
    ],
  },
  {
    title: 'Brand & Identity',
    description:
      'Visual identities and printed pieces that hold together across posters, programs and social, built to last beyond a single campaign.',
    projects: [
      {
        title: 'Cassandra – Poster',
        subtitle:
          'An art installation at Spazio Volta in Bergamo needed a printed piece that functioned as both documentation and object — something a visitor would keep, not discard.',
        image: img('cover-project5.webp'),
        badges: ['Graphic Design', 'Poster Art'],
        details: {
          roleDescription: `A graphic design project for Cassandra - Mozzarella Light, featuring a folding poster created for an art installation by the artistic duo Mozzarella Light, exhibited at Spazio Volta in Bergamo in 2023.

My role focused on designing the folding poster layout, combining a moody, texture-rich photographic image of the installation with an experimental typographic treatment for the main title and text layouts.`,
          additionalImages: ['detail19.webp'].map(img),
        },
      },
      {
        title: 'Social Identity Socrates',
        subtitle:
          'A recurring festival needed an identity strong enough to anchor multiple editions while staying flexible across posters, programs, social, and merchandise.',
        image: img('cover-project6.webp'),
        badges: ['Social Media', 'Branding'],
        details: {
          roleDescription: `A full festival identity project for SÓCRATES – Sport Storie Società, a sports literature and culture event organized by Scuola del libro and Liberi Nantes in Rome between 2021 and 2023.

My role, in collaboration with Giorgia Di Carlo, focused on designing the complete visual identity for the festival, which was applied across posters, printed program guides, and promotional materials over multiple editions of the event.`,
          additionalImages: ['detail20.webp', 'detail21.webp'].map(img),
        },
      },
    ],
  },
];

/* ---------- Modale progetto (accessibile: Esc, focus trap, scroll lock) ---------- */

function Description({ text }) {
  return (
    <div className="max-w-[68ch] space-y-5 text-lg leading-relaxed text-[#364b9b]/85">
      {text.split('\n\n').map((block, i) => {
        const lines = block.split('\n');
        const intro = lines.filter((l) => !l.startsWith('- ')).join(' ');
        const items = lines.filter((l) => l.startsWith('- ')).map((l) => l.slice(2).trim());
        return (
          <div key={i} className="space-y-3">
            {intro && <p>{intro}</p>}
            {items.length > 0 && (
              <ul className="list-disc space-y-2 pl-5 marker:text-[#EC3814]">
                {items.map((item, j) => {
                  const [head, ...rest] = item.split(': ');
                  return rest.length ? (
                    <li key={j}>
                      <strong className="font-semibold text-[#364b9b]">{head}:</strong> {rest.join(': ')}
                    </li>
                  ) : (
                    <li key={j}>{item}</li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ProjectModal({ project, nextProject, onNext, onClose }) {
  const reduce = useMotionPref();
  const overlay = useRef(null);
  const panel = useRef(null);
  const closeBtn = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose();
      if (e.key !== 'Tab' || !panel.current) return;
      const focusable = panel.current.querySelectorAll('a[href], button:not([disabled])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, [onClose]);

  // Passando al progetto successivo: si riparte dall'alto e il focus torna sul pulsante di chiusura
  useEffect(() => {
    overlay.current?.scrollTo?.({ top: 0 });
    closeBtn.current?.focus();
  }, [project.title]);

  const { details } = project;

  return (
    <motion.div
      ref={overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] overflow-y-auto bg-black/85"
    >
      <motion.div
        key={project.title}
        ref={panel}
        initial={{ opacity: 0, y: reduce ? 0 : 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduce ? 0 : 16 }}
        transition={{ duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto my-6 w-[calc(100%-2rem)] max-w-4xl border border-[#364b9b]/15 bg-[#ffffff] p-6 text-[#364b9b] md:my-16 md:p-12"
      >
        <button
          ref={closeBtn}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 p-2 text-[#364b9b]/80 transition-colors hover:text-[#364b9b]"
        >
          <X size={28} aria-hidden="true" />
        </button>

        <h2 id="project-modal-title" className="mb-5 pr-12 text-4xl font-semibold leading-tight md:text-6xl text-[#364b9b]">
          {project.title}
        </h2>
        <ul className="mb-8 flex flex-wrap gap-2">
          {project.badges.map((b) => (
            <li key={b} className="rounded-full border border-[#364b9b]/25 px-3 py-1 text-[13px] font-medium text-[#364b9b]">
              {b}
            </li>
          ))}
        </ul>

        <Description text={details.roleDescription} />

        <div className="my-10 flex flex-col gap-6">
          {details.additionalImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.title}, detail ${i + 1} of ${details.additionalImages.length}`}
              loading="lazy"
              decoding="async"
              className="min-h-[200px] w-full bg-[#364b9b]/5 object-cover"
            />
          ))}
        </div>

        {details.externalUrl && (
          <a
            href={details.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C72E0E] underline underline-offset-4"
          >
            View live project <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        )}

        {nextProject && nextProject.title !== project.title && (
          <button
            type="button"
            onClick={onNext}
            className="group mt-12 flex w-full items-center justify-between gap-6 border-t border-[#364b9b]/20 pt-8 text-left"
          >
            <span>
              <span className="block text-sm font-medium text-[#364b9b]/80">Next project</span>
              <span className="block text-2xl font-semibold text-[#364b9b] transition-colors group-hover:text-[#EC3814] md:text-4xl">
                {nextProject.title}
              </span>
            </span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#364b9b] text-[#364b9b] transition-colors duration-300 group-hover:border-[#EC3814] group-hover:bg-[#EC3814] group-hover:text-white">
              <ArrowRight size={20} weight="bold" aria-hidden="true" />
            </span>
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ---------- Card progetto ---------- */

const stretched =
  "block w-full text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-[#EC3814]";

function ProjectCard({ project, number, onOpen }) {
  const reduce = useMotionPref();
  const cardRef = useRef(null);
  // Parallasse: l'immagine scorre un po' dentro la sua cornice mentre la card attraversa lo schermo
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-5%', '5%']);
  const title = (
    <span className="flex items-start justify-between gap-4">
      <span className="text-3xl leading-tight transition-colors group-hover:text-[#EC3814] md:text-4xl text-[#364b9b]">
        {project.title}
      </span>
      <ArrowUpRight
        size={28}
        weight="bold"
        aria-hidden="true"
        className="mt-1.5 shrink-0 text-[#364b9b] opacity-0 transition duration-300 group-hover:rotate-45 group-hover:text-[#EC3814] group-hover:opacity-100 [@media(hover:none)]:opacity-100 motion-reduce:transition-none"
      />
    </span>
  );

  return (
    <article ref={cardRef} data-cursor={project.details ? 'View' : 'Visit'} className="group relative flex w-full flex-col">
      {/* L'immagine si scopre dall'alto quando entra nel viewport */}
      <motion.div
        initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
        whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="aspect-[16/10] overflow-hidden bg-neutral-900"
      >
        <motion.div
          initial={reduce ? false : { scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full"
        >
          <motion.div style={{ y: imgY }} className="absolute inset-x-0 -top-[6%] h-[112%]">
            <img
              src={project.image}
              alt={`${project.title}, project preview`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-3 px-6 pt-6 lg:px-12"
      >
        <p className="text-sm font-medium tabular-nums text-[#364b9b]/80">No. {String(number).padStart(2, '0')}</p>
        <h3>
          {project.details ? (
            <button type="button" onClick={() => onOpen(project)} className={stretched}>
              {title}
            </button>
          ) : (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={stretched}>
              {title}
            </a>
          )}
        </h3>
        <p className="max-w-xl text-[15px] leading-relaxed text-[#364b9b]/80">{project.subtitle}</p>
        {project.highlight && <p className="text-[15px] font-medium text-[#364b9b]">{project.highlight}</p>}
        <ul className="mt-1 flex flex-wrap gap-2">
          {project.badges.map((b) => (
            <li key={b} className="rounded-full border border-[#364b9b]/25 px-3 py-1 text-[13px] font-medium text-[#364b9b]">
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  );
}

/* ---------- Sezione lavori ---------- */

export default function Work() {
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  // Progetti che hanno una scheda: servono per il pulsante "Next project" del modale
  const withDetails = sections.flatMap((s) => s.projects).filter((p) => p.details);
  const nextOf = (p) => {
    const i = withDetails.findIndex((x) => x.title === p.title);
    return i === -1 ? null : withDetails[(i + 1) % withDetails.length];
  };

  return (
    <section id="work" aria-label="Selected work">
      {sections.map((section, index) => (
        <div key={section.title} className={index % 2 === 1 ? 'bg-[#F3F5FB] pb-28' : 'mb-28'}>
          <div className="border-t border-[#364b9b]/20">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
              <span aria-hidden="true" className="-mt-[5px] block h-2.5 w-2.5 rounded-full bg-[#EC3814]" />
            </div>
          </div>
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-6 py-12 md:grid-cols-12 md:items-end lg:px-12">
            <Reveal className="md:col-span-5">
              <p className="mb-4 text-sm font-medium text-[#364b9b]/80">
                {String(index + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
              </p>
              <h2 className="text-4xl leading-tight text-[#364b9b] md:text-5xl">
                <span className="font-semibold">{section.title.split(' ').slice(0, -1).join(' ')} </span>
                <span className="font-light text-[#EC3814]">{section.title.split(' ').slice(-1)}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-[#364b9b]/80">{section.description}</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2">
            {section.projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                number={sections.slice(0, index).reduce((n, s) => n + s.projects.length, 0) + i + 1}
                onOpen={setSelected}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="mx-auto flex max-w-[1600px] px-6 pb-8 lg:px-12">
        <a
          href="https://www.behance.net/gallery/244847487/Personal-Portfolio-2021-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-4 text-lg font-medium text-[#364b9b]"
        >
          <span className="transition-colors duration-300 group-hover:text-[#EC3814]">
            <RollText>View the full archive on Behance</RollText>
          </span>
          <Magnetic>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#364b9b] transition-colors duration-300 group-hover:border-[#EC3814] group-hover:bg-[#EC3814] group-hover:text-white">
              <ArrowUpRight size={20} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </Magnetic>
        </a>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            key="project-modal"
            project={selected}
            nextProject={nextOf(selected)}
            onNext={() => setSelected(nextOf(selected))}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
