/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { CatapultLogo } from './CatapultLogo';

const solutionsLinks = [
  { label: 'Growth Journey', href: '/growth-journey' },
  { label: 'WhatsApp Intelligence', href: '/whatsapp-intelligence' },
  { label: 'CRM System', href: '/crm' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { label: 'Results', href: '/#results' },
  ];

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const hash = href.slice(1);
      if (location.pathname === '/') {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        navigate(href);
      }
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
        <Link to="/" className="hover:scale-[1.01] active:scale-95 transition-all duration-300">
          <CatapultLogo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9">
          {/* Solutions dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => setSolutionsOpen((v) => !v)}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white hover:scale-105 active:scale-95 text-[11px] font-medium uppercase tracking-[2px] transition-all duration-200 relative group cursor-pointer"
            >
              Solutions
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary group-hover:w-full transition-all duration-300"></span>
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-bg-surface/95 backdrop-blur-2xl border border-glass-border transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                solutionsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'
              }`}
            >
              {solutionsLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setSolutionsOpen(false)}
                  className="block px-5 py-3.5 text-xs text-zinc-300 hover:text-white hover:bg-brand-primary/5 border-l-2 border-transparent hover:border-brand-primary transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

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
            href="/#cta"
            onClick={(e) => handleAnchorClick(e, '/#cta')}
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
          {/* Mobile Solutions expander */}
          <div className="border-b border-glass-border/35 pb-2">
            <button
              onClick={() => setMobileSolutionsOpen((v) => !v)}
              className="w-full flex items-center justify-between text-lg font-medium text-on-surface-variant hover:text-white transition-all py-2"
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-60 mt-2' : 'max-h-0'}`}>
              {solutionsLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block pl-4 py-2.5 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

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
            href="/#cta"
            onClick={(e) => handleAnchorClick(e, '/#cta')}
            className="w-full text-center border border-brand-primary hover:bg-brand-primary/10 text-brand-primary font-sans text-xs font-bold uppercase tracking-[2px] py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            Contact
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
