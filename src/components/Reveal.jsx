import { motion, useReducedMotion } from 'framer-motion';

// Entrata morbida quando l'elemento compare nel viewport (una sola volta).
// Con "riduci movimento" attivo mostra subito il contenuto.
// Le altre props (onSubmit, aria-label, id...) vengono inoltrate all'elemento.
export default function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      {...rest}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}
