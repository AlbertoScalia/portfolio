import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

function Layout() {
    const [navBackground, setNavBackground] = useState(false);
    const location = useLocation();

    // Fix per iOS: lo scroll viene eseguito dopo un brevissimo delay 
    // per assicurarsi che il DOM sia stato renderizzato correttamente.
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' // 'instant' evita conflitti con smooth scroll di CSS
            });
        }, 10);
        return () => clearTimeout(timeoutId);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            // throttle o semplice controllo dello scroll
            if (window.scrollY > 50) {
                setNavBackground(true);
            } else {
                setNavBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        /* Rimossa la classe 'antialiased' e 'relative' dal wrapper principale 
           se causano problemi di sfarfallio su Safari */
        <div className="min-h-screen flex flex-col w-full">
            <Navbar navBackground={navBackground} />
            
            {/* 'relative z-10' a volte causa problemi di rendering su iOS 
                se ci sono altri elementi con position fixed. Usalo con cautela. */}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/bio" element={<Bio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;