import React, { useState, useMemo, useEffect } from 'react';
import { chaptersData } from '../data/chaptersData';
import { StudyChapter } from '../types';
import { BookOpen, Award, CheckCircle2, RotateCw, ArrowRight, BookMarked, Layers, Search, X, ChevronRight, FileText } from 'lucide-react';

interface StudyManualViewerProps {
  initialChapterId?: string;
  onLaunchChapterDrill: (chapterNumber: 1 | 2 | 3 | 4 | 5) => void;
}

export const StudyManualViewer: React.FC<StudyManualViewerProps> = ({
  initialChapterId = 'ch1',
  onLaunchChapterDrill,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(initialChapterId);
  const [studyTab, setStudyTab] = useState<'guide' | 'flashcards'>('guide');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (initialChapterId) {
      setSelectedChapterId(initialChapterId);
    }
  }, [initialChapterId]);


  const currentChapter = chaptersData.find((ch) => ch.id === selectedChapterId) || chaptersData[0];
  const flashcards = currentChapter.flashcards;
  const currentCard = flashcards[currentCardIndex];

  // Search matches across all chapters
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();

    const results: {
      chapterId: string;
      chapterNumber: 1 | 2 | 3 | 4 | 5;
      chapterTitle: string;
      type: 'Principle' | 'Table' | 'Flashcard';
      title: string;
      snippet: string;
      statute?: string;
    }[] = [];

    chaptersData.forEach((ch) => {
      // Search in core principles
      ch.corePrinciples.forEach((cp) => {
        if (
          cp.heading.toLowerCase().includes(q) ||
          cp.criticalNumber?.toLowerCase().includes(q) ||
          cp.details.some((d) => d.toLowerCase().includes(q))
        ) {
          results.push({
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            type: 'Principle',
            title: cp.heading,
            snippet: cp.details.find((d) => d.toLowerCase().includes(q)) || cp.details[0],
            statute: cp.criticalNumber,
          });
        }
      });

      // Search in tables
      ch.statutoryTables?.forEach((st) => {
        if (
          st.title.toLowerCase().includes(q) ||
          st.description?.toLowerCase().includes(q) ||
          st.rows.some((r) => r.some((c) => String(c).toLowerCase().includes(q)))
        ) {
          results.push({
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            type: 'Table',
            title: st.title,
            snippet: st.description || `Contains statutory thresholds for ${st.title}`,
          });
        }
      });

      // Search in flashcards
      ch.flashcards.forEach((fc) => {
        if (
          fc.front.toLowerCase().includes(q) ||
          fc.back.toLowerCase().includes(q) ||
          fc.category.toLowerCase().includes(q)
        ) {
          results.push({
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            type: 'Flashcard',
            title: fc.front,
            snippet: fc.back,
            statute: fc.statute,
          });
        }
      });
    });

    return results.slice(0, 8);
  }, [searchQuery]);

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const toggleMastered = (id: string) => {
    setMasteredCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Keyboard navigation for flashcards
  useEffect(() => {
    if (studyTab !== 'flashcards') return;

    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextCard();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevCard();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [studyTab, flashcards.length]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Universal Search & Quick Index Bar */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-4 md:p-5 shadow-xs space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Driver's Manual (e.g. 'curfew', '57 inches', 'BAC', 'rotary', 'skid', 'headlights', 'flares')..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 text-xs md:text-sm text-slate-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:bg-white transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Live Search Match Dropdown/Drawer */}
        {searchQuery.trim().length > 0 && (
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
              <span>{searchResults.length} matching sections in manual</span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-amber-800 hover:underline"
              >
                Clear Search
              </button>
            </div>

            {searchResults.length === 0 ? (
              <p className="text-xs text-stone-500 py-2">
                No matching manual entries found for "{searchQuery}". Try terms like "curfew", "speed", "rotary", or "passenger".
              </p>
            ) : (
              <div className="divide-y divide-stone-200/80">
                {searchResults.map((res, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedChapterId(res.chapterId);
                      setStudyTab(res.type === 'Flashcard' ? 'flashcards' : 'guide');
                      setSearchQuery('');
                    }}
                    className="py-2.5 px-2 hover:bg-white rounded-lg cursor-pointer transition-colors flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-200 text-slate-800">
                          Ch. {res.chapterNumber}
                        </span>
                        <span className="text-[11px] font-mono text-amber-800 font-semibold">
                          {res.type}
                        </span>
                        {res.statute && (
                          <span className="text-[10px] font-mono text-stone-500">
                            {res.statute}
                          </span>
                        )}
                      </div>
                      <h5 className="text-xs md:text-sm font-semibold text-slate-900 mt-1 group-hover:text-amber-900 transition-colors">
                        {res.title}
                      </h5>
                      <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                        {res.snippet}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {/* Chapter Selection Ribbon */}
      <div className="bg-white border border-stone-200/80 rounded-xl p-2 shadow-xs">
        <div className="flex flex-wrap gap-1.5 items-center">
          {chaptersData.map((ch) => {
            const isSelected = ch.id === selectedChapterId;
            return (
              <button
                key={ch.id}
                onClick={() => {
                  setSelectedChapterId(ch.id);
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-slate-900 text-amber-100 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100/70'
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-[11px] font-mono flex items-center justify-center font-bold ${isSelected ? 'bg-amber-400 text-slate-950' : 'bg-stone-200 text-slate-700'}`}>
                  {ch.chapterNumber}
                </span>
                <span className="truncate max-w-[130px] md:max-w-[200px]">{ch.title.split(':')[1] || ch.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chapter Header Banner */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-wider">
              <span>Chapter {currentChapter.chapterNumber}</span>
              <span>·</span>
              <span>{currentChapter.manualPages}</span>
              <span>·</span>
              <span className="text-stone-500">{currentChapter.statutoryBasis}</span>
              <span>·</span>
              <span className="text-stone-700 font-semibold lowercase font-sans">Curated by Aarti S Ravikumar</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-tight">
              {currentChapter.title}
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-3xl leading-relaxed">
              {currentChapter.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <div className="inline-flex bg-stone-100 p-1 rounded-lg border border-stone-200">
              <button
                onClick={() => setStudyTab('guide')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  studyTab === 'guide'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Study Guide
              </button>
              <button
                onClick={() => setStudyTab('flashcards')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  studyTab === 'flashcards'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Active Flashcards ({flashcards.length})
              </button>
            </div>

            <button
              onClick={() => onLaunchChapterDrill(currentChapter.chapterNumber)}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-xs group"
            >
              <span>Test This Chapter</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tab 1: Structured Academic Guide */}
        {studyTab === 'guide' && (
          <div className="mt-8 space-y-10 animate-fadeIn">
            {/* Executive Summary */}
            <div className="bg-amber-50/40 border border-amber-200/70 rounded-xl p-5 md:p-6 text-slate-800">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-amber-700" />
                Official Executive Summary
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 font-serif">
                "{currentChapter.executiveSummary}"
              </p>
            </div>

            {/* Core Statutory Principles */}
            <div>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 pb-2 border-b border-stone-200">
                Core Principles & Statutory Mandates
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {currentChapter.corePrinciples.map((principle, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-stone-200/90 bg-stone-50/40 hover:border-stone-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-semibold text-slate-900 text-sm md:text-base">
                          {principle.heading}
                        </h4>
                        {principle.criticalNumber && (
                          <span className="font-mono text-[11px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-stone-200 shrink-0">
                            {principle.criticalNumber}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2 mt-3 text-xs md:text-sm text-slate-600 leading-relaxed list-disc list-inside">
                        {principle.details.map((detail, dIdx) => (
                          <li key={dIdx} className="pl-1">
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statutory Tables */}
            {currentChapter.statutoryTables && currentChapter.statutoryTables.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-lg font-serif font-bold text-slate-900 pb-2 border-b border-stone-200">
                  Statutory Reference Tables & Formulas
                </h3>
                {currentChapter.statutoryTables.map((tbl, tIdx) => (
                  <div key={tIdx} className="border border-stone-200 rounded-xl overflow-hidden shadow-xs bg-white">
                    <div className="bg-stone-100/80 px-5 py-3 border-b border-stone-200">
                      <h4 className="font-serif font-bold text-slate-900 text-sm md:text-base">
                        {tbl.title}
                      </h4>
                      {tbl.description && (
                        <p className="text-xs text-slate-500 mt-0.5">{tbl.description}</p>
                      )}
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-left text-xs md:text-sm">
                        <thead className="bg-stone-50 border-b border-stone-200 text-slate-700 font-semibold">
                          <tr>
                            {tbl.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3.5 font-mono text-xs uppercase tracking-wider">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200">
                          {tbl.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-amber-50/20 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`p-3.5 text-slate-700 ${cIdx === 0 ? 'font-medium text-slate-900' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Visual Callouts */}
            {currentChapter.visualCallouts && currentChapter.visualCallouts.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                {currentChapter.visualCallouts.map((callout, cIdx) => (
                  <div key={cIdx} className="p-4 rounded-xl border border-stone-200 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif font-bold text-sm text-slate-900">{callout.title}</h4>
                      {callout.badge && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                          {callout.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {callout.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Spaced-Repetition Interactive Flashcards */}
        {studyTab === 'flashcards' && (
          <div className="mt-8 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Card {currentCardIndex + 1} of {flashcards.length}</span>
              <div className="flex items-center gap-2">
                <span>Mastered: {Object.values(masteredCards).filter(Boolean).length} / {flashcards.length}</span>
              </div>
            </div>

            {/* Flashcard container */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="min-h-[260px] md:min-h-[300px] border-2 border-dashed border-stone-300 hover:border-slate-800 bg-stone-50/60 rounded-2xl p-8 flex flex-col justify-between cursor-pointer transition-all shadow-xs relative select-none"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 uppercase tracking-wider">
                  {currentCard.category}
                </span>
                <span className="text-amber-800 text-xs font-medium flex items-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" />
                  Click card to flip
                </span>
              </div>

              <div className="py-6 text-center">
                {!isFlipped ? (
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-2">PROMPT</span>
                    <p className="text-lg md:text-xl font-serif font-bold text-slate-900 leading-relaxed max-w-xl mx-auto">
                      {currentCard.front}
                    </p>
                  </div>
                ) : (
                  <div>
                    <span className="text-xs font-mono text-emerald-700 font-semibold block mb-2">STATUTORY ANSWER</span>
                    <p className="text-base md:text-lg text-slate-800 leading-relaxed max-w-xl mx-auto font-medium">
                      {currentCard.back}
                    </p>
                    {currentCard.statute && (
                      <span className="inline-block mt-3 text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded">
                        {currentCard.statute}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <span className="text-[11px] text-slate-400">
                  {isFlipped ? "Showing Verified Solution" : "Tap anywhere to reveal verified answer"}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMastered(currentCard.id);
                  }}
                  className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-colors ${
                    masteredCards[currentCard.id]
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-stone-200 text-slate-700 hover:bg-stone-300'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {masteredCards[currentCard.id] ? 'Mastered' : 'Mark as Mastered'}
                </button>
              </div>
            </div>

            {/* Flashcard Navigation */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrevCard}
                className="px-4 py-2 border border-stone-300 bg-white rounded-lg text-xs md:text-sm font-medium text-slate-700 hover:bg-stone-100 transition-colors"
              >
                Previous Card
              </button>
              <div className="flex gap-1">
                {flashcards.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentCardIndex ? 'w-6 bg-slate-900' : 'w-1.5 bg-stone-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNextCard}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Next Card
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
