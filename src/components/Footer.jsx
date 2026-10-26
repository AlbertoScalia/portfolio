import useMotionPref, { setMotionOff, useMotionOff } from '../hooks/useMotionPref';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, BehanceLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { GRAIN } from '../utils/grain';
import Magnetic from './Magnetic';
import RollText from './RollText';
import LocalTime from './LocalTime';
import { EMAIL, SOCIALS } from '../utils/site';

const NAME = 'Alberto Scalia';
const ROLE = 'Visual & Interface Designer';

const SOCIAL_ICONS = { LinkedIn: LinkedinLogo, Behance: BehanceLogo, GitHub: GithubLogo };

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const reduce = useMotionPref();
  const motionOff = useMotionOff();
  const link = 'group font-medium text-white';

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
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/Logo_footer.webp`}
              alt={`${NAME}, ${ROLE}`}
              className="mb-4 h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="text-base font-medium text-white">{ROLE}</p>
            <p className="mt-2 text-sm text-white">
              Acireale, Italy · <LocalTime /> local time
            </p>
            {EMAIL && (
              <a href={`mailto:${EMAIL}`} className="mt-3 inline-block underline underline-offset-4 text-white">
                {EMAIL}
              </a>
            )}
          </div>

          <nav aria-labelledby="footer-index" className="md:col-span-3 md:col-start-7">
            <h2 id="footer-index" className="mb-5 border-b border-white/30 pb-3 text-sm font-medium text-white">
              Index
            </h2>
            <ul className="flex flex-col gap-3 text-base text-white">
              <li><Link to="/" className={link}><RollText>Home</RollText></Link></li>
              <li><a href="#work" onClick={goWork} className={link}><RollText>Work</RollText></a></li>
              <li><Link to="/bio" className={link}><RollText>About</RollText></Link></li>
              <li><Link to="/contact" className={link}><RollText>Contact</RollText></Link></li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 id="footer-social" className="mb-5 border-b border-white/30 pb-3 text-sm font-medium text-white">
              Elsewhere
            </h2>
            <ul aria-labelledby="footer-social" className="flex flex-col gap-3 text-base text-white">
              {SOCIALS.map(({ name, href }) => {
                const Icon = SOCIAL_ICONS[name];
                return (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} (opens in a new tab)`}
                    className="group inline-flex items-center gap-3 font-medium text-white"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#C72E0E]">
                      <Icon size={16} weight="bold" aria-hidden="true" />
                    </span>
                    <RollText>{name}</RollText>
                  </a>
                </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/30 pt-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-white">
              &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
            {/* Colophon, come in un libro */}
            <p className="text-sm text-white">Set in Inter. Built with React, Tailwind CSS and Framer Motion.</p>
            {/* Interruttore: spegne cursore, tende, parallasse e animazioni (si somma all'impostazione del sistema) */}
            <button
              type="button"
              aria-pressed={motionOff}
              onClick={() => setMotionOff(!motionOff)}
              className="group inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              <span
                aria-hidden="true"
                className={`relative h-6 w-11 shrink-0 rounded-full border border-white transition-colors duration-300 ${motionOff ? 'bg-white/30' : 'bg-transparent'}`}
              >
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all duration-300 ${motionOff ? 'left-6' : 'left-0.5'}`}
                />
              </span>
              Reduce motion
            </button>
          </div>
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