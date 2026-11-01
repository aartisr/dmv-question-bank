import React, { useMemo, useState } from 'react';
import { 
  Award, 
  Clock, 
  Zap, 
  BookOpen, 
  Target, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  Layers,
  ChevronRight,
  Flame,
  HelpCircle,
  AlertTriangle,
  RotateCcw,
  BookMarked,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Trophy,
  Search
} from 'lucide-react';

import { chaptersData } from '../data/chaptersData';
import { masterQuestions } from '../data/questionsData';
import { PsychometricReport, AcademicAchievement } from '../types';
import { AchievementBadge } from './AchievementBadge';

interface UserDashboardProps {
  focusTime: number; // in seconds
  xp: number;
  recentReports: PsychometricReport[];
  passStreak?: number;
  achievements?: AcademicAchievement[];
  onOpenAchievements?: () => void;
  onOpenSearch?: () => void;
  onStartSimulation: () => void;
  onStartDiagnostic: () => void;

  onOpenStudyChapter: (chapterNumber: 1 | 2 | 3 | 4 | 5) => void;
  onStartChapterDrill: (chapterNumber: 1 | 2 | 3 | 4 | 5) => void;
  onViewReport: (report: PsychometricReport) => void;
  onViewAllHistory: () => void;
  onOpenQuestionBank: () => void;
  onOpenFlashcards: () => void;
  onRemediateGaps?: (questionIds: string[]) => void;
  onOpenCitationModal?: () => void;
}

interface KnowledgeGap {
  topic: string;
  chapter: 1 | 2 | 3 | 4 | 5;
  statute?: string;
  domain?: string;
  missCount: number;
  reportCount: number;
  questionIds: string[];
  sampleQuestions: { id: string; text: string; explanation: string }[];
}

