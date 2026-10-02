/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldX, Sparkles, Receipt, Calculator, Percent } from 'lucide-react';
import { CostItem } from '../types';

export function CostComparison() {
  const [teamSize, setTeamSize] = useState(3);
  const [manualHours, setManualHours] = useState(25);

  const traditionalCosts: CostItem[] = [
    { label: 'Enterprise CRM Setup', cost: '₹15L+ / yr', percent: 75 },
    { label: 'Custom Software Build', cost: '₹10-20L', percent: 85 },
    { label: 'Sales & Support Team (5)', cost: '₹50L+ / yr', percent: 95 }
  ];

  const catapultFeatures: CostItem[] = [
    { label: 'Custom Strategy & Build', cost: 'Included', percent: 15 },
    { label: 'AI Agents & CRM', cost: 'Included', percent: 10 },
    { label: '24/7 Operation', cost: 'Included', percent: 5 }
  ];

  const calculateTraditionalCost = () => {
    const teamCost = teamSize * 450000;
    const softwareLicense = 250000;
    return teamCost + softwareLicense;
  };

  const calculateCatapultCost = () => {
    return Math.round(calculateTraditionalCost() * 0.15);
  };

  const traditionalTotal = calculateTraditionalCost();
  const catapultTotal = calculateCatapultCost();
  const totalSavings = traditionalTotal - catapultTotal;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-bg-deep border-t border-surface-border" id="cost-comparison">
      {/* Glow lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        {/* Overline & Main Headers */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold">
            The True Cost of Growth
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-[-1px] text-fg"
          >
            Traditional software vs. <span className="font-serif italic text-brand-primary">CatapultAI</span>
          </motion.h2>
          <p className="text-fg-muted text-sm sm:text-base leading-relaxed font-light">
            Most companies deliver bloated manual contracts or highly complex cloud packages. We build streamlined autonomous systems that operate 24/7 for a fraction of the cost.
          </p>
        </div>

        {/* Dynamic ROI Calculator Slider Widget */}
        <div className="glass-panel p-6 sm:p-8 rounded-none bg-bg-surface/65 backdrop-blur-md border border-surface-border mb-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-surface-border">
            <Calculator className="w-4 h-4 text-brand-primary" />
            <h3 className="font-sans text-xs uppercase tracking-[2px] text-fg-secondary font-semibold">Interactive Savings & ROI Calculator</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders Input */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-sans uppercase tracking-[1px] text-fg-secondary">
                  <span>Support / Sales Staff Count</span>
                  <span className="font-mono text-brand-primary font-bold">{teamSize} Personnel</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full accent-brand-primary h-1 bg-bar-inactive rounded-none appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-sans uppercase tracking-[1px] text-fg-secondary">
                  <span>Weekly Manual Operations Done</span>
                  <span className="font-mono text-brand-primary font-bold">{manualHours} Hours</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={manualHours}
                  onChange={(e) => setManualHours(parseInt(e.target.value))}
                  className="w-full accent-brand-primary h-1 bg-bar-inactive rounded-none appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Calculations Result Output */}
            <div className="p-6 rounded-none bg-brand-primary/5 border border-brand-primary/20 flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-2.5 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-sans text-fg-muted uppercase tracking-[2px]">Estimated Annual Savings</p>
                <p className="text-2.5xl sm:text-3xl font-light text-brand-secondary tracking-tight mt-1">
                  {formatCurrency(totalSavings)}
                </p>
              </div>
              <p className="text-[10px] text-brand-primary font-sans uppercase tracking-[1px]">
                Replaces {manualHours * 4 * 12} hours of manual workflows yearly!
              </p>
            </div>
          </div>
          <p className="text-[10px] text-fg-dim font-sans text-center mt-6 italic">
            *Estimate based on average team salaries and standard software licensing. Actual savings vary by business.
          </p>
        </div>

        {/* Standard side-by-side Progress Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Card A: Traditional Expenses */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-none border border-surface-border hover:border-surface-border-alt bg-bg-surface/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-surface-border">
                <div className="p-2.5 border border-surface-border bg-bg-deep text-fg-secondary">
                  <ShieldX className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-fg tracking-tight">Traditional Approach</h3>
                  <p className="text-xs text-fg-muted">Heavy, static, and resource-bloated.</p>
                </div>
              </div>

              {/* Progress bars expense */}
              <div className="space-y-6">
                {traditionalCosts.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between text-xs font-sans text-fg-secondary">
                      <span>{item.label}</span>
                      <span className="font-mono text-fg-secondary font-bold">{item.cost}</span>
                    </div>
                    <div className="w-full bg-track-bg rounded-none h-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="bg-bar-inactive h-1 rounded-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-surface-border">
              <p className="text-[10px] font-sans text-fg-muted uppercase tracking-[2px]">Estimated Cost of Ownership:</p>
              <div className="text-2.5xl sm:text-3xl font-light text-fg-secondary mt-2 tracking-tight">
                ₹85L+ <span className="text-xs text-fg-muted font-normal">/ first year*</span>
              </div>
            </div>
          </motion.div>

          {/* Card B: CatapultAI System */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-none border border-brand-primary/40 bg-bg-surface/60 flex flex-col justify-between shadow-[0_0_30px_rgba(212,175,55,0.06)] relative overflow-hidden"
          >
            {/* Background highlight glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full filter blur-[40px] pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-surface-border">
                <div className="p-2.5 bg-brand-primary/5 border border-brand-primary/30 text-brand-primary relative">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-fg tracking-tight">CatapultAI System</h3>
                  <p className="text-xs text-brand-primary">Architectural, lightweight, and precise.</p>
                </div>
              </div>

              {/* Progress bars feature benefit */}
              <div className="space-y-6">
                {catapultFeatures.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between text-xs font-sans text-fg-secondary">
                      <span>{item.label}</span>
                      <span className="font-mono text-brand-primary font-bold">{item.cost}</span>
                    </div>
                    <div className="w-full bg-track-bg rounded-none h-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="bg-brand-primary h-1 rounded-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-surface-border relative">
              <div className="absolute inset-0 bg-brand-primary/5 filter blur-xl rounded-full -z-10" />
              <div className="relative z-10">
                <p className="text-[10px] font-sans text-fg-muted uppercase tracking-[2px]">Your Investment:</p>
                <div className="text-2.5xl sm:text-3xl font-light text-fg mt-2 tracking-tight flex items-baseline gap-2">
                  A Fraction <span className="text-xs text-brand-primary font-normal uppercase tracking-[1px]">of traditional cost</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
