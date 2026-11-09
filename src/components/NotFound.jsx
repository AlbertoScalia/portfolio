import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import RollText from '../components/RollText';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found — Alberto Scalia', 'The page you are looking for does not exist or has moved.', { noindex: true });

  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 pb-24 pt-40 text-[#000000] lg:px-12">
      <Reveal as="h1" className="text-[clamp(6rem,24vw,22rem)] leading-[0.85] tracking-[-0.05em]">
        <span className="font-semibold text-[#000000]">4</span>
        <span className="font-light text-[#FF0000]">0</span>
        <span className="font-semibold text-[#000000]">4</span>
        <span className="sr-only"> – Page not found</span>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 max-w-xl">
        <p className="text-xl leading-snug md:text-2xl">This page does not exist, or it has moved. Let's get you back to the start.</p>
        <Link to="/" className="group mt-10 inline-flex items-center gap-5 text-xl font-medium text-[#000000]">
          <span className="transition-colors duration-300 group-hover:text-[#FF0000]">
            <RollText>Back to home</RollText>
          </span>
          <Magnetic>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#000000] transition-colors duration-300 group-hover:border-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white">
              <ArrowUpRight size={24} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </Magnetic>
        </Link>
      </Reveal>
    </main>
  );
}
