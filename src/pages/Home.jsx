import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroParallax from '../components/HeroParallax';
import ClientsMarquee from '../components/ClientsMarquee';

export default function Home() {
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
      <ClientsMarquee />
    </main>
  );
}