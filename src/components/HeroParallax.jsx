import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { Link } from 'react-router-dom';

export default function HeroParallax() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-32 pb-12 px-6 lg:px-12"
        >
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <motion.div
                    style={{ y: textY, opacity }}
                    className="relative z-10 flex flex-col items-start gap-8 order-2 lg:order-1"
                >
                    <div className="flex flex-col">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                            className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.9] text-blue"
                        >
                            Editorial Precision, <br />
                            <span className="text-accent">Digital Performance</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
                        className="max-w-xl text-lg md:text-xl text-zinc-500 leading-relaxed font-sans"
                    >
                        I'm Alberto. I bring editorial art direction into UX/UI and growth design — translating visual hierarchy, typography, and information architecture into interfaces that are as clear as they are effective.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
                        className="flex flex-wrap gap-4 mt-4"
                    >
                        <Link to="/works">
                            <MagneticButton className="bg-accent text-white px-8 py-4 rounded-full font-bold whitespace-nowrap hover:brightness-80">
                                View projects
                            </MagneticButton>
                        </Link>

                        <Link to="/contact">
                            <MagneticButton className="bg-blue text-light hover:bg-blue/80 border border-white/10 transition-all">
                                Contact me
                            </MagneticButton>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
                    style={{ opacity }}
                    className="relative w-full flex justify-center lg:justify-end items-center order-1 lg:order-2"
                >
                    <motion.div
                        style={{ y: imageY }}
                        className="relative w-56 lg:w-80"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images/logo_sito.webp`}
                            alt="Alberto Scalia Logo"
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}