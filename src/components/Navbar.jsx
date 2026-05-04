import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => location.pathname === path;
    const closeMenu = () => setIsOpen(false);

    // Reset dello stato quando si ridimensiona la finestra oltre il breakpoint mobile
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-[9999] flex justify-center px-4 pointer-events-none">
            <motion.nav
                layout
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                    mass: 1
                }}
                className={cn(
                    'pointer-events-auto border border-zinc-200/60 flex flex-col items-center bg-white shadow-xl overflow-hidden',
                    isOpen
                        ? 'w-full max-w-[320px] rounded-[2.5rem] p-6 shadow-blue/10'
                        : 'rounded-full px-6 py-2 shadow-blue/5 bg-white/80 backdrop-blur-xl'
                )}
            >
                <motion.div layout="position" className="flex items-center justify-between w-full gap-8 h-10">
                    <Link to="/" onClick={closeMenu} className="text-blue font-bold text-lg tracking-tighter whitespace-nowrap shrink-0">
                        alberto scalia
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest shrink-0">
                        <Link to="/works" className={cn("transition-colors", isActive('/works') ? "text-blue" : "text-zinc-400 hover:text-blue")}>Works</Link>
                        <Link to="/bio" className={cn("transition-colors", isActive('/bio') ? "text-blue" : "text-zinc-400 hover:text-blue")}>Bio</Link>
                        <Link to="/contact" className={cn("transition-colors", isActive('/contact') ? "text-blue" : "text-zinc-400 hover:text-blue")}>Contact</Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none shrink-0"
                    >
                        <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-[2px] bg-blue rounded-full" />
                        <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-[2px] bg-blue rounded-full" />
                        <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-[2px] bg-blue rounded-full" />
                    </button>
                </motion.div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden flex flex-col w-full items-center text-center overflow-hidden"
                        >
                            <div className="flex flex-col gap-6 pt-10 pb-6">
                                <Link to="/works" onClick={closeMenu} className={cn("text-xl font-bold tracking-tight", isActive('/works') ? "text-blue" : "text-zinc-400")}>Works</Link>
                                <Link to="/bio" onClick={closeMenu} className={cn("text-xl font-bold tracking-tight", isActive('/bio') ? "text-blue" : "text-zinc-400")}>Bio</Link>
                                <Link to="/contact" onClick={closeMenu} className={cn("text-xl font-bold tracking-tight", isActive('/contact') ? "text-blue" : "text-zinc-400")}>Contact</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}