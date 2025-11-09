import React from 'react';
import { Compass, Map, PenTool, Volume2, Activity, Users2, Star } from 'lucide-react';

const steps = [
  { icon: Compass, title: 'Discovery', desc: 'Deep dive into your brand, audience, and goals.' },
  { icon: Map, title: 'Strategy', desc: 'Custom roadmaps blending vision with analytics.' },
  { icon: PenTool, title: 'Creation', desc: 'Content and assets built to perform.' },
  { icon: Volume2, title: 'Amplification', desc: 'Omnichannel rollout to maximize reach.' },
  { icon: Activity, title: 'Measurement', desc: 'Dashboards, insights, and continuous optimization.' },
];

const clients = [
  { name: 'Mandala Club', tag: 'Premium Nightlife' },
  { name: 'Amber Lounge', tag: 'Luxury Motorsport' },
  { name: 'Chia Puddies', tag: 'Healthy Foods' },
  { name: 'Our Culture SG', tag: 'Cultural Events' },
];

export default function ProcessAndClients() {
  return (
    <section id="approach" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How We Move Brands</h2>
            <p className="mt-3 text-white/70">Relationship-led, automation-enabled. Fast, flexible, and focused on outcomes.</p>
            <div className="mt-8 space-y-4">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="rounded-md bg-gradient-to-tr from-orange-500/20 to-red-600/20 p-2"><Icon className="h-5 w-5 text-orange-400" /></div>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-sm text-white/70">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-white/60">
              We streamline collaboration with Google Drive, Asana, Data Studio, and automations via Google Workspace, Zapier, and N8N. AI tools like Jasper and Canva accelerate creation without compromising craft.
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Selected Partners</h3>
            <p className="mt-3 text-white/70">Ambitious brands across hospitality, lifestyle, food, and culture.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {clients.map((c) => (
                <div key={c.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold">{c.name}</div>
                      <div className="text-xs text-white/60">{c.tag}</div>
                    </div>
                    <Star className="h-5 w-5 text-orange-400" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-r from-orange-500/10 to-red-600/10 p-5 text-sm">
              Senior strategists partner personally with every client — no handoffs, no fluff, just outcomes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
