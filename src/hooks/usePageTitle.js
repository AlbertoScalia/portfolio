import { useEffect } from 'react';

// Titolo della pagina aggiornato a ogni cambio di rotta (WCAG 2.4.2)
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
