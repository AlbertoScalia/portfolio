import { motion } from 'framer-motion';
import LiquidCard from '../components/ui/LiquidCard';
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

    return (
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen">
            <header className="mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-6"
                >
                    A little bit about <span className="text-accent">me</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-zinc-500 text-xl font-sans max-w-2xl mx-auto"
                >
                    Or: how I learned to stop worrying about light space and love brevity. 
                </motion.p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Sidebar: Skills */}
                <aside className="lg:col-span-4">
                    <LiquidCard className="p-8 sticky top-32 shadow-none border border-zinc-200 bg-white rounded-[2rem]">
                        <h2 className="text-sm font-sans font-bold text-zinc-400 tracking-widest uppercase mb-10 flex items-center gap-2">
                            <PenNib size={18} weight="duotone" className="text-accent" /> Skills & Technologies
                        </h2>

                        <div className="space-y-10">
                            {/* Design & Creative Suite */}
                            <div>
                                <h3 className="text-[10px] text-blue uppercase font-black tracking-[0.15em] mb-4 opacity-80">Design & Creative Suite</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Adobe Creative Suite", "Figma", "Affinity Suite", "Visual Identity", "Editorial Design", "Branding Strategy", "Typography"].map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-blue/5 border border-blue/10 text-xs font-mono text-zinc-500 whitespace-nowrap">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* UX/UI Design */}
                            <div>
                                <h3 className="text-[10px] text-blue uppercase font-black tracking-[0.15em] mb-4 opacity-80">UX/UI Design</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["User Research", "Discovery", "UX Writing", "Wireframing", "High-Fidelity Prototyping", "Usability Test", "Accessibility", "User-Centric Design", "Interaction Design"].map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-blue/5 border border-blue/10 text-xs font-mono text-zinc-500 whitespace-nowrap">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Strategy & Growth */}
                            <div>
                                <h3 className="text-[10px] text-blue uppercase font-black tracking-[0.15em] mb-4 opacity-80">Strategy & Growth</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Growth Marketing", "Funnel Optimization", "Meta Ads", "Google Ads", "GA4", "GTM", "Looker Studio", "Tableau", "SQL"].map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-blue/5 border border-blue/10 text-xs font-mono text-zinc-500 whitespace-nowrap">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* AI, Dev & Management */}
                            <div>
                                <h3 className="text-[10px] text-blue uppercase font-black tracking-[0.15em] mb-4 opacity-80">AI, Dev & Management</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["AI Strategy", "Prompt Engineering", "AI Agents", "n8n Automation", "Web Development", "Responsive Design", "SAP B1", "EKR KIT"].map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-blue/5 border border-blue/10 text-xs font-mono text-zinc-500 whitespace-nowrap">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </LiquidCard>
                </aside>

                {/* Main Content: Experience & Education */}
                <div className="lg:col-span-8 flex flex-col gap-16">

                    <motion.section variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-sans font-bold mb-10 flex items-center gap-4">
                            <Briefcase size={28} weight="duotone" className="text-accent" /> Professional Experience
                        </h2>

                        <div className="flex flex-col gap-8 border-l border-blue/10 pl-8 ml-4">
                                                    <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">Present</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Open to opportunities</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">Full time or freelance</span>
                                <p className="text-zinc-500 leading-relaxed">  Full-time roles and collaborations — especially where design and strategy overlap.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2022 - Present</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Art Director</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">lay0ut magazine, Forward magazine</span>
                                <p className="text-zinc-500 leading-relaxed"> From underground zines to peer-reviewed science — I've designed both, and they've taught me everything about hierarchy.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2025 - 2026</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Graphic Designer</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">Life Electronics SpA</span>
                                <p className="text-zinc-500 leading-relaxed">I dress tech products without forgetting barcodes. I manage the entire packaging cycle by integrating creativity with complex management systems like SAP and EKR KIT.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2021 - 2026</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Freelance Editorial Designer</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">Various Independent Publishers</span>
                                <p className="text-zinc-500 leading-relaxed">I take care of visual identities and typesetting for 12 independent publishers and academic institutions, delivering over 50 book projects.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2021 - 2023</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Graphic Design Intern</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">LetteraVentidue Edizioni</span>
                                <p className="text-zinc-500 leading-relaxed">A total immersion in the world of books: from the choice of paper to the millimetric precision of typographic grids.</p>
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-sans font-bold mb-10 flex items-center gap-4">
                            <GraduationCap size={28} weight="duotone" className="text-accent" /> Education
                        </h2>

                        <div className="flex flex-col gap-8 border-l border-blue/10 pl-8 ml-4">
                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2025 - 2026</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Growth Marketing & AI Agents Master</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">start2impact</span>
                                <p className="text-zinc-500 leading-relaxed">A multidisciplinary path that combines strategic marketing, UX/UI design, and data analysis with a strong focus on artificial intelligence. You can take a look at my profile and my projects <a href="https://account.start2impact.it/profile/alberto-scalia
" className="text-accent mb-3" >here.</a></p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2024</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Complete UX Design Course</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">corsoux.it</span>
                                <p className="text-zinc-500 leading-relaxed">Where I understood that a test with a real user is worth more than a thousand hours of brainstorming in an agency.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2023</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Master in Full Stack Web Developer</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">Boolean</span>
                                <p className="text-zinc-500 leading-relaxed">Where I stopped asking developers if a design was feasible and started writing the code myself.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2021</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Master in Publishing</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">Scuola del Libro</span>
                                <p className="text-zinc-500 leading-relaxed">Practically a survival master for anyone who wants to print beautiful things without getting a nervous breakdown between one draft and another.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2017 - 2020</span>
                                <h3 className="text-xl font-bold font-sans text-blue mb-1">Bachelor's Degree in Visual Communication Design</h3>
                                <span className="text-sm font-medium text-zinc-500 block mb-3">Accademia di Belle Arti di Catania</span>
                                <p className="text-zinc-500 leading-relaxed">The foundations of everything I break and rebuild today. From color theory to rigid typography.</p>
                            </motion.div>
                        </div>
                    </motion.section>

                </div>
            </div>
        </main>
    );
}
