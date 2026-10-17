import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';

const NAME = 'Alberto Scalia';
const LOGO = `${import.meta.env.BASE_URL}assets/images/Logo_nav.webp`;

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  const close = useCallback(() => setIsOpen(false), []);

  const goWork = (e) => {
    e.preventDefault();
    close();
    if (pathname === '/') {
      document.getElementById('work')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: 'work' } });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(close, [pathname, close]);

  // Menu mobile aperto: Esc chiude, scroll di sfondo bloccato, chiude se si passa a desktop
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && close();
    const onResize = () => window.innerWidth >= 768 && close();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen, close]);

  const desktopLink = (active) =>
    cn(
      'text-[15px] transition-colors duration-200 hover:text-[#EC3814]',
      active ? 'text-white underline decoration-[#EC3814] decoration-2 underline-offset-8' : 'text-white/75'
    );
  const mobileLink = (active) =>
    cn('font-display text-5xl transition-colors hover:text-[#EC3814]', active ? 'text-[#EC3814]' : 'text-white');

  const pages = [
    { to: '/bio', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      {/* Sfondo separato: backdrop-filter sul contenitore romperebbe l'overlay fixed del menu */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 transition-colors duration-300',
          scrolled && !isOpen ? 'bg-black/60 backdrop-blur-xl' : 'bg-transparent'
        )}
      />

      <nav aria-label="Main" className="relative z-10 flex items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" onClick={close} aria-label={`${NAME}, home`} className="group relative flex h-8 shrink-0 items-center rounded-sm">
          <img src={LOGO} alt="" className="block h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-0" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#EC3814] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              maskImage: `url(${LOGO})`,
              WebkitMaskImage: `url(${LOGO})`,
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'left center',
              WebkitMaskPosition: 'left center',
            }}
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <a href="#work" onClick={goWork} className={desktopLink(false)}>
              Work
            </a>
          </li>
          {pages.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} aria-current={pathname === to ? 'page' : undefined} className={desktopLink(pathname === to)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex flex-col gap-1.5 rounded-md p-3 md:hidden"
        >
          <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} transition={{ duration: reduce ? 0 : 0.2 }} className="block h-[2px] w-6 bg-white" />
          <motion.span animate={{ opacity: isOpen ? 0 : 1 }} transition={{ duration: reduce ? 0 : 0.2 }} className="block h-[2px] w-6 bg-white" />
          <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} transition={{ duration: reduce ? 0 : 0.2 }} className="block h-[2px] w-6 bg-white" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="fixed inset-0 z-0 bg-black px-6 pt-28 md:hidden"
          >
            <ul className="flex flex-col gap-6">
              <li>
                <a href="#work" onClick={goWork} className={mobileLink(false)}>
                  Work
                </a>
              </li>
              {pages.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} onClick={close} aria-current={pathname === to ? 'page' : undefined} className={mobileLink(pathname === to)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}