import { useEffect } from 'react';

const setAttr = (selector, attr, value) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

// Titolo, descrizione e URL della pagina aggiornati a ogni cambio di rotta:
// in una Single Page App il <head> di index.html è uno solo, quindi va riscritto per ogni pagina.
// Con { noindex: true } (pagina 404) chiede ai motori di ricerca di non indicizzarla.
export default function usePageTitle(title, description, { noindex = false } = {}) {
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

    if (noindex) {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'noindex';
      document.head.appendChild(robots);
      return () => robots.remove();
    }
  }, [title, description, noindex]);
}
