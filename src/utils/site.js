// Dati di contatto usati in più punti del sito (Contatti, Footer, Bio)
export const EMAIL = 'albscalia@gmail.com';

// Il file va in public/: viene servito come /portfolio/Alberto-Scalia-CV.pdf
export const CV_FILE = 'Alberto-Scalia-CV.pdf';
export const CV_URL = `${import.meta.env.BASE_URL}${CV_FILE}`;

// Profili online, nello stesso ordine ovunque (Contatti, Footer, menu mobile)
export const SOCIALS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alberto-scalia/' },
  { name: 'Behance', href: 'https://www.behance.net/albescalia' },
  { name: 'GitHub', href: 'https://github.com/AlbertoScalia' },
];
