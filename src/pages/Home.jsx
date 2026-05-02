import { useState, useEffect } from 'react';
import HeroParallax from '../components/HeroParallax';
import ServicesBento from '../components/ServicesBento';
import WorksGallery from '../components/WorksGallery';
import ClientsMarquee from '../components/ClientsMarquee';

export default function Home() {
    return (
        <main>
            <HeroParallax />
            <ServicesBento />
            <WorksGallery />
            <ClientsMarquee />
        </main>
    );
}
