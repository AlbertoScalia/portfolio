import { motion } from 'framer-motion';
import LiquidCard from './ui/LiquidCard';
import MagneticButton from './ui/MagneticButton';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "IsolaBio – Re-design website",
        subtitle: "UX/UI design for an organic food website.",
        image: "/portfolio/assets/images/project12.webp",
        badges: ["UX/UI Design", "Web Design"],
        link: "https://www.behance.net/gallery/247551635/Re-design-Isola-Bio"
    },
    {
        title: "Start2impact Master Projects",
        subtitle: "A comprehensive collection of personal projects developed during the Master's program in Growth Marketing, UX/UI Design, and Data Analytics.",
        image: "/portfolio/assets/images/project0.webp",
        badges: ["Growth Marketing", "UX/UI Design", "Data Analytics", "AI Business Strategy"],
        link: "https://account.start2impact.it/profile/alberto-scalia"
    },
    {
        title: "Forward magazine",
        subtitle: "Art direction and design for a healthcare and multimedia horizon scanning project.",
        image: "/portfolio/assets/images/project2.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://forward.recentiprogressi.it/it/"
    },
    {
        title: "lay0ut magazine – senza scheletro",
        subtitle: "Art direction and experimental layout work for lay0ut magazine.",
        image: "/portfolio/assets/images/project3.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://www.layoutmagazine.it/senza-scheletro-il-nuovo-cartaceo-di-leiaut-megasin/"
    },
    {
        title: "Le chitarre del Pedrollo",
        subtitle: "Editorial project focused on lutherie for the Conservatory of Vicenza.",
        image: "/portfolio/assets/images/project1.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://www.industriaeletteratura.it/prodotto/le-chitarre-del-pedrollo/"
    },
    {
        title: "Glacier – Prototype app",
        subtitle: "UX/UI design for a travel app in the Nordic countries.",
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
                <Link to="/works" className="hidden md:inline-flex">
                    <MagneticButton className="bg-blue text-light hover:bg-blue/80 border border-white/10 transition-all">
                        View all
                    </MagneticButton>
                </Link>
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
                        <LiquidCard className="p-2 h-full flex flex-col rounded-[2rem] shadow-none border border-zinc-200 bg-white">
                            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="px-4 pb-6 mt-auto">
                                <h3 className="text-xl font-bold font-sans tracking-tight mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                                    {project.subtitle}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.badges.map((badge, bIdx) => (
                                        <span key={bIdx} className="px-3 py-1 rounded-full bg-blue/5 border border-blue/10 text-xs font-mono text-zinc-500">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </LiquidCard>
                    </motion.a>
                ))}
            </div>

            <div className="mt-12 flex justify-center md:hidden">
                <Link to="/works">
                    <MagneticButton className="bg-blue text-light hover:bg-blue/80 border-white/10 transition-all">
                        View all projects
                    </MagneticButton>
                </Link>
            </div>
        </section>
    );
}