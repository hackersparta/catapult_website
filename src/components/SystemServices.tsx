/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Lightbulb, 
  MessageSquareCode, 
  LayoutDashboard, 
  UserPlus2, 
  Megaphone, 
  ReceiptIndianRupee 
} from 'lucide-react';
import { ServiceCardData } from '../types';

export function SystemServices() {
  const services: ServiceCardData[] = [
    {
      id: 'strat',
      title: 'Custom Growth Strategy',
      description: 'We analyze your business, find growth opportunities, and create a tailored plan. This drives everything else we build.',
      iconName: 'lightbulb'
    },
    {
      id: 'bot',
      title: 'AI WhatsApp Bot',
      description: 'Answers customers 24/7, takes orders, books appointments, qualifies leads — all on WhatsApp, automatically.',
      iconName: 'whatsapp'
    },
    {
      id: 'crm',
      title: 'CRM Dashboard',
      description: 'Track all customers, revenue, leads, and reports in one place. Like Salesforce — but built for YOUR business, on your phone.',
      iconName: 'crm'
    },
    {
      id: 'follow',
      title: 'Auto Follow-up System',
      description: 'AI follows up with customers automatically — thank-you messages, special offers, reminders. Never lose a customer again.',
      iconName: 'followup'
    },
    {
      id: 'social',
      title: 'Social Media Automation',
      description: 'AI creates posts, writes captions, and schedules daily — your brand stays active without you lifting a finger.',
      iconName: 'social'
    },
    {
      id: 'bill',
      title: 'Billing, Inventory & Reports',
      description: 'Auto-invoicing, stock alerts, payment tracking, and daily/weekly reports sent to your phone. No more manual work.',
      iconName: 'billing'
    }
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'lightbulb':
        return <Lightbulb className="w-8 h-8 text-brand-primary" />;
      case 'whatsapp':
        return <MessageSquareCode className="w-8 h-8 text-brand-primary" />;
      case 'crm':
        return <LayoutDashboard className="w-8 h-8 text-brand-primary" />;
      case 'followup':
        return <UserPlus2 className="w-8 h-8 text-brand-primary" />;
      case 'social':
        return <Megaphone className="w-8 h-8 text-brand-primary" />;
      case 'billing':
        return <ReceiptIndianRupee className="w-8 h-8 text-brand-primary" />;
      default:
        return <Lightbulb className="w-8 h-8 text-brand-primary" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0b] border-t border-[#1f1f23]" id="services">
      {/* Dynamic Background visual highlights */}
      <div className="absolute top-[80%] left-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold">Platform Features</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-[-1px] text-white leading-tight">
            The complete system <br className="hidden sm:inline" />
            we build <span className="font-serif italic text-brand-primary">for you</span>.
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-light">
            Not just a single task automation. A complete autonomous operational engine perfectly custom-tailored to your enterprise model.
          </p>
        </div>

        {/* Dynamic 6-card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative glass-panel p-8 rounded-none bg-[#121214]/40 hover:bg-[#1a1a1c]/60 transition-all duration-300 border border-[#1f1f23] hover:border-brand-primary/45 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Icon block */}
                <div className="p-3 bg-brand-primary/5 border border-[#1f1f23] group-hover:border-brand-primary/30 w-max mb-6 transition-all duration-300">
                  {renderIcon(item.iconName)}
                </div>

                {/* Overline index label */}
                <span className="font-mono text-[9px] uppercase text-brand-primary tracking-[2px] block mb-2">
                  Module 0{idx + 1}
                </span>

                <h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Status footer for subtle high-fidelity detail */}
              <div className="flex items-center gap-1.5 pt-6 mt-6 border-t border-[#1f1f23] font-mono text-[9px] uppercase tracking-[2px] text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-1 h-1 bg-brand-primary animate-pulse" />
                Active Integration Node
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
