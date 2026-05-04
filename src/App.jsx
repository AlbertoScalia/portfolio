import { useState, useEffect } from 'react';
// 1. Sostituisci BrowserRouter con HashRouter
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Grain from './components/ui/Grain';

function Layout() {
    const [navBackground, setNavBackground] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setNavBackground(true);
            } else {
                setNavBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#f5f3f0] text-foreground antialiased relative flex flex-col">
            <Grain />
            <Navbar navBackground={navBackground} />
            
            <div className="flex-grow relative z-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/bio" element={<Bio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            
            <Footer />
        </div>
    );
}

function App() {
    return (
        /* 2. Rimuovi basename="/portfolio" perché con HashRouter non serve più */
        /* La navigazione avverrà dopo il simbolo # (es. /portfolio/#/bio) */
        <Router>
            <Layout />
        </Router>
    );
}

export default App;