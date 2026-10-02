/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { X, CheckCircle2, Inbox, Tags, BellRing, LineChart, Users2, MessageSquare } from 'lucide-react';
import { PageCTA } from '../components/PageCTA';

const before = [
  'Chats everywhere, no tracking',
  'Follow-ups get forgotten',
  'No idea which lead will convert',
  'Lost sales, lost revenue',
];
const after = [
  'Every lead captured & organized',
  'Timely follow-ups, every time',
  'Know which leads are hot',
  'More conversions, more revenue',
];

const features = [
  { icon: Inbox, title: 'Capture every lead automatically', desc: 'No enquiry from WhatsApp slips through — every new chat becomes a tracked lead the moment it lands.' },
  { icon: Tags, title: 'Tag, organize & segment your chats', desc: 'Group conversations by status, source, or priority so your team always knows what to act on next.' },
  { icon: BellRing, title: 'Set follow-ups & never miss a lead', desc: 'Schedule reminders against any conversation — the system nudges you before a lead goes cold.' },
  { icon: LineChart, title: 'Track conversations that turn into sales', desc: 'See which chats actually convert, so you know what messaging and timing works.' },
  { icon: Users2, title: 'Manage your team from one dashboard', desc: 'Everyone on the team works from the same organized inbox — nothing depends on one person\'s memory.' },
];

export function WhatsAppIntelligencePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-bg-deep">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-brand-primary/25 bg-brand-primary/5 font-sans text-[10px] uppercase tracking-[4px] text-brand-primary"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Intelligence
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-light tracking-[-1.5px] text-fg leading-tight"
              >
                We turn your WhatsApp into a <span className="font-serif italic text-brand-primary">smart business system.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-fg-muted text-base font-light leading-relaxed max-w-lg"
              >
                Your WhatsApp is a goldmine. But you're using it like a notepad. Important chats get buried, leads get lost, opportunities slip away — every day, you lose money.
              </motion.p>
            </div>

            {/* Stylized chat mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="glass-panel p-5 bg-bg-surface/60 border border-surface-border">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-surface-border">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-fg-secondary font-semibold">Chats</span>
                  <span className="flex items-center gap-1.5 text-[9px] text-brand-primary uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" /> Live
                  </span>
                </div>
                {[
                  { name: 'New Enquiry — Website', tag: 'New', msg: "I'm interested in your services." },
                  { name: 'Ravi — Follow up', tag: 'Due Today', msg: 'Thanks! Please share details.' },
                  { name: 'Meera Textiles', tag: 'Won', msg: 'Order confirmed.' },
                  { name: 'Ajay Enterprises', tag: 'Quote Sent', msg: 'Need a quotation.' },
                ].map((chat) => (
                  <div key={chat.name} className="flex items-center justify-between py-2.5 border-b border-surface-border last:border-0">
                    <div className="min-w-0">
                      <p className="text-xs text-fg font-medium truncate">{chat.name}</p>
                      <p className="text-[11px] text-fg-muted truncate font-light">{chat.msg}</p>
                    </div>
                    <span className="flex-shrink-0 ml-3 text-[9px] font-mono uppercase tracking-wide text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2 py-0.5">
                      {chat.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 relative overflow-hidden bg-bg-deep border-t border-surface-border">
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative">
          <div className="glass-panel bg-bg-surface/40 border border-surface-border p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 sm:divide-x sm:divide-brand-primary/20">
              <div className="sm:pr-8 space-y-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[2px] text-fg-muted font-semibold">Before</h3>
                {before.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-fg-secondary font-light">
                    <X className="w-4 h-4 text-brand-error mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="sm:pl-8 space-y-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[2px] text-brand-primary font-semibold">After</h3>
                {after.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-fg-secondary font-light">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative overflow-hidden bg-bg-deep border-t border-surface-border">
        <div className="max-w-3xl mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-14 space-y-3">
            <span className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold">Features</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-[-1px] text-fg">
              What WhatsApp Intelligence <span className="font-serif italic text-brand-primary">does</span>
            </h2>
          </div>

          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-panel p-6 bg-bg-surface/30 border border-surface-border flex items-start gap-5"
              >
                <div className="p-2.5 bg-brand-primary/5 border border-brand-primary/20 text-brand-primary flex-shrink-0">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-fg font-medium mb-1.5">{f.title}</h4>
                  <p className="text-sm text-fg-muted font-light leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Ready to stop losing leads?"
        subheading="Book a free audit and we'll show you exactly how WhatsApp Intelligence fits your business."
      />
    </div>
  );
}
