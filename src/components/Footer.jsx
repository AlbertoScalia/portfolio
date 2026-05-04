import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BehanceLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Footer() {
    return (
        /* 1. Cambiato bg-white in bg-blue e rimosso il bordo grigio */
        <footer className="relative z-10 bg-blue pt-16 pb-12 rounded-t-[4rem]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-12">
                <div className="max-w-sm">
                    {/* 2. Testo ora bianco (o light) */}
                    <h3 className="font-sans font-bold text-2xl tracking-tighter mb-4 text-white">alberto scalia</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                        Art Director | Graphic & UX/UI Designer
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    <div>
                        {/* 3. Titoli sezioni in bianco con opacità */}
                        <h4 className="text-white/40 text-sm font-bold mb-6 tracking-wide uppercase">Explore</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/" className="text-white/70 hover:text-accent transition-colors text-sm">Home</Link></li>
                            <li><Link to="/works" className="text-white/70 hover:text-accent transition-colors text-sm">Works</Link></li>
                            <li><Link to="/bio" className="text-white/70 hover:text-accent transition-colors text-sm">Bio</Link></li>
                            <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/40 text-sm font-bold mb-6 tracking-wide uppercase">Social</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: BehanceLogo, href: "https://www.behance.net/albescalia" },
                                { icon: GithubLogo, href: "https://github.com/AlbertoScalia" },
                                { icon: LinkedinLogo, href: "https://www.linkedin.com/in/alberto-scalia/" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -3 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    /* 4. Cerchi social ora scuri con hover accentato */
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-blue hover:bg-white transition-all duration-300"
                                >
                                    <social.icon size={20} weight="fill" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Bordo inferiore e copyright adattati al blu */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 font-mono">
                <p>&copy; {new Date().getFullYear()} Alberto Scalia. All rights reserved.</p>
            </div>
        </footer>
    );
}