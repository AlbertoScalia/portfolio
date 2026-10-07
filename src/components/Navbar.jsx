import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    const isActive = (path) => location.pathname === path;
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToWork = (e) => {
        e.preventDefault();
        closeMenu();

        const performScroll = () => {
            const element = document.getElementById('work');
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
        <div className="fixed top-0 left-0 right-0 z-[9999] w-full pointer-events-none font-sans">
            <motion.nav
                layout={!shouldReduceMotion}
                className={cn(
                    'pointer-events-auto transition-all duration-500 flex flex-col items-center w-full px-6 lg:px-12 text-white',
                    isOpen ? 'h-screen bg-black' : scrolled ? 'backdrop-blur-xl shadow-none bg-black/40' : 'bg-transparent'
                )}
            >
                <div className="flex items-center justify-between w-full py-6 shrink-0">
                    {/* LOGO A SINISTRA */}
                    <Link 
                        to="/" 
                        onClick={closeMenu} 
                        className="flex items-center h-8 group relative shrink-0 focus-visible:outline-2 focus-visible:outline-[#EC3814] rounded-sm"
                        aria-label="Alberto Scalia — Home"
                    >
                        <img 
                            src={`${import.meta.env.BASE_URL}assets/images/Logo_nav.webp`} 
                            alt="Alberto Scalia Logo" 
                            className="h-full w-auto object-contain block transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <div 
                            className="absolute inset-0 bg-[#EC3814] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                maskImage: `url(${import.meta.env.BASE_URL}assets/images/Logo_nav.webp)`,
                                WebkitMaskImage: `url(${import.meta.env.BASE_URL}assets/images/Logo_nav.webp)`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'left center',
                                WebkitMaskPosition: 'left center'
                            }}
                        />
                    </Link>

                    {/* TESTO CENTRATO (SOLO DESKTOP) */}
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                            Alberto Scalia — UI & Visual Designer
                        </span>
                    </div>

                    {/* MENU DESKTOP A DESTRA */}
                    <div className="hidden md:flex items-center gap-8 shrink-0">
                        <a
                            href="#work"
                            onClick={scrollToWork}
                            className="text-sm font-light tracking-wider text-white/70 hover:text-[#EC3814] transition-colors duration-300 uppercase cursor-pointer focus-visible:outline-2 focus-visible:outline-[#EC3814] rounded-sm"
                        >
                            WORK
                        </a>
                        <Link
                            to="/bio"
                            className={cn(
                                "text-sm font-light tracking-wider transition-colors duration-300 uppercase focus-visible:outline-2 focus-visible:outline-[#EC3814] rounded-sm",
                                isActive('/bio') ? "text-[#EC3814]" : "text-white/70 hover:text-[#EC3814]"
                            )}
                        >
                            ABOUT
                        </Link>
                        <Link
                            to="/contact"
                            className={cn(
                                "text-sm font-light tracking-wider transition-colors duration-300 uppercase focus-visible:outline-2 focus-visible:outline-[#EC3814] rounded-sm",
                                isActive('/contact') ? "text-[#EC3814]" : "text-white/70 hover:text-[#EC3814]"
                            )}
                        >
                            CONTACT
                        </Link>
                    </div>

                    {/* MOBILE TOGGLE CON NOMI ACCESSIBILI E FOCUS VISIBILE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        className="flex flex-col gap-1.5 p-3 md:hidden focus-visible:outline-2 focus-visible:outline-[#EC3814] focus-visible:outline-offset-2 rounded-md"
                    >
                        <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-[2px] bg-white" />
                        <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-[2px] bg-white" />
                        <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-[2px] bg-white" />
                    </button>
                </div>

                {/* MENU MOBILE CONTENT */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="w-full flex flex-col items-center justify-start pt-32 flex-1 bg-black"
                        >
                            <div className="flex flex-col gap-8 text-center">
                                <a
                                    href="#work"
                                    onClick={scrollToWork}
                                    className="text-4xl font-light tracking-tight text-white/80 hover:text-[#EC3814] transition-all duration-300 uppercase cursor-pointer focus-visible:outline-2 focus-visible:outline-[#EC3814] rounded-md"
                                >
                                    WORK
                                </a>
                                <Link
                                    to="/bio"
                                    onClick={closeMenu}
                                    className={cn(
                                        "text-4xl font-light tracking-tight transition-all duration-300 uppercase focus-visible:outline-2 focus-visible:outline-[#EC3814] rounded-md", 
                                        isActive('/bio') ? "text-[#EC3814]" : "text-white/80 hover:text-[#EC3814]"
                                    )}
                                >
                                    ABOUT
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className={cn(
                                        "text-4xl font-light tracking-tight transition-all duration-300 uppercase focus-visible:outline-2 focus-visible:outline-[#EC3814] rounded-md", 
                                        isActive('/contact') ? "text-[#EC3814]" : "text-white/80 hover:text-[#EC3814]"
                                    )}
                                >
                                    CONTACT
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}