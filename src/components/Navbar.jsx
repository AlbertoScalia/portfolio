import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center pointer-events-none font-sans">
            <motion.nav
                layout
                className={cn(
                    'pointer-events-auto transition-all duration-500 flex flex-col items-center w-full max-w-7xl px-6 lg:px-12',
                    // Rimosso bg-white o bg-zinc: ora è sempre trasparente per mostrare lo sfondo del sito
                    // Aggiunto un leggero backdrop-blur solo per migliorare la leggibilità dei testi se passano sopra immagini
                    scrolled ? 'backdrop-blur-xl shadow-none' : 'bg-transparent',
                    isOpen && 'h-screen bg-zinc-50' // Solo qui il colore serve per coprire il sito da mobile
                )}
            >
                {/* Filetto Superiore */}
                <div className="w-full border-t border-blue/10 mt-6" />

                <div className="flex items-center justify-between w-full py-4">
                    {/* LOGO A SINISTRA */}
                    <Link to="/" onClick={closeMenu} className="flex items-center h-10 group">
                        <img 
                            src="/portfolio/assets/images/Logo.png" 
                            alt="Logo" 
                            className="h-full w-auto object-contain block"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <span className="hidden font-bold text-blue text-xl tracking-tighter">alberto scalia</span>
                    </Link>

                    {/* MENU DESKTOP A DESTRA */}
                    <div className="hidden md:flex items-center gap-10">
                        {[
                            { name: 'Works', path: '/works' },
                            { name: 'Bio', path: '/bio' },
                            { name: 'Contact', path: '/contact' }
                        ].map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "text-[15px] font-bold tracking-tight transition-all duration-300 relative group/link",
                                    isActive(link.path) ? "text-blue" : "text-zinc-400 hover:text-blue"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300",
                                    isActive(link.path) ? "w-full" : "w-0 group-hover/link:w-full"
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col gap-1.5 p-3 md:hidden focus:outline-none"
                    >
                        <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-[2px] bg-blue" />
                        <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-[2px] bg-blue" />
                        <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-[2px] bg-blue" />
                    </button>
                </div>

                {/* Filetto Inferiore */}
                <div className="w-full border-t border-blue/10" />

                {/* MENU MOBILE CONTENT */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full flex flex-col items-center justify-center flex-1"
                        >
                            <div className="flex flex-col gap-6 text-center">
                                {[
                                    { name: 'Works', path: '/works' },
                                    { name: 'Bio', path: '/bio' },
                                    { name: 'Contact', path: '/contact' }
                                ].map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={closeMenu}
                                        className={cn(
                                            "text-4xl font-bold tracking-tighter transition-colors",
                                            isActive(link.path) ? "text-accent" : "text-blue"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}