/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { doors } from '../data/doors';
import { DoorSection } from '../components/DoorSection';
import { PageCTA } from '../components/PageCTA';

export function GrowthJourneyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#0a0a0b]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-10 relative text-center space-y-5">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold"
          >
            The Complete Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-sans font-light tracking-[-1.5px] text-white leading-tight"
          >
            Your Business Growth Journey <br className="hidden sm:block" />
            with <span className="font-serif italic text-brand-primary">Catapult AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-500 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
          >
            3 Doors. 1 Path. Unlimited Growth. From chaos to control — from control to growth.
          </motion.p>

          {/* Journey diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch justify-center gap-0 max-w-3xl mx-auto pt-10"
          >
            {doors.map((door, idx) => (
              <a
                key={door.number}
                href={`#door-${door.number}`}
                className="flex-1 flex items-center justify-center gap-3 p-4 border border-[#1f1f23] bg-[#121214]/40 hover:bg-brand-primary/5 hover:border-brand-primary/40 transition-colors"
              >
                <span className="font-mono text-[10px] text-brand-primary uppercase tracking-[2px] font-semibold">
                  Door {door.number}
                </span>
                <span className="text-xs text-zinc-400 font-light">{door.badge}</span>
                {idx < doors.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-zinc-600 hidden sm:block ml-1" />}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Door sections */}
      {doors.map((door, idx) => (
        <DoorSection key={door.number} door={door} index={idx} />
      ))}

      <PageCTA />
    </div>
  );
}
