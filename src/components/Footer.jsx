import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BehanceLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Footer() {
    return (
        <footer className="relative bg-white pt-24 pb-12 rounded-t-[4rem] mt-24 border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-12">
                <div className="max-w-sm">
                    <h3 className="font-sans font-bold text-2xl tracking-tighter mb-4 text-blue">alberto scalia</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Art Director | Graphic & UX/UI Designer
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-blue text-sm font-bold mb-6 tracking-wide uppercase">Explore</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/" className="text-zinc-400 hover:text-blue transition-colors text-sm">Home</Link></li>
                            <li><Link to="/works" className="text-zinc-400 hover:text-blue transition-colors text-sm">Works</Link></li>
                            <li><Link to="/bio" className="text-zinc-400 hover:text-blue transition-colors text-sm">Bio</Link></li>
                            <li><Link to="/contact" className="text-zinc-400 hover:text-blue transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-blue text-sm font-bold mb-6 tracking-wide uppercase">Social</h4>
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
                                    className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-blue transition-all duration-300"
                                >
                                    <social.icon size={20} weight="fill" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 font-mono">
                <p>&copy; {new Date().getFullYear()} Alberto Scalia. All rights reserved.</p>
            </div>
        </footer>
    );
}