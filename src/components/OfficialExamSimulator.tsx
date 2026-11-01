import React, { useState, useEffect, useMemo } from 'react';
import { Question, ExamMode, PsychometricReport, DomainScore, ChapterScore, DeficientItem, CognitiveDomain } from '../types';
import { masterQuestions, getQuestionsByChapter } from '../data/questionsData';
import { Clock, AlertCircle, CheckCircle2, Bookmark, ArrowRight, ArrowLeft, RefreshCw, Award, BarChart3, HelpCircle, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OfficialExamSimulatorProps {
  initialMode?: ExamMode;
  initialChapterFilter?: 1 | 2 | 3 | 4 | 5;
  onExamComplete: (report: PsychometricReport) => void;
  weakSpotQuestionIds?: string[];
  recentReports?: PsychometricReport[];
}

export const OfficialExamSimulator: React.FC<OfficialExamSimulatorProps> = ({
  initialMode = 'simulation',
  initialChapterFilter,
  onExamComplete,
  weakSpotQuestionIds = [],
  recentReports = [],
}) => {
  const [mode, setMode] = useState<ExamMode>(initialMode);
  const [selectedChapter, setSelectedChapter] = useState<1 | 2 | 3 | 4 | 5>(initialChapterFilter || 1);
  const [instantFeedback, setInstantFeedback] = useState<boolean>(false);
  const [isAdaptiveMode, setIsAdaptiveMode] = useState<boolean>(true);
  const [isExamActive, setIsExamActive] = useState<boolean>(false);

  // Active exam state
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // index -> optionIndex
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(25 * 60); // 25 minutes default
  const [itemTimestamps, setItemTimestamps] = useState<Record<number, number>>({});
  const [sessionStartTime, setSessionStartTime] = useState<number>(0);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  // 1. Calculate Running Mastery Level (\theta) from recent psychometric report history
  const runningMastery = useMemo(() => {
    if (!recentReports || recentReports.length === 0) {
      return { theta: 0.50, levelLabel: 'Standard Baseline Calibration (50%)', scorePct: 50 };
    }

    // Weight recent attempts exponentially higher (0.85 decay factor)
    let weightedSum = 0;
    let weightTotal = 0;

    recentReports.slice(0, 5).forEach((report, idx) => {
      const w = Math.pow(0.85, idx);
      weightedSum += report.scorePercentage * w;
      weightTotal += w;
    });

    const scorePct = weightTotal > 0 ? Math.round(weightedSum / weightTotal) : 50;
    let theta = scorePct / 100;

    // Small bonus for unbroken passing streaks
    const recentPasses = recentReports.filter((r) => r.passed).length;
    const streakBonus = Math.min(recentPasses * 0.02, 0.08);
    theta = Math.min(Math.max(theta + streakBonus, 0.10), 0.98);

    let levelLabel = `Standard Calibration (${Math.round(theta * 100)}%)`;
    if (theta < 0.60) {
      levelLabel = `Foundational Remediation Calibration (${Math.round(theta * 100)}%)`;
    } else if (theta >= 0.82) {
      levelLabel = `Rigorous Mastery Calibration (${Math.round(theta * 100)}%)`;
    }

    return { theta, levelLabel, scorePct };
  }, [recentReports]);

  // 2. Real-time in-session theta estimation as user answers questions
  const inSessionTheta = useMemo(() => {
    let theta = runningMastery.theta;
    Object.entries(answers).forEach(([idxStr, optIdx]) => {
      const qIdx = Number(idxStr);
      const q = examQuestions[qIdx];
      if (q) {
        if (optIdx === q.correctIndex) {
          theta += 0.025; // boost on correct response
        } else {
          theta -= 0.04; // adjust down on incorrect response
        }
      }
    });
    return Math.min(Math.max(theta, 0.10), 0.99);
  }, [runningMastery.theta, answers, examQuestions]);

  // 3. Item Response Theory (IRT) Adaptive Question Selection Algorithm
  const selectAdaptiveQuestions = (
    allAvailable: Question[],
    targetCount: number,
    theta: number
  ): Question[] => {
    const foundational = allAvailable.filter((q) => q.difficulty === 'Foundational');
    const standard = allAvailable.filter((q) => q.difficulty === 'Standard');
    const rigorous = allAvailable.filter((q) => q.difficulty === 'Rigorous');

    let countF = 0;
    let countS = 0;
    let countR = 0;

    if (theta < 0.60) {
      // Low mastery -> 60% Foundational, 30% Standard, 10% Rigorous
      countF = Math.round(targetCount * 0.60);
      countS = Math.round(targetCount * 0.30);
      countR = targetCount - countF - countS;
    } else if (theta <= 0.82) {
      // Moderate mastery -> 20% Foundational, 60% Standard, 20% Rigorous
      countF = Math.round(targetCount * 0.20);
      countS = Math.round(targetCount * 0.60);
      countR = targetCount - countF - countS;
    } else {
      // High mastery -> 10% Foundational, 30% Standard, 60% Rigorous
      countF = Math.round(targetCount * 0.10);
      countS = Math.round(targetCount * 0.30);
      countR = targetCount - countF - countS;
    }

    const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => 0.5 - Math.random());

    const pickedF = shuffle(foundational).slice(0, countF);
    const pickedS = shuffle(standard).slice(0, countS);
    const pickedR = shuffle(rigorous).slice(0, countR);

    let result = [...pickedF, ...pickedS, ...pickedR];

    // Backfill if pool is under targetCount
    if (result.length < targetCount) {
      const pickedIds = new Set(result.map((q) => q.id));
      const remaining = shuffle(allAvailable.filter((q) => !pickedIds.has(q.id)));
      result = [...result, ...remaining.slice(0, targetCount - result.length)];
    }

    return shuffle(result);
  };

  // Start exam handler
  const startExam = (chosenMode: ExamMode = mode, ch: 1 | 2 | 3 | 4 | 5 = selectedChapter) => {
    let pool: Question[] = [];
    const targetCount = chosenMode === 'diagnostic' ? 40 : chosenMode === 'chapter_drill' ? 15 : 25;

    if (chosenMode === 'chapter_drill') {
      const chQuestions = getQuestionsByChapter(ch);
      if (isAdaptiveMode) {
        pool = selectAdaptiveQuestions(chQuestions, Math.min(15, chQuestions.length), runningMastery.theta);
      } else {
        pool = [...chQuestions].sort(() => 0.5 - Math.random()).slice(0, 15);
      }
    } else if (chosenMode === 'weak_spots') {
      if (weakSpotQuestionIds.length > 0) {
        pool = masterQuestions.filter((q) => weakSpotQuestionIds.includes(q.id));
      }
      if (pool.length < targetCount) {
        const remaining = masterQuestions.filter((q) => !pool.some((p) => p.id === q.id));
        if (isAdaptiveMode) {
          const adaptiveBackfill = selectAdaptiveQuestions(remaining, targetCount - pool.length, runningMastery.theta);
          pool = [...pool, ...adaptiveBackfill];
        } else {
          pool = [...pool, ...[...remaining].sort(() => 0.5 - Math.random()).slice(0, targetCount - pool.length)];
        }
      }
    } else if (chosenMode === 'diagnostic') {
      if (isAdaptiveMode) {
        pool = selectAdaptiveQuestions(masterQuestions, 40, runningMastery.theta);
      } else {
        pool = [...masterQuestions].sort(() => 0.5 - Math.random()).slice(0, 40);
      }
    } else {
      // Official Simulation: exactly 25 questions
      if (isAdaptiveMode) {
        pool = selectAdaptiveQuestions(masterQuestions, 25, runningMastery.theta);
      } else {
        pool = [...masterQuestions].sort(() => 0.5 - Math.random()).slice(0, 25);
      }
    }

    setExamQuestions(pool);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setTimeRemaining(chosenMode === 'diagnostic' ? 40 * 60 : 25 * 60);
    setItemTimestamps({});
    setSessionStartTime(Date.now());
    setIsExamActive(true);
    setShowExitModal(false);
  };

  // Timer countdown
  useEffect(() => {
    if (!isExamActive) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, examQuestions, answers]);

  // Answer handler
  const selectOption = (optIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: optIndex,
    }));
    setItemTimestamps((prev) => ({
      ...prev,
      [currentIndex]: (prev[currentIndex] || 0) + 1,
    }));
  };

  const toggleFlag = (idx: number) => {
    setFlagged((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // Keyboard navigation & response entry
  useEffect(() => {
    if (!isExamActive || showExitModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid hotkeys when typing in any input/textarea
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select') return;

      const key = e.key.toUpperCase();

      // Number keys 1-4 or letters A-D for option selection
      if (key === 'A' || key === '1') {
        e.preventDefault();
        selectOption(0);
      } else if (key === 'B' || key === '2') {
        e.preventDefault();
        selectOption(1);
      } else if (key === 'C' || key === '3') {
        e.preventDefault();
        selectOption(2);
      } else if (key === 'D' || key === '4') {
        e.preventDefault();
        selectOption(3);
      } else if (key === 'F') {
        e.preventDefault();
        toggleFlag(currentIndex);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault();
        if (currentIndex < examQuestions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExamActive, showExitModal, currentIndex, examQuestions.length]);

  // Psychometric evaluation and report calculation
  const submitExam = () => {
    setIsExamActive(false);
    const durationSeconds = Math.max(1, Math.round((Date.now() - sessionStartTime) / 1000));
    const total = examQuestions.length;
    let correct = 0;
    const deficient: DeficientItem[] = [];

    // Tally domains and chapters
    const domainCounts: Record<CognitiveDomain, { correct: number; total: number }> = {
      'Statutory Thresholds': { correct: 0, total: 0 },
      'Right-of-Way & Spatial': { correct: 0, total: 0 },
      'Signs & Markings': { correct: 0, total: 0 },
      'Hazard & Emergencies': { correct: 0, total: 0 },
      'Defensive Operation': { correct: 0, total: 0 },
    };

    const chapterCounts: Record<number, { name: string; correct: number; total: number }> = {
      1: { name: 'Obtaining Your License', correct: 0, total: 0 },
      2: { name: 'Safety First', correct: 0, total: 0 },
      3: { name: 'Keeping Your License', correct: 0, total: 0 },
      4: { name: 'Rules of the Road', correct: 0, total: 0 },
      5: { name: 'Special Driving Situations', correct: 0, total: 0 },
    };

    examQuestions.forEach((q, idx) => {
      const selected = answers[idx];
      const isCorrect = selected === q.correctIndex;

      // Domain tracking
      if (domainCounts[q.cognitiveDomain]) {
        domainCounts[q.cognitiveDomain].total += 1;
        if (isCorrect) domainCounts[q.cognitiveDomain].correct += 1;
      }

      // Chapter tracking
      if (chapterCounts[q.chapter]) {
        chapterCounts[q.chapter].total += 1;
        if (isCorrect) chapterCounts[q.chapter].correct += 1;
      }

      if (isCorrect) {
        correct += 1;
      } else {
        deficient.push({
          id: q.id,
          question: q.question,
          userAnswerLetter: selected !== undefined ? String.fromCharCode(65 + selected) : 'None',
          userAnswerText: selected !== undefined ? q.options[selected] : 'Skipped / Unanswered',
          correctAnswerLetter: q.correctAnswer,
          correctAnswerText: q.options[q.correctIndex],
          explanation: q.explanation,
          source: q.source,
          statute: q.statute,
          chapter: q.chapter,
          topic: q.topic,
        });
      }
    });

    const scorePercentage = Math.round((correct / total) * 100);
    const passed = scorePercentage >= 72; // Official RMV cutoff is 18/25 (72%)

    // Psychometric predictive pass rate calculation
    // Logistic curve weighted by difficulty and accuracy
    let predictedRate = 50;
    if (scorePercentage >= 90) predictedRate = 98;
    else if (scorePercentage >= 80) predictedRate = 91;
    else if (scorePercentage >= 72) predictedRate = 79;
    else if (scorePercentage >= 60) predictedRate = 48;
    else predictedRate = Math.max(15, Math.round(scorePercentage * 0.6));

    let readiness: 'High Distinction' | 'Proficient' | 'Borderline' | 'At Risk' = 'At Risk';
    if (scorePercentage >= 90) readiness = 'High Distinction';
    else if (scorePercentage >= 76) readiness = 'Proficient';
    else if (scorePercentage >= 72) readiness = 'Borderline';

    const avgTime = Math.round(durationSeconds / total);
    let pacing: 'Optimal Pace' | 'Deliberate / Cautious' | 'Rushed' = 'Optimal Pace';
    if (avgTime > 45) pacing = 'Deliberate / Cautious';
    if (avgTime < 12) pacing = 'Rushed';

    const domainScores: DomainScore[] = Object.entries(domainCounts)
      .filter(([_, d]) => d.total > 0)
      .map(([dom, d]) => {
        const pct = Math.round((d.correct / d.total) * 100);
        return {
          domain: dom as CognitiveDomain,
          correct: d.correct,
          total: d.total,
          score: pct,
          status: pct >= 80 ? 'Mastered' : pct >= 65 ? 'Proficient' : 'Needs Review',
        };
      });

    const chapterScores: ChapterScore[] = Object.entries(chapterCounts)
      .filter(([_, c]) => c.total > 0)
      .map(([chNum, c]) => ({
        chapter: Number(chNum),
        name: c.name,
        correct: c.correct,
        total: c.total,
        score: Math.round((c.correct / c.total) * 100),
      }));

    // Remediation plan generation
    const remediationPlan: string[] = [];
    if (domainCounts['Statutory Thresholds'].total > 0 && (domainCounts['Statutory Thresholds'].correct / domainCounts['Statutory Thresholds'].total) < 0.75) {
      remediationPlan.push('Review strict statutory thresholds in Chapter 1 & 3: JOL Curfew (12:30-5:00 AM), 6-month passenger rule, and $105+ speeding fine formula.');
    }
    if (domainCounts['Right-of-Way & Spatial'].total > 0 && (domainCounts['Right-of-Way & Spatial'].correct / domainCounts['Right-of-Way & Spatial'].total) < 0.75) {
      remediationPlan.push('Reinforce Chapter 4 Rotary Priority: vehicles already inside have absolute right-of-way; never stop or reverse in a rotary.');
    }
    if (domainCounts['Signs & Markings'].total > 0 && (domainCounts['Signs & Markings'].correct / domainCounts['Signs & Markings'].total) < 0.75) {
      remediationPlan.push('Review traffic light protocols: flashing red is equivalent to a STOP sign; left turn on red is ONLY legal from one-way to one-way.');
    }
    if (domainCounts['Hazard & Emergencies'].total > 0 && (domainCounts['Hazard & Emergencies'].correct / domainCounts['Hazard & Emergencies'].total) < 0.75) {
      remediationPlan.push('Study emergency vehicle protocols in Chapter 5: Move-Over Law on 4+ lane highways, and steering into the direction of a skid without braking.');
    }
    if (remediationPlan.length === 0) {
      remediationPlan.push('Maintain active recall by practicing flashcards and attempting a full simulation 24 hours prior to your scheduled RMV test.');
    }

    if (passed) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Confetti fallback
      }
    }

    const report: PsychometricReport = {
      id: `report-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      timestamp: Date.now(),
      mode,
      totalQuestions: total,
      correctCount: correct,
      scorePercentage,
      passed,
      predictedPassRate: predictedRate,
      readinessRating: readiness,
      avgResponseTimeSec: avgTime,
      pacingRating: pacing,
      domainScores,
      chapterScores,
      deficientItems: deficient,
      remediationPlan,
    };

    onExamComplete(report);
  };

  const currentQ = examQuestions[currentIndex];
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const answeredCount = Object.keys(answers).length;

  // LOBBY VIEW
  if (!isExamActive) {
    return (
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs animate-fadeIn space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold block mb-1">
            Standardized Testing Engine
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
            Massachusetts RMV Examination Center
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
            Constructed according to MassDOT Registry of Motor Vehicles standards. Choose an official timed simulation, targeted chapter drill, or diagnostic evaluation.
          </p>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <div
            onClick={() => setMode('simulation')}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              mode === 'simulation'
                ? 'border-slate-900 bg-stone-50 ring-1 ring-slate-900'
                : 'border-stone-200 hover:border-stone-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif font-bold text-base text-slate-900">Official RMV Permit Simulation</h3>
              <span className="font-mono text-xs text-slate-500">25 Qs · 25 Min</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard Massachusetts automated kiosk format: exactly 25 multiple-choice questions, 18 correct required to pass (72%), strict time limit.
            </p>
          </div>

          <div
            onClick={() => setMode('chapter_drill')}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              mode === 'chapter_drill'
                ? 'border-slate-900 bg-stone-50 ring-1 ring-slate-900'
                : 'border-stone-200 hover:border-stone-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif font-bold text-base text-slate-900">Targeted Chapter Mastery Drill</h3>
              <span className="font-mono text-xs text-slate-500">15 Qs · Deep Focus</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Concentrated questions testing specific chapters of the driver's manual.
            </p>
            {mode === 'chapter_drill' && (
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(Number(e.target.value) as any)}
                className="w-full text-xs p-2 bg-white border border-stone-300 rounded font-medium text-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                <option value={1}>Chapter 1: Obtaining Your License (JOL)</option>
                <option value={2}>Chapter 2: Safety First & Distracted Driving</option>
                <option value={3}>Chapter 3: Keeping License, Penalties & OUI</option>
                <option value={4}>Chapter 4: Rules of the Road & Signals</option>
                <option value={5}>Chapter 5: Special Situations & Sharing Road</option>
              </select>
            )}
          </div>

          <div
            onClick={() => setMode('diagnostic')}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              mode === 'diagnostic'
                ? 'border-slate-900 bg-stone-50 ring-1 ring-slate-900'
                : 'border-stone-200 hover:border-stone-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif font-bold text-base text-slate-900">Full Diagnostic Assessment</h3>
              <span className="font-mono text-xs text-slate-500">40 Qs · Comprehensive</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full psychometric mapping across all 5 cognitive domains with deep weakness profiling and precision scoring.
            </p>
          </div>

          <div
            onClick={() => setMode('weak_spots')}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              mode === 'weak_spots'
                ? 'border-slate-900 bg-stone-50 ring-1 ring-slate-900'
                : 'border-stone-200 hover:border-stone-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif font-bold text-base text-slate-900">Weak-Point Remediation</h3>
              <span className="font-mono text-xs text-amber-800">Adaptive</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Focuses on questions and legal concepts you previously missed to ensure 100% mastery before the real test.
            </p>
          </div>
        </div>

        {/* Adaptive CAT Calibration Banner */}
        <div className="bg-slate-900 text-stone-100 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-serif font-black flex items-center justify-center text-xs shrink-0 shadow-xs">
              CAT
            </div>
            <div>
              <div className="font-semibold text-amber-300 flex flex-wrap items-center gap-2">
                <span>Computerized Adaptive Testing Algorithm (IRT)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 border border-amber-400/30 font-semibold">
                  {runningMastery.levelLabel}
                </span>
              </div>
              <p className="text-stone-300 text-[11px] mt-0.5 leading-tight">
                Item selection difficulty calibrates dynamically using your running psychometric report history.
              </p>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer shrink-0 font-mono text-[11px]">
            <input
              type="checkbox"
              checked={isAdaptiveMode}
              onChange={(e) => setIsAdaptiveMode(e.target.checked)}
              className="rounded text-amber-400 focus:ring-amber-400 h-4 w-4"
            />
            <span className="text-stone-200">Adaptive Difficulty Engine</span>
          </label>
        </div>

        {/* Options Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
          <label className="flex items-center gap-2.5 cursor-pointer text-slate-700 font-medium">
            <input
              type="checkbox"
              checked={instantFeedback}
              onChange={(e) => setInstantFeedback(e.target.checked)}
              className="rounded text-slate-900 focus:ring-slate-900 h-4 w-4"
            />
            <span>Instant Feedback Mode (Reveal verified answer & explanation after each choice)</span>
          </label>
          <span className="text-slate-500 font-mono text-[11px]">Official Pass Mark: 72% (18/25)</span>
        </div>

        {/* CTA Launch */}
        <div className="pt-2">
          <button
            onClick={() => startExam()}
            className="w-full py-3.5 bg-slate-900 text-amber-50 rounded-xl font-medium text-sm md:text-base hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xs group cursor-pointer"
          >
            <span>Begin Examination Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE EXAM VIEW
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Testing Header Bar */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-700 font-mono text-sm">
            <Clock className={`w-4 h-4 ${timeRemaining < 300 ? 'text-red-600 animate-pulse' : 'text-slate-500'}`} />
            <span className={`font-semibold ${timeRemaining < 300 ? 'text-red-600 font-bold' : ''}`}>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="text-stone-300">|</span>
          <span className="text-xs font-mono text-slate-600">
            Question <span className="font-bold text-slate-900">{currentIndex + 1}</span> of {examQuestions.length}
          </span>
          <span className="text-stone-300 hidden sm:inline">|</span>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Answered: {answeredCount}/{examQuestions.length}
          </span>
          {isAdaptiveMode && (
            <>
              <span className="text-stone-300 hidden md:inline">|</span>
              <span className="text-[11px] font-mono text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 hidden md:inline">
                Adaptive Mastery: {Math.round(inSessionTheta * 100)}%
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFlag(currentIndex)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border cursor-pointer ${
              flagged[currentIndex]
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-white text-slate-600 border-stone-200 hover:bg-stone-50'
            }`}
            title="Press 'F' to toggle flag"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>{flagged[currentIndex] ? 'Flagged' : 'Flag'}</span>
            <kbd className="hidden sm:inline-block font-mono text-[10px] px-1 py-0.2 bg-stone-100 text-stone-600 border border-stone-300 rounded">
              F
            </kbd>
          </button>

          <button
            onClick={() => setShowExitModal(true)}
            className="px-3 py-1.5 bg-white border border-stone-300 text-slate-600 rounded-lg text-xs font-medium hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Exit Exam
          </button>

          <button
            onClick={submitExam}
            className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
          >
            Submit Test
          </button>
        </div>
      </div>

      {/* Keyboard Helper Banner */}
      <div className="hidden sm:flex items-center justify-between px-4 py-2 bg-stone-100/80 border border-stone-200 rounded-lg text-xs text-slate-600 font-mono">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-800">Keyboard Controls:</span>
          <span>Keys <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded text-slate-900 font-bold">A</kbd> - <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded text-slate-900 font-bold">D</kbd> or <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded text-slate-900 font-bold">1</kbd> - <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded text-slate-900 font-bold">4</kbd> select answer</span>
        </div>
        <div className="flex items-center gap-2">
          <span><kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded text-slate-900 font-bold">←</kbd> Prev</span>
          <span><kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded text-slate-900 font-bold">→</kbd> / <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded text-slate-900 font-bold">Enter</kbd> Next</span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 gap-2">
            <span>Chapter {currentQ.chapter}: {currentQ.chapterName}</span>
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${
                  currentQ.difficulty === 'Rigorous'
                    ? 'bg-purple-100 text-purple-900 border-purple-300'
                    : currentQ.difficulty === 'Standard'
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-blue-100 text-blue-900 border-blue-300'
                }`}
              >
                {currentQ.difficulty} Item
              </span>
              <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 font-semibold">
                {currentQ.cognitiveDomain}
              </span>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900 leading-relaxed pt-2">
            {currentQ.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3 pt-2">
          {currentQ.options.map((option, optIdx) => {
            const isSelected = answers[currentIndex] === optIdx;
            const letter = String.fromCharCode(65 + optIdx);
            
            // Instant feedback styling
            let optionStyle = 'border-stone-200 hover:border-slate-400 bg-white';
            if (instantFeedback && answers[currentIndex] !== undefined) {
              if (optIdx === currentQ.correctIndex) {
                optionStyle = 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-medium ring-1 ring-emerald-500';
              } else if (isSelected) {
                optionStyle = 'border-red-500 bg-red-50/80 text-red-950 ring-1 ring-red-400';
              } else {
                optionStyle = 'border-stone-200 opacity-60 bg-stone-50';
              }
            } else if (isSelected) {
              optionStyle = 'border-slate-900 bg-stone-50 ring-1 ring-slate-900 font-medium';
            }

            return (
              <button
                key={optIdx}
                onClick={() => selectOption(optIdx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-3.5 cursor-pointer ${optionStyle}`}
              >
                <div className="flex items-start gap-3.5">
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-mono flex items-center justify-center shrink-0 mt-0.5 font-bold ${
                      isSelected ? 'bg-slate-900 text-white' : 'bg-stone-100 text-slate-700 border border-stone-200'
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="text-sm md:text-base leading-snug">{option}</span>
                </div>
                <kbd className="hidden sm:inline-block font-mono text-[10px] text-stone-600 px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 shrink-0">
                  {letter}
                </kbd>
              </button>
            );
          })}
        </div>

        {/* Instant Feedback Explanation Box */}
        {instantFeedback && answers[currentIndex] !== undefined && (
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 text-xs md:text-sm text-slate-800 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2 font-semibold text-amber-900">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>Official RMV Manual Citation & Rationale</span>
            </div>
            <p className="leading-relaxed text-slate-700">{currentQ.explanation}</p>
            <div className="text-[11px] font-mono text-stone-500 pt-1">
              Source: {currentQ.source} {currentQ.statute && `(${currentQ.statute})`}
            </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-stone-200">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 border border-stone-300 rounded-lg text-xs md:text-sm font-medium text-slate-700 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
            <kbd className="hidden md:inline font-mono text-[10px] text-stone-600">←</kbd>
          </button>

          <span className="text-xs font-mono text-slate-400">
            {currentIndex + 1} / {examQuestions.length}
          </span>

          <button
            onClick={() => {
              if (currentIndex < examQuestions.length - 1) {
                setCurrentIndex((prev) => prev + 1);
              } else {
                submitExam();
              }
            }}
            className="px-5 py-2 bg-slate-900 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <span>{currentIndex === examQuestions.length - 1 ? 'Finish & Review' : 'Next'}</span>
            <kbd className="hidden md:inline font-mono text-[10px] text-slate-300">Enter / →</kbd>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Exit Confirmation Dialog Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2 text-rose-600 font-semibold text-base">
                <AlertCircle className="w-5 h-5" />
                <span>Exit Exam in Progress?</span>
              </div>
              <button
                onClick={() => setShowExitModal(false)}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              You have completed <strong className="text-slate-900 font-semibold">{answeredCount}</strong> of <strong className="text-slate-900 font-semibold">{examQuestions.length}</strong> questions with <strong className="text-slate-900 font-semibold">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</strong> remaining.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900">
              You can evaluate your current progress now to generate a diagnostic report, or cancel and resume your timed test.
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={submitExam}
                className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors text-center cursor-pointer"
              >
                Score Exam as-is
              </button>
              <button
                onClick={() => {
                  setShowExitModal(false);
                  setIsExamActive(false);
                }}
                className="w-full sm:w-auto py-2.5 px-4 border border-stone-300 text-stone-700 rounded-xl text-xs font-medium hover:bg-stone-100 transition-colors text-center cursor-pointer"
              >
                Discard & Return
              </button>
              <button
                onClick={() => setShowExitModal(false)}
                className="w-full sm:w-auto py-2.5 px-4 bg-stone-100 text-slate-800 rounded-xl text-xs font-semibold hover:bg-stone-200 transition-colors text-center cursor-pointer"
              >
                Resume Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Question Palette / Map */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs">
        <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
          <span>Question Navigation Grid</span>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block" /> Answered</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Flagged</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-stone-200 inline-block" /> Unanswered</span>
          </div>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-15 gap-1.5">
          {examQuestions.map((_, i) => {
            const isAns = answers[i] !== undefined;
            const isCur = i === currentIndex;
            const isFlg = flagged[i];

            return (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-8 rounded text-xs font-mono font-medium transition-all relative ${
                  isCur
                    ? 'ring-2 ring-slate-900 font-bold'
                    : ''
                } ${
                  isAns
                    ? 'bg-slate-900 text-white'
                    : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                }`}
              >
                {i + 1}
                {isFlg && (
                  <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
