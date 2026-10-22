// Testo che "scorre" verso l'alto all'hover/focus del genitore con classe "group".
// La copia sotto è nascosta agli screen reader; con "riduci movimento" non c'è transizione.
export default function RollText({ children, className = '' }) {
  const move = 'transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none';
  return (
    <span className={`relative inline-flex overflow-hidden align-bottom ${className}`}>
      <span className={`block group-hover:-translate-y-full group-focus-visible:-translate-y-full ${move}`}>{children}</span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 block translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 ${move}`}
      >
        {children}
      </span>
    </span>
  );
}
