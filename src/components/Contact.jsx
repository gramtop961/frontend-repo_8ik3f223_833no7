import React, { useState } from 'react';
import { Mail, User, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — your message is received. Dennis will reach out soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Ignite Your Brand?</h2>
            <p className="mt-3 text-white/70">Book a consultation with Dennis Leong. We’ll align on goals, pressure-test opportunities, and map a path to measurable wins.</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-r from-orange-500/10 to-red-600/10 p-5 text-sm">
              Prefer email? Reach Dennis directly at <a href="mailto:dennis@catchagroup.com" className="underline decoration-orange-400/60 underline-offset-4">dennis@catchagroup.com</a>.
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="col-span-1">
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-2">
                  <User className="h-4 w-4 text-white/50" />
                  <input type="text" required placeholder="Your name" className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" />
                </div>
              </div>
              <div className="col-span-1">
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-2">
                  <Mail className="h-4 w-4 text-white/50" />
                  <input type="email" required placeholder="you@company.com" className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" />
                </div>
              </div>
              <div className="col-span-1">
                <label className="mb-1 block text-sm text-white/70">Phone (optional)</label>
                <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-2">
                  <Phone className="h-4 w-4 text-white/50" />
                  <input type="tel" placeholder="(+65) 8888 8888" className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/70">Message</label>
                <div className="flex items-start gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-2">
                  <MessageSquare className="mt-2 h-4 w-4 text-white/50" />
                  <textarea required rows={4} placeholder="Tell us about your goals" className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" />
                </div>
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-orange-400 hover:to-red-500">
              Request Consultation
            </button>
            {status && <div className="mt-3 text-sm text-green-400">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
