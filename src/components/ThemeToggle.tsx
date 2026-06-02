/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-none border border-[#1f1f23] bg-zinc-950/20 hover:bg-[#121214] hover:border-brand-primary/45 hover:text-brand-primary text-zinc-405 transition-all text-white hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden"
      aria-label="Toggle visual theme"
    >
      <div className="relative w-5 h-5">
        <span className={`absolute inset-0 transform transition-transform duration-500 flex items-center justify-center ${
          theme === 'dark' ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-8 opacity-0 rotate-45'
        }`}>
          <Sun className="w-5 h-5 text-brand-primary" />
        </span>
        <span className={`absolute inset-0 transform transition-transform duration-500 flex items-center justify-center ${
          theme === 'light' ? 'translate-y-0 opacity-100 rotate-0' : '-translate-y-8 opacity-0 -rotate-45'
        }`}>
          <Moon className="w-5 h-5 text-brand-primary-container" />
        </span>
      </div>
    </button>
  );
}
