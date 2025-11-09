import React from 'react';
import { Flame, Sparkles, TrendingUp } from 'lucide-react';

const tiers = [
  {
    name: 'Spark',
    price: 'From $2,500/mo',
    icon: Sparkles,
    highlights: [
      'Brand consultation',
      'Basic social & media management',
      'Foundational SEO',
      'Core content package'
    ],
    note: 'Built for startups and small teams ready to punch above their weight.'
  },
  {
    name: 'Blaze',
    price: 'From $5,500/mo',
    icon: TrendingUp,
    highlights: [
      'Full branding system',
      'Advanced SEO / SEM',
      'Social + video content',
      'Analytics & reporting',
      'Paid ads management'
    ],
    featured: true,
    note: 'For growing brands seeking compounding momentum.'
  },
  {
    name: 'Inferno',
    price: 'From $12,000/mo',
    icon: Flame,
    highlights: [
      'Omnichannel strategy',
      'Premium production',
      'Influencer partnerships',
      'Conversion design & CRO',
      'Executive strategy support'
    ],
    note: 'For category leaders aiming to dominate their market.'
  }
];

export default function Packages() {
  return (
    <section id="packages" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Packages that Scale with Ambition</h2>
          <p className="mt-3 text-white/70">Choose your fuel. Every engagement is led by senior strategists and engineered for ROI.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map(({ name, price, icon: Icon, highlights, featured, note }) => (
            <div
              key={name}
              className={`relative rounded-2xl border p-6 transition ${
                featured
                  ? 'border-red-500/40 bg-gradient-to-b from-red-600/10 to-orange-500/5 shadow-[0_0_30px_-8px_rgba(239,68,68,0.5)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1 text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-tr from-orange-500/20 to-red-600/20 p-2">
                  <Icon className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold">{name} Package</h3>
              </div>
              <div className="mt-2 text-2xl font-bold">{price}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-white/60">{note}</p>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${
                  featured
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-400 hover:to-red-500'
                    : 'border border-white/20 bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                Start Here
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
