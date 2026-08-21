/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function PageCTA({
  heading = "Let's Talk About Your Business",
  subheading = "Tell us your biggest bottleneck. We'll create a custom strategy audit for your workflows — completely free.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0b] border-t border-[#1f1f23]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 md:px-10 relative">
        <div className="glass-panel p-8 sm:p-14 bg-[#121214]/40 backdrop-blur-md border border-[#1f1f23] text-center space-y-6 shadow-2xl">
          <span className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold">
            It's Free. It's Valuable. It's for You.
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light text-white tracking-[-1px] leading-tight">
            {heading}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            {subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4">
            <Link
              to="/#cta"
              className="w-full sm:w-auto bg-brand-primary hover:bg-[#ebd382] text-zinc-950 px-8 py-4 font-sans font-semibold tracking-widest text-[11px] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
            >
              Book Your Free Audit
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://wa.me/919655170886?text=Hi%2C%20I%20want%20a%20free%20business%20systems%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-[#1f1f23] bg-zinc-900/10 hover:bg-[#121214] hover:border-brand-primary/40 px-8 py-4 font-sans font-semibold tracking-widest text-[11px] uppercase text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-brand-primary" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
