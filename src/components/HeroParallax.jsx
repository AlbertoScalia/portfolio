import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from '@phosphor-icons/react';

const sections = [
    {
        title: "User Interface Design",
        description: "I design interfaces where visual hierarchy does the heavy lifting — reducing friction, guiding attention, and making the next action feel obvious.",
        projects: [
            {
                title: "IsolaBio – Re-design website",
                subtitle: "Redesign of the Isola Bio website in desktop and mobile versions, with updated visual hierarchy, layout system, and responsive design.",
                image: `${import.meta.env.BASE_URL}assets/images/project12.webp`,
                badges: ["UX/UI Design", "Web Design"],
                details: {
                    roleDescription: "A narrative e-commerce project for \"Isola Bio\" designed to transform brand identity into a fluid and accessible shopping experience. The platform spans both desktop and mobile web interfaces, featuring interactive banners and custom graphics tailored for organic products.\n\nMy role covered the full project execution across four key phases:\n• Discovery & Strategy: Conducted 1 quantitative survey, 5 competitor analyses, and created 3 user personas with journey maps.\n• User Experience (UX): Developed an optimized sitemap, over 10 wireframe screens, and e-commerce navigation flows.\n• UI & Visual Design: Built an atomic design system, high-fidelity interactive prototypes, and custom graphical assets.\n• User Testing & Validation: Conducted 5 moderated test sessions, achieving a 100% completion rate and an 87.2/100 SUS score.",
                    additionalImages: [
                        `${import.meta.env.BASE_URL}assets/images/detail.webp`,
                        `${import.meta.env.BASE_URL}assets/images/detail2.webp`,
                        `${import.meta.env.BASE_URL}assets/images/detail3.webp`,
                        `${import.meta.env.BASE_URL}assets/images/detail4.webp`,
                    ],
                }
            },
            {
                title: "Glacier – Prototype app",
                subtitle: "Design a mobile app for extreme cold-weather adventure travel. The challenge was creating an interface that felt immersive and destination-specific without sacrificing usability in a content-heavy travel context.",
                image: `${import.meta.env.BASE_URL}assets/images/project6.webp`,
                badges: ["UX/UI Design", "App Design"],
                details: {
                    roleDescription: "A UX/UI design project for \"GLACIER - born to be cold\", a mobile application dedicated to extreme cold-weather adventure travel. The app features a landing/onboarding screen with options to sign in or register, a home feed with featured expeditions (e.g., Northern Lights in Iceland, North Fjords, Ice Fishing), and curated destination cards.\n\nMy role encompassed the end-to-end design process over an 8-week timeline, including user research, user flows, information architecture, sketching, wireframing, UI design, and prototyping. Various design and research tools were utilized to craft the experience, including Figma, Adobe Photoshop, Adobe InDesign, Whimsical, Sketch, Google Forms, and pencil & paper.",
                    additionalImages: [
                        `${import.meta.env.BASE_URL}assets/images/detail5.webp`,
                        `${import.meta.env.BASE_URL}assets/images/detail6.webp`,
                                                `${import.meta.env.BASE_URL}assets/images/detail7.webp`,

                    ],
                }
            }
        ]
    },
    {
        title: "Visual Strategy & Direction",
        description: "I design editorial systems — magazines, book series, and cultural projects — where visual consistency and strategic clarity are the same thing.",
        projects: [
            {
                title: "Forward magazine",
                subtitle: "Il Pensiero Scientifico Editore entrusted me with the visual design and layout of four consecutive issues of Forward, their magazine dedicated to healthcare and medical culture.",
                image: `${import.meta.env.BASE_URL}assets/images/project2.webp`,
                badges: ["Editorial Design", "Layout"],
                details: {
                    roleDescription: "An editorial design project for Forward #37-43, a magazine published by Il Pensiero Scientifico Editore dedicated to healthcare and medical culture. The project encompasses the layout design and cover design for six consecutive issues across 2025–2026.\n\nMy role involved designing the interior spreads to balance complex data, infographics, expert interviews, and long-form articles within a clean, authoritative grid system.",
                    additionalImages: [
                        `${import.meta.env.BASE_URL}assets/images/detail8.webp`,
                    ],
                }
            },
            {
                title: "lay0ut magazine – senza scheletro",
                subtitle: "Design a new issue of lay0ut magazine as a standalone editorial project with a specific structural constraint: free signatures, like a newspaper, rather than a fixed page sequence.",
                image: `${import.meta.env.BASE_URL}assets/images/project3.webp`,
                badges: ["Editorial Design", "Layout"],
                details: {
                    roleDescription: "An editorial design project for lay0ut magazine, an independent Italian cultural magazine, spanning from 2022 to 2025.\n\nMy role focused on the magazine's layout and cover design, developed in collaboration with Giorgia Di Carlo. I worked on ensuring each issue maintained a distinct visual identity while prioritizing conceptual coherence, typographic experimentation, and overall visual consistency across the interior editorial spreads and covers.",
                    additionalImages: [
                        `${import.meta.env.BASE_URL}assets/images/detail9.webp`,
                        `${import.meta.env.BASE_URL}assets/images/detail10.webp`,
                    ],
                }
            }
        ]
    },
    {
        title: "Brand Identity & Growth",
        description: "I build scalable visual identities grounded in research and built to last — coherent across packaging, print, digital, and whatever comes next.",
        projects: [
            {
                title: "Cassandra – Poster",
                subtitle: "An art installation at Spazio Volta in Bergamo needed a printed piece that functioned as both documentation and object — something a visitor would keep, not discard.",
                image: `${import.meta.env.BASE_URL}assets/images/project4.webp`,
                badges: ["Graphic Design", "Poster Art"],
                details: {
                    roleDescription: "A graphic design project for Cassandra - Mozzarella Light, featuring a folding poster created for an art installation by the artistic duo Mozzarella Light, exhibited at Spazio Volta in Bergamo in 2023.\n\nMy role focused on designing the folding poster layout, combining a moody, texture-rich photographic image of the installation with an experimental typographic treatment for the main title and text layouts.",
                    additionalImages: [
                        `${import.meta.env.BASE_URL}assets/images/detail11.webp`,
                    ],
                }
            },
            {
                title: "Social Identity Socrates",
                subtitle: "A recurring festival needed an identity strong enough to anchor multiple editions while staying flexible across posters, programs, social, and merchandise.",
                image: `${import.meta.env.BASE_URL}assets/images/project8.webp`,
                badges: ["Social Media", "Branding"],
                details: {
                    roleDescription: "A full festival identity project for SÓCRATES – Sport Storie Società, a sports literature and culture event organized by Scuola del libro and Liberi Nantes in Rome between 2021 and 2023.\n\nMy role, in collaboration with Giorgia Di Carlo, focused on designing the complete visual identity for the festival, which was applied across posters, printed program guides, and promotional materials over multiple editions of the event.",
                    additionalImages: [
                        `${import.meta.env.BASE_URL}assets/images/detail12.webp`,
                        `${import.meta.env.BASE_URL}assets/images/detail13.webp`
                    ],
                }
            }
        ]
    }
];

