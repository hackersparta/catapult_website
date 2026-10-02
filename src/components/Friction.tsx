/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, UserMinus, ShieldAlert, Info } from 'lucide-react';
import { MetricCardData } from '../types';

export function Friction() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const bottlenecks: MetricCardData[] = [
    {
      title: 'Too Much Manual Work',
      description: 'Replying to every message, tracking customers in notebooks, sending invoices one by one. Your whole day is gone.',
      metric: '4+ Hours',
      tooltip: 'Manual administrative work consumes over 4+ hours of an average business owner\'s day, completely stalling growth tasks.'
    },
    {
      title: 'Customers Slip Away',
      description: 'Someone enquires. You\'re busy. You forget. That customer goes to your competitor. 80% of sales are lost to no follow-up.',
      metric: '80% Lost',
      tooltip: 'Statistics prove that 80% of all potential sales transactions slip away due to a complete absence of structured follow-ups.'
    },
    {
      title: 'No Time for Growth',
      description: 'You\'re so busy running the business, you have no time to actually grow it. Marketing, ads, expansion — all on hold.',
      metric: '30% Frozen',
      tooltip: 'Failing to automate systems freezes up to 30% of critical core time that should otherwise be spent establishing new client channels.'
    }
  ];

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Layers className="w-5 h-5 text-brand-primary" />;
      case 1: return <UserMinus className="w-5 h-5 text-brand-primary" />;
      default: return <ShieldAlert className="w-5 h-5 text-brand-primary" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-bg-deep" id="what-we-do">
      {/* Decorative background grid blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-primary/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        {/* Title information */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-[-1px] text-fg"
          >
            The friction holding <span className="font-serif italic text-brand-primary">your business</span> back.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-fg-muted text-sm sm:text-base leading-relaxed"
          >
            Traditional workflows are designed for a slower era. AI removes administrative friction so you operate with ultimate precision.
          </motion.p>
        </div>

        {/* 3 Columns Bottlenecks Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bottlenecks.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6 }}
              className="group relative glass-panel p-8 rounded-none border border-surface-border hover:border-brand-primary/45 bg-bg-surface/40 transition-all duration-300 shadow-xl overflow-visible"
            >
              {/* Header inside friction card */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-[10px] text-brand-primary block tracking-[2px] uppercase">
                    0{idx + 1} / Bottleneck
                  </span>
                </div>

                {/* Micro tooltip interactive bubble */}
                <div className="relative flex items-center gap-2">
                  <div className="p-2 border border-surface-border text-brand-primary">
                    {getIcon(idx)}
                  </div>
                  <button
                    onMouseEnter={() => setActiveTooltip(idx)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onClick={() => setActiveTooltip(activeTooltip === idx ? null : idx)}
                    className="p-1.5 border border-surface-border hover:border-brand-primary text-fg-muted hover:text-fg transition-all cursor-help"
                    aria-label="More operational details"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>

                  <AnimatePresence>
                    {activeTooltip === idx && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10, x: -125 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: -125 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10, x: -125 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full left-1/2 mb-3 z-30 w-64 p-4 rounded-none bg-bg-elevated border border-brand-primary/20 backdrop-blur-md text-xs text-fg-secondary leading-relaxed shadow-2xl"
                      >
                        <div className="font-mono text-[9px] uppercase tracking-wider text-brand-primary mb-1">Analytical Impact</div>
                        {item.tooltip}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-bg-elevated" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Title & description */}
              <h3 className="text-lg sm:text-xl font-medium text-fg mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-fg-muted text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Highlight Bottom Segment */}
              <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                <span className="text-[10px] font-sans uppercase tracking-[1px] text-fg-muted">Estimated loss:</span>
                <span className="text-xs font-mono font-bold text-brand-primary bg-brand-primary/5 px-2.5 py-1 border border-brand-primary/20">
                  {item.metric}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
