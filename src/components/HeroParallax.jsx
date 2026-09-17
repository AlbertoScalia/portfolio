import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, RocketLaunch, CursorClick } from '@phosphor-icons/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToWork = (e) => {
        e.preventDefault();

        const performScroll = () => {
            const element = document.getElementById('workgallery');
            if (element) {
                const yOffset = -60;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };

        if (location.pathname === '/') {
            performScroll();
        } else {
            navigate('/');
            setTimeout(performScroll, 200);
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemFade = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { type: 'spring', stiffness: 100, damping: 20 } 
        }
    };

    const services = [
        {
            title: "Visual Strategy & Direction",
            description: "I design editorial systems — magazines, book series, and cultural projects — where visual consistency and strategic clarity are the same thing.",
            icon: BookOpen
        },
        {
            title: "Brand Identity & Growth",
            description: "I build scalable visual identities grounded in research and built to last — coherent across packaging, print, digital, and whatever comes next.",
            icon: RocketLaunch
        },
        {
            title: "User Interface Design",
            description: "I design interfaces where visual hierarchy does the heavy lifting — reducing friction, guiding attention, and making the next action feel obvious.",
            icon: CursorClick
        }
    ];

    return (
        <section className="relative w-full pt-32 px-6 lg:px-12 text-white font-sans">
            {/* PARTE HERO */}
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="mb-4"
                >
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white mb-8 max-w-5xl"
                >
                    Editorial Precision, <br />
                    <span className="font-serif font-normal text-[#EC3814]">Digital Performance</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl leading-relaxed max-w-2xl text-white/70 text-center"
                >
                    I'm Alberto, a versatile UI designer with a solid background in high-end Editorial Design — here is what I do:
                </motion.p>
            </div>

            {/* PARTE SERVIZI */}
            <div id="filosofia" className="w-full max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col gap-12 w-full mb-20"
                >
                    {services.map((service, idx) => (
                        <motion.div key={idx} variants={itemFade} className="group flex flex-col text-left w-full">
                            <div className="w-full border-t border-white/20 group-hover:border-[#EC3814] transition-colors duration-300 mb-8" />
                            
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start w-full">
                                <div className="md:col-span-1">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#EC3814]/10 group-hover:border-[#EC3814]/30 transition-colors">
                                        <service.icon size={24} weight="duotone" className="text-white group-hover:text-[#EC3814] transition-colors" />
                                    </div>
                                </div>
                                
                                <div className="md:col-span-4">
                                    <h3 className="text-3xl font-serif font-normal tracking-tight text-white group-hover:text-[#EC3814] transition-colors">
                                        {service.title}
                                    </h3>
                                </div>
                                
                                <div className="md:col-span-7">
                                    <p className="font-sans text-base leading-relaxed text-white/70">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}