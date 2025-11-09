import React from 'react';
import { Trophy, BarChart, Users, TrendingUp, Award, DollarSign } from 'lucide-react';

const stats = [
  { icon: DollarSign, value: '3.5x', label: 'Average ROI' },
  { icon: Users, value: '250%', label: 'Engagement Growth' },
  { icon: Award, value: '42', label: 'Industry Awards' },
  { icon: TrendingUp, value: '400%', label: 'Awareness Lift' },
  { icon: BarChart, value: '2M+', label: 'Revenue Generated' },
  { icon: Trophy, value: '500K+', label: 'Community Followers' }
];

export default function Results() {
  return (
    <section id="results" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Results That Speak Louder</h2>
          <p className="mt-3 text-white/70">We build movements that compound. Transparent reporting, measurable performance, relentless optimization.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-tr from-orange-500/20 to-red-600/20 p-2">
                  <Icon className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-sm text-white/70">{label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
