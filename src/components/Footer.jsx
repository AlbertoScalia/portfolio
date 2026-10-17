import { motion, useReducedMotion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BehanceLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

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
  const link = 'font-medium underline-offset-4 hover:underline';

  const goWork = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      document.getElementById('work')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: 'work' } });
    }
  };

  // Testo nero pieno sull'arancio: contrasto ~5:1 (il bianco era ~4.1:1, sotto AA)
  return (
    <footer className="on-brand bg-[#EC3814] px-6 pb-10 pt-20 text-black lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/Logo_footer.webp`}
              alt={`${NAME}, ${ROLE}`}
              className="mb-4 h-12 w-auto object-contain brightness-0"
            />
            <p className="text-base font-medium">{ROLE}</p>
            {EMAIL && (
              <a href={`mailto:${EMAIL}`} className="mt-3 inline-block underline underline-offset-4">
                {EMAIL}
              </a>
            )}
          </div>

          <div className="flex gap-16">
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-3 text-base">
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
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black transition-colors duration-300 hover:bg-black hover:text-white"
                  >
                    <Icon size={18} weight="bold" aria-hidden="true" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-black/30 pt-8 text-sm">
          &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}