/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';

export function WhatsAppTeaser() {
  const before = ['Chats everywhere, no tracking', 'Follow-ups get forgotten', "No idea which lead will convert"];
  const after = ['Every lead captured & organized', 'Timely follow-ups, every time', 'Know which leads are hot'];

  return (
    <section className="py-16 relative overflow-hidden bg-bg-deep">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-5"
          >
            <span className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold">
              WhatsApp Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-[-1px] text-fg leading-tight">
              Your WhatsApp is a <span className="font-serif italic text-brand-primary">goldmine.</span>
            </h2>
            <p className="text-fg-muted text-sm sm:text-base leading-relaxed font-light">
              But you're using it like a notepad. Important chats get buried, leads get lost, opportunities slip away — every day, you lose money.
            </p>
            <Link
              to="/whatsapp-intelligence"
              className="inline-flex items-center gap-2 border border-surface-border-alt hover:border-brand-primary text-fg hover:text-brand-primary px-6 py-3.5 font-sans text-[11px] uppercase tracking-[2px] transition-all duration-300"
            >
              See How It Works
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Before/After compact card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 glass-panel bg-bg-surface/40 border border-surface-border p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 sm:divide-x sm:divide-surface-border">
              <div className="sm:pr-6 space-y-3">
                <h4 className="font-mono text-[10px] uppercase tracking-[2px] text-fg-muted font-semibold mb-3">Before</h4>
                {before.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-fg-secondary font-light">
                    <X className="w-3.5 h-3.5 text-brand-error mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="sm:pl-6 space-y-3">
                <h4 className="font-mono text-[10px] uppercase tracking-[2px] text-brand-primary font-semibold mb-3">After</h4>
                {after.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-fg-secondary font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
