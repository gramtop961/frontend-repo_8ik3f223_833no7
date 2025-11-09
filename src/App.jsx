import React from 'react';
import HeroSpline from './components/HeroSpline';
import Services from './components/Services';
import Packages from './components/Packages';
import Results from './components/Results';
import ProcessAndClients from './components/ProcessAndClients';
import Contact from './components/Contact';
import { Flame } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-orange-500 to-red-600"><Flame className="h-4 w-4" /></span>
            <span>Volca</span>
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#services" className="text-white/80 hover:text-white">Services</a>
            <a href="#packages" className="text-white/80 hover:text-white">Packages</a>
            <a href="#results" className="text-white/80 hover:text-white">Results</a>
            <a href="#approach" className="text-white/80 hover:text-white">Approach</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 text-sm font-semibold sm:inline">Ignite</a>
        </div>
      </header>

      <main className="pt-16">
        <HeroSpline />
        <Services />
        <Packages />
        <Results />
        <ProcessAndClients />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/60">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div>
              <div className="font-semibold">Volca — Boutique Growth Catalyst</div>
              <div className="mt-1">Ignite Your Brand. Amplify Your Impact.</div>
            </div>
            <div className="flex gap-4">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#packages" className="hover:text-white">Packages</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
