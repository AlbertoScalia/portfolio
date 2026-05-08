import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

const clients = [
    { name: "Apogeo Editore", logo: "/portfolio/assets/images/Logo1.webp" },
    { name: "LetteraVentidue", logo: "/portfolio/assets/images/Logo2.webp" },
    { name: "Ricca Editore", logo: "/portfolio/assets/images/Logo3.webp" },
    { name: "Il Pensiero Scientifico", logo: "/portfolio/assets/images/Logo4.webp" },
    { name: "Flaco Edizioni", logo: "/portfolio/assets/images/Logo5.webp" },
    { name: "Editori Riuniti", logo: "/portfolio/assets/images/Logo6.webp" },
    { name: "Scuola del Libro", logo: "/portfolio/assets/images/Logo7.webp" },
    { name: "Conservatorio Vicenza", logo: "/portfolio/assets/images/Logo8.webp" },
    { name: "Life Electronics", logo: "/portfolio/assets/images/Logo9.webp" },
    { name: "Compagnia Aliberti", logo: "/portfolio/assets/images/Logo10.webp" },
    { name: "lay0ut magazine", logo: "/portfolio/assets/images/Logo12.webp" },
];

export default function ClientsMarquee() {
    const marqueeItems = [...clients, ...clients];

    return (
        <section className="py-24 overflow-hidden font-sans">
            {/* Header Marquee */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-left">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance text-blue">
                            Who <span className="text-accent">trusted</span> me:
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl text-zinc-500 leading-relaxed max-w-prose">
                             Over 12 publishers and brands have trusted me so far—and honestly, their bravery is quite inspiring.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Marquee Loop */}
            <div className="relative w-full overflow-hidden flex border-y border-blue/5 py-12 bg-zinc-50/30">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    className="flex whitespace-nowrap items-center gap-16 md:gap-32 px-8"
                >
                    {marqueeItems.map((client, idx) => (
                        <div key={idx} className="flex-shrink-0 w-32 md:w-40 opacity-40 hover:opacity-100 transition-opacity duration-500">
                            <img
                                src={client.logo}
                                alt={client.name}
                                width="160"
                                height="60"
                                decoding="async"
                                className="w-full h-auto object-contain pointer-events-none grayscale"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Call to Action */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 text-left">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance text-blue">
                            Do you have a <br />
                            <span className="text-accent">project</span> in mind?
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl text-zinc-500 leading-relaxed max-w-prose">
                            Let's talk about it together and turn your idea into reality.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group flex flex-col gap-8"
                >
                    <div className="w-full border-t border-blue group-hover:border-accent transition-colors duration-300" />
                    
                    <a 
                        href="mailto:albscalia@gmail.com"
                        className="flex items-center gap-4 group/btn"
                    >
                        <div className="px-10 py-5 bg-blue text-white rounded-full flex items-center gap-3 transition-all group-hover/btn:bg-accent shadow-xl shadow-blue/5">
                            <span className="font-bold tracking-tight uppercase text-sm">
                                Let's start the conversation
                            </span>
                            <ArrowUpRight size={20} weight="bold" />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}