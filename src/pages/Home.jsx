import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroParallax from '../components/HeroParallax';
import Tape from '../components/Tape';
import Manifesto from '../components/Manifesto';
import Work from '../components/Work';
import Stats from '../components/Stats';
import ClientsMarquee from '../components/ClientsMarquee';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle(
    'Alberto Scalia — UI & Visual Designer',
    'Portfolio of Alberto Scalia, a UI and Visual Designer with a background in high-end editorial design. Identities, magazines, packaging and interfaces that stay consistent from print to screen.'
  );
  const { state, pathname } = useLocation();
  const navigate = useNavigate();

  // Arrivo da un'altra pagina cliccando "Work": scrolla dopo il primo render
  useEffect(() => {
    if (!state?.scrollTo) return;
    const raf = requestAnimationFrame(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      navigate(pathname, { replace: true, state: null });
    });
    return () => cancelAnimationFrame(raf);
  }, [state, pathname, navigate]);

  return (
    <main id="main">
      <HeroParallax />
      <Tape />
      <Manifesto />
      <Work />
      <Stats />
      <ClientsMarquee />
    </main>
  );
}