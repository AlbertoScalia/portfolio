import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import useMotionPref from '../hooks/useMotionPref';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';
import Cursor from './Cursor';
import RollText from './RollText';

const NAME = 'alberto scalia';

export default function Navbar() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inWork, setInWork] = useState(false);
  const reduce = useMotionPref();
  const { scrollYProgress } = useScroll();
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const prevPath = useRef(pathname);

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

  useEffect(() => {
    if (pathname !== '/') {
      setInWork(false);
      return;
    }
    const section = document.getElementById('work');
    if (!section) return;
    const io = new IntersectionObserver(([entry]) => setInWork(entry.isIntersecting), { rootMargin: '-35% 0px -55% 0px' });
    io.observe(section);
    return () => io.disconnect();
  }, [pathname]);

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

  const desktopLink = (active) =>
    cn(
      "group relative py-1 font-[Inter] text-[21px] font-semibold lowercase text-[#000000] transition-colors duration-200 hover:text-[#D91616] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-[#D91616] after:transition-transform after:duration-300 after:content-['']",
      active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100 motion-reduce:after:transition-none'
    );
  const mobileLink = (active) =>
    cn('text-5xl font-semibold transition-colors hover:text-[#D91616]', active ? 'text-[#D91616]' : 'text-[#000000]');
  const numClass = 'mr-4 align-top text-sm font-medium text-[#000000]/80';

  const mobileItem = (i) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] },
  });

  const navItems = [
    { type: 'work', label: 'projects' },
    { type: 'link', to: '/bio', label: 'about' },
    { type: 'link', to: '/contact', label: 'contact' },
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
            scrolled && !isOpen ? 'bg-white/90 backdrop-blur-md border-b border-[#000000]/10' : 'bg-transparent'
          )}
        />

        <motion.div
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className={cn(
            'absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[#D91616] transition-opacity duration-300',
            scrolled && !isOpen && !reduce ? 'opacity-100' : 'opacity-0'
          )}
        />

        <nav aria-label="Main" className="relative z-10 mx-auto max-w-[1600px] px-6 py-5 lg:px-12">
          <div className="hidden items-center justify-between md:flex">
            <Link
              to="/"
              onClick={close}
              aria-label={`${NAME}, home`}
              className="group relative flex items-center rounded-sm font-[Inter] text-[21px] font-bold lowercase text-[#D91616]"
            >
              {NAME.toLowerCase()}
            </Link>

            {navItems.map((item) =>
              item.type === 'work' ? (
                <a
                  key={item.label}
                  href="#work"
                  onClick={goWork}
                  aria-current={inWork ? 'location' : undefined}
                  className={desktopLink(inWork)}
                >
                  <RollText>{item.label}</RollText>
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={pathname === item.to ? 'page' : undefined}
                  className={desktopLink(pathname === item.to)}
                >
                  <RollText>{item.label}</RollText>
                </Link>
              )
            )}
          </div>

          <div className="flex items-center justify-between md:hidden">
            <Link
              to="/"
              onClick={close}
              aria-label={`${NAME}, home`}
              className="group relative flex items-center rounded-sm font-[Inter] text-[21px] font-bold lowercase text-[#D91616]"
            >
              {NAME.toLowerCase()}
            </Link>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex flex-col gap-1.5 rounded-md p-3"
            >
              <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} transition={{ duration: reduce ? 0 : 0.2 }} className="block h-[2px] w-6 bg-[#000000]" />
              <motion.span animate={{ opacity: isOpen ? 0 : 1 }} transition={{ duration: reduce ? 0 : 0.2 }} className="block h-[2px] w-6 bg-[#000000]" />
              <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} transition={{ duration: reduce ? 0 : 0.2 }} className="block h-[2px] w-6 bg-[#000000]" />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
              className="fixed inset-0 z-0 overflow-y-auto overscroll-contain bg-white px-6 pt-28 md:hidden"
            >
              <ul className="flex flex-col gap-6 border-t border-[#000000]/15 pt-8">
                {navItems.map((item, i) => (
                  <motion.li key={item.label} {...mobileItem(i)}>
                    {item.type === 'work' ? (
                      <a href="#work" onClick={goWork} className={mobileLink(false)}>
                        <span aria-hidden="true" className={numClass}>{String(i + 1).padStart(2, '0')}</span>
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        onClick={close}
                        aria-current={pathname === item.to ? 'page' : undefined}
                        className={mobileLink(pathname === item.to)}
                      >
                        <span aria-hidden="true" className={numClass}>{String(i + 1).padStart(2, '0')}</span>
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <Cursor />
    </>
  );
}