import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

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
                link: "https://www.behance.net/gallery/247551635/Re-design-Isola-Bio"
            },
            {
                title: "Glacier – Prototype app",
                subtitle: "Design a mobile app for extreme cold-weather adventure travel. The challenge was creating an interface that felt immersive and destination-specific without sacrificing usability in a content-heavy travel context.",
                image: `${import.meta.env.BASE_URL}assets/images/project6.webp`,
                badges: ["UX/UI Design", "App Design"],
                link: "https://www.behance.net/gallery/210705375/Glacier"
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
                link: "https://forward.recentiprogressi.it/it/"
            },
            {
                title: "lay0ut magazine – senza scheletro",
                subtitle: "Design a new issue of lay0ut magazine as a standalone editorial project with a specific structural constraint: free signatures, like a newspaper, rather than a fixed page sequence.",
                image: `${import.meta.env.BASE_URL}assets/images/project3.webp`,
                badges: ["Editorial Design", "Layout"],
                link: "https://www.layoutmagazine.it/senza-scheletro-il-nuovo-cartaceo-di-leiaut-megasin/"
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
                link: "https://www.behance.net/gallery/210458155/Cassandra-Poster-promozionale"
            },
            {
                title: "Social Identity Socrates",
                subtitle: "A recurring festival needed an identity strong enough to anchor multiple editions while staying flexible across posters, programs, social, and merchandise.",
                image: `${import.meta.env.BASE_URL}assets/images/project8.webp`,
                badges: ["Social Media", "Branding"],
                link: "https://www.behance.net/gallery/210490221/Socrates-Sport-Storie-Societa"
            }
        ]
    }
];

export default function HeroSection() {
    return (
        <section className="relative w-full pt-32 pb-20 text-white font-sans overflow-x-hidden">
            {/* HERO HEADER */}
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-6 lg:px-12 mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white mb-8 max-w-5xl"
                >
                    Editorial Precision, <br />
                    <span className="font-serif font-normal text-[#EC3814]">Digital Performance</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl leading-relaxed max-w-2xl text-white/70 text-center"
                >
                    I'm Alberto, a versatile UI designer with a solid background in high-end Editorial Design — here is what I do:
                </motion.p>
            </div>

            {/* SEZIONI E CARD PROGETTI */}
            <div id="work" className="flex flex-col gap-24 w-full">
                {sections.map((section, sIdx) => (
                    <div key={sIdx} className="w-full">
                        {/* Filetto a tutta larghezza viewport */}
                        <div className="w-full border-t border-white/20 mb-12" />

                        {/* Intestazione Categoria (CENTRATA) */}
                        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex flex-col items-center text-center">
                            <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-3">
                                {section.title}
                            </h2>
                            <p className="text-base font-sans text-white/70 max-w-2xl leading-relaxed text-center">
                                {section.description}
                            </p>
                        </div>

                        {/* Card dei Progetti (FULL VIEWPORT WIDTH) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-16 w-full">
                            {section.projects.map((project, idx) => (
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="group flex flex-col w-full text-left"
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

                                        <p className="text-sm font-sans text-white/70 leading-relaxed max-w-xl">
                                            {project.subtitle}
                                        </p>

                                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                                            {project.badges.map((badge, bIdx) => (
                                                <span 
                                                    key={bIdx} 
                                                    className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors"
                                                >
                                                    / {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* LINK ARCHIVIO COMPLETO */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24 px-6 lg:px-12 max-w-7xl mx-auto flex justify-center text-center"
            >
                <a 
                    href="https://www.behance.net/gallery/244847487/Personal-Portfolio-2021-2026" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white hover:text-[#EC3814] transition-colors duration-300 group/btn"
                >
                    <span className="font-light tracking-wider uppercase text-sm md:text-base">
                        Check the complete archive
                    </span>
                    <ArrowUpRight size={20} weight="bold" className="group-hover/btn:rotate-45 transition-transform" />
                </a>
            </motion.div>
        </section>
    );
}