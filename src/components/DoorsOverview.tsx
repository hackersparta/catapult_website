/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { doors } from '../data/doors';

export function DoorsOverview() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0b] border-t border-[#1f1f23]" id="how-it-works">
      <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-primary/5 rounded-full filter blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold">
            The Complete Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-[-1px] text-white leading-tight">
            3 Doors. 1 Path. <span className="font-serif italic text-brand-primary">Unlimited growth.</span>
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-light">
            From chaos to control. From control to growth. Every business starts at a different door — we'll help you find yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {doors.map((door, idx) => (
            <motion.div
              key={door.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <Link
                to={`/growth-journey#door-${door.number}`}
                className={`group block h-full glass-panel p-7 bg-[#121214]/40 border transition-all duration-300 ${
                  idx === 0
                    ? 'border-brand-primary/50 hover:border-brand-primary shadow-[0_0_30px_rgba(212,175,55,0.06)]'
                    : 'border-[#1f1f23] hover:border-brand-primary/40'
                }`}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-primary/30 bg-brand-primary/5 mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-[2px] text-brand-primary font-semibold">
                    Door {door.number} — {door.badge}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-white mb-2 tracking-tight">{door.title}</h3>
                <p className="text-xs text-zinc-500 font-light leading-relaxed mb-6">{door.description}</p>

                <ul className="space-y-2.5 mb-8">
                  {door.results.slice(0, 4).map((result) => (
                    <li key={result} className="flex items-center gap-2 text-xs text-zinc-400 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[2px] font-semibold text-brand-primary group-hover:gap-2.5 transition-all">
                  Explore Door {door.number}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              {idx < doors.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 z-10 items-center justify-center w-6 h-6 rounded-full bg-bg-deep border border-brand-primary/30 text-brand-primary">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/growth-journey"
            className="inline-flex items-center gap-2 bg-brand-primary text-black hover:bg-white px-8 py-4 font-sans text-xs uppercase tracking-[2px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
          >
            Explore the Full Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
