import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Impostazione automatica della lingua del documento (Punto 15)
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* HEADER & NAVIGAZIONE */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo con alt descrittivo (Punto 17) */}
          <a href="#" className="focus-visible-ring rounded-md p-1">
            <img 
              src="/logo.svg" 
              alt="Nome Azienda - Torna alla Home" 
              className="h-8 w-auto" 
            />
          </a>

          {/* Menu Hamburger con aria-label e aria-expanded (Punto 17) */}
          <button
            type="button"
            className="p-2 rounded-lg border border-gray-300 focus-visible-ring text-gray-800"
            aria-label={isMenuOpen ? "Chiudi il menu di navigazione" : "Apri il menu di navigazione"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Menu Navigazione */}
        {isMenuOpen && (
          <nav className="mt-4 p-4 bg-white border-t border-gray-100" aria-label="Navigazione principale">
            <ul className="space-y-2">
              <li>
                <a href="#clienti" className="block p-2 text-gray-800 hover:bg-gray-100 rounded focus-visible-ring">
                  Clienti
                </a>
              </li>
              <li>
                <a href="#faq" className="block p-2 text-gray-800 hover:bg-gray-100 rounded focus-visible-ring">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-12">

        {/* MARQUEE CLIENTI CON CONTROLLO MOVIMENTO (Punto 16) */}
        <section id="clienti" aria-labelledby="marquee-heading">
          <div className="flex justify-between items-center mb-4">
            <h2 id="marquee-heading" className="text-xl font-bold text-gray-900">
              I nostri clienti
            </h2>
            
            {/* Pulsante di pausa/avvio per il movimento */}
            <button
              type="button"
              className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded focus-visible-ring text-gray-800 font-medium"
              onClick={() => setIsMarqueePaused(!isMarqueePaused)}
              aria-label={isMarqueePaused ? "Avvia l'animazione dei clienti" : "Metti in pausa l'animazione dei clienti"}
            >
              {isMarqueePaused ? "Avvia movimento" : "Pausa movimento"}
            </button>
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-lg p-4 bg-white">
            <motion.div
              className="flex space-x-8 whitespace-nowrap"
              animate={{ x: isMarqueePaused ? 0 : ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              <span className="text-lg font-semibold text-gray-700">Cliente 1</span>
              <span className="text-lg font-semibold text-gray-700">Cliente 2</span>
              <span className="text-lg font-semibold text-gray-700">Cliente 3</span>
              <span className="text-lg font-semibold text-gray-700">Cliente 4</span>
            </motion.div>
          </div>
        </section>

        {/* SEZIONE ACCORDION CON ARIA-EXPANDED (Punto 17) */}
        <section id="faq">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Domande Frequenti</h2>
          <div className="border border-gray-200 rounded-lg bg-white">
            <button
              type="button"
              className="w-full text-left p-4 font-semibold flex justify-between items-center focus-visible-ring text-gray-900"
              aria-expanded={isAccordionOpen}
              aria-controls="accordion-content-1"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            >
              <span>Come funziona l'accessibilità?</span>
              <span aria-hidden="true">{isAccordionOpen ? '−' : '+'}</span>
            </button>
            {isAccordionOpen && (
              <div id="accordion-content-1" className="p-4 border-t border-gray-100 text-secondary">
                L'accessibilità garantisce che tutti gli utenti possano navigare e interagire con il sito in modo semplice, anche tramite screen reader e tastiera.
              </div>
            )}
          </div>
        </section>

        {/* FORM DI CONTATTO - CONTRASTO E PLACEHOLDER (Punto 14) */}
        <section className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Contattaci</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                Indirizzo Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded focus-visible-ring placeholder-accessible text-gray-900 bg-white"
                placeholder="nome@esempio.com"
              />
            </div>
          </form>
        </section>
      </main>

      {/* FOOTER CON CONTRASTO ELEVATO E ICONE SOCIAL ACCESSIBILI (Punto 14 e 17) */}
      <footer className="bg-white border-t border-gray-200 mt-12 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Data e testo secondario con contrasto >= 4.5:1 */}
          <div className="text-sm text-secondary">
            © <time dateTime="2026">2026</time> Nome Azienda. Tutti i diritti riservati.
          </div>

          {/* Link Social con aria-label (Punto 17) */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              aria-label="Visita il nostro profilo Twitter"
              className="p-2 text-gray-700 hover:text-blue-600 focus-visible-ring rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}