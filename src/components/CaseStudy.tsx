/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Award, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { CaseStudyData } from '../types';

export function CaseStudy() {
  const caseStudy: CaseStudyData = {
    tag: 'Case Study — Healthcare & Wellness',
    title: 'A Business We Transformed',
    content: 'A wellness business spending lakhs on ads with inconsistent results. No system, no tracking, missing customer enquiries daily. We built a complete AI system — custom strategy, automated content, WhatsApp bot for enquiries, CRM for patient tracking, and auto follow-ups.',
    stats: [
      { value: '24/7', label: 'Bot Replies' },
      { value: '100%', label: 'Leads Captured' },
      { value: 'Auto', label: 'Follow-ups' },
      { value: 'CRM', label: 'All Patients Tracked' }
    ]
  };

  const percentVal = useMotionValue(0);
  const percentDisplay = useTransform(percentVal, (latest) => Math.round(latest) + '%');

  useEffect(() => {
    const controls = animate(percentVal, 100, {
      duration: 2.5,
      ease: 'easeOut',
      delay: 0.5
    });
    return () => controls.stop();
  }, [percentVal]);

  return (
    <section className="py-24 relative overflow-hidden bg-bg-deep border-t border-surface-border" id="results">
      {/* Aurora glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        {/* Title sections */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-medium">Valid Proof</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-[-1px] text-fg">
            Real <span className="font-serif italic text-brand-primary">results</span>
          </h2>
          <p className="text-fg-muted text-sm sm:text-base leading-relaxed font-light">
            No empty claims. Real enterprise-level performance metrics built on optimized cognitive system logic.
          </p>
        </div>

        {/* Featured Case Study Glass Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 sm:p-12 md:p-16 rounded-none bg-bg-surface/45 relative overflow-hidden shadow-2xl border border-surface-border"
        >
          {/* Subtle colored accent glow inside box */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

          <div className="space-y-8 max-w-4xl">
            {/* Tag / Header */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="p-1 px-3 border border-brand-primary/25 text-brand-primary text-[10px] font-sans font-medium tracking-widest uppercase bg-brand-primary/5">
                {caseStudy.tag}
              </span>
              <span className="flex items-center gap-1.5 text-[9px] text-brand-secondary font-sans uppercase tracking-widest bg-brand-primary/5 border border-brand-primary/20 px-2.5 py-0.5 font-bold">
                <CheckCircle2 className="w-3 h-3 text-brand-primary" /> Verifiable ROI
              </span>
            </div>

            {/* Title & Copy */}
            <h3 className="text-2xl sm:text-3.5xl font-sans font-light text-fg tracking-snug leading-tight">
              {caseStudy.title}
            </h3>

            <p className="text-fg-muted text-sm sm:text-base leading-relaxed font-sans font-light">
              {caseStudy.content}
            </p>

            {/* Metrics stat grid layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-surface-border">
              {/* Stat 1 */}
              <div className="space-y-2 group/stat">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-primary" />
                  <span className="text-[10px] font-sans text-fg-muted uppercase tracking-widest">Dynamic SLA</span>
                </div>
                <div className="text-3xl sm:text-4xl font-light text-brand-secondary font-sans tracking-tight group-hover/stat:translate-x-1 transition-transform">
                  24/7
                </div>
                <p className="text-xs text-fg-secondary font-medium tracking-wide uppercase">Bot Replies</p>
              </div>

              {/* Stat 2 (Interactive count animation) */}
              <div className="space-y-2 group/stat">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-primary" />
                  <span className="text-[10px] font-sans text-fg-muted uppercase tracking-widest">Acquisition</span>
                </div>
                <motion.div className="text-3xl sm:text-4xl font-light text-brand-secondary font-sans tracking-tight group-hover/stat:translate-x-1 transition-transform">
                  <motion.span>{percentDisplay}</motion.span>
                </motion.div>
                <p className="text-xs text-fg-secondary font-medium tracking-wide uppercase">Leads Captured</p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-2 group/stat">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-primary" />
                  <span className="text-[10px] font-sans text-fg-muted uppercase tracking-widest">Loyalty Loop</span>
                </div>
                <div className="text-3xl sm:text-4xl font-light text-brand-secondary font-sans tracking-tight group-hover/stat:translate-x-1 transition-transform">
                  Auto
                </div>
                <p className="text-xs text-fg-secondary font-medium tracking-wide uppercase">Follow-ups</p>
              </div>

              {/* Stat 4 */}
              <div className="space-y-2 group/stat">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-primary" />
                  <span className="text-[10px] font-sans text-fg-muted uppercase tracking-widest">Unified Grid</span>
                </div>
                <div className="text-3xl sm:text-4xl font-light text-brand-secondary font-sans tracking-tight group-hover/stat:translate-x-1 transition-transform">
                  CRM
                </div>
                <p className="text-xs text-fg-secondary font-medium tracking-wide uppercase">All Patients Tracked</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
