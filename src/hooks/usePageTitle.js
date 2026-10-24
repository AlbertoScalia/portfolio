import { useEffect } from 'react';

const setAttr = (selector, attr, value) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

// Titolo, descrizione e URL della pagina aggiornati a ogni cambio di rotta:
// in una Single Page App il <head> di index.html è uno solo, quindi va riscritto per ogni pagina.
export default function usePageTitle(title, description) {
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
  }, [title, description]);
}
