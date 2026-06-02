/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Eye, MonitorPlay, Activity } from 'lucide-react';
import { ParticleNetwork } from './ParticleNetwork';

interface BarData {
  month: string;
  value: number; // percentage height
  growth: string;
}

export function Hero() {
  const [activeBar, setActiveBar] = useState<number | null>(4); // Default highlighted last bar
  
  const bars: BarData[] = [
    { month: 'Jan', value: 30, growth: '+45%' },
    { month: 'Feb', value: 45, growth: '+98%' },
    { month: 'Mar', value: 60, growth: '+150%' },
    { month: 'Apr', value: 80, growth: '+240%' },
    { month: 'May', value: 100, growth: '+342%' },
  ];

  const handleCTA = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden mb-16 md:mb-24 bg-[#0a0a0b]" id="hero">
      {/* Elegant Atmospheric Glow Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0b] via-[#121214]/30 to-transparent -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full filter blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Interactive Particle Network behind hero block */}
      <div className="absolute inset-0 -z-10">
        <ParticleNetwork />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero copy content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-brand-primary/25 bg-brand-primary/5 font-sans text-[10px] uppercase tracking-[4px] text-brand-primary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping" />
              Strategic Intelligence
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light tracking-[-2px] text-white leading-[1.12]"
            >
              Your business. <br />
              Powered by <span className="font-serif italic text-brand-primary">pure</span> AI.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-zinc-400 text-base sm:text-[17px] max-w-[480px] leading-[1.65] font-sans font-light text-zinc-500"
            >
              Enterprise-grade AI systems designed for high-performance operations. We study your execution pipelines, architect customized growth grids, and automate high-stakes customer workflows.
            </motion.p>

            {/* Interaction Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button 
                onClick={(e) => handleCTA(e, '#cta')}
                className="bg-brand-primary text-black hover:bg-white text-black px-8 py-4 font-sans text-xs uppercase tracking-[2px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                Free Strategy Session
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={(e) => handleCTA(e, '#how-it-works')}
                className="bg-transparent hover:bg-bg-surface border border-[#27272a] hover:border-brand-primary text-white text-white px-8 py-4 font-sans text-xs uppercase tracking-[2px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-brand-primary" />
                See What We Do
              </button>
            </motion.div>
          </div>

          {/* Right interactive dashboard visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 relative z-10 w-full"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-none shadow-3xl relative overflow-hidden group/dashboard hover:shadow-brand-primary/10 transition-all duration-500 bg-bg-surface/65 backdrop-blur-md border border-[#1f1f23]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
              
              {/* Header inside Dashboard */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#1f1f23]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                  <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-400 font-medium font-semibold">Growth Command Center</span>
                </div>
                <Activity className="w-3.5 h-3.5 text-brand-primary" />
              </div>

              {/* Graphical bar chart */}
              <div className="h-44 flex items-end gap-3 sm:gap-4 pb-2 border-b border-[#1f1f23] relative">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
                  <div className="w-full h-[1px] bg-white" />
                  <div className="w-full h-[1px] bg-white" />
                  <div className="w-full h-[1px] bg-white" />
                </div>

                {bars.map((bar, idx) => {
                  const isHovered = activeBar === idx;
                  return (
                    <div 
                      key={bar.month}
                      className="flex-1 flex flex-col items-center justify-end h-full group/bar cursor-pointer"
                      onMouseEnter={() => setActiveBar(idx)}
                    >
                      {/* Bar Value Tooltip */}
                      <div className={`mb-2 text-[9px] font-mono px-1.5 py-0.5 transition-all duration-300 ${
                        isHovered 
                          ? 'bg-brand-primary text-black opacity-100 scale-100 font-bold' 
                          : 'opacity-0 scale-90'
                      }`}>
                        {bar.growth}
                      </div>

                      {/* Bar node */}
                      <div 
                        className={`w-full rounded-none transition-all duration-500 ${
                          isHovered 
                            ? 'bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                            : 'bg-zinc-800'
                        }`}
                        style={{ height: `${bar.value}%` }}
                      />

                      <span className="mt-2.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">{bar.month}</span>
                    </div>
                  );
                })}
              </div>

              {/* Status indicators */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="space-y-1">
                  <p className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 leading-none">Velocity Stats</p>
                  <p className="text-2.5xl sm:text-2xl font-light text-white leading-none tracking-tight">
                    {activeBar !== null ? bars[activeBar].growth : '+342%'}
                  </p>
                  <p className="text-[9px] font-sans text-brand-primary uppercase tracking-widest">Autonomous Speed</p>
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 leading-none">System Status</p>
                  <div className="flex items-center gap-1 text-brand-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                    <p className="text-xs uppercase tracking-wider font-semibold font-sans">Optimal Grid</p>
                  </div>
                  <p className="text-[9px] text-zinc-500 font-sans uppercase tracking-[1px]">24/7 AI-Active</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
