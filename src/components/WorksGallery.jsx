import { motion } from 'framer-motion';
import LiquidCard from './ui/LiquidCard';
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
        <section id="progetti" className="relative py-32 px-6 lg:px-12 w-full mx-auto max-w-7xl">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter">
                    Here's how I spent <br />
                    <span className="text-accent">my latest late nights</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                        className="group block"
                    >
                        <LiquidCard className="h-full flex flex-col shadow-none">
                            {/* L'immagine occupa la parte superiore senza padding per un look pulito[cite: 1, 2] */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-blue group-hover:border-accent transition-colors">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="px-6 py-8 mt-auto">
                                <h3 className="text-xl font-bold font-sans tracking-tight mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                                    {project.subtitle}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.badges.map((badge, bIdx) => (
                                        <span key={bIdx} className="px-3 py-1 rounded-full border border-blue/20 text-xs font-mono text-zinc-500">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </LiquidCard>
                    </motion.a>
                ))}
            </div>
            <div className="mt-12 flex justify-center">
                <Link to="/works">
                    <MagneticButton className="bg-blue text-light hover:bg-blue/80 border-white/10 transition-all">
                        See more projects
                    </MagneticButton>
                </Link>
            </div>
        </section>
    );
}