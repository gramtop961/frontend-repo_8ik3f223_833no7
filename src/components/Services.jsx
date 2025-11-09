import React from 'react';
import { Search, Palette, Video, Share2, BarChart3, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO & SEM',
    desc: 'Dominate search and attract qualified demand with technical SEO and high-intent campaigns.'
  },
  {
    icon: Palette,
    title: 'Branding & Strategy',
    desc: 'Positioning, messaging, and visual identities built for traction and long-term love.'
  },
  {
    icon: Video,
    title: 'Content Creation',
    desc: 'Stories, copy, and video assets that move audiences and spark community.'
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Organic growth, community building, and creator collaborations across platforms.'
  },
  {
    icon: Megaphone,
    title: 'Advertising',
    desc: 'High-ROI performance campaigns engineered to convert across digital channels.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Deep measurement, dashboards, and ongoing optimization to scale what works.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Catalysts for Growth</h2>
          <p className="mt-3 text-white/70">Agile, ROI-focused execution combined with senior strategy. Tailored to your vision, responsive to the market.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/20">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-tr from-orange-500/20 to-red-600/20 p-2">
                  <Icon className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
