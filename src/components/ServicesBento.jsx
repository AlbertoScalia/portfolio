import { motion } from 'framer-motion';
import { BookOpen, RocketLaunch, CursorClick } from '@phosphor-icons/react';
import LiquidCard from './ui/LiquidCard';

export default function ServicesBento() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemFade = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
    };

    return (
        <section id="filosofia" className="relative py-32 px-6 lg:px-12 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-balance text-blue">
                        &ldquo;Design is listening <br />
                        <span className="text-accent">made visible</span>&rdquo;
                    </h2>
                </div>
                <div>
                    <p className="text-xl text-zinc-500 leading-relaxed font-sans max-w-prose">
                        Or, I translate your &rdquo;I'm not sure what I want, but I'll know it when I see it&rdquo; into something that won't make graphic designers cry. I dig deep to find my clients' values, hoping not to find hidden Comic Sans too.
                    </p>
                </div>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {/* Art Direction */}
                <motion.div variants={itemFade}>
                    <LiquidCard className="p-8 h-full flex flex-col justify-between group shadow-none border border-zinc-200 bg-white rounded-[2rem]">
                        <div className="w-14 h-14 rounded-2xl bg-blue/5 border border-blue/10 flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                            <BookOpen size={28} weight="duotone" className="text-blue group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-sans tracking-tight mb-4 text-blue">Art Direction <br /> & Strategy</h3>
                            <p className="text-zinc-500 font-sans leading-relaxed">
                                I design editorial systems — magazines, book series, brand identities — where visual consistency and strategic clarity are the same thing.
                            </p>
                        </div>
                    </LiquidCard>
                </motion.div>

                {/* Brand Identity */}
                <motion.div variants={itemFade}>
                    <LiquidCard className="p-8 h-full flex flex-col justify-between group shadow-none border border-zinc-200 bg-white rounded-[2rem]">
                        <div className="w-14 h-14 rounded-2xl bg-blue/5 border border-blue/10 flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                            <RocketLaunch size={28} weight="duotone" className="text-blue group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-sans tracking-tight mb-4 text-blue">Brand Identity <br /> & Growth</h3>
                            <p className="text-zinc-500 font-sans leading-relaxed">
                                I build visual identities grounded in research and built to last — coherent across print, digital, and whatever comes next.
                            </p>
                        </div>
                    </LiquidCard>
                </motion.div>

                {/* UX/UI */}
                <motion.div variants={itemFade}>
                    <LiquidCard className="p-8 h-full flex flex-col justify-between group shadow-none border border-zinc-200 bg-white rounded-[2rem]">
                        <div className="w-14 h-14 rounded-2xl bg-blue/5 border border-blue/10 flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                            <CursorClick size={28} weight="duotone" className="text-blue group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-sans tracking-tight mb-4 text-blue">UX/UI <br /> & Conversion</h3>
                            <p className="text-zinc-500 font-sans leading-relaxed">
                                I design interfaces where visual hierarchy does the heavy lifting — reducing friction, guiding attention, and making the next action feel obvious.
                            </p>
                        </div>
                    </LiquidCard>
                </motion.div>
            </motion.div>
        </section>
    );
}