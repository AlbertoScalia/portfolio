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
    // La duplicazione è necessaria per il loop infinito, ma ottimizziamo il rendering dei figli
    const marqueeItems = [...clients, ...clients];

    return (
        <section className="py-12 overflow-hidden"> 
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
                <h2 className="text-sm font-sans font-bold tracking-widest uppercase text-zinc-400 text-center">
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
                        <div key={idx} className="flex-shrink-0 w-32 md:w-48 opacity-60 hover:opacity-100 transition-opacity duration-500">
                            <img
                                src={client.logo}
                                alt={client.name}
                                // Ottimizzazione: dimensioni esplicite per evitare Layout Shift
                                width="192"
                                height="80"
                                // Ottimizzazione: caricamento pigro e decodifica asincrona
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-contain pointer-events-none grayscale brightness-50 contrast-125"
                                // Ottimizzazione: filtro applicato tramite CSS standard, limitando i calcoli GPU
                                style={{ 
                                    filter: 'brightness(0) saturate(100%) invert(8%) sepia(21%) saturate(542%) hue-rotate(176deg) brightness(94%) contrast(92%)',
                                    backfaceVisibility: 'hidden',
                                    transform: 'translateZ(0)' 
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 text-center">
                <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter mb-6 text-blue">
                    Do you have a <span className="text-accent">project</span> in mind?
                </h2>
                <p className="text-zinc-500 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                    Let's talk about it together and turn your idea into reality.
                </p>
                <a
                    href="mailto:albscalia@gmail.com"
                    className="inline-flex items-center justify-center px-8 py-4 font-sans font-bold rounded-full bg-blue text-white hover:bg-zinc-800 transition-all shadow-xl shadow-black/5">
                    Let's start the conversation
                </a>
            </div>
        </section >
    );
}