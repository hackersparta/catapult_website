/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Wifi, WifiOff } from 'lucide-react';

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(() => {
    if (typeof navigator !== 'undefined') {
      return navigator.onLine;
    }
    return true;
  });
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 4000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowNotification(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showNotification && isOnline) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`flex items-center gap-2 px-4 py-3 rounded-none shadow-2xl backdrop-blur-md border ${
        isOnline 
          ? 'bg-brand-primary/5 border-brand-primary/30 text-brand-primary' 
          : 'bg-red-950/15 border-red-800/30 text-red-450'
      }`}>
        {isOnline ? (
          <>
            <Wifi className="w-3.5 h-3.5 animate-pulse" />
            <span className="text-[10px] font-sans uppercase tracking-[1px]">Back Online · System Sync</span>
          </>
        ) : (
          <>
            <WifiOff className="w-3.5 h-3.5" />
            <span className="text-[10px] font-sans uppercase tracking-[1px]">Operational Offline · Local Cache Read</span>
          </>
        )}
      </div>
    </div>
  );
}
