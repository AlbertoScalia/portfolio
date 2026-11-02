import { useEffect } from 'react';

const setAttr = (selector, attr, value) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

// Titolo, descrizione e URL della pagina aggiornati a ogni cambio di rotta:
// in una Single Page App il <head> di index.html è uno solo, quindi va riscritto per ogni pagina.
// Opzioni: { noindex: true } per la pagina 404; { jsonLd: {...} } per i dati strutturati della pagina.
export default function usePageTitle(title, description, { noindex = false, jsonLd = null } = {}) {
  const ld = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    document.title = title;
    setAttr('meta[property="og:title"]', 'content', title);
    setAttr('meta[name="twitter:title"]', 'content', title);

    if (description) {
      setAttr('meta[name="description"]', 'content', description);
      setAttr('meta[property="og:description"]', 'content', description);
      setAttr('meta[name="twitter:description"]', 'content', description);
    }

    const url = `${window.location.origin}${window.location.pathname}`;
    setAttr('link[rel="canonical"]', 'href', url);
    setAttr('meta[property="og:url"]', 'content', url);

    const added = [];
    if (noindex) {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'noindex';
      document.head.appendChild(robots);
      added.push(robots);
    }
    if (ld) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = ld;
      document.head.appendChild(script);
      added.push(script);
    }
    return () => added.forEach((el) => el.remove());
  }, [title, description, noindex, ld]);
}
