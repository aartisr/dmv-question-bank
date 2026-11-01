import React, { useState, useRef, useEffect } from 'react';
import { 
  BookOpen, 
  Award, 
  History, 
  Search, 
  Clock, 
  Zap, 
  CheckSquare, 
  Menu, 
  X,
  Compass,
  ChevronDown
} from 'lucide-react';

export type NavTab = 'dashboard' | 'study' | 'exam' | 'history' | 'bank' | 'achievements';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenSearch?: () => void;
  onOpenCitationModal?: () => void;
  focusTime?: number;
  xp?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenSearch,
  onOpenCitationModal,
  focusTime = 0,
  xp = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close "More..." dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatMinutes = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins}m`;
  };

  const primaryNavItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <Compass className="w-4 h-4" /> },
    { id: 'study', label: 'Study Modules', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'exam', label: 'Exam Simulator', icon: <CheckSquare className="w-4 h-4" /> },
  ];

  const secondaryNavItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'bank', label: 'Question Bank', icon: <Search className="w-4 h-4" /> },
    { id: 'history', label: 'Assessment History', icon: <History className="w-4 h-4" /> },
    { id: 'achievements', label: 'Academic Honours', icon: <Award className="w-4 h-4" /> },
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];
  const isSecondaryActive = secondaryNavItems.some((item) => item.id === activeTab);

  const handleSelect = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Brand */}
          <button
            onClick={() => handleSelect('dashboard')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-serif font-black text-lg shadow-xs group-hover:bg-slate-800 transition-colors">
              M
            </div>
            <div>
              <div className="text-base font-serif font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-none">
                RMV Master Academy
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mt-0.5">
                Massachusetts M.G.L. c. 90
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links with Adaptive "More..." Dropdown */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Primary Nav Items */}
            {primaryNavItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-amber-300 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Secondary Nav Items (Visible directly on wide XL screens) */}
            <div className="hidden xl:flex items-center gap-1">
              {secondaryNavItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-slate-900 text-amber-300 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Adaptive "More..." Dropdown on Medium & Large Screens */}
            <div className="relative xl:hidden" ref={dropdownRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  isSecondaryActive || moreOpen
                    ? 'bg-slate-900 text-amber-300 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-48 bg-white border border-stone-200 rounded-2xl shadow-xl py-1.5 z-50 animate-fadeIn">
                  {secondaryNavItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.id)}
                        className={`w-full px-4 py-2.5 text-xs font-medium flex items-center gap-2.5 transition-colors cursor-pointer text-left ${
                          isActive
                            ? 'bg-amber-50 text-amber-900 font-bold'
                            : 'text-slate-700 hover:bg-stone-100'
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Bar: Quick Search & Live Stats */}
          <div className="flex items-center gap-2 md:gap-3">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-xs text-stone-600 hover:text-slate-900 transition-all cursor-pointer shadow-2xs group"
                title="Search RMV Driver's Manual and Question Bank (⌘K / Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Quick Search...</span>
                <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white border border-stone-300 text-stone-500 shadow-2xs">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Mobile search icon button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="sm:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Open search"
              >
                <Search className="w-4 h-4 text-amber-600" />
              </button>
            )}

            <div className="hidden lg:flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200 text-xs font-mono text-slate-700">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>{formatMinutes(focusTime)}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900">
                <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                <span>{xp} XP</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
          {onOpenSearch && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-between text-slate-800 bg-amber-50/80 border border-amber-200 hover:bg-amber-100 cursor-pointer mb-2"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-amber-600" />
                <span>Search Manual & Question Bank</span>
              </div>
              <kbd className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-stone-300 text-stone-600">
                ⌘K
              </kbd>
            </button>
          )}

          {allNavItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-3 cursor-pointer text-left ${
                  isActive
                    ? 'bg-slate-900 text-amber-300'
                    : 'text-slate-700 hover:bg-stone-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono px-2">
            <span>Focus Time: {formatMinutes(focusTime)}</span>
            <span>Mastery: {xp} XP</span>
          </div>
        </div>
      )}
    </header>
  );
};
