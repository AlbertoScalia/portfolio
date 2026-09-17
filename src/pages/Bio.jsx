import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, PenNib } from '@phosphor-icons/react';

export default function Bio() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
    };

    const skillCategories = [
        {
            title: "Editorial & Visual Arts",
            skills: ["Visual Identity", "Editorial Design", "Branding Strategy", "Typography", "Adobe Creative Suite", "Affinity Suite"]
        },
        {
            title: "UI & Product",
            skills: ["Figma", "Wireframing", "High-Fidelity Prototyping", "Miro", "Khroma", "Uizard"]
        },
        {
            title: "AI & Workflow Automation",
            skills: ["AI Business Strategy", "Prompt Engineering", "AI Agents", "n8n Automation", "Lovable", "Claude", "Perplexity", "Gemini", "ChatGPT"]
        },
        {
            title: "Tech & Growth",
            skills: ["HTML5", "CSS3", "Responsive Design", "Tailwind CSS", "Bootstrap"]
        }
    ];

    return (
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen text-white">
            {/* Header Centrato */}
            <header className="mb-24 text-center max-w-7xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans tracking-tighter mb-6 text-center text-white"
                >
                    A little bit <br />
                    <span className="font-serif font-normal text-[#EC3814]">about me</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-xl font-sans max-w-2xl leading-relaxed text-white/70 text-center"
                >
                    Or: how I learned to stop worrying about white space and love brevity. 
                </motion.p>
            </header>

            {/* Skills Section */}
            <section className="mb-32 group">
                <div className="w-full border-t border-white/20 group-hover:border-[#EC3814] transition-colors duration-300 mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1">
                        <h2 className="text-2xl md:text-3xl font-serif font-normal text-white group-hover:text-[#EC3814] transition-colors duration-300 flex items-center gap-3 mb-4">
                            <PenNib size={24} weight="duotone" className="text-white group-hover:text-[#EC3814] transition-colors duration-300" /> Skills & Tech
                        </h2>
                    </div>
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                        {skillCategories.map((cat, idx) => (
                            <div key={`cat-${idx}`}>
                                <h3 className="text-[10px] uppercase font-sans font-black tracking-[0.15em] mb-4 text-white">
                                    {cat.title}
                                </h3>
                                <div className="flex flex-wrap gap-x-5 gap-y-2">
                                    {cat.skills.map((skill, sIdx) => (
                                        <span 
                                            key={`skill-${idx}-${sIdx}`} 
                                            className="flex items-center text-[11px] font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors cursor-default"
                                        >
                                            <span className="text-[#EC3814] mr-2 font-bold">/</span>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience & Education Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                
                {/* Experience Column */}
                <motion.section 
                    variants={containerVariants} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="w-full border-t border-white/20 group-hover:border-[#EC3814] transition-colors duration-300 mb-12" />
                    <h2 className="text-2xl md:text-3xl font-serif font-normal text-white group-hover:text-[#EC3814] transition-colors duration-300 mb-12 flex items-center gap-4">
                        <Briefcase size={28} weight="duotone" className="text-white group-hover:text-[#EC3814] transition-colors duration-300" /> Professional Experience
                    </h2>
                    
                    <div className="space-y-12">
                        {[
                            { date: "2026 - Present", title: "Visual & Brand Designer", sub: "Gyada Cosmetics S.r.l.", desc: "I manage the entire packaging cycle for cosmetic lines, from realistic mockups to print-ready artwork."},
                            { date: "2022 - Present", title: "Visual & Editorial Designer", sub: "lay0ut magazine, Forward magazine", desc: "From underground zines to peer-reviewed science — I've designed both, and they've taught me everything about hierarchy." },
                            { date: "2025 - 2026", title: "Visual & Brand Designer", sub: "Life Electronics SpA", desc: "I dress tech products without forgetting barcodes. I manage the entire packaging cycle by integrating creativity with complex management systems like SAP and EKR KIT." },
                            { date: "2021 - 2026", title: "Visual & Book Designer", sub: "Various Independent Publishers", desc: "I take care of visual identities and typesetting for 12 independent publishers and academic institutions, delivering over 50 book projects." },
                            { date: "2021 - 2023", title: "Graphic Design Intern", sub: "LetteraVentidue Edizioni", desc: "A total immersion in the world of books: from the choice of paper to the millimetric precision of typographic grids." }
                        ].map((exp, i) => (
                            <motion.div key={i} variants={itemVariants} className="flex flex-col gap-1 text-left group/item">
                                <span className="font-mono text-xs mb-2 block tracking-wider uppercase text-white/40">{exp.date}</span>
                                <h3 className="text-xl font-bold font-sans text-white group-hover/item:text-[#EC3814] transition-colors mb-1">{exp.title}</h3>
                                <span className="text-sm font-sans font-medium text-white/80 block mb-3">{exp.sub}</span>
                                <p className="leading-relaxed text-sm font-sans text-white/70 max-w-md">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Education Column */}
                <motion.section 
                    variants={containerVariants} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="w-full border-t border-white/20 group-hover:border-[#EC3814] transition-colors duration-300 mb-12" />
                    <h2 className="text-2xl md:text-3xl font-serif font-normal text-white group-hover:text-[#EC3814] transition-colors duration-300 mb-12 flex items-center gap-4">
                        <GraduationCap size={28} weight="duotone" className="text-white group-hover:text-[#EC3814] transition-colors duration-300" /> Education
                    </h2>

                    <div className="space-y-12">
                        {[
                            { date: "2025 - 2026", title: "Growth Marketing & AI Agents Master", sub: "start2impact", desc: <>A multidisciplinary path that combines strategic marketing, UX/UI design, and data analysis with a strong focus on artificial intelligence. You can view my profile and projects <a href="https://account.start2impact.it/profile/alberto-scalia" target="_blank" rel="noopener noreferrer" className="underline text-[#EC3814] hover:text-white transition-colors">here.</a></> },
                            { date: "2024", title: "Complete UX Design Course", sub: "corsoux.it", desc: "Where I understood that a test with a real user is worth more than a thousand hours of brainstorming in an agency." },
                            { date: "2023", title: "Master in Full Stack Web Developer", sub: "Boolean", desc: "Where I stopped asking developers if a design was feasible and started writing the code myself." },
                            { date: "2021", title: "Master in Publishing", sub: "Scuola del Libro", desc: "Practically a survival master for anyone who wants to print beautiful things without getting a nervous breakdown between one draft and another." },
                            { date: "2017 - 2020", title: "Bachelor's Degree in Visual Communication Design", sub: "Accademia di Belle Arti di Catania", desc: "The foundations of everything I break and rebuild today. From color theory to rigid typography." }
                        ].map((edu, i) => (
                            <motion.div key={i} variants={itemVariants} className="flex flex-col gap-1 text-left group/item">
                                <span className="font-mono text-xs mb-2 block tracking-wider uppercase text-white/40">{edu.date}</span>
                                <h3 className="text-xl font-bold font-sans text-white group-hover/item:text-[#EC3814] transition-colors mb-1">{edu.title}</h3>
                                <span className="text-sm font-sans font-medium text-white/80 block mb-3">{edu.sub}</span>
                                <div className="leading-relaxed text-sm font-sans text-white/70 max-w-md">{edu.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </main>
    );
}