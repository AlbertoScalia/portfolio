import { motion, useReducedMotion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, BehanceLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { GRAIN } from '../utils/grain';
import Magnetic from './Magnetic';

const NAME = 'Alberto Scalia';
const ROLE = 'Visual & Interface Designer';
const EMAIL = ''; // inserisci la tua email: se vuota non viene mostrata

const socials = [
  { name: 'Behance profile', icon: BehanceLogo, href: 'https://www.behance.net/albescalia' },
  { name: 'GitHub profile', icon: GithubLogo, href: 'https://github.com/AlbertoScalia' },
  { name: 'LinkedIn profile', icon: LinkedinLogo, href: 'https://www.linkedin.com/in/alberto-scalia/' },
];

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const link = 'font-medium underline-offset-4 hover:underline text-white';

  const goWork = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      document.getElementById('work')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: 'work' } });
    }
  };

  // Torna in cima e sposta anche il focus, così chi usa la tastiera non resta in fondo alla pagina
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    const main = document.getElementById('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
    }
  };

  return (
    <footer className="on-brand relative isolate overflow-hidden bg-[#C72E0E] px-6 pb-10 pt-20 text-white lg:px-12">
      {/* Grana e cerchio decorativo: stesso linguaggio della hero */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[10%] -top-[45%] aspect-square w-[48%] rounded-full border border-white/25" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/Logo_footer.webp`}
              alt={`${NAME}, ${ROLE}`}
              className="mb-4 h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="text-base font-medium text-white">{ROLE}</p>
            {EMAIL && (
              <a href={`mailto:${EMAIL}`} className="mt-3 inline-block underline underline-offset-4 text-white">
                {EMAIL}
              </a>
            )}
          </div>

          <div className="flex gap-16">
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-3 text-base text-white">
                <li><Link to="/" className={link}>Home</Link></li>
                <li><a href="#work" onClick={goWork} className={link}>Work</a></li>
                <li><Link to="/bio" className={link}>About</Link></li>
                <li><Link to="/contact" className={link}>Contact</Link></li>
              </ul>
            </nav>
            <ul className="flex gap-3 self-start">
              {socials.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  <motion.a
                    whileHover={reduce ? undefined : { y: -2 }}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} (opens in a new tab)`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors duration-300 hover:bg-white hover:text-[#C72E0E]"
                  >
                    <Icon size={18} weight="bold" aria-hidden="true" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 border-t border-white/30 pt-8">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
          </p>
          <Magnetic>
            <button
              type="button"
              onClick={toTop}
              aria-label="Back to top"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white text-white transition-colors duration-300 hover:bg-white hover:text-[#C72E0E]"
            >
              <ArrowUp size={18} weight="bold" aria-hidden="true" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}