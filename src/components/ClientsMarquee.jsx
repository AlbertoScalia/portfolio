import { motion } from 'framer-motion';

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
        <section className="py-24 overflow-hidden bg-blue">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
                <h2 className="text-sm font-sans font-bold tracking-widest uppercase text-white/30 text-center">
                    Who trusted me
                </h2>
            </div>

            <div className="relative w-full overflow-hidden flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-8"
                >
                    {marqueeItems.map((client, idx) => (
                        <div key={idx} className="flex-shrink-0 w-32 md:w-48 opacity-40 hover:opacity-100 transition-opacity duration-500">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="w-full h-auto object-contain pointer-events-none"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 text-center">
                <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter mb-6 text-white">
                    Do you have a <span className="text-accent">project</span> in mind?
                </h2>
                <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                    Let's talk about it together and turn your idea into reality.
                </p>
                <a
                    href="mailto:albscalia@gmail.com"
                    className="inline-flex items-center justify-center px-8 py-4 font-sans font-bold rounded-full bg-white text-blue hover:bg-zinc-400 transition-all shadow-xl shadow-black/10">
                    Let's start the conversation
                </a>
            </div>
        </section >
    );
}