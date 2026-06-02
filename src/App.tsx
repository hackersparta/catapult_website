/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Friction } from './components/Friction';
import { CostComparison } from './components/CostComparison';
import { StrategyJourney } from './components/StrategyJourney';
import { SystemServices } from './components/SystemServices';
import { CaseStudy } from './components/CaseStudy';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { ThemeProvider } from './components/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      {/* Scrollable Layout Canvas */}
      <div className="min-h-screen bg-[#0a0a0b] text-zinc-150 antialiased transition-colors duration-300 relative overflow-hidden">
        
        {/* Floating Headers and menus */}
        <Header />

        {/* Global Atmospheric Overlays */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none -z-20">
          <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-brand-primary/5 rounded-full filter blur-[150px]" />
          <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-brand-primary/3 rounded-full filter blur-[130px]" />
          <div className="absolute top-[70%] left-[2%] w-[500px] h-[500px] bg-brand-primary/4 rounded-full filter blur-[160px]" />
        </div>

        {/* Modular Sections stacked with smooth rhythm */}
        <main className="relative">
          
          {/* Section 1: Hero area with dynamic cognitive connectivity graphics */}
          <Hero />

          {/* Section 2: Bottlenecks Friction points & precise overlay tooltips */}
          <Friction />

          {/* Section 3: Cost Comparison graphs + Live Calculators */}
          <CostComparison />

          {/* Section 4: Vertical Timeline strategy + orbit connections */}
          <StrategyJourney />

          {/* Section 5: Bento capability modules buildout */}
          <SystemServices />

          {/* Section 6: ROI Healthcare Case Study + active Counters */}
          <CaseStudy />

          {/* Section 7: Final interactive booking CTA and WhatsApp formatting */}
          <FinalCTA />

        </main>

        {/* Corporate footer details */}
        <Footer />

        {/* Offline notification & connectivity metrics overlays */}
        <OfflineIndicator />

      </div>
    </ThemeProvider>
  );
}
