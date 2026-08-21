/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { ThemeProvider } from './components/ThemeContext';
import { ScrollManager } from './components/ScrollManager';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { HomePage } from './pages/HomePage';
import { GrowthJourneyPage } from './pages/GrowthJourneyPage';
import { WhatsAppIntelligencePage } from './pages/WhatsAppIntelligencePage';
import { CrmPage } from './pages/CrmPage';

export default function App() {
  return (
    <ThemeProvider>
      {/* Scrollable Layout Canvas */}
      <div className="min-h-screen bg-[#0a0a0b] text-zinc-150 antialiased transition-colors duration-300 relative overflow-hidden">

        <ScrollManager />

        {/* Floating Headers and menus */}
        <Header />

        {/* Global Atmospheric Overlays */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none -z-20">
          <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-brand-primary/5 rounded-full filter blur-[150px]" />
          <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-brand-primary/3 rounded-full filter blur-[130px]" />
          <div className="absolute top-[70%] left-[2%] w-[500px] h-[500px] bg-brand-primary/4 rounded-full filter blur-[160px]" />
        </div>

        {/* Routed page content */}
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/growth-journey" element={<GrowthJourneyPage />} />
            <Route path="/whatsapp-intelligence" element={<WhatsAppIntelligencePage />} />
            <Route path="/crm" element={<CrmPage />} />
          </Routes>
        </main>

        {/* Corporate footer details */}
        <Footer />

        {/* Sticky mobile conversion bar */}
        <MobileStickyCTA />

        {/* Offline notification & connectivity metrics overlays */}
        <OfflineIndicator />

      </div>
    </ThemeProvider>
  );
}