export default function HeroSection() {
    const shouldReduceMotion = useReducedMotion();
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="relative w-full pt-32 pb-20 text-white font-sans overflow-x-hidden">
            {/* HERO HEADER */}
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-6 lg:px-12 mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white mb-8 max-w-5xl"
                >
                    Editorial Precision, <br />
                    <span className="font-serif font-normal text-[#EC3814]">Digital Performance</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl leading-relaxed max-w-2xl text-white/85 text-center"
                >
                    I'm Alberto, a versatile UI designer with a solid background in high-end Editorial Design — here is what I do:
                </motion.p>
            </div>

            {/* SEZIONI E CARD PROGETTI */}
            <div id="work" className="flex flex-col gap-24 w-full">
                {sections.map((section, sIdx) => (
                    <div key={sIdx} className="w-full">
                        <div className="w-full border-t border-white/20 mb-12" />

                        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex flex-col items-center text-center">
                            <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-3">
                                {section.title}
                            </h2>
                            <p className="text-base font-sans text-white/85 max-w-2xl leading-relaxed text-center">
                                {section.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-16 w-full">
                            {section.projects.map((project, idx) => {
                                const isModal = !!project.details;

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        onClick={() => isModal && setSelectedProject(project)}
                                        className="group flex flex-col w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#EC3814] focus-visible:outline-offset-8"
                                    >
                                        {isModal ? (
                                            <div className="flex flex-col w-full">
                                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        loading="lazy"
                                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-2 pt-6 px-6 lg:px-12">
                                                    <h3 className="text-3xl font-serif font-normal text-white group-hover:text-[#EC3814] transition-colors duration-300">
                                                        {project.title}
                                                    </h3>

                                                    <p className="text-sm font-sans text-white/85 leading-relaxed max-w-xl">
                                                        {project.subtitle}
                                                    </p>

                                                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                                                        {project.badges.map((badge, bIdx) => (
                                                            <span 
                                                                key={bIdx} 
                                                                className="text-[10px] font-mono uppercase tracking-widest text-white/60 group-hover:text-white transition-colors"
                                                            >
                                                                / {badge}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-col w-full"
                                            >
                                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        loading="lazy"
                                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-2 pt-6 px-6 lg:px-12">
                                                    <h3 className="text-3xl font-serif font-normal text-white group-hover:text-[#EC3814] transition-colors duration-300">
                                                        {project.title}
                                                    </h3>

                                                    <p className="text-sm font-sans text-white/85 leading-relaxed max-w-xl">
                                                        {project.subtitle}
                                                    </p>

                                                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                                                        {project.badges.map((badge, bIdx) => (
                                                            <span 
                                                                key={bIdx} 
                                                                className="text-[10px] font-mono uppercase tracking-widest text-white/60 group-hover:text-white transition-colors"
                                                            >
                                                                / {badge}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </a>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* LINK ARCHIVIO COMPLETO */}
            <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24 px-6 lg:px-12 max-w-7xl mx-auto flex justify-center text-center"
            >
                <a 
                    href="https://www.behance.net/gallery/244847487/Personal-Portfolio-2021-2026" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white hover:text-[#EC3814] transition-colors duration-300 group/btn focus-visible:outline-2 focus-visible:outline-[#EC3814] rounded-sm"
                >
                    <span className="font-light tracking-wider uppercase text-sm md:text-base">
                        Check the complete archive
                    </span>
                    <ArrowUpRight size={20} weight="bold" className="group-hover/btn:rotate-45 transition-transform" />
                </a>
            </motion.div>

            {/* MODALE PER DETTAGLIO SCHEDA IN-SITE */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-28 bg-black/80 backdrop-blur-md overflow-y-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl bg-[#121212] border border-white/20 p-6 md:p-10 rounded-lg text-white my-auto"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            >
                                <X size={28} />
                            </button>

                            <h2 className="text-3xl md:text-5xl font-serif mb-4 pr-8">
                                {selectedProject.title}
                            </h2>

                            <div className="text-lg text-white/85 mb-8 leading-relaxed whitespace-pre-line">
                                {selectedProject.details.roleDescription}
                            </div>

                            <div className="flex flex-col gap-6 mb-8">
                                {selectedProject.details.additionalImages.map((imgSrc, imgIdx) => (
                                    <img
                                        key={imgIdx}
                                        src={imgSrc}
                                        alt={`${selectedProject.title} detail ${imgIdx + 1}`}
                                        className="w-full rounded object-cover"
                                    />
                                ))}
                            </div>

                            {selectedProject.details.externalUrl && (
                                <a
                                    href={selectedProject.details.externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#EC3814] hover:underline uppercase text-sm tracking-wider font-mono"
                                >
                                    Visita il link esterno <ArrowUpRight size={18} />
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}