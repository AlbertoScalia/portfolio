import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

const allProjects = [
    {
        title: "IsolaBio – Re-design website",
        subtitle: "Redesign of the Isola Bio website in desktop and mobile versions, with updated visual hierarchy, layout system, and responsive design.",
        image: "/portfolio/assets/images/project12.webp",
        badges: ["UX/UI Design", "Web Design"],
        link: "https://www.behance.net/gallery/247551635/Re-design-Isola-Bio"
    },
    {
        title: "Start2impact Master Projects",
        subtitle: "Growth strategy, UX design, data analysis — all in one place. The projects where I stopped specializing and started connecting the dots.",
        image: "/portfolio/assets/images/project0.webp",
        badges: ["Growth Marketing", "UX/UI Design", "Data Analytics", "AI Business Strategy"],
        link: "https://account.start2impact.it/profile/alberto-scalia"
    },
    {
        title: "Glacier – Prototype app",
        subtitle: "Design a mobile app for extreme cold-weather adventure travel. The challenge was creating an interface that felt immersive and destination-specific without sacrificing usability in a content-heavy travel context.",
        image: "/portfolio/assets/images/project6.webp",
        badges: ["UX/UI Design", "App Design"],
        link: "https://www.behance.net/gallery/210705375/Glacier"
    },
    {
        title: "Forward magazine",
        subtitle: "Il Pensiero Scientifico Editore needed art direction for four consecutive issues of Forward, their healthcare and medical culture magazine.",
        image: "/portfolio/assets/images/project2.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://forward.recentiprogressi.it/it/"
    },
    {
        title: "lay0ut magazine – senza scheletro",
        subtitle: "Design a new issue of lay0ut magazine as a standalone editorial project with a specific structural constraint: free signatures, like a newspaper, rather than a fixed page sequence.",
        image: "/portfolio/assets/images/project3.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://www.layoutmagazine.it/senza-scheletro-il-nuovo-cartaceo-di-leiaut-megasin/"
    },
    {
        title: "Le chitarre del Pedrollo",
        subtitle: "A scholarly volume documenting a historic guitar collection at the Conservatoire of Vicenza required a rigorous visual approach, with full-bleed instrument photography, detailed captions, and bilingual Italian-English text.",
        image: "/portfolio/assets/images/project1.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://www.industriaeletteratura.it/prodotto/le-chitarre-del-pedrollo/"
    },
    {
        title: "Cassandra – Poster",
        subtitle: "An art installation at Spazio Volta in Bergamo needed a printed piece that functioned as both documentation and object — something a visitor would keep, not discard.",
        image: "/portfolio/assets/images/project4.webp",
        badges: ["Graphic Design", "Poster Art"],
        link: "https://www.behance.net/gallery/210458155/Cassandra-Poster-promozionale"
    },
    {
        title: "Flaco Edizioni Group Books",
        subtitle: "High-volume interior layout for a publisher with a fast-moving, diverse catalog spanning marketing, SEO, personal growth, and popular science.",
        image: "/portfolio/assets/images/project5.webp",
        badges: ["Editorial Design", "Layout"],
        link: "https://www.flacoedizioni.com"
    },
    {
        title: "Social Identity Socrates",
        subtitle: "A recurring festival needed an identity strong enough to anchor multiple editions while staying flexible across posters, programs, social, and merchandise.",
        image: "/portfolio/assets/images/project8.webp",
        badges: ["Social Media", "Branding"],
        link: "https://www.behance.net/gallery/210490221/Socrates-Sport-Storie-Societa"
    },
];

export default function Works() {
    return (
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen">
            <header className="mb-24 text-left">
                <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-8"
                >
                    My experience <br />
                    <span className="text-accent">(and my dark circles)</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-zinc-500 text-xl font-sans max-w-2xl leading-relaxed"
                >
                    No fluff. Just the projects that changed something — a product, a brand, a perception.
                </motion.p>
            </header>

            <div className="flex flex-col gap-16">
                {allProjects.map((project, idx) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={idx}
                        className="group flex flex-col gap-4"
                    >
                        <div className="w-full border-t border-blue group-hover:border-accent transition-colors duration-300" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="order-2 md:order-1 pt-2 text-left">
                                <h3 className="text-lg font-bold font-sans tracking-tight mb-2 group-hover:text-accent transition-colors uppercase">
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
                                            <span className="text-accent mr-2">/</span>
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

<div className="md:col-span-2 order-1 md:order-2">
    {/* bg-accent/20 aggiunge solo un tocco di colore di fondo */}
    <div className="relative w-full aspect-[16/8] overflow-hidden bg-accent/10 rounded-2xl">
        <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 
                       grayscale opacity-100 
                       group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 group-hover:scale-105"
        />
        {/* Overlay leggero per colorare senza appesantire */}
        <div className="absolute inset-0 bg-accent/40 multiply group-hover:bg-transparent transition-colors duration-700" />
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
                className="mt-16 md:mt-24 group flex flex-col gap-2 text-left"
            >
                <div className="group-hover:border-accent transition-colors duration-300" />
                
                <a 
                    href="https://www.behance.net/gallery/244847487/Personal-Portfolio-2021-2026" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group/btn"
                >
                    <div className="px-10 py-5 bg-blue text-white rounded-full flex items-center gap-3 transition-all group-hover/btn:bg-accent">
                        <span className="font-sans font-bold tracking-tight uppercase text-sm">
                            Check the complete archive
                        </span>
                        <ArrowUpRight size={20} weight="bold" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest opacity-0 group-hover/btn:opacity-100 transition-opacity">
                        (Behance Archive)
                    </span>
                </a>
            </motion.div>
        </main>
    );
}