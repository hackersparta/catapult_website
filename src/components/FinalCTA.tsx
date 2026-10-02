/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  const [challenge, setChallenge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!challenge.trim()) return;

    localStorage.setItem('catapultai-user-challenge', challenge);
    setSubmitted(true);
  };

  const formattedWhatsAppUrl = () => {
    const defaultText = "Hi, I want a free strategy session for my business.";
    const challengeText = challenge.trim()
      ? `Hi, I want a free strategy session. My biggest business challenge is: ${encodeURIComponent(challenge.trim())}`
      : defaultText;
    return `https://wa.me/919710508886?text=${challengeText}`;
  };

  return (
    <section className="py-24 relative overflow-hidden bg-bg-deep border-t border-surface-border" id="cta">
      {/* Aurora visual styles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative">
        <div className="glass-panel p-8 sm:p-14 rounded-none bg-bg-surface/40 backdrop-blur-md border border-surface-border text-center space-y-10 relative overflow-hidden shadow-2xl">

          <div className="space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[4px] text-brand-primary font-semibold">Get Started Today</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light text-fg tracking-[-1px] leading-tight">
              Let's Talk About <br />
              <span className="font-serif italic text-brand-primary">your business</span>
            </h2>
            <p className="text-fg-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
              Tell us your biggest bottleneck. We'll create a custom strategy audit for your workflows — completely free.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="cta-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto space-y-4 text-left"
              >
                <div className="space-y-2.5">
                  <label htmlFor="challenge-input" className="font-sans text-[10px] uppercase tracking-[2px] text-fg-secondary font-semibold">
                    What is your biggest manual / operational challenge?
                  </label>
                  <textarea
                    id="challenge-input"
                    rows={3}
                     placeholder="e.g. replying to 100+ patient WhatsApp requests per day manually, losing leads because of follow-up delays..."
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-none bg-input-bg border border-surface-border focus:border-brand-primary focus:outline-none focus:ring-0 text-sm text-fg placeholder:text-fg-dim transition-all font-sans resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-zinc-950 px-8 py-4 rounded-none font-sans font-semibold tracking-widest text-[11px] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
                  >
                    Request Custom Plan
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={formattedWhatsAppUrl()}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto border border-surface-border bg-bg-surface/10 hover:bg-bg-surface hover:border-brand-primary/40 px-8 py-4 rounded-none font-sans font-semibold tracking-widest text-[11px] uppercase text-fg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-primary" />
                    WhatsApp Us
                  </a>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="cta-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 sm:p-10 rounded-none bg-brand-primary/5 border border-brand-primary/20 max-w-lg mx-auto space-y-6"
              >
                <div className="w-12 h-12 rounded-none bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mx-auto">
                  <CheckCircle className="w-5 h-5 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-fg tracking-tight font-sans">Challenge registered and cached.</h4>
                  <p className="text-xs text-fg-muted leading-relaxed font-light">
                    We've initialized your operational bottleneck parameters. Let's solve this instantly over a direct audit session with our strategy lead.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                  <a
                    href={formattedWhatsAppUrl()}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-zinc-950 px-8 py-3.5 rounded-none font-sans font-semibold tracking-widest text-[10px] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.15)]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setChallenge('');
                    }}
                    className="w-full sm:w-auto text-[10px] text-fg-muted hover:text-fg font-sans uppercase tracking-[2px] hover:underline"
                  >
                    Revise issue
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
