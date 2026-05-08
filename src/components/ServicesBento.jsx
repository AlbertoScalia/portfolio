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
            title: "Art Direction & Strategy",
            description: "I design editorial systems — magazines, book series, brand identities — where visual consistency and strategic clarity are the same thing.",
            icon: BookOpen
        },
        {
            title: "Brand Identity & Growth",
            description: "I build visual identities grounded in research and built to last — coherent across print, digital, and whatever comes next.",
            icon: RocketLaunch
        },
        {
            title: "UX/UI & Conversion",
            description: "I design interfaces where visual hierarchy does the heavy lifting — reducing friction, guiding attention, and making the next action feel obvious.",
            icon: CursorClick
        }
    ];

    return (
        <section id="filosofia" className="relative py-24 px-6 lg:px-12 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-balance text-blue">
                        &ldquo;Design is listening <br />
                        <span className="text-accent">made visible</span>&rdquo;
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xl text-zinc-500 leading-relaxed font-sans max-w-prose">
                        Or, I translate your &rdquo;I'm not sure what I want, but I'll know it when I see it&rdquo; into something that won't make graphic designers cry.
                    </p>
                </motion.div>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
                {services.map((service, idx) => (
                    <motion.div key={idx} variants={itemFade} className="group flex flex-col">
                        {/* Filetto superiore a tutta larghezza */}
                        <div className="w-full border-t border-blue/20 group-hover:border-accent transition-colors duration-500 mb-8" />
                        
                        <div className="flex flex-col h-full">
                            <div className="w-10 h-10 rounded-lg bg-blue/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                <service.icon size={22} weight="duotone" className="text-blue group-hover:text-accent transition-colors" />
                            </div>
                            
                            <h3 className="text-lg font-bold font-sans tracking-tight mb-3 text-blue group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            
                            <p className="text-zinc-500 font-sans leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}