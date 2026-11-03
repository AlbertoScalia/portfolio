// Dati strutturati (schema.org) per i motori di ricerca.
// Descrivono chi sono, dove ho studiato e per chi lavoro, con le stesse informazioni del sito e del CV.
export const siteUrl = () => `${window.location.origin}${import.meta.env.BASE_URL}`;

const person = () => ({
  '@type': 'Person',
  name: 'Alberto Scalia',
  jobTitle: 'UI & Visual Designer',
  url: siteUrl(),
  address: { '@type': 'PostalAddress', addressLocality: 'Acireale', addressCountry: 'IT' },
  knowsAbout: ['Editorial design', 'Visual identity', 'Packaging design', 'UX/UI design', 'Typography', 'Brand strategy'],
  worksFor: [
    { '@type': 'Organization', name: 'Gyada Cosmetics S.r.l.', url: 'https://gyadacosmetics.com/' },
    { '@type': 'Organization', name: 'Forward magazine (Il Pensiero Scientifico Editore)', url: 'https://forward.recentiprogressi.it/it/' },
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Academy of Fine Arts of Catania', url: 'https://www.abacatania.it' },
    { '@type': 'EducationalOrganization', name: 'start2impact', url: 'https://www.start2impact.it' },
    { '@type': 'EducationalOrganization', name: 'Boolean', url: 'https://boolean.careers' },
    { '@type': 'EducationalOrganization', name: 'CorsoUx.it', url: 'https://corsoux.it' },
    { '@type': 'EducationalOrganization', name: 'Scuola del Libro', url: 'https://www.scuoladellibro.it' },
  ],
  sameAs: [
    'https://www.linkedin.com/in/alberto-scalia/',
    'https://www.behance.net/albescalia',
    'https://github.com/AlbertoScalia',
  ],
});

export const profilePageLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'About — Alberto Scalia',
  url: `${siteUrl()}bio`,
  mainEntity: person(),
});

export const contactPageLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact — Alberto Scalia',
  url: `${siteUrl()}contact`,
  about: { '@type': 'Person', name: 'Alberto Scalia', url: siteUrl() },
});
