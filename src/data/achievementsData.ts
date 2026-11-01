import { AcademicAchievement, PsychometricReport } from '../types';

export interface AchievementEvaluationContext {
  reports: PsychometricReport[];
  focusTimeSeconds: number;
  totalXp: number;
  passedExamsInRow: number;
}

export const ACHIEVEMENTS_CATALOG: Omit<AcademicAchievement, 'unlocked' | 'unlockedAt' | 'progress'>[] = [
  {
    id: 'perfect_run',
    title: 'Perfect Run',
    description: 'Score 100% on any full 25-Question Simulation or 40-Question Diagnostic.',
    criteria: '100% score on a completed simulation or diagnostic exam',
    category: 'efficiency',
    rarity: 'Platinum',
    iconName: 'Sparkles',
    statuteReference: '540 CMR 20.00',
    maxProgress: 1,
    xpReward: 250,
  },
  {
    id: 'efficiency_expert',
    title: 'Efficiency Expert',
    description: 'Finish a passing exam with an Optimal Pace rating and an average response time of under 35 seconds.',
    criteria: 'Pass an exam with avg response time ≤ 35s & Optimal Pace rating',
    category: 'efficiency',
    rarity: 'Gold',
    iconName: 'Zap',
    statuteReference: 'Psychometric Pacing Index',
    maxProgress: 1,
    xpReward: 150,
  },
  {
    id: 'high_distinction',
    title: 'High Distinction',
    description: 'Attain the highest psychometric readiness classification with predicted pass rate ≥ 90%.',
    criteria: 'Earn High Distinction readiness rating in any simulation',
    category: 'mastery',
    rarity: 'Platinum',
    iconName: 'Trophy',
    statuteReference: 'RMV Licensure Standard',
    maxProgress: 1,
    xpReward: 200,
  },
  {
    id: 'consistency_laureate',
    title: 'Consistency Laureate',
    description: 'Demonstrate sustained mastery with 3 consecutive passed exams.',
    criteria: 'Pass 3 exams in an unbroken streak',
    category: 'streak',
    rarity: 'Gold',
    iconName: 'Flame',
    statuteReference: 'Cumulative Consistency',
    maxProgress: 3,
    xpReward: 180,
  },
  {
    id: 'ironclad_persistence',
    title: 'Ironclad Persistence',
    description: 'Achieve an exceptional streak of 5 consecutive passed exams.',
    criteria: 'Pass 5 exams in an unbroken streak',
    category: 'streak',
    rarity: 'Platinum',
    iconName: 'ShieldCheck',
    statuteReference: 'Longitudinal Reliability',
    maxProgress: 5,
    xpReward: 300,
  },
  {
    id: 'chapter_1_master',
    title: 'Chapter 1 Master',
    description: 'Master Obtaining Your License, Learner Permit restrictions, and JOL Curfew thresholds.',
    criteria: 'Attain ≥ 90% score on Chapter 1 questions in any test (min 3 questions)',
    category: 'mastery',
    rarity: 'Bronze',
    iconName: 'BookOpen',
    statuteReference: 'M.G.L. c. 90 § 8 & 8B',
    maxProgress: 1,
    xpReward: 100,
  },
  {
    id: 'chapter_2_master',
    title: 'Chapter 2 Master',
    description: 'Demonstrate rigorous understanding of seat belts, child safety seats, and vehicle safety gear.',
    criteria: 'Attain ≥ 90% score on Chapter 2 questions in any test (min 3 questions)',
    category: 'mastery',
    rarity: 'Bronze',
    iconName: 'Shield',
    statuteReference: 'M.G.L. c. 90 § 13A & 7AA',
    maxProgress: 1,
    xpReward: 100,
  },
  {
    id: 'chapter_3_master',
    title: 'Chapter 3 Master',
    description: 'Master Massachusetts OUI laws, statutory speeding fine formulas, and license suspensions.',
    criteria: 'Attain ≥ 90% score on Chapter 3 questions in any test (min 3 questions)',
    category: 'mastery',
    rarity: 'Silver',
    iconName: 'Scale',
    statuteReference: 'M.G.L. c. 90 § 17, 24 & 24D',
    maxProgress: 1,
    xpReward: 120,
  },
  {
    id: 'chapter_4_master',
    title: 'Chapter 4 Master',
    description: 'Command rotary right-of-way protocols, pavement markings, and intersection right-of-way rules.',
    criteria: 'Attain ≥ 90% score on Chapter 4 questions in any test (min 3 questions)',
    category: 'mastery',
    rarity: 'Silver',
    iconName: 'Compass',
    statuteReference: 'M.G.L. c. 89 § 8 & 540 CMR',
    maxProgress: 1,
    xpReward: 120,
  },
  {
    id: 'chapter_5_master',
    title: 'Chapter 5 Master',
    description: 'Excel in handling special driving conditions: hydroplaning, winter skids, and highway breakdown safety.',
    criteria: 'Attain ≥ 90% score on Chapter 5 questions in any test (min 3 questions)',
    category: 'mastery',
    rarity: 'Bronze',
    iconName: 'AlertTriangle',
    statuteReference: 'Driver Manual Ch. 5 Guidelines',
    maxProgress: 1,
    xpReward: 100,
  },
  {
    id: 'grand_laureate',
    title: 'Grand Academic Laureate',
    description: 'Attain mastery status across all 5 chapters of the Massachusetts Driver\'s Manual.',
    criteria: 'Unlock Chapter 1, 2, 3, 4, and 5 Master badges',
    category: 'mastery',
    rarity: 'Platinum',
    iconName: 'Award',
    statuteReference: 'Full RMV Manual Curriculum',
    maxProgress: 5,
    xpReward: 500,
  },
  {
    id: 'curfew_jol_specialist',
    title: 'Curfew & JOL Specialist',
    description: 'Flawlessly resolve Junior Operator Law curfew (12:30 AM–5:00 AM) and passenger restriction scenarios.',
    criteria: 'Answer all Chapter 1 JOL questions correctly in any simulation or drill',
    category: 'scholar',
    rarity: 'Silver',
    iconName: 'Moon',
    statuteReference: 'M.G.L. c. 90 § 8',
    maxProgress: 1,
    xpReward: 120,
  },
  {
    id: 'rotary_maestro',
    title: 'Rotary Maestro',
    description: 'Execute perfect decision-making on rotary yielding, entry protocol, and multi-lane positioning.',
    criteria: 'Attain 100% on Chapter 4 Rotary items in any test session',
    category: 'scholar',
    rarity: 'Gold',
    iconName: 'RotateCw',
    statuteReference: 'M.G.L. c. 89 § 8',
    maxProgress: 1,
    xpReward: 140,
  },
  {
    id: 'speeding_fine_scholar',
    title: 'Speeding Fine Scholar',
    description: 'Master Massachusetts speeding fine statutory computations ($105 first 10 MPH + $10/MPH over).',
    criteria: 'Complete Chapter 3 drill with 100% accuracy on fine formula items',
    category: 'scholar',
    rarity: 'Gold',
    iconName: 'Coins',
    statuteReference: 'M.G.L. c. 90 § 17',
    maxProgress: 1,
    xpReward: 140,
  },
  {
    id: 'statutory_scholar',
    title: 'Statutory Scholar',
    description: 'Complete rigorous psychometric testing spanning 75+ cumulative questions.',
    criteria: 'Answer 75+ questions across assessments',
    category: 'scholar',
    rarity: 'Silver',
    iconName: 'Layers',
    statuteReference: 'Question Bank Exploration',
    maxProgress: 75,
    xpReward: 150,
  },
  {
    id: 'dedicated_scholar',
    title: 'Dedicated Scholar',
    description: 'Commit 30 or more minutes of focused manual reading, review, and diagnostic drills.',
    criteria: 'Accumulate 1,800 seconds (30 mins) of active focus time',
    category: 'streak',
    rarity: 'Bronze',
    iconName: 'Clock',
    statuteReference: 'Deep Study Metric',
    maxProgress: 1800,
    xpReward: 120,
  },
];

