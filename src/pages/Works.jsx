import { motion } from 'framer-motion';
import LiquidCard from '../components/ui/LiquidCard';
import MagneticButton from '../components/ui/MagneticButton';

const allProjects = [
    {
        title: "IsolaBio – Re-design website",
        subtitle: "A brand that smelled like soil and sold like a startup. Re-design from research to prototype.",
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
        subtitle: "Designed for people who plan trips in places where the weather decides everything. A travel app for the Nordic countries — built around uncertainty.",
        image: "/portfolio/assets/images/project6.webp",
        badges: ["UX/UI Design", "App Design"],
        link: "https://www.behance.net/gallery/210705375/Glacier"
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
        title: "Cassandra – Poster",
        subtitle: "Visual communication based on bold typography and strong chromatic contrasts.",
        image: "/portfolio/assets/images/project4.webp",
        badges: ["Graphic Design", "Poster Art"],
        link: "https://www.behance.net/gallery/210458155/Cassandra-Poster-promozionale"
    },
    {
        title: "Flaco Edizioni Group Books",
        subtitle: "Interior layout design for technical manuals (SEO, Web Marketing).",
        image: "/portfolio/assets/images/project5.webp",
        badges: ["Editorial Design", "Layout"],
        link: "https://www.flacoedizioni.com"
    },
    {
        title: "Eclecta — Brand and Guidelines",
        subtitle: "Brand identity development and editorial user manual consistent between print and web.",
        image: "/portfolio/assets/images/project7.webp",
        badges: ["Brand Identity", "Typography"],
        link: "https://www.behance.net/gallery/122876217/Eclecta-marchio-e-norme-editoriali-"
    },
    {
        title: "Social Identity Socrates",
        subtitle: "Visual identity and creative strategy for cultural storytelling through sports.",
        image: "/portfolio/assets/images/project8.webp",
        badges: ["Social Media", "Branding"],
        link: "https://www.behance.net/gallery/210490221/Socrates-Sport-Storie-Societa"
    },
    {
        title: "Evaporato in una nuvola rossa",
        subtitle: "Visual identity for an exhibition in memory of Fabrizio De André.",
        image: "/portfolio/assets/images/project9.webp",
        badges: ["Visual Art", "Photography"],
        link: "https://www.behance.net/gallery/117560683/EVAPORATO-in-una-NUVOLA-ROSSA"
    },
    {
        title: "Infographic - Ti faccio nero, buco!",
        subtitle: "A visual deep dive into Black Holes, translating complex astrophysics into an accessible infographic.",
        image: "/portfolio/assets/images/project11.webp",
        badges: ["Infographic Design", "Data Visualization"],
        link: "https://www.behance.net/gallery/121555913/Infographic-Ti-faccio-nero-buco"
    },
    {
        title: "Il Destino della Terra",
        subtitle: "An infographic illustrating the global pollution crisis and its environmental consequences.",
        image: "/portfolio/assets/images/project10.webp",
        badges: ["Infographic Design", "Data Visualization", "Environmental Design"],
        link: "https://www.behance.net/gallery/116122765/Infographic-Il-Destino-della-Terra"
    }
];

export default function Works() {
    return (
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen">
            <header className="mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-6"
                >
                    My experience <br />
                    <span className="text-accent text-4xl md:text-6xl">(and my dark circles)</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-zinc-500 text-xl font-sans max-w-2xl mx-auto"
                >
                    No fluff. Just the projects that changed something — a product, a brand, a perception.
                </motion.p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, idx) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: (idx % 3) * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                        className="group block"
                    >
                        <LiquidCard className="p-2 h-full flex flex-col rounded-[2rem] shadow-none border border-zinc-200 bg-white">
                            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />                            </div>

                            <div className="px-4 pb-6 mt-auto">
                                <h3 className="text-xl font-bold font-sans tracking-tight mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{project.subtitle}</p>

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

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 text-center"
            >
                <a href="https://www.behance.net/gallery/244847487/Personal-Portfolio-2021-2026" target="_blank" rel="noopener noreferrer">
                    <MagneticButton className="bg-blue text-light hover:bg-blue/80 border border-white/10 transition-all">
                        Check the complete archive
                    </MagneticButton>
                </a>
            </motion.div>
        </main>
    );
}
