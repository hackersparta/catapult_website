/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Compass, MessageSquareCode } from 'lucide-react';
import { CatapultLogo } from './CatapultLogo';

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const isInternal = href.startsWith('/') && !href.includes('#');
  if (isInternal) {
    return <Link to={href}>{children}</Link>;
  }
  return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{children}</a>;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { label: 'Growth Journey', href: '/growth-journey' },
    { label: 'WhatsApp Intelligence', href: '/whatsapp-intelligence' },
    { label: 'CRM System', href: '/crm' },
    { label: 'Case Studies', href: '/#results' },
  ];

  const legalLinks = [
    { label: 'Book a Free Audit', href: '/#cta' },
    { label: 'Contact Support', href: 'mailto:support@catapultai.in' },
    { label: 'WhatsApp Us', href: 'https://wa.me/919655170886' },
  ];

  return (
    <footer className="bg-[#0a0a0b] relative pt-24 pb-12 overflow-hidden border-t border-[#1f1f23]">
      {/* Aurora visual blurs */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="glass-panel rounded-none p-8 sm:p-12 md:p-16 bg-[#121214]/40 border border-[#1f1f23] shadow-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Corporate Profile Column */}
            <div className="lg:col-span-5 space-y-6">
              <Link to="/" className="pb-1 block">
                <CatapultLogo />
              </Link>
              <p className="text-zinc-500 font-light text-sm max-w-sm leading-relaxed">
                Pioneering autonomous business intelligence systems that drive sustainable digital growth through strategy-led workflow automation.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-[#1f1f23]">
                <a 
                  href="mailto:support@catapultai.in" 
                  className="flex items-center gap-3 text-zinc-400 hover:text-brand-primary transition-colors group w-max"
                >
                  <Mail className="w-4 h-4 text-brand-primary group-hover:scale-105 transition-transform" />
                  <span className="font-mono text-xs">support@catapultai.in</span>
                </a>
                
                <div className="flex items-center gap-3 text-zinc-500 text-xs select-none font-light">
                  <MapPin className="w-4 h-4 text-brand-primary/60" />
                  <span>Based in Tamil Nadu, India · Serving worldwide</span>
                </div>
              </div>
            </div>

            {/* Split Nav Link grids */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:gap-12">
              
              {/* Column A (Platform) */}
              <div className="space-y-6">
                <h4 className="font-sans text-[10px] uppercase tracking-[3px] text-brand-primary font-bold">
                  Platform Operations
                </h4>
                <ul className="space-y-4">
                  {platformLinks.map((link) => (
                    <li key={link.label}>
                      <FooterLink
                        href={link.href}
                      >
                        <span className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 text-xs font-light">
                          <Compass className="w-3.5 h-3.5 text-brand-primary/45" />
                          {link.label}
                        </span>
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column B (Support) */}
              <div className="space-y-6">
                <h4 className="font-sans text-[10px] uppercase tracking-[3px] text-brand-primary font-bold">
                  Support
                </h4>
                <ul className="space-y-4">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <FooterLink
                        href={link.href}
                      >
                        <span className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 text-xs font-light">
                          <MessageSquareCode className="w-3.5 h-3.5 text-brand-primary/45" />
                          {link.label}
                        </span>
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Footer bottom bar details */}
          <div className="mt-16 pt-8 border-t border-[#1f1f23] flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-sans text-[11px] text-zinc-500 text-center md:text-left font-light">
              &copy; {currentYear} CatapultAI — AI Solutions for Business Growth. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://wa.me/919655170886"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-none border border-[#1f1f23] bg-zinc-950/20 flex items-center justify-center text-zinc-400 hover:text-brand-primary hover:border-brand-primary/45 transition-all"
                aria-label="Chat with CatapultAI on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