/**
 * Calculates current streak of consecutive passed exams (ordered latest to oldest).
 */
export function calculatePassStreak(reports: PsychometricReport[]): number {
  let streak = 0;
  for (const report of reports) {
    if (report.passed) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

/**
 * Evaluates all academic achievements against the current user performance data.
 */
export function evaluateAllAchievements(
  context: AchievementEvaluationContext,
  persistedUnlocked: Record<string, string> = {}
): AcademicAchievement[] {
  const { reports, focusTimeSeconds, passedExamsInRow } = context;

  // Aggregate questions answered
  const totalQuestionsAnswered = reports.reduce((acc, r) => acc + (r.totalQuestions || 0), 0);

  // Helper to check chapter mastery in any report
  const hasChapterMastery = (chapNum: number): boolean => {
    return reports.some((r) => {
      const chScore = r.chapterScores?.find((c) => c.chapter === chapNum);
      return chScore && chScore.total >= 3 && chScore.score >= 90;
    });
  };

  const ch1Mastered = hasChapterMastery(1);
  const ch2Mastered = hasChapterMastery(2);
  const ch3Mastered = hasChapterMastery(3);
  const ch4Mastered = hasChapterMastery(4);
  const ch5Mastered = hasChapterMastery(5);

  const chaptersMasteredCount = [ch1Mastered, ch2Mastered, ch3Mastered, ch4Mastered, ch5Mastered].filter(Boolean).length;

  return ACHIEVEMENTS_CATALOG.map((cat) => {
    const isAlreadyUnlocked = Boolean(persistedUnlocked[cat.id]);
    const previouslyUnlockedAt = persistedUnlocked[cat.id];

    let progress = 0;
    let unlocked = isAlreadyUnlocked;

    switch (cat.id) {
      case 'perfect_run': {
        const has100 = reports.some((r) => r.scorePercentage === 100 && r.totalQuestions >= 10);
        progress = has100 ? 1 : 0;
        if (has100) unlocked = true;
        break;
      }

      case 'efficiency_expert': {
        const hasEfficientPass = reports.some(
          (r) => r.passed && r.pacingRating === 'Optimal Pace' && r.avgResponseTimeSec <= 35
        );
        progress = hasEfficientPass ? 1 : 0;
        if (hasEfficientPass) unlocked = true;
        break;
      }

      case 'high_distinction': {
        const hasHighDist = reports.some((r) => r.readinessRating === 'High Distinction');
        progress = hasHighDist ? 1 : 0;
        if (hasHighDist) unlocked = true;
        break;
      }

      case 'consistency_laureate': {
        progress = Math.min(passedExamsInRow, 3);
        if (progress >= 3) unlocked = true;
        break;
      }

      case 'ironclad_persistence': {
        progress = Math.min(passedExamsInRow, 5);
        if (progress >= 5) unlocked = true;
        break;
      }

      case 'chapter_1_master': {
        progress = ch1Mastered ? 1 : 0;
        if (ch1Mastered) unlocked = true;
        break;
      }

      case 'chapter_2_master': {
        progress = ch2Mastered ? 1 : 0;
        if (ch2Mastered) unlocked = true;
        break;
      }

      case 'chapter_3_master': {
        progress = ch3Mastered ? 1 : 0;
        if (ch3Mastered) unlocked = true;
        break;
      }

      case 'chapter_4_master': {
        progress = ch4Mastered ? 1 : 0;
        if (ch4Mastered) unlocked = true;
        break;
      }

      case 'chapter_5_master': {
        progress = ch5Mastered ? 1 : 0;
        if (ch5Mastered) unlocked = true;
        break;
      }

      case 'grand_laureate': {
        progress = chaptersMasteredCount;
        if (chaptersMasteredCount >= 5) unlocked = true;
        break;
      }

      case 'curfew_jol_specialist': {
        // Did the user pass any test without deficient items on JOL / curfew
        const hasCleanJol = reports.some((r) => {
          const chScore = r.chapterScores?.find((c) => c.chapter === 1);
          if (!chScore || chScore.total < 3) return false;
          const missedJol = r.deficientItems?.some(
            (d) => d.chapter === 1 && (d.topic?.toLowerCase().includes('jol') || d.topic?.toLowerCase().includes('curfew'))
          );
          return !missedJol && chScore.score >= 80;
        });
        progress = hasCleanJol ? 1 : 0;
        if (hasCleanJol) unlocked = true;
        break;
      }

      case 'rotary_maestro': {
        const hasCleanRotary = reports.some((r) => {
          const chScore = r.chapterScores?.find((c) => c.chapter === 4);
          if (!chScore || chScore.total < 3) return false;
          const missedRotary = r.deficientItems?.some(
            (d) => d.chapter === 4 && (d.topic?.toLowerCase().includes('rotary') || d.question?.toLowerCase().includes('rotary'))
          );
          return !missedRotary && chScore.score >= 80;
        });
        progress = hasCleanRotary ? 1 : 0;
        if (hasCleanRotary) unlocked = true;
        break;
      }

      case 'speeding_fine_scholar': {
        const hasCleanSpeeding = reports.some((r) => {
          const chScore = r.chapterScores?.find((c) => c.chapter === 3);
          if (!chScore || chScore.total < 3) return false;
          const missedSpeed = r.deficientItems?.some(
            (d) => d.chapter === 3 && (d.topic?.toLowerCase().includes('speed') || d.question?.toLowerCase().includes('fine') || d.question?.toLowerCase().includes('$105'))
          );
          return !missedSpeed && chScore.score >= 80;
        });
        progress = hasCleanSpeeding ? 1 : 0;
        if (hasCleanSpeeding) unlocked = true;
        break;
      }

      case 'statutory_scholar': {
        progress = Math.min(totalQuestionsAnswered, 75);
        if (progress >= 75) unlocked = true;
        break;
      }

      case 'dedicated_scholar': {
        progress = Math.min(focusTimeSeconds, 1800);
        if (progress >= 1800) unlocked = true;
        break;
      }

      default:
        break;
    }

    const unlockedAt = unlocked
      ? previouslyUnlockedAt || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : undefined;

    return {
      ...cat,
      progress,
      unlocked,
      unlockedAt,
    };
  });
}
