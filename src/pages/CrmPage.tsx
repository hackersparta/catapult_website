/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users2, PhoneCall, BellRing, TrendingUp, FileBarChart, Target, LayoutDashboard } from 'lucide-react';
import { PageCTA } from '../components/PageCTA';

const capabilities = [
  { icon: Users2, title: 'Store all leads in one place', desc: 'Every enquiry, from every channel, lives in a single organized record.' },
  { icon: PhoneCall, title: 'Track every interaction', desc: 'Calls, messages, and visits — the full history of each customer, always visible.' },
  { icon: BellRing, title: 'Never miss a follow-up', desc: 'Automatic reminders keep every open conversation moving forward.' },
  { icon: TrendingUp, title: 'Know your sales pipeline clearly', desc: 'See exactly where each lead sits — new, contacted, qualified, or won.' },
  { icon: FileBarChart, title: 'Get real-time business reports', desc: 'Revenue, deals won, and follow-ups due — updated the moment something changes.' },
  { icon: Target, title: 'Convert more leads into customers', desc: 'A clear process means fewer leads slip through the cracks.' },
];

export function CrmPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-bg-deep">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-brand-primary/25 bg-brand-primary/5 font-sans text-[10px] uppercase tracking-[4px] text-brand-primary"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                CRM System
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-light tracking-[-1.5px] text-fg leading-tight"
              >
                It's not just software. <br />
                It's your <span className="font-serif italic text-brand-primary">business memory.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-fg-muted text-base font-light leading-relaxed max-w-md"
              >
                A CRM helps you capture, organize and manage every lead and customer interaction in one place — so you never forget a lead, never miss a follow-up, and never lose a sale.
              </motion.p>
            </div>

            {/* Dashboard preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-6"
            >
              <div className="glass-panel p-6 bg-bg-surface/60 border border-surface-border">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-surface-border">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-fg-secondary font-semibold">CRM Dashboard</span>
                  <span className="flex items-center gap-1.5 text-[9px] text-brand-primary uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" /> Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  {[
                    { label: 'Total Leads', value: '325' },
                    { label: 'Follow-ups Due', value: '48' },
                    { label: 'Deals Won', value: '25' },
                    { label: 'Revenue', value: '₹8.45L' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 border border-surface-border bg-bg-deep/20">
                      <p className="text-[9px] text-fg-muted uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-lg font-light text-fg tracking-tight">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  <p className="text-[9px] text-fg-muted uppercase tracking-wider">Upcoming Follow-ups</p>
                  {['Ravi Enterprises — Today, 11:00 AM', 'Meera Textiles — Today, 2:30 PM', 'Siva Traders — Tomorrow, 10:30 AM'].map((row) => (
                    <div key={row} className="text-xs text-fg-secondary font-light border-b border-surface-border pb-2 last:border-0">{row}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-20 relative overflow-hidden bg-bg-deep border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-14 space-y-3 max-w-xl mx-auto">
            <span className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-[-1px] text-fg">
              So you never forget a lead, <br />
              never miss a follow-up, and <span className="font-serif italic text-brand-primary">never lose a sale.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-panel p-6 bg-bg-surface/30 border border-surface-border hover:border-brand-primary/30 transition-colors"
              >
                <c.icon className="w-6 h-6 text-brand-primary mb-4" />
                <h4 className="text-fg font-medium mb-1.5 text-sm">{c.title}</h4>
                <p className="text-xs text-fg-muted font-light leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Ready to organize your business?"
        subheading="Book a free audit and we'll show you exactly what a CRM built for your business looks like."
      />
    </div>
  );
}
