import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll } from 'framer-motion';
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
  const { scrollYProgress } = useScroll();

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

  // Link desktop: sottolineatura che scorre da sinistra
  const desktopLink = (active) =>
    cn(
      "relative py-1 text-[15px] transition-colors duration-200 hover:text-[#EC3814] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-[#EC3814] after:transition-transform after:duration-300 after:content-['']",
      active
        ? 'text-[#364b9b] after:scale-x-100'
        : 'text-[#364b9b]/85 after:scale-x-0 hover:after:scale-x-100 motion-reduce:after:transition-none'
    );
  const mobileLink = (active) =>
    cn('text-5xl font-semibold transition-colors hover:text-[#EC3814]', active ? 'text-[#EC3814]' : 'text-[#364b9b]');
  const numClass = 'mr-4 align-top text-sm font-medium text-[#364b9b]/80';

  // Entrata a cascata delle voci del menu mobile
  const mobileItem = (i) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] },
  });

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

      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 transition-colors duration-300',
          scrolled && !isOpen ? 'bg-white/90 backdrop-blur-md border-b border-[#364b9b]/10' : 'bg-transparent'
        )}
      />

      {/* Barra di avanzamento della lettura */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className={cn(
          'absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[#EC3814] transition-opacity duration-300',
          scrolled && !isOpen && !reduce ? 'opacity-100' : 'opacity-0'
        )}
      />

      <nav aria-label="Main" className="relative z-10 flex items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" onClick={close} aria-label={`${NAME}, home`} className="group relative flex h-8 w-28 shrink-0 items-center rounded-sm">
          {/* Maschera Blu (#364b9b) di base */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#364b9b] opacity-100 transition-opacity duration-300 group-hover:opacity-0"
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
          {/* Maschera Arancione/Rossa (#EC3814) all'hover */}
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
          <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} transition={{ duration: reduce ? 0 : 0.2 }} className="block h-[2px] w-6 bg-[#364b9b]" />
          <motion.span animate={{ opacity: isOpen ? 0 : 1 }} transition={{ duration: reduce ? 0 : 0.2 }} className="block h-[2px] w-6 bg-[#364b9b]" />
          <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} transition={{ duration: reduce ? 0 : 0.2 }} className="block h-[2px] w-6 bg-[#364b9b]" />
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
            className="fixed inset-0 z-0 bg-white px-6 pt-28 md:hidden"
          >
            <ul className="flex flex-col gap-6 border-t border-[#364b9b]/15 pt-8">
              <motion.li {...mobileItem(0)}>
                <a href="#work" onClick={goWork} className={mobileLink(false)}>
                  <span className={numClass}>01</span>Work
                </a>
              </motion.li>
              {pages.map(({ to, label }, i) => (
                <motion.li key={to} {...mobileItem(i + 1)}>
                  <Link to={to} onClick={close} aria-current={pathname === to ? 'page' : undefined} className={mobileLink(pathname === to)}>
                    <span className={numClass}>{String(i + 2).padStart(2, '0')}</span>
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}