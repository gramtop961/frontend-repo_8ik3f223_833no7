import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-red-400" />
          <span className="font-medium tracking-wide text-white/90">Volca • Boutique Growth Catalyst</span>
        </div>

        <h1 className="font-extrabold leading-tight tracking-tight text-white [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl">
          Ignite Your Brand. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-rose-500">Amplify Your Impact</span>
        </h1>
        <p className="mt-4 max-w-3xl text-base sm:text-lg text-white/80 [text-wrap:balance]">
          Volca blends fearless creativity with data-driven strategy to spark powerful brand movements. 
          We don’t follow trends — we help bold brands set them.
        </p>
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/70">Where Bold Ideas Meet Powerful Execution.</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#packages"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-600/30 transition hover:from-orange-400 hover:to-red-500"
          >
            View Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            Ready to Ignite?
          </a>
        </div>
      </div>
    </section>
  );
}
