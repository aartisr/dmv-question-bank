import React, { ReactNode } from 'react';
import { Navbar, NavTab } from './Navbar';
import { Award, FileText, Share2, ShieldCheck } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenSearch?: () => void;
  onOpenCitationModal?: () => void;
  focusTime?: number;
  xp?: number;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  activeTab,
  onSelectTab,
  onOpenSearch,
  onOpenCitationModal,
  focusTime = 0,
  xp = 0,
}) => (
  <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-amber-200 selection:text-slate-900">
    <Navbar
      activeTab={activeTab}
      onSelectTab={onSelectTab}
      onOpenSearch={onOpenSearch}
      onOpenCitationModal={onOpenCitationModal}
      focusTime={focusTime}
      xp={xp}
    />

    <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {children}
    </main>

    <footer className="border-t border-stone-200 bg-white py-8 px-4 sm:px-6 lg:px-8 mt-16 text-xs text-stone-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-serif font-bold text-slate-900 text-sm">RMV Master Academy</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200 font-medium">
              April 2026 Edition
            </span>
          </div>
          <p className="text-stone-400 font-sans text-xs">
            Authored by{' '}
            <a
              href="https://ai-aarti.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-slate-800 transition-colors underline decoration-stone-300 underline-offset-2"
            >
              Aarti S Ravikumar
            </a>{' '}
            (<a
              href="https://saugus.pioneercss.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-slate-800 transition-colors underline decoration-stone-300 underline-offset-2"
            >
              PCSS II
            </a>)
          </p>
        </div>

        <div className="text-stone-400 font-mono text-[11px] text-center sm:text-right">
          Governed by M.G.L. Chapter 90 Motor Vehicles & Aircraft · Standard Class D Licensure
        </div>
      </div>
    </footer>
  </div>
);
