/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 w-full z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-bg-deep/95 backdrop-blur-xl border-t border-glass-border px-4 py-3 flex items-center gap-3">
        <a
          href="https://wa.me/919655170886?text=Hi%2C%20I%20want%20a%20free%20business%20systems%20audit."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-[#27272a] text-brand-primary"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <Link
          to="/#cta"
          className="flex-1 bg-brand-primary text-black text-center py-3 font-sans text-[11px] uppercase tracking-[2px] font-semibold flex items-center justify-center gap-2"
        >
          Book Free Audit
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
