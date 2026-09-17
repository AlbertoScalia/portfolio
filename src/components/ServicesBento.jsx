import { motion } from 'framer-motion';
import { BookOpen, RocketLaunch, CursorClick } from '@phosphor-icons/react';

export default function ServicesBento() {
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
        <section id="filosofia" className="relative py-12 md:py-24 px-6 lg:px-12 w-full max-w-7xl mx-auto text-white">
            {/* Header centrato */}
            <header className="mb-20 text-center max-w-7xl mx-auto flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-6 text-center text-white"
                >
                    "Design is listening <br />
                    <span className="font-serif font-normal text-white">made visible"</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-xl font-sans max-w-2xl leading-relaxed text-white/70 text-center"
                >
                    Or, I translate your &ldquo;I'm not sure what I want, but I'll know it when I see it&rdquo; into something that won't make graphic designers cry.
                </motion.p>
            </header>

            {/* Servizi Incolonnati uno sotto l'altro */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-12 w-full"
            >
                {services.map((service, idx) => (
                    <motion.div key={idx} variants={itemFade} className="group flex flex-col text-left">
                        <div className="w-full border-t border-white/20 group-hover:border-white transition-colors duration-500 mb-8" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                            <div className="md:col-span-1">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <service.icon size={24} weight="duotone" className="text-white" />
                                </div>
                            </div>
                            
                            <div className="md:col-span-4">
                                <h3 className="text-3xl font-serif font-normal tracking-tight text-white">
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
        </section>
    );
}