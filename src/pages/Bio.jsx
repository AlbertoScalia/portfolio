import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PenNib, Briefcase, GraduationCap, Plus, Minus } from '@phosphor-icons/react';

export default function Bio() {
    const [openExp, setOpenExp] = useState(null);
    const [openEdu, setOpenEdu] = useState(null);
    const shouldReduceMotion = useReducedMotion();

    const toggleExp = (i) => setOpenExp(openExp === i ? null : i);
    const toggleEdu = (i) => setOpenEdu(openEdu === i ? null : i);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
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

    const experiences = [
        { 
            date: "2026 - Present", 
            title: "Visual & Brand Designer", 
            sub: <><a href="https://gyadacosmetics.com/" target="_blank" rel="noopener noreferrer" className="underline text-[#EC3814] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#EC3814]">Gyada Cosmetics S.r.l.</a></>, 
            desc: "I manage the entire packaging cycle for cosmetic lines, from realistic mockups to print-ready artwork." 
        },
        { 
            date: "2022 - Present", 
            title: "Visual & Editorial Designer", 
            sub: <><a href="https://www.layoutmagazine.it/" target="_blank" rel="noopener noreferrer" className="underline text-[#EC3814] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#EC3814]">lay0ut magazine</a>, <a href="https://forward.recentiprogressi.it/it/" target="_blank" rel="noopener noreferrer" className="underline text-[#EC3814] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#EC3814]">Forward magazine</a></>, 
            desc: "From underground zines to peer-reviewed science — I've designed both, and they've taught me everything about hierarchy." 
        },
        { 
            date: "2025 - 2026", 
            title: "Visual & Brand Designer", 
            sub: <><a href="https://www.life-electronics.com/it" target="_blank" rel="noopener noreferrer" className="underline text-[#EC3814] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#EC3814]">Life Electronics SpA</a></>, 
            desc: "I dress tech products without forgetting barcodes. I manage the entire packaging cycle by integrating creativity with complex management systems like SAP and EKR KIT." 
        },
        { 
            date: "2021 - 2026", 
            title: "Visual & Book Designer", 
            sub: "Various Independent Publishers", 
            desc: "I take care of visual identities and typesetting for 12 independent publishers and academic institutions, delivering over 50 book projects." 
        },
        { 
            date: "2021 - 2023", 
            title: "Graphic Design Intern", 
            sub: <><a href="https://letteraventidue.com/it/" target="_blank" rel="noopener noreferrer" className="underline text-[#EC3814] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#EC3814]">LetteraVentidue Edizioni</a></>, 
            desc: "A total immersion in the world of books: from the choice of paper to the millimetric precision of typographic grids." 
        }
    ];

    const education = [
        { date: "2025 - 2026", title: "Growth Marketing & AI Agents Master", sub: "start2impact", desc: <>A multidisciplinary path that combines strategic marketing, UX/UI design, and data analysis with a strong focus on artificial intelligence. You can view my profile and projects <a href="https://account.start2impact.it/profile/alberto-scalia" target="_blank" rel="noopener noreferrer" className="underline text-[#EC3814] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#EC3814]">here.</a></> },
        { date: "2024", title: "Complete UX Design Course", sub: "corsoux.it", desc: "Where I understood that a test with a real user is worth more than a thousand hours of brainstorming in an agency." },
        { date: "2023", title: "Master in Full Stack Web Developer", sub: "Boolean", desc: "Where I stopped asking developers if a design was feasible and started writing the code myself." },
        { date: "2021", title: "Master in Publishing", sub: "Scuola del Libro", desc: "An intensive program focused on print production, typography grids, and editorial project management." },
        { date: "2017 - 2020", title: "Bachelor's Degree in Visual Communication Design", sub: "Accademia di Belle Arti di Catania", desc: "The foundations of everything I break and rebuild today. From color theory to rigid typography." }
    ];

    return (
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen text-white font-sans">
            <header className="mb-24 text-center max-w-7xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans tracking-tighter mb-6 text-center text-white"
                >
                    A little bit <br />
                    <span className="font-serif font-normal text-[#EC3814]">about me</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-xl font-sans max-w-2xl leading-relaxed text-white/85 text-center"
                >
                    A overview of my professional background, skills, and background in design. 
                </motion.p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
                <motion.aside 
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-4 lg:sticky lg:top-28 group"
                >
                    <div className="w-full border-t border-white/20 group-hover:border-[#EC3814] transition-colors duration-300 mb-8" />
                    <h2 className="text-2xl md:text-3xl font-serif font-normal text-white group-hover:text-[#EC3814] transition-colors duration-300 flex items-center gap-3 mb-8">
                        <PenNib size={28} weight="duotone" className="text-white group-hover:text-[#EC3814] transition-colors duration-300" aria-hidden="true" /> Skills & Tech
                    </h2>

                    <div className="space-y-8">
                        {skillCategories.map((cat, idx) => (
                            <div key={`cat-${idx}`}>
                                <h3 className="text-[10px] uppercase font-black tracking-[0.15em] mb-3 text-white">
                                    {cat.title}
                                </h3>
                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                    {cat.skills.map((skill, sIdx) => (
                                        <span 
                                            key={`skill-${idx}-${sIdx}`} 
                                            className="flex items-center text-[11px] font-mono uppercase tracking-wider text-white/85 hover:text-white transition-colors cursor-default"
                                        >
                                            <span className="text-[#EC3814] mr-1.5 font-bold" aria-hidden="true">/</span>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.aside>

                <motion.div 
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-8 space-y-20"
                >
                    <motion.section 
                        variants={containerVariants} 
                        initial="hidden" 
                        whileInView="show" 
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="w-full border-t border-white/20 group-hover:border-[#EC3814] transition-colors duration-300 mb-8" />
                        <h2 className="text-2xl md:text-3xl font-serif font-normal text-white group-hover:text-[#EC3814] transition-colors duration-300 flex items-center gap-4 mb-8">
                            <Briefcase size={28} weight="duotone" className="text-white group-hover:text-[#EC3814] transition-colors duration-300" aria-hidden="true" /> Professional Experience
                        </h2>

                        <div className="divide-y divide-white/10 border-b border-white/10">
                            {experiences.map((exp, i) => (
                                <motion.div key={i} variants={itemVariants} className="py-5 group/item">
                                    <button
                                        onClick={() => toggleExp(i)}
                                        aria-expanded={openExp === i}
                                        aria-controls={`exp-desc-${i}`}
                                        className="w-full flex items-center justify-between text-left focus-visible:outline-2 focus-visible:outline-[#EC3814] focus-visible:outline-offset-4 rounded-sm p-1"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-12 w-full gap-1 sm:gap-4 items-baseline pr-4">
                                            <span className="sm:col-span-4 font-mono text-xs text-white/60 uppercase tracking-wider">
                                                {exp.date}
                                            </span>
                                            <div className="sm:col-span-8">
                                                <h3 className="text-lg font-bold font-sans text-white group-hover/item:text-[#EC3814] transition-colors">
                                                    {exp.title}
                                                </h3>
                                                <span className="text-sm font-sans font-medium text-white/90 block">
                                                    {exp.sub}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-white/60 group-hover/item:text-[#EC3814] transition-colors shrink-0" aria-hidden="true">
                                            {openExp === i ? <Minus size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openExp === i && (
                                            <motion.div
                                                id={`exp-desc-${i}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pt-4 pb-2 sm:pl-[33.33%] text-sm font-sans text-white/85 leading-relaxed">
                                                    {exp.desc}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section 
                        variants={containerVariants} 
                        initial="hidden" 
                        whileInView="show" 
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="w-full border-t border-white/20 group-hover:border-[#EC3814] transition-colors duration-300 mb-8" />
                        <h2 className="text-2xl md:text-3xl font-serif font-normal text-white group-hover:text-[#EC3814] transition-colors duration-300 flex items-center gap-4 mb-8">
                            <GraduationCap size={28} weight="duotone" className="text-white group-hover:text-[#EC3814] transition-colors duration-300" aria-hidden="true" /> Education & Certifications
                        </h2>

                        <div className="divide-y divide-white/10 border-b border-white/10">
                            {education.map((edu, i) => (
                                <motion.div key={i} variants={itemVariants} className="py-5 group/item">
                                    <button
                                        onClick={() => toggleEdu(i)}
                                        aria-expanded={openEdu === i}
                                        aria-controls={`edu-desc-${i}`}
                                        className="w-full flex items-center justify-between text-left focus-visible:outline-2 focus-visible:outline-[#EC3814] focus-visible:outline-offset-4 rounded-sm p-1"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-12 w-full gap-1 sm:gap-4 items-baseline pr-4">
                                            <span className="sm:col-span-4 font-mono text-xs text-white/60 uppercase tracking-wider">
                                                {edu.date}
                                            </span>
                                            <div className="sm:col-span-8">
                                                <h3 className="text-lg font-bold font-sans text-white group-hover/item:text-[#EC3814] transition-colors">
                                                    {edu.title}
                                                </h3>
                                                <span className="text-sm font-sans font-medium text-white/90 block">
                                                    {edu.sub}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-white/60 group-hover/item:text-[#EC3814] transition-colors shrink-0" aria-hidden="true">
                                            {openEdu === i ? <Minus size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openEdu === i && (
                                            <motion.div
                                                id={`edu-desc-${i}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 pb-2 sm:pl-[33.33%] text-sm font-sans text-white/85 leading-relaxed">
                                                    {edu.desc}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </motion.div>
            </div>
        </main>
    );
}