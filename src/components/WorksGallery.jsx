import { motion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "IsolaBio – Re-design website",
        subtitle: "A brand that smelled like soil and sold like a startup. Re-design from research to prototype.",
        image: "/portfolio/assets/images/project12.webp",
        badges: ["UX/UI Design", "Web Design"],
        link: "https://www.behance.net/gallery/247551635/Re-design-Isola-Bio"
    },
    {
        title: "Forward magazine",
        subtitle: "Art direction and design for a healthcare and multimedia horizon scanning project.",
        image: "/portfolio/assets/images/project2.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://forward.recentiprogressi.it/it/"
    },
    {
        title: "Glacier – Prototype app",
        subtitle: "Designed for people who plan trips in places where the weather decides everything. A travel app for the Nordic countries — built around uncertainty.",
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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group flex flex-col gap-4"
                    >
                        {/* Filetto superiore */}
                        <div className="w-full border-t border-blue/20 group-hover:border-accent transition-colors duration-500" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            {/* Descrizione separata */}
                            <div className="order-2 md:order-1 pt-2">
                                <h3 className="text-lg font-bold font-sans tracking-tight mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 text-xs mb-4 leading-relaxed max-w-sm">
                                    {project.subtitle}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.badges.map((badge, bIdx) => (
                                        <span key={bIdx} className="px-2 py-0.5 rounded-full border border-blue/20 text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Immagine con bordi squadrati */}
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

            <div className="mt-24 flex justify-center">
                <Link to="/works">
                    <MagneticButton className="bg-blue text-light hover:bg-blue/80 border border-white/10 transition-all">
                        See more projects
                    </MagneticButton>
                </Link>
            </div>
        </section>
    );
}