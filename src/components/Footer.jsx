import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BehanceLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Footer() {
    return (
        /* Rimossa arrotondatura rounded-t-[4rem] e impostata a rounded-none */
        <footer className="relative z-10 bg-blue pt-16 pb-12 rounded-none">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-12 text-left">
                <div className="max-w-sm">
                    {/* Logo con dimensioni ulteriormente aumentate (h-14 invece di h-12) */}
                    <img 
                        src={`${import.meta.env.BASE_URL}assets/images/Logo_footer.webp`} 
                        alt="Logo" 
                        className="h-14 w-auto object-contain mb-4"
                    />
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                        Art Director | Graphic & UI Designer
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-12 text-left">
                    <div>
                        <h4 className="text-white/40 text-[10px] font-black mb-6 tracking-widest uppercase">Explore</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/" className="text-white/70 hover:text-accent transition-colors text-sm font-sans">Home</Link></li>
                            <li><Link to="/works" className="text-white/70 hover:text-accent transition-colors text-sm font-sans">Works</Link></li>
                            <li><Link to="/bio" className="text-white/70 hover:text-accent transition-colors text-sm font-sans">Bio</Link></li>
                            <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors text-sm font-sans">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/40 text-[10px] font-black mb-6 tracking-widest uppercase">Social</h4>
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
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-blue hover:bg-white transition-all duration-300"
                                >
                                    <social.icon size={20} weight="fill" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Filetto inferiore a spessore pieno coerente con il resto del sito */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/30 font-mono tracking-widest uppercase">
                <p>&copy; {new Date().getFullYear()} Alberto Scalia. All rights reserved.</p>
            </div>
        </footer>
    );
}