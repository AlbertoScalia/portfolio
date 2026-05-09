import HeroParallax from '../components/HeroParallax';
import ServicesBento from '../components/ServicesBento';
import WorksGallery from '../components/WorksGallery';
import ClientsMarquee from '../components/ClientsMarquee';

export default function Home() {
    return (
<div className="relative min-h-screen bg-white">
                {/* Blur di sfondo */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-blue/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10">
                <HeroParallax />
                <ServicesBento />
                <WorksGallery />
                <ClientsMarquee />
            </main>
        </div>
    );
}