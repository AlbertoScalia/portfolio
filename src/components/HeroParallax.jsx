import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function HeroParallax() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section
            ref={ref}
            className="relative min-h-[90dvh] w-full flex flex-col justify-center pt-24 pb-8 px-6 lg:px-12 max-w-7xl mx-auto font-sans"
        >
            <motion.div style={{ opacity, y }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Logo Container - Ora appare SOPRA su mobile (ordine 1) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-4 flex justify-start lg:justify-end order-1 lg:order-2"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}assets/images/logo_sito.webp`}
                        alt="Logo"
                        className="w-32 md:w-48 lg:w-full max-w-[280px] h-auto object-contain"
                    />
                </motion.div>

                {/* Text Content - Ordine 2 su mobile per stare sotto il logo */}
                <div className="lg:col-span-8 text-left z-10 order-2 lg:order-1">
                    <div className="flex flex-col mb-12">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                            className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] text-blue mb-8"
                        >
                            Editorial Precision, <br />
                            <span className="text-accent">Digital Performance</span>
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl"
                        >
                            I'm Alberto. I bring editorial art direction into UX/UI and growth design — translating visual hierarchy, typography, and information architecture into interfaces.
                        </motion.p>
                    </div>

                    {/* Pulsanti */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group flex flex-col gap-2 w-full md:w-fit"
                    >
                        <div className="group-hover:border-accent transition-colors duration-300" />
                        
                        <div className="flex flex-wrap gap-4 md:gap-6">
                            <Link to="/works" className="flex items-center gap-4 group/btn">
                                <div className="px-8 md:px-10 py-4 md:py-5 bg-blue text-white rounded-full flex items-center gap-3 transition-all group-hover/btn:bg-accent shadow-xl shadow-blue/5">
                                    <span className="font-bold tracking-tight uppercase text-xs md:text-sm">
                                        View projects
                                    </span>
                                    <ArrowUpRight size={18} weight="bold" />
                                </div>
                            </Link>

                            <Link to="/contact" className="flex items-center gap-4 group/btn">
                                <div className="px-8 md:px-10 py-4 md:py-5 bg-transparent border border-blue/20 text-blue rounded-full flex items-center gap-3 transition-all hover:bg-blue/5">
                                    <span className="font-bold tracking-tight uppercase text-xs md:text-sm">
                                        Contact me
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}