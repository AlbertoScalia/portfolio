import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

const clients = [
    { name: "Apogeo Editore", logo: `${import.meta.env.BASE_URL}assets/images/Logo1.webp` },
    { name: "LetteraVentidue", logo: `${import.meta.env.BASE_URL}assets/images/Logo2.webp` },
    { name: "Ricca Editore", logo: `${import.meta.env.BASE_URL}assets/images/Logo3.webp` },
    { name: "Il Pensiero Scientifico", logo: `${import.meta.env.BASE_URL}assets/images/Logo4.webp` },
    { name: "Flaco Edizioni", logo: `${import.meta.env.BASE_URL}assets/images/Logo5.webp` },
    { name: "Editori Riuniti", logo: `${import.meta.env.BASE_URL}assets/images/Logo6.webp` },
    { name: "Scuola del Libro", logo: `${import.meta.env.BASE_URL}assets/images/Logo7.webp` },
    { name: "Conservatorio Vicenza", logo: `${import.meta.env.BASE_URL}assets/images/Logo8.webp` },
    { name: "Life Electronics", logo: `${import.meta.env.BASE_URL}assets/images/Logo9.webp` },
    { name: "Compagnia Aliberti", logo: `${import.meta.env.BASE_URL}assets/images/Logo10.webp` },
    { name: "lay0ut magazine", logo: `${import.meta.env.BASE_URL}assets/images/Logo12.webp` },
    { name: "Gyada Cosmetics S.r.l.", logo: `${import.meta.env.BASE_URL}assets/images/Logo13.webp` },
];

export default function ClientsMarquee() {
    const marqueeItems = [...clients, ...clients];

    return (
        <section className="py-12 md:py-24 overflow-hidden font-sans text-white">
            <header className="mb-20 text-center px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-6 text-center text-white"
                >
                    Who trusted me <br />
                    <span className="font-serif font-normal text-white">(and survived to tell)</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-xl font-sans max-w-2xl leading-relaxed text-white/70 text-center"
                >
                    Over 12 publishers and brands have trusted me so far — and honestly, their bravery is quite inspiring.
                </motion.p>
            </header>

            <div className="relative w-full overflow-hidden flex border-y border-white/10 py-12">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    className="flex whitespace-nowrap items-center gap-16 md:gap-32 px-8"
                    style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                >
                    {marqueeItems.map((client, idx) => (
                        <div key={idx} className="flex-shrink-0 w-32 md:w-40 opacity-40 hover:opacity-100 transition-opacity duration-500">
                            <img
                                src={client.logo}
                                alt={client.name}
                                width="160"
                                height="60"
                                decoding="async"
                                className="w-full h-auto object-contain pointer-events-none grayscale invert"
                                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 text-center flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-6 text-center text-white"
                >
                    Do you have a <br />
                    <span className="font-serif font-normal text-white">project in mind?</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-xl font-sans max-w-2xl leading-relaxed text-white/70 text-center mb-12"
                >
                    Let's talk about it together and turn your idea into reality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                >
                    <a 
                        href="mailto:albscalia@gmail.com"
                        className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors group/btn"
                    >
                        <span className="font-light tracking-wider uppercase text-sm md:text-base">
                            Let's start the conversation
                        </span>
                        <ArrowUpRight size={20} weight="bold" className="group-hover/btn:rotate-45 transition-transform text-white" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}