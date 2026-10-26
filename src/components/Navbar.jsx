import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';
import { BehanceLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import Cursor from './Cursor';
import LocalTime from './LocalTime';
import { EMAIL, SOCIALS } from '../utils/site';
import RollText from './RollText';

const NAME = 'Alberto Scalia';
const SOCIAL_ICONS = { LinkedIn: LinkedinLogo, Behance: BehanceLogo, GitHub: GithubLogo };
const LOGO = `${import.meta.env.BASE_URL}assets/images/Logo_nav.webp`;

export default function Navbar() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useMotionPref();
  const { scrollYProgress } = useScroll();
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const prevPath = useRef(pathname);

  // Transizione tra le pagine: ad ogni cambio rotta due tende (arancione e blu) salgono e scoprono la nuova pagina.
  // Lo stato viene aggiornato durante il render, così la tenda compare nello stesso istante della nuova pagina.
  const [lastPath, setLastPath] = useState(pathname);
  const [curtainKey, setCurtainKey] = useState(0);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setCurtainKey((k) => k + 1);
  }

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

  // Cambio pagina: torna in cima (tranne quando si arriva da "Work") e porta il focus sul contenuto,
  // così tastiera e screen reader ripartono dalla nuova pagina
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    if (!state?.scrollTo) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const main = document.getElementById('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
    }
  }, [pathname, state]);

  // Menu mobile aperto: focus dentro il menu, contenuto sotto non raggiungibile, Esc chiude e restituisce il focus
  useEffect(() => {
    if (!isOpen) return;
    const behind = Array.from(document.querySelectorAll('main, footer'));
    behind.forEach((el) => el.setAttribute('inert', ''));
    document.body.style.overflow = 'hidden';
    headerRef.current?.querySelector('#mobile-menu a')?.focus();

    const focusables = () =>
      Array.from(headerRef.current?.querySelectorAll('a[href], button:not([disabled])') ?? []).filter(
        (el) => el.getClientRects().length > 0
      );

    const onKey = (e) => {
      if (e.key === 'Escape') {
        close();
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => window.innerWidth >= 768 && close();

    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      behind.forEach((el) => el.removeAttribute('inert'));
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen, close]);

  // Link desktop: sottolineatura che scorre da sinistra
  const desktopLink = (active) =>
    cn(
      "group relative py-1 text-[15px] transition-colors duration-200 hover:text-[#EC3814] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-[#EC3814] after:transition-transform after:duration-300 after:content-['']",
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
    <>
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-[100]">
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
              <RollText>Work</RollText>
            </a>
          </li>
          {pages.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} aria-current={pathname === to ? 'page' : undefined} className={desktopLink(pathname === to)}>
                <RollText>{label}</RollText>
              </Link>
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
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
            className="fixed inset-0 z-0 flex flex-col overflow-y-auto bg-white px-6 pb-10 pt-28 md:hidden"
          >
            <ul className="flex flex-col gap-6 border-t border-[#364b9b]/15 pt-8">
              <motion.li {...mobileItem(0)}>
                <a href="#work" onClick={goWork} className={mobileLink(false)}>
                  <span aria-hidden="true" className={numClass}>01</span>Work
                </a>
              </motion.li>
              {pages.map(({ to, label }, i) => (
                <motion.li key={to} {...mobileItem(i + 1)}>
                  <Link to={to} onClick={close} aria-current={pathname === to ? 'page' : undefined} className={mobileLink(pathname === to)}>
                    <span aria-hidden="true" className={numClass}>{String(i + 2).padStart(2, '0')}</span>
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

    {/* Tende di transizione (decorative, non bloccano i click, assenti con "riduci movimento") */}
    {curtainKey > 0 && !reduce && (
      <div key={curtainKey} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[300]">
        {[
          { color: '#364b9b', delay: 0.1 },
          { color: '#EC3814', delay: 0 },
        ].map(({ color, delay }) => (
          <motion.div
            key={color}
            initial={{ opacity: 0, y: '0%' }}
            animate={{ opacity: [0, 1, 1], y: ['0%', '0%', '-115%'] }}
            transition={{ duration: 0.85, delay, times: [0, 0.15, 1], ease: [0.76, 0, 0.24, 1] }}
            style={{ backgroundColor: color, borderRadius: '0 0 50% 50% / 0 0 12% 12%' }}
            className="absolute inset-0"
          />
        ))}
      </div>
    )}

    <Cursor />
    </>
  );
}