import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BehanceLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Footer() {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToWork = (e) => {
        e.preventDefault();

        const performScroll = () => {
            const element = document.getElementById('workgallery');
            if (element) {
                const yOffset = -60;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };

        if (location.pathname === '/') {
            performScroll();
        } else {
            navigate('/');
            setTimeout(performScroll, 200);
        }
    };

    return (
        <footer className="w-full bg-transparent text-white pt-20 pb-12 px-6 lg:px-12">
            <div className="w-full border-t border-white/20 pt-16">
                <div className="flex flex-col md:flex-row justify-between gap-12 text-left">
                    
                    {/* Brand / Info */}
                    <div className="max-w-sm flex flex-col items-start">
                        <img 
                            src={`${import.meta.env.BASE_URL}assets/images/Logo_footer.webp`} 
                            alt="Logo" 
                            className="h-12 w-auto object-contain mb-4 filter brightness-0 invert"
                        />
                        <p className="text-white/70 text-sm font-sans leading-relaxed">
                            Visual & Interface Designer
                        </p>
                    </div>

                    {/* Navigation & Social */}
                    <div className="grid grid-cols-2 gap-16 text-left">
                        <div>
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40 mb-6">
                                Navigation
                            </h4>
                            <ul className="flex flex-col gap-3 font-sans text-sm font-light uppercase tracking-wider">
                                <li>
                                    <Link to="/" className="text-white/70 hover:text-white transition-colors">
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <a 
                                        href="#workgallery" 
                                        onClick={scrollToWork} 
                                        className="text-white/70 hover:text-white transition-colors cursor-pointer"
                                    >
                                        WORK
                                    </a>
                                </li>
                                <li>
                                    <Link to="/bio" className="text-white/70 hover:text-white transition-colors">
                                        ABOUT
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40 mb-6">
                                Social
                            </h4>
                            <div className="flex gap-3">
                                {[
                                    { icon: BehanceLogo, href: "https://www.behance.net/albescalia" },
                                    { icon: GithubLogo, href: "https://github.com/AlbertoScalia" },
                                    { icon: LinkedinLogo, href: "https://www.linkedin.com/in/alberto-scalia/" }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        whileHover={{ y: -2 }}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
                                    >
                                        <social.icon size={18} weight="bold" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/40 font-mono tracking-widest uppercase">
                    <p>&copy; {new Date().getFullYear()} Alberto Scalia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}