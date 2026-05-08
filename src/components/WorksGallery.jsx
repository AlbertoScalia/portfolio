import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "IsolaBio – Re-design website",
        subtitle: "Redesign of the Isola Bio website in desktop and mobile versions, with updated visual hierarchy, layout system, and responsive design.",
        image: "/portfolio/assets/images/project12.webp",
        badges: ["UX/UI Design", "Web Design"],
        link: "https://www.behance.net/gallery/247551635/Re-design-Isola-Bio"
    },
    {
        title: "Forward magazine",
        subtitle: "Il Pensiero Scientifico Editore needed art direction for four consecutive issues of Forward, their healthcare and medical culture magazine.",
        image: "/portfolio/assets/images/project2.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://forward.recentiprogressi.it/it/"
    },
    {
        title: "Glacier – Prototype app",
        subtitle: "Design a mobile app for extreme cold-weather adventure travel. The challenge was creating an interface that felt immersive and destination-specific without sacrificing usability in a content-heavy travel context.",
        image: "/portfolio/assets/images/project6.webp",
        badges: ["UX/UI Design", "App Design"],
        link: "https://www.behance.net/gallery/210705375/Glacier"
    }
];

export default function WorksGallery() {
    return (
        <section id="progetti" className="relative py-24 px-6 lg:px-12 w-full mx-auto max-w-7xl">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter">
                    Here's how I spent <br />
                    <span className="text-accent">my latest late nights</span>
                </h2>
            </div>

            <div className="flex flex-col gap-16">
                {projects.map((project, idx) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group flex flex-col gap-4"
                    >
                        <div className="w-full border-t border-blue group-hover:border-accent transition-colors duration-300" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="order-2 md:order-1 pt-2 text-left">
                                <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-accent transition-colors uppercase">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 mb-4 leading-relaxed max-w-sm">
                                    {project.subtitle}
                                </p>

<div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
    {project.badges.map((badge, bIdx) => (
        <span 
            key={bIdx} 
            className="flex items-center text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-400"
        >
            {/* Un piccolo rombo o punto prima del testo per un tocco tecnico */}
            <span className="text-accent mr-2">/</span>
            {badge}
        </span>
    ))}
</div>
                            </div>

                            <div className="md:col-span-2 order-1 md:order-2">
                                <div className="relative w-full aspect-[16/8] overflow-hidden bg-zinc-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mt-24 group flex flex-col gap-8 text-left"
            >
                <div className="w-full border-t border-blue group-hover:border-accent transition-colors duration-300" />
                
                <Link to="/works" className="flex items-center gap-4 group/btn">
                    <div className="px-10 py-5 bg-blue text-white rounded-full flex items-center gap-3 transition-all group-hover/btn:bg-accent">
                        <span className="font-bold tracking-tight uppercase text-sm">
                            See more projects
                        </span>
                        <ArrowUpRight size={20} weight="bold" />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}