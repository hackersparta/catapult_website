/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { X, CheckCircle2, DoorOpen } from 'lucide-react';
import { DoorData } from '../types';
import { BuildIcon } from './icons';

export function DoorSection({ door, index }: { door: DoorData; index: number }) {
  return (
    <section
      id={`door-${door.number}`}
      className={`py-20 relative overflow-hidden ${index > 0 ? 'border-t border-[#1f1f23]' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        {/* Door header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-brand-primary/30 bg-brand-primary/5">
            <DoorOpen className="w-3.5 h-3.5 text-brand-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-brand-primary font-semibold">
              Door {door.number} — {door.badge}
            </span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-[-1px] text-white leading-tight mb-3 max-w-2xl">
          {door.title}
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-light max-w-2xl mb-12">
          {door.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Problems column */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 bg-[#121214]/40 border border-[#1f1f23] h-full">
              <h3 className="font-sans text-[10px] uppercase tracking-[3px] text-zinc-400 font-bold mb-5">
                Common Problems
              </h3>
              <ul className="space-y-3.5">
                {door.problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-2.5 text-sm text-zinc-400 font-light">
                    <X className="w-3.5 h-3.5 text-brand-error mt-0.5 flex-shrink-0" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Builds grid */}
          <div className="lg:col-span-8">
            <h3 className="font-sans text-[10px] uppercase tracking-[3px] text-brand-primary font-bold mb-5">
              We Build For You
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {door.builds.map((build, i) => (
                <motion.div
                  key={build.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="glass-panel p-5 bg-[#121214]/30 border border-[#1f1f23] hover:border-brand-primary/30 transition-colors flex gap-3.5"
                >
                  <BuildIcon name={build.iconName} className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">{build.title}</h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">{build.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Results strip */}
        <div className="mt-10 pt-8 border-t border-[#1f1f23] flex flex-wrap gap-x-8 gap-y-3">
          {door.results.map((result) => (
            <div key={result} className="flex items-center gap-2 text-xs text-zinc-400 font-light">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
              {result}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
