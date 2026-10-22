import { useSyncExternalStore } from 'react';
import { useReducedMotion } from 'framer-motion';

// "Reduce motion" del sito: si somma all'impostazione del sistema operativo
// e viene ricordata nel browser. Aggiunge anche la classe "no-motion" su <html> per il CSS.
const KEY = 'reduce-motion';
const listeners = new Set();

const read = () => {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
};

let off = typeof window !== 'undefined' ? read() : false;
if (typeof document !== 'undefined') document.documentElement.classList.toggle('no-motion', off);

export function setMotionOff(value) {
  off = value;
  try {
    localStorage.setItem(KEY, value ? '1' : '0');
  } catch {
    /* archiviazione non disponibile: la scelta vale solo per questa visita */
  }
  document.documentElement.classList.toggle('no-motion', value);
  listeners.forEach((l) => l());
}

const subscribe = (cb) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

export function useMotionOff() {
  return useSyncExternalStore(subscribe, () => off, () => false);
}

// true se il sistema chiede meno movimento oppure l'utente l'ha disattivato dal sito
export default function useMotionPref() {
  const system = useReducedMotion();
  const user = useMotionOff();
  return Boolean(system || user);
}
