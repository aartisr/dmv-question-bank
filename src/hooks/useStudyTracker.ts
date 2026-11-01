import { useState, useEffect, useMemo, useCallback } from 'react';
import { PsychometricReport, AcademicAchievement } from '../types';
import { 
  calculatePassStreak, 
  evaluateAllAchievements 
} from '../data/achievementsData';

const STORAGE_KEY_HISTORY = 'rmv_assessment_history_v1';
const STORAGE_KEY_STATS = 'rmv_study_stats_v1';
const STORAGE_KEY_ACHIEVEMENTS = 'rmv_academic_achievements_v1';

export const useStudyTracker = () => {
  const [totalFocusTime, setTotalFocusTime] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.focusTime || 0;
      }
    } catch (e) {
      // Fallback
    }
    return 180; // Default 3 minutes initialized
  });

  const [totalXp, setTotalXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.xp || 0;
      }
    } catch (e) {
      // Fallback
    }
    return 150; // Initial 150 XP
  });

  const [persistedUnlocked, setPersistedUnlocked] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // Fallback
    }
    // Pre-populate with baseline Chapter 5 master for initial satisfaction if needed, or empty
    return {
      chapter_5_master: 'Apr 26, 2026',
    };
  });

  const [recentlyUnlocked, setRecentlyUnlocked] = useState<AcademicAchievement | null>(null);

  const [history, setHistory] = useState<PsychometricReport[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_HISTORY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // Fallback
    }

    // Seed one initial baseline diagnostic test run so user immediately sees rich charts and tables
    const baselineReport: PsychometricReport = {
      id: 'report-baseline-1',
      date: 'Apr 26, 2026',
      timestamp: Date.now() - 3600 * 1000 * 24,
      mode: 'simulation',
      totalQuestions: 25,
      correctCount: 21,
      scorePercentage: 84,
      passed: true,
      predictedPassRate: 88,
      readinessRating: 'Proficient',
      avgResponseTimeSec: 28,
      pacingRating: 'Optimal Pace',
      domainScores: [
        { domain: 'Statutory Thresholds', correct: 4, total: 5, score: 80, status: 'Mastered' },
        { domain: 'Right-of-Way & Spatial', correct: 5, total: 6, score: 83, status: 'Mastered' },
        { domain: 'Signs & Markings', correct: 5, total: 5, score: 100, status: 'Mastered' },
        { domain: 'Hazard & Emergencies', correct: 3, total: 4, score: 75, status: 'Proficient' },
        { domain: 'Defensive Operation', correct: 4, total: 5, score: 80, status: 'Mastered' },
      ],
      chapterScores: [
        { chapter: 1, name: 'Obtaining Your License', correct: 4, total: 5, score: 80 },
        { chapter: 2, name: 'Safety First', correct: 4, total: 5, score: 80 },
        { chapter: 3, name: 'Keeping Your License', correct: 4, total: 5, score: 80 },
        { chapter: 4, name: 'Rules of the Road', correct: 5, total: 6, score: 83 },
        { chapter: 5, name: 'Special Driving Situations', correct: 4, total: 4, score: 100 },
      ],
      deficientItems: [
        {
          id: 'q-jol-curfew',
          question: 'Under Massachusetts Junior Operator Law (JOL), during what hours is a junior operator prohibited from driving without a parent or legal guardian?',
          userAnswerLetter: 'B',
          userAnswerText: '1:00 AM to 5:00 AM',
          correctAnswerLetter: 'C',
          correctAnswerText: '12:30 AM to 5:00 AM',
          explanation: 'M.G.L. c. 90 § 8 mandates that junior operators cannot drive between 12:30 AM and 5:00 AM unless accompanied by a parent or legal guardian. The 12:30 AM to 1:00 AM and 4:00 AM to 5:00 AM periods are secondary enforcement.',
          source: "Massachusetts Driver's Manual, Chapter 1",
          statute: 'M.G.L. c. 90 § 8',
          chapter: 1,
          topic: 'Junior Operator Law (JOL) Curfew & Passenger Rules',
        },
        {
          id: 'q-open-container',
          question: 'What is the fine for possessing an open container of alcoholic beverage in the passenger compartment of a motor vehicle on a public way?',
          userAnswerLetter: 'A',
          userAnswerText: '$50 to $100',
          correctAnswerLetter: 'C',
          correctAnswerText: '$100 to $500',
          explanation: 'Under Massachusetts General Laws Chapter 90 Section 24I, having an open alcoholic container in the passenger area carries a fine of $100 to $500.',
          source: "Massachusetts Driver's Manual, Chapter 3",
          statute: 'M.G.L. c. 90 § 24I',
          chapter: 3,
          topic: 'Open Container & Alcohol Violations',
        },
      ],
      remediationPlan: [
        'Review strict statutory thresholds in Chapter 1 & 3: JOL Curfew (12:30-5:00 AM), 6-month passenger rule, and $105+ speeding fine formula.',
        'Review Open Container legal penalties under M.G.L. c. 90 § 24I ($100-$500 fine).',
      ],
    };

    return [baselineReport];
  });

  // Calculate pass streak
  const passStreak = useMemo(() => {
    return calculatePassStreak(history);
  }, [history]);

  // Evaluate current achievements
  const achievements = useMemo(() => {
    return evaluateAllAchievements(
      {
        reports: history,
        focusTimeSeconds: totalFocusTime,
        totalXp,
        passedExamsInRow: passStreak,
      },
      persistedUnlocked
    );
  }, [history, totalFocusTime, totalXp, passStreak, persistedUnlocked]);

  // Check if any achievement just transitioned to unlocked
  useEffect(() => {
    let updated = false;
    const newPersisted = { ...persistedUnlocked };

    achievements.forEach((ach) => {
      if (ach.unlocked && !newPersisted[ach.id]) {
        const unlockDate = new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
        newPersisted[ach.id] = unlockDate;
        updated = true;
        // Award badge XP reward
        setTotalXp((prev) => prev + ach.xpReward);
        // Show celebration
        setRecentlyUnlocked(ach);
      }
    });

    if (updated) {
      setPersistedUnlocked(newPersisted);
      try {
        localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, JSON.stringify(newPersisted));
      } catch (e) {
        // Fallback
      }
    }
  }, [achievements, persistedUnlocked]);

  // Tick focus time every second when tab is active
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalFocusTime((prev) => {
        const next = prev + 1;
        // Award XP periodically
        if (next % 60 === 0) {
          setTotalXp((x) => x + 5);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Sync stats to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY_STATS,
        JSON.stringify({ focusTime: totalFocusTime, xp: totalXp })
      );
    } catch (e) {
      // Storage limit fallback
    }
  }, [totalFocusTime, totalXp]);

  // Sync history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
    } catch (e) {
      // Storage limit fallback
    }
  }, [history]);

  const addFocusTime = (seconds: number) => {
    setTotalFocusTime((prev) => prev + seconds);
    setTotalXp((prev) => prev + Math.floor(seconds / 60) * 5);
  };

  const addQuizXp = (points: number) => {
    setTotalXp((prev) => prev + points);
  };

  const saveReport = (report: PsychometricReport) => {
    setHistory((prev) => [report, ...prev]);
    // Award 50 XP for completing a test + 25 XP bonus if passed
    const bonus = report.passed ? 75 : 40;
    addQuizXp(bonus);
  };

  const dismissCelebration = useCallback(() => {
    setRecentlyUnlocked(null);
  }, []);

  return {
    totalFocusTime,
    totalXp,
    history,
    passStreak,
    achievements,
    recentlyUnlocked,
    dismissCelebration,
    addFocusTime,
    addQuizXp,
    saveReport,
  };
};

