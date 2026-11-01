import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  X, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  CheckSquare, 
  Award, 
  ArrowRight, 
  Clock, 
  Compass, 
  Scale, 
  ShieldCheck, 
  CornerDownLeft, 
  Sparkles,
  Layers,
  ChevronRight,
  Flame,
  Zap,
  Target
} from 'lucide-react';
import { chaptersData } from '../data/chaptersData';
import { masterQuestions } from '../data/questionsData';
import { ACHIEVEMENTS_CATALOG } from '../data/achievementsData';
import { NavTab } from './Navbar';
import { ExamMode, Question } from '../types';

export type SearchItemType = 'manual_topic' | 'statute_table' | 'question' | 'honour' | 'action';

export interface SearchResultItem {
  id: string;
  type: SearchItemType;
  title: string;
  subtitle: string;
  snippet?: string;
  statute?: string;
  chapterNumber?: 1 | 2 | 3 | 4 | 5;
  badge?: string;
  metadata?: string;
  actionText: string;
  onSelect: () => void;
  questionData?: Question;
}

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab: (tab: NavTab) => void;
  onOpenStudyChapter: (chapterNumber: 1 | 2 | 3 | 4 | 5) => void;
  onStartExam: (mode: ExamMode, chapterNumber?: 1 | 2 | 3 | 4 | 5, weakIds?: string[]) => void;
  onOpenQuestionInBank?: (query: string) => void;
  onOpenCitationModal?: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTab,
  onOpenStudyChapter,
  onStartExam,
  onOpenQuestionInBank,
  onOpenCitationModal,
}) => {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | SearchItemType>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Pre-built index of searchable items
  const indexedItems: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [];

    // 0. Prominent Author Attribution & Academic Citation (SEO, GEO, AEO, Citations)
    items.push(
      {
        id: 'author-aarti-ravikumar',
        type: 'action',
        title: 'Author & Curriculum Director: Aarti S Ravikumar',
        subtitle: 'Chief Architect of the Massachusetts RMV Licensure & Psychometric Assessment Framework',
        snippet: 'Curated 300+ statutory questions, 5 statutory chapter digests, and predictive cognitive diagnostic models grounded in Massachusetts General Laws Chapter 90 (M.G.L. c. 90).',
        badge: 'Author Attribution',
        metadata: 'Aarti S Ravikumar, author, creator, curator, citation, APA, MLA, BibTeX, psychometrics, credit',
        actionText: 'View Author Profile',
        onSelect: () => {
          onClose();
          onOpenCitationModal?.();
        },
      },
      {
        id: 'citation-academic-aarti',
        type: 'action',
        title: 'Academic Citation: Ravikumar, A. S. (2026)',
        subtitle: 'Official Scholarly Citation in APA, MLA, Chicago, and BibTeX Formats',
        snippet: 'Cite this work: Ravikumar, A. S. (2026). Massachusetts RMV Driver\'s Manual Master Examination and Psychometric Assessment Framework. RMV Master Academy.',
        badge: 'Academic Citation',
        metadata: 'Aarti S Ravikumar, citation, cite, BibTeX, APA 7th, MLA 9th, Chicago, bibliography, references',
        actionText: 'Open Citations',
        onSelect: () => {
          onClose();
          onOpenCitationModal?.();
        },
      }
    );

    // 1. Direct App Actions
    items.push(
      {
        id: 'action-simulation',
        type: 'action',
        title: 'Launch Official 25-Question Simulation',
        subtitle: 'Timed 25-minute test with 72% statutory pass threshold (18/25)',
        badge: 'Official Simulation',
        actionText: 'Start Simulation',
        onSelect: () => {
          onClose();
          onStartExam('simulation');
        },
      },
      {
        id: 'action-diagnostic',
        type: 'action',
        title: 'Launch Full 40-Question Diagnostic',
        subtitle: 'Full-spectrum psychometric evaluation spanning all cognitive domains',
        badge: 'Diagnostic Test',
        actionText: 'Start Diagnostic',
        onSelect: () => {
          onClose();
          onStartExam('diagnostic');
        },
      },
      {
        id: 'action-bank',
        type: 'action',
        title: 'Explore Question Bank Repository',
        subtitle: `Browse all ${masterQuestions.length} Massachusetts RMV questions with statutory citations`,
        badge: 'Question Repository',
        actionText: 'Open Question Bank',
        onSelect: () => {
          onClose();
          onNavigateToTab('bank');
        },
      },
      {
        id: 'action-honours',
        type: 'action',
        title: 'View Academic Honours & Visual Badges Registry',
        subtitle: 'Review unlocked badges, current pass streaks, and scholastic distinctions',
        badge: 'Academic Honours',
        actionText: 'View Honours',
        onSelect: () => {
          onClose();
          onNavigateToTab('achievements');
        },
      },
      {
        id: 'action-history',
        type: 'action',
        title: 'View Assessment History & Psychometric Reports',
        subtitle: 'Inspect past scores, response times, pacing ratings, and remediation plans',
        badge: 'Performance History',
        actionText: 'View History',
        onSelect: () => {
          onClose();
          onNavigateToTab('history');
        },
      }
    );

    // 2. Chapters & Manual Topics
    chaptersData.forEach((ch) => {
      // Entire Chapter Card
      items.push({
        id: `manual-ch-${ch.chapterNumber}`,
        type: 'manual_topic',
        title: `Chapter ${ch.chapterNumber}: ${ch.title}`,
        subtitle: ch.subtitle,
        snippet: ch.executiveSummary,
        statute: ch.statutoryBasis,
        chapterNumber: ch.chapterNumber,
        badge: `Chapter ${ch.chapterNumber} Manual`,
        actionText: 'Read Chapter',
        onSelect: () => {
          onClose();
          onOpenStudyChapter(ch.chapterNumber);
        },
      });

      // Core Principles within the chapter
      ch.corePrinciples.forEach((cp, idx) => {
        items.push({
          id: `manual-cp-${ch.chapterNumber}-${idx}`,
          type: 'manual_topic',
          title: cp.heading,
          subtitle: `Chapter ${ch.chapterNumber} · ${ch.title}`,
          snippet: cp.details.join(' '),
          statute: cp.criticalNumber || ch.statutoryBasis,
          chapterNumber: ch.chapterNumber,
          badge: 'Driver Manual Topic',
          actionText: 'Open Chapter Guide',
          onSelect: () => {
            onClose();
            onOpenStudyChapter(ch.chapterNumber);
          },
        });
      });

      // Statutory Tables
      ch.statutoryTables?.forEach((st, idx) => {
        const rowSummary = st.rows.map((r) => r.join(' : ')).join(' | ');
        items.push({
          id: `manual-st-${ch.chapterNumber}-${idx}`,
          type: 'statute_table',
          title: st.title,
          subtitle: `Chapter ${ch.chapterNumber} Statutory Table · ${ch.title}`,
          snippet: st.description ? `${st.description}. ${rowSummary}` : rowSummary,
          statute: ch.statutoryBasis,
          chapterNumber: ch.chapterNumber,
          badge: 'Statutory Table',
          actionText: 'View Table',
          onSelect: () => {
            onClose();
            onOpenStudyChapter(ch.chapterNumber);
          },
        });
      });

      // Chapter Drills
      items.push({
        id: `action-drill-ch-${ch.chapterNumber}`,
        type: 'action',
        title: `Drill Chapter ${ch.chapterNumber}: ${ch.title}`,
        subtitle: `Targeted practice questions exclusively from Chapter ${ch.chapterNumber}`,
        chapterNumber: ch.chapterNumber,
        badge: `Chapter ${ch.chapterNumber} Drill`,
        actionText: 'Start Drill',
        onSelect: () => {
          onClose();
          onStartExam('chapter_drill', ch.chapterNumber);
        },
      });
    });

    // 3. Question Bank Questions
    masterQuestions.forEach((q) => {
      items.push({
        id: `q-${q.id}`,
        type: 'question',
        title: q.question,
        subtitle: `Chapter ${q.chapter} · ${q.topic} (${q.cognitiveDomain})`,
        snippet: `Correct Answer (${q.correctAnswer}): ${q.options[q.correctIndex]}. ${q.explanation}`,
        statute: q.statute || q.source,
        chapterNumber: q.chapter,
        badge: `Q-Bank (${q.difficulty})`,
        metadata: q.tags.join(', '),
        actionText: 'Drill Question',
        questionData: q,
        onSelect: () => {
          onClose();
          onStartExam('weak_spots', q.chapter, [q.id]);
        },
      });
    });

    // 4. Academic Honours
    ACHIEVEMENTS_CATALOG.forEach((ach) => {
      items.push({
        id: `honour-${ach.id}`,
        type: 'honour',
        title: `Badge: ${ach.title}`,
        subtitle: `${ach.rarity} Honour · ${ach.criteria}`,
        snippet: ach.description,
        statute: ach.statuteReference,
        badge: `${ach.rarity} Badge`,
        actionText: 'View Honours',
        onSelect: () => {
          onClose();
          onNavigateToTab('achievements');
        },
      });
    });

    return items;
  }, [onClose, onNavigateToTab, onOpenStudyChapter, onStartExam, onOpenCitationModal]);

  // Filtered results based on search query and category filter
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = indexedItems;
    if (selectedFilter !== 'all') {
      list = list.filter((item) => item.type === selectedFilter);
    }

    if (!q) {
      // If query is empty, return high-yield recommended manual topics & default actions
      return list.filter((item) => item.type === 'action' || item.id.startsWith('manual-ch-')).slice(0, 8);
    }

    const tokens = q.split(/\s+/).filter(Boolean);

    return list
      .map((item) => {
        const textToSearch = `${item.title} ${item.subtitle} ${item.snippet || ''} ${item.statute || ''} ${item.metadata || ''}`.toLowerCase();
        
        let matchScore = 0;
        let allTokensPresent = true;

        for (const token of tokens) {
          if (textToSearch.includes(token)) {
            // Higher weight if title contains the token
            if (item.title.toLowerCase().includes(token)) {
              matchScore += 10;
            } else if (item.statute?.toLowerCase().includes(token)) {
              matchScore += 8;
            } else if (item.subtitle.toLowerCase().includes(token)) {
              matchScore += 5;
            } else {
              matchScore += 2;
            }
          } else {
            allTokensPresent = false;
            break;
          }
        }

        return { item, matchScore, allTokensPresent };
      })
      .filter((entry) => entry.allTokensPresent && entry.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .map((entry) => entry.item)
      .slice(0, 25);
  }, [indexedItems, query, selectedFilter]);

  // Keep selected index in bounds
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (searchResults.length > 0 ? (prev + 1) % searchResults.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          searchResults.length > 0 ? (prev - 1 + searchResults.length) % searchResults.length : 0
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (searchResults[selectedIndex]) {
          searchResults[selectedIndex].onSelect();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, searchResults, selectedIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const filters: { id: 'all' | SearchItemType; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'manual_topic', label: 'Manual Topics' },
    { id: 'statute_table', label: 'Laws & Tables' },
    { id: 'question', label: 'Questions & Answers' },
    { id: 'action', label: 'Simulations & Drills' },
    { id: 'honour', label: 'Academic Honours' },
  ];

  const getTypeIcon = (type: SearchItemType) => {
    switch (type) {
      case 'manual_topic':
        return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'statute_table':
        return <Scale className="w-4 h-4 text-purple-600" />;
      case 'question':
        return <HelpCircle className="w-4 h-4 text-emerald-600" />;
      case 'honour':
        return <Award className="w-4 h-4 text-amber-500" />;
      case 'action':
      default:
        return <Target className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 md:pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="RMV Driver's Manual and Question Bank Command Search"
      >
        {/* Top Input Bar */}
        <div className="p-4 md:p-5 border-b border-stone-200 flex items-center gap-3 bg-stone-50/70">
          <Search className="w-5 h-5 text-amber-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search manual topics, statutory codes, fines, questions... (e.g. 'curfew', 'rotary', '$105', 'M.G.L. 90 § 8')"
            className="w-full bg-transparent text-sm md:text-base text-slate-900 placeholder-stone-400 focus:outline-none font-medium"
          />
          {query ? (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-stone-400 bg-stone-200/80 px-2 py-0.5 rounded border border-stone-300">
              <span>ESC</span>
            </div>
          )}
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2 border-b border-stone-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none bg-white">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-slate-900 text-amber-300 shadow-2xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto p-2 divide-y divide-stone-100 flex-1">
          {searchResults.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-serif font-bold text-slate-900">
                No Results Found
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                No topics, statutes, or questions matched "{query}". Try searching for statutory terms like <span className="font-mono text-amber-700">"JOL"</span>, <span className="font-mono text-amber-700">"rotary"</span>, <span className="font-mono text-amber-700">"speeding"</span>, or <span className="font-mono text-amber-700">"Chapter 1"</span>.
              </p>
            </div>
          ) : (
            searchResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  data-index={index}
                  onClick={item.onSelect}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-3.5 rounded-2xl transition-all cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-amber-50/90 border border-amber-300/80 shadow-xs ring-1 ring-amber-400/30'
                      : 'hover:bg-stone-50/80 border border-transparent'
                  }`}
                >
                  {/* Category icon */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-amber-100 text-amber-900' : 'bg-stone-100'
                    }`}
                  >
                    {getTypeIcon(item.type)}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.badge && (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200 font-semibold">
                          {item.badge}
                        </span>
                      )}
                      {item.statute && (
                        <span className="text-[10px] font-mono text-amber-800 bg-amber-100/70 px-1.5 py-0.2 rounded border border-amber-200">
                          {item.statute}
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-stone-400">
                        {item.subtitle}
                      </span>
                    </div>

                    <h4 className="text-sm font-serif font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>

                    {item.snippet && (
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {item.snippet}
                      </p>
                    )}
                  </div>

                  {/* Action Hint */}
                  <div className="shrink-0 flex items-center gap-1 self-center">
                    <div
                      className={`text-xs font-semibold px-2.5 py-1.5 rounded-xl flex items-center gap-1 transition-all ${
                        isSelected
                          ? 'bg-slate-900 text-amber-300 shadow-2xs'
                          : 'text-stone-400 hover:text-stone-700'
                      }`}
                    >
                      <span className="hidden sm:inline text-[11px]">{item.actionText}</span>
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="px-4 py-3 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between text-[11px] font-mono text-stone-500 gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-300 text-stone-700 shadow-2xs">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-300 text-stone-700 shadow-2xs">↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-300 text-stone-700 shadow-2xs">↵</kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-300 text-stone-700 shadow-2xs">ESC</kbd>
              Close
            </span>
          </div>

          <div className="text-stone-400 text-[10px]">
            {searchResults.length} match{searchResults.length === 1 ? '' : 'es'} across Manual & Question Bank
          </div>
        </div>
      </div>
    </div>
  );
};
