/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, MessageSquare, Database, Share2, RefreshCw, Sparkles } from 'lucide-react';
import { SystemStep } from '../types';

export function StrategyJourney() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      index: 1,
      title: '1. Understand',
      desc: 'We study your business deeply — customers, challenges, competitors, revenue streams.',
      stepEnum: SystemStep.UNDERSTAND,
      nodeId: 'whatsapp'
    },
    {
      index: 2,
      title: '2. Strategize',
      desc: 'We create a custom growth plan — what to automate, where to focus, how to grow revenue.',
      stepEnum: SystemStep.STRATEGIZE,
      nodeId: 'followup'
    },
    {
      index: 3,
      title: '3. Automate',
      desc: 'We build AI systems to execute the plan — bots, CRM, follow-ups, everything connected.',
      stepEnum: SystemStep.AUTOMATE,
      nodeId: 'crm'
    },
    {
      index: 4,
      title: '4. Grow',
      desc: 'Your sales increase, customers come back, and you focus on what you do best.',
      stepEnum: SystemStep.GROW,
      nodeId: 'social'
    }
  ];

  const orbitNodes = [
    { id: 'whatsapp', label: 'AI Whatsapp Bot', icon: <MessageSquare className="w-5 h-5 text-brand-primary" />, x: '22%', y: '26%' },
    { id: 'followup', label: 'Auto Follow-Up', icon: <RefreshCw className="w-5 h-5 text-brand-primary" />, x: '22%', y: '74%' },
    { id: 'social', label: 'Social Media Auto', icon: <Share2 className="w-5 h-5 text-brand-primary" />, x: '78%', y: '26%' },
    { id: 'crm', label: 'CRM Dashboard', icon: <Database className="w-5 h-5 text-brand-primary" />, x: '78%', y: '74%' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0b] border-t border-[#1f1f23]" id="how-it-works">
      {/* Dynamic atmospheric blurs */}
      <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-primary/5 rounded-full filter blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left panel copy */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold">Framework Operations</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-[-1px] text-white leading-tight">
                Strategy first, <br />
                then <span className="font-serif italic text-brand-primary">automation</span>.
              </h2>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-light">
                We don't just hand you templates. We align the entire strategy structure, mapping your physical workflows to high-fidelity AI automation nodes.
              </p>
            </div>

            {/* Steps Vertical Timeline layout */}
            <div className="relative pl-8 border-l border-[#1f1f23] space-y-8">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.title}
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    className={`relative cursor-pointer transition-all duration-300 group/timeline pb-1 ${
                      isActive ? 'translate-x-1.5' : 'hover:translate-x-1'
                    }`}
                  >
                    {/* Ring dot handle */}
                    <div className={`absolute -left-[41px] top-1.5 w-4 h-4 border transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-primary border-brand-primary shadow-[0_0_12px_rgba(212,175,55,0.7)] scale-110' 
                        : 'bg-[#0a0a0b] border-[#1f1f23] group-hover/timeline:border-brand-primary'
                    }`} />

                    <h3 className={`text-base font-medium transition-all duration-300 ${
                      isActive ? 'text-brand-primary' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mt-1 transition-all duration-300 ${
                      isActive ? 'text-zinc-300' : 'text-zinc-500'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right panel brain visual block */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[500px] w-full flex items-center justify-center rounded-none bg-zinc-950/10 border border-[#1f1f23] overflow-hidden">
            
            {/* Visualizer Background Matrix Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.02)_1.5px,_transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-60" />

            {/* Central Node CPU (The Cognitive Brain Core) */}
            <div className="relative z-20 flex flex-col items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    '0 0 25px rgba(212, 175, 55, 0.15)',
                    '0 0 45px rgba(212, 175, 55, 0.3)',
                    '0 0 25px rgba(212, 175, 55, 0.15)'
                  ]
                }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="w-24 h-24 rounded-full bg-brand-primary/5 border-2 border-brand-primary/30 flex flex-col items-center justify-center text-brand-primary relative"
              >
                <Cpu className="w-8 h-8 animate-pulse text-brand-primary" />
                <span className="font-mono text-[8px] uppercase tracking-widest mt-1 text-white select-none">AI CORE</span>
                
                {/* Visualizer orbiting signal lines */}
                <div className="absolute inset-0 border border-dashed border-brand-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-28 bg-[#121214] px-3.5 py-1 rounded-none border border-brand-primary/25 backdrop-blur-sm shadow flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-brand-primary" />
                  <span className="font-mono text-[9px] text-brand-primary font-bold uppercase tracking-wider">
                    {steps[activeStep].title.split('.')[1].trim()} Active
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Orbiting nodes with icons */}
            {orbitNodes.map((node) => {
              const matchingStep = steps[activeStep];
              const isLinked = matchingStep.nodeId === node.id;

              return (
                <div
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-10"
                  style={{ left: node.x, top: node.y }}
                >
                  <motion.div
                    animate={isLinked ? {
                      scale: [1, 1.05, 1],
                      borderColor: '#d4af37',
                      boxShadow: '0 0 20px rgba(212, 175, 55, 0.25)'
                    } : {}}
                    transition={{ repeat: isLinked ? Infinity : 0, duration: 2 }}
                    className={`glass-panel p-4 rounded-none flex flex-col items-center gap-2 text-center select-none cursor-pointer hover:border-brand-primary/40 transition-all duration-300 w-32 sm:w-36 ${
                      isLinked ? 'bg-[#121214] border-brand-primary' : 'bg-transparent border-[#1f1f23]'
                    }`}
                  >
                    <div className="p-2 border border-[#1f1f23] bg-[#121214] text-brand-primary">
                      {node.icon}
                    </div>
                    <span className="font-sans text-[10px] uppercase tracking-wider font-semibold text-white tracking-tight">{node.label}</span>
                  </motion.div>
                </div>
              );
            })}

            {/* Dynamic Linking Path lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0 select-none">
              <defs>
                <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#121214" />
                </linearGradient>
              </defs>
              {/* Linked vector lines highlighting connections */}
              <line x1="50%" y1="50%" x2="22%" y2="26%" stroke="url(#cyber-grad)" strokeWidth={activeStep === 0 ? '2' : '0.75'} strokeDasharray={activeStep === 0 ? '4' : 'none'} className="transition-all duration-300" />
              <line x1="50%" y1="50%" x2="22%" y2="74%" stroke="url(#cyber-grad)" strokeWidth={activeStep === 1 ? '2' : '0.75'} strokeDasharray={activeStep === 1 ? '4' : 'none'} className="transition-all duration-300" />
              <line x1="50%" y1="50%" x2="78%" y2="74%" stroke="url(#cyber-grad)" strokeWidth={activeStep === 2 ? '2' : '0.75'} strokeDasharray={activeStep === 2 ? '4' : 'none'} className="transition-all duration-300" />
              <line x1="50%" y1="50%" x2="78%" y2="26%" stroke="url(#cyber-grad)" strokeWidth={activeStep === 3 ? '2' : '0.75'} strokeDasharray={activeStep === 3 ? '4' : 'none'} className="transition-all duration-300" />
            </svg>

          </div>

        </div>
      </div>
    </section>
  );
}
