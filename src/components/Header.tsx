/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { CatapultLogo } from './CatapultLogo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'What We Do', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
  ];

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-bg-deep/80 backdrop-blur-xl border-b border-glass-border py-4 shadow-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="hover:scale-[1.01] active:scale-95 transition-all duration-300"
        >
          <CatapultLogo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="text-zinc-400 hover:text-white hover:scale-105 active:scale-95 text-[11px] font-medium uppercase tracking-[2px] transition-all duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Action Widgets */}
        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle />
          <a
            href="#cta"
            className="relative overflow-hidden border border-[#27272a] hover:border-brand-primary text-white hover:text-brand-primary font-sans text-[11px] font-medium uppercase tracking-[2px] py-2.5 px-6 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            Contact
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-on-surface-variant hover:text-white transition-colors"
            aria-label="Toggle navigation drawer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-bg-surface/95 backdrop-blur-2xl border-b border-glass-border transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="text-lg font-medium text-on-surface-variant hover:text-white hover:pl-2 transition-all duration-200 py-2 border-b border-glass-border/35"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={(e) => handleAnchorClick(e, '#cta')}
            className="w-full text-center border border-brand-primary hover:bg-brand-primary/10 text-brand-primary font-sans text-xs font-bold uppercase tracking-[2px] py-3 rounded-lg transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