export const UserDashboard: React.FC<UserDashboardProps> = ({
  focusTime,
  xp,
  recentReports,
  passStreak = 0,
  achievements = [],
  onOpenAchievements,
  onOpenSearch,
  onStartSimulation,
  onStartDiagnostic,
  onOpenStudyChapter,
  onStartChapterDrill,
  onViewReport,
  onViewAllHistory,
  onOpenQuestionBank,
  onOpenFlashcards,
  onRemediateGaps,
  onOpenCitationModal,
}) => {
  const [expandedGapTopic, setExpandedGapTopic] = useState<string | null>(null);



  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hrs > 0) return `${hrs}h ${mins}m`;
    return `${mins}m ${seconds % 60}s`;
  };

  const level = Math.floor(xp / 100) + 1;
  const progressToNextLevel = xp % 100;

  // Compute composite readiness
  const latestReport = recentReports.length > 0 ? recentReports[0] : null;
  const avgScore =
    recentReports.length > 0
      ? Math.round(
          recentReports.reduce((acc, r) => acc + r.scorePercentage, 0) / recentReports.length
        )
      : 0;

  const passedTests = recentReports.filter((r) => r.passed).length;

  // Analyze Knowledge Gaps based strictly on deficientItems from the LAST 3 performance reports
  const lastThreeReports = useMemo(() => recentReports.slice(0, 3), [recentReports]);

  const knowledgeGaps: KnowledgeGap[] = useMemo(() => {
    if (lastThreeReports.length === 0) return [];

    const gapMap: Record<string, KnowledgeGap> = {};

    lastThreeReports.forEach((report) => {
      const topicsSeenInThisReport = new Set<string>();

      (report.deficientItems || []).forEach((item) => {
        const matchedQ = masterQuestions.find((q) => q.id === item.id);
        const topicName =
          item.topic ||
          matchedQ?.topic ||
          (item.chapter === 1
            ? 'Junior Operator Law & Licensing'
            : item.chapter === 2
            ? 'Seat Belts, Airbags & Passenger Safety'
            : item.chapter === 3
            ? 'OUI, Suspensions & Speeding Fines'
            : item.chapter === 4
            ? 'Rotary Right-of-Way & Signals'
            : 'Adverse Conditions & Breakdown Flares');

        const chapter = (item.chapter as 1 | 2 | 3 | 4 | 5) || (matchedQ?.chapter as 1 | 2 | 3 | 4 | 5) || 1;
        const statute = item.statute || matchedQ?.statute;
        const domain = matchedQ?.cognitiveDomain || 'Statutory Thresholds';

        if (!gapMap[topicName]) {
          gapMap[topicName] = {
            topic: topicName,
            chapter,
            statute,
            domain,
            missCount: 0,
            reportCount: 0,
            questionIds: [],
            sampleQuestions: [],
          };
        }

        gapMap[topicName].missCount += 1;
        if (!gapMap[topicName].questionIds.includes(item.id)) {
          gapMap[topicName].questionIds.push(item.id);
          if (gapMap[topicName].sampleQuestions.length < 2) {
            gapMap[topicName].sampleQuestions.push({
              id: item.id,
              text: item.question,
              explanation: item.explanation,
            });
          }
        }

        if (!topicsSeenInThisReport.has(topicName)) {
          topicsSeenInThisReport.add(topicName);
          gapMap[topicName].reportCount += 1;
        }
      });
    });

    return Object.values(gapMap).sort((a, b) => {
      if (b.reportCount !== a.reportCount) return b.reportCount - a.reportCount;
      return b.missCount - a.missCount;
    });
  }, [lastThreeReports]);

  const allGapQuestionIds = useMemo(() => {
    const ids = new Set<string>();
    knowledgeGaps.forEach((g) => g.questionIds.forEach((id) => ids.add(id)));
    return Array.from(ids);
  }, [knowledgeGaps]);

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Hero Exam Readiness & Quick Start */}
      <div className="bg-slate-900 text-amber-50 rounded-3xl p-8 md:p-10 shadow-lg border border-slate-800 relative overflow-hidden">
        {/* Subtle geometric academic background accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-amber-500/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-amber-400">
              <span className="px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 font-semibold uppercase">
                Massachusetts RMV Standards · April 2026 Manual
              </span>
              <span>·</span>
              <span className="text-stone-300 font-sans font-normal">
                Authored by{' '}
                <a
                  href="https://ai-aarti.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 font-semibold hover:underline"
                >
                  Aarti S Ravikumar
                </a>{' '}
                (<a
                  href="https://saugus.pioneercss.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 font-semibold hover:underline"
                >
                  PCSS II
                </a>)
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Master the Massachusetts RMV Written Examination
            </h1>

            <p className="text-stone-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Authoritative, full-spectrum exam preparation grounded in Massachusetts General Laws Chapter 90 and the 5 official driver manual chapters. Rigorous psychometric diagnostics and targeted drills ensure 100% exam day confidence.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onStartSimulation}
                className="px-6 py-3.5 rounded-xl bg-amber-400 text-slate-950 font-serif font-bold text-base hover:bg-amber-300 transition-all flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Launch Official 25-Question Simulation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onStartDiagnostic}
                className="px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-stone-200 text-sm font-medium hover:bg-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Full 40-Q Diagnostic</span>
              </button>

              {onOpenSearch && (
                <button
                  onClick={onOpenSearch}
                  className="px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-amber-300 text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  title="Search RMV Driver's Manual & Question Bank (⌘K / Ctrl+K)"
                >
                  <Search className="w-4 h-4 text-amber-400" />
                  <span>Command Search</span>
                  <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-stone-300">
                    ⌘K
                  </kbd>
                </button>
              )}
            </div>
          </div>


          {/* Quick Readiness Widget */}
          <div className="md:col-span-4 bg-slate-950/60 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block">
              Predicted Pass Probability
            </span>
            <div className="text-5xl font-serif font-bold text-amber-400">
              {latestReport ? `${latestReport.predictedPassRate}%` : '85%'}
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {latestReport
                ? `Based on recent diagnostic score (${latestReport.scorePercentage}%). Statutory passing threshold is 18 of 25 (72%).`
                : 'Complete an initial simulation or chapter drill to calculate your empirical RMV passing likelihood.'}
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-emerald-400 inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                25 Questions · 25 Minutes · 72% Criterion
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Gamification & Focus Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4 text-blue-600" />
            Study Focus Time
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">
            {formatTime(focusTime)}
          </div>
          <p className="text-[11px] text-stone-500 mt-1">Accumulated manual interaction</p>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-wider mb-1">
            <Zap className="w-4 h-4 text-amber-600" />
            Mastery Rank
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">
            Level {level}
          </div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-amber-500 h-full rounded-full" style={{ width: `${progressToNextLevel}%` }} />
          </div>
          <p className="text-[10px] text-stone-500 mt-1">{xp} total XP earned</p>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-wider mb-1">
            <Award className="w-4 h-4 text-emerald-600" />
            Exam Simulations
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">
            {passedTests} / {recentReports.length}
          </div>
          <p className="text-[11px] text-stone-500 mt-1">Passed simulations (≥72%)</p>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4 text-purple-600" />
            Repository Bank
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">
            {masterQuestions.length} Questions
          </div>
          <p className="text-[11px] text-stone-500 mt-1">All 5 statutory chapters</p>
        </div>
      </div>

      {/* ACADEMIC HONOURS & VISUAL BADGES SECTION */}
      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-wider font-semibold">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>Academic Distinction & Gamified Mastery</span>
              <span>·</span>
              <span className="text-stone-500">M.G.L. c. 90 Licensure Benchmark</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2.5">
              <span>Academic Honours & Visual Badges</span>
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                {achievements.filter((a) => a.unlocked).length} / {achievements.length} Conferred
              </span>
            </h2>
            <p className="text-slate-600 text-xs md:text-sm max-w-2xl leading-relaxed">
              Unlock prestigious academic medals through diagnostic accuracy, optimal exam pacing, unbroken passing streaks, and full-spectrum mastery of Massachusetts General Laws.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Streak Counter Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold shadow-2xs">
              <Flame className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>{passStreak} Pass Streak</span>
            </div>

            {onOpenAchievements && (
              <button
                onClick={onOpenAchievements}
                className="px-4 py-2 rounded-xl bg-slate-900 text-amber-300 hover:bg-slate-800 text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>View Full Registry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Preview of key academic honours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(achievements.length > 0 ? achievements.slice(0, 4) : []).map((badge) => (
            <AchievementBadge
              key={badge.id}
              achievement={badge}
              size="md"
              showDetails={true}
              onActionClick={
                !badge.unlocked
                  ? () => {
                      if (badge.id.includes('chapter_1') || badge.id === 'curfew_jol_specialist') {
                        onStartChapterDrill(1);
                      } else if (badge.id.includes('chapter_2')) {
                        onStartChapterDrill(2);
                      } else if (badge.id.includes('chapter_3') || badge.id === 'speeding_fine_scholar') {
                        onStartChapterDrill(3);
                      } else if (badge.id.includes('chapter_4') || badge.id === 'rotary_maestro') {
                        onStartChapterDrill(4);
                      } else if (badge.id.includes('chapter_5')) {
                        onStartChapterDrill(5);
                      } else {
                        onStartSimulation();
                      }
                    }
                  : undefined
              }
            />
          ))}
        </div>

        {/* Secondary ribbon with quick access to chapter masters */}
        <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-stone-700">
            <BookMarked className="w-4 h-4 text-amber-700" />
            <span className="font-serif font-semibold">
              Curricular Badges:
            </span>
            <span className="text-stone-500">
              Master Chapters 1 through 5 to confer the prestigious Grand Academic Laureate platinum honour.
            </span>
          </div>

          {onOpenAchievements && (
            <button
              onClick={onOpenAchievements}
              className="text-amber-800 font-semibold hover:text-amber-950 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Explore all {achievements.length} badges</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </section>

      {/* KNOWLEDGE GAPS SECTION (Based on Deficient Items from Last 3 Performance Reports) */}

      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Targeted Remediation Engine</span>
              <span>·</span>
              <span className="text-stone-500">
                Derived from Last {lastThreeReports.length} Performance Report{lastThreeReports.length === 1 ? '' : 's'}
              </span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2.5">
              <span>Knowledge Gaps & High-Yield Weak Spots</span>
              {knowledgeGaps.length > 0 && (
                <span className="text-xs font-sans font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                  {knowledgeGaps.length} Topic{knowledgeGaps.length === 1 ? '' : 's'} Identified
                </span>
              )}
            </h2>
            <p className="text-slate-600 text-xs md:text-sm max-w-2xl leading-relaxed">
              Specific statutory regulations and cognitive areas where you recorded incorrect answers during your last 3 assessment sessions. Master these concepts to eliminate failure risks on test day.
            </p>
          </div>

          {knowledgeGaps.length > 0 && onRemediateGaps && allGapQuestionIds.length > 0 && (
            <button
              onClick={() => onRemediateGaps(allGapQuestionIds)}
              className="px-4 py-2.5 rounded-xl bg-slate-900 text-amber-300 hover:bg-slate-800 text-xs md:text-sm font-semibold transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-xs self-start md:self-auto"
            >
              <Target className="w-4 h-4 text-amber-400" />
              <span>Drill All {allGapQuestionIds.length} Missed Concept{allGapQuestionIds.length === 1 ? '' : 's'}</span>
            </button>
          )}
        </div>

        {knowledgeGaps.length > 0 ? (
          <div className="space-y-4">
            <div className="grid gap-3.5">
              {knowledgeGaps.map((gap, index) => {
                const isExpanded = expandedGapTopic === gap.topic;
                const isFrequent = gap.reportCount >= 2;

                return (
                  <div
                    key={index}
                    className={`border rounded-2xl p-5 transition-all ${
                      isFrequent
                        ? 'bg-rose-50/40 border-rose-200/90 hover:border-rose-300'
                        : 'bg-stone-50/50 border-stone-200/90 hover:border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-slate-900 text-amber-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                            Ch.{gap.chapter}
                          </span>
                          
                          <span
                            className={`text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded border ${
                              isFrequent
                                ? 'bg-rose-100 text-rose-800 border-rose-300'
                                : 'bg-amber-100 text-amber-800 border-amber-300'
                            }`}
                          >
                            {isFrequent ? 'Persistent Gap (Multiple Tests)' : 'Needs Review'}
                          </span>

                          {gap.statute && (
                            <span className="text-[11px] font-mono text-stone-600 bg-white border border-stone-200 px-2 py-0.5 rounded">
                              {gap.statute}
                            </span>
                          )}

                          {gap.domain && (
                            <span className="text-[11px] text-stone-500 font-sans">
                              · {gap.domain}
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-serif font-bold text-slate-900 pt-0.5">
                          {gap.topic}
                        </h3>

                        <p className="text-xs text-stone-600">
                          Recorded <strong className="text-slate-900 font-semibold">{gap.missCount} incorrect response{gap.missCount === 1 ? '' : 's'}</strong> across {gap.reportCount} of your last {lastThreeReports.length} test{lastThreeReports.length === 1 ? '' : 's'}.
                        </p>
                      </div>

                      {/* Topic Actions */}
                      <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
                        {gap.sampleQuestions.length > 0 && (
                          <button
                            onClick={() => setExpandedGapTopic(isExpanded ? null : gap.topic)}
                            className="px-3 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-slate-700 text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <span>{isExpanded ? 'Hide Concept' : 'View Question'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        )}

                        <button
                          onClick={() => onOpenStudyChapter(gap.chapter)}
                          className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Study Ch. {gap.chapter}</span>
                        </button>

                        <button
                          onClick={() => onStartChapterDrill(gap.chapter)}
                          className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
                        >
                          <Target className="w-3.5 h-3.5" />
                          <span>Drill 15-Q</span>
                        </button>
                      </div>
                    </div>

                    {/* Expandable Sample Missed Questions & Remediation Excerpt */}
                    {isExpanded && gap.sampleQuestions.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-stone-200/80 space-y-3 bg-white/80 p-4 rounded-xl border border-stone-200">
                        <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                          Sample Missed Question & Statutory Rule:
                        </div>
                        {gap.sampleQuestions.map((sq, sqIdx) => (
                          <div key={sq.id || sqIdx} className="space-y-1.5 text-xs">
                            <p className="font-semibold text-slate-900">
                              Q: {sq.text}
                            </p>
                            <p className="text-slate-700 bg-stone-50 p-2.5 rounded-lg border border-stone-200 leading-relaxed">
                              <span className="font-semibold text-emerald-800 block mb-0.5">Official RMV Standard:</span>
                              {sq.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : lastThreeReports.length > 0 ? (
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-emerald-950">
              Zero Critical Knowledge Gaps Detected
            </h3>
            <p className="text-xs text-emerald-800 max-w-md mx-auto">
              Across your last {lastThreeReports.length} assessment session{lastThreeReports.length === 1 ? '' : 's'}, you demonstrated flawless accuracy with no deficient items recorded.
            </p>
          </div>
        ) : (
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center mx-auto">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-slate-900">
              No Assessment Data Available Yet
            </h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Take an official 25-question simulation or a diagnostic test to populate your automated knowledge gaps analysis and personalized study prescriptions.
            </p>
            <button
              onClick={onStartSimulation}
              className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Take Initial Simulation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </section>

      {/* Official 5 Study Chapters - Working Interactive Hub */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800">
              Massachusetts Driver's Manual Core Curriculum
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              Authoritative Study Modules (Chapters 1–5)
            </h2>
            <p className="text-xs md:text-sm text-slate-600">
              Select any chapter below to explore statutory rules, high-yield summary notes, and active recall flashcards.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenQuestionBank}
              className="px-3.5 py-1.5 rounded-lg border border-stone-300 text-xs font-medium text-slate-700 hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Browse Question Bank
            </button>
            <button
              onClick={onOpenFlashcards}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-300 text-amber-900 text-xs font-medium hover:bg-amber-500/20 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              Flashcard Vault
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chaptersData.map((ch) => {
            const chapterQuestionCount = masterQuestions.filter((q) => q.chapter === ch.chapterNumber).length;
            return (
              <div
                key={ch.id}
                className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                      0{ch.chapterNumber}
                    </span>
                    <span className="text-[11px] font-mono text-stone-500">
                      {ch.manualPages}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                      {ch.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {ch.subtitle}
                    </p>
                  </div>

                  <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 text-[11px] text-stone-600 space-y-1">
                    <div className="flex items-center justify-between font-mono">
                      <span>Statutory Basis:</span>
                      <span className="font-semibold text-slate-800">{ch.statutoryBasis}</span>
                    </div>
                    <div className="flex items-center justify-between font-mono">
                      <span>Practice Items:</span>
                      <span className="font-semibold text-slate-800">{chapterQuestionCount} Questions</span>
                    </div>
                    <div className="flex items-center justify-between font-mono">
                      <span>Active Flashcards:</span>
                      <span className="font-semibold text-slate-800">{ch.flashcards.length} Cards</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenStudyChapter(ch.chapterNumber)}
                    className="flex-1 py-2 rounded-lg bg-stone-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Study Chapter
                  </button>
                  <button
                    onClick={() => onStartChapterDrill(ch.chapterNumber)}
                    className="flex-1 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Target className="w-3.5 h-3.5" />
                    Drill 15-Q
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Assessment Runs */}
      {recentReports.length > 0 && (
        <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200">
            <div>
              <h2 className="text-lg font-serif font-bold text-slate-900">
                Recent Assessment History
              </h2>
              <p className="text-xs text-stone-500">
                Performance across your latest simulations and diagnostic tests.
              </p>
            </div>
            <button
              onClick={onViewAllHistory}
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
            >
              <span>View Full Ledger</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="divide-y divide-stone-100">
            {recentReports.slice(0, 3).map((rep) => (
              <div
                key={rep.id}
                className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-stone-50/70 p-2 rounded-lg transition-colors cursor-pointer"
                onClick={() => onViewReport(rep)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
                      rep.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {rep.scorePercentage}%
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900">
                      {rep.mode === 'simulation'
                        ? 'Official 25-Q RMV Simulation'
                        : rep.mode === 'diagnostic'
                        ? '40-Q Comprehensive Diagnostic'
                        : 'Chapter Practice Drill'}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-mono">
                      {rep.date} · {rep.correctCount}/{rep.totalQuestions} Correct · {rep.avgResponseTimeSec}s avg pace
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      rep.passed
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-rose-50 text-rose-800 border-rose-300'
                    }`}
                  >
                    {rep.passed ? 'Passed RMV Standard' : 'Did Not Pass'}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-0.5">
                    View Report <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
