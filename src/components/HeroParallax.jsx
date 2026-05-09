import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function HeroParallax() {
    return (
        <section
            className="relative min-h-[90dvh] w-full flex flex-col justify-center pt-24 pb-8 px-6 lg:px-12 max-w-7xl mx-auto font-sans"
        >
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
                
                {/* Profile Image Container */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    /* Aggiunto mt-12 per distanziarlo dalla navbar su mobile, rimosso su desktop con lg:mt-0 */
                    className="lg:col-span-4 flex flex-col items-start lg:items-center gap-6 order-1 lg:order-2 mt-12 lg:mt-0"
                >
                    <div className="w-fit flex flex-col items-start lg:items-center gap-4">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images/profile.webp`} 
                            alt="Alberto Scalia"
                            className="w-40 h-40 lg:w-80 lg:h-80 object-contain"
                        />
                        
                        <div className="flex flex-col gap-1 items-start lg:items-center">
                            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] text-blue/50 text-left lg:text-center">
                                                            Alberto Scalia<br />
    Art Director | Graphic & UX/UI Designer
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="lg:col-span-8 text-left z-10 order-2 lg:order-1">
                    <div className="flex flex-col mb-12">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
                            className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] text-blue mb-8"
                        >
                            Editorial Precision, <br />
                            <span className="text-accent">Digital Performance</span>
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl"
                        >
                            I'm Alberto, an unusual and polyhedric UX/UI Designer with a solid background in high-end Art Direction and Editorial Design. Driven by a deep interest in marketing strategy, I bridge the gap between traditional visual excellence and digital innovation, creating intuitive, accessible, and user-centered interfaces.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="group flex flex-col gap-2 w-full md:w-fit"
                    >
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