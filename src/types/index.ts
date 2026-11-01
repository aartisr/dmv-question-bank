export type CognitiveDomain = 
  | 'Statutory Thresholds'
  | 'Right-of-Way & Spatial'
  | 'Signs & Markings'
  | 'Hazard & Emergencies'
  | 'Defensive Operation';

export type QuestionDifficulty = 'Foundational' | 'Standard' | 'Rigorous';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  correctIndex: number;
  explanation: string;
  chapter: 1 | 2 | 3 | 4 | 5;
  chapterName: string;
  topic: string;
  source: string;
  statute?: string;
  difficulty: QuestionDifficulty;
  cognitiveDomain: CognitiveDomain;
  tags: string[];
}

export type ExamMode = 'simulation' | 'diagnostic' | 'chapter_drill' | 'weak_spots';

export interface DomainScore {
  domain: CognitiveDomain;
  correct: number;
  total: number;
  score: number; // 0 - 100
  status: 'Mastered' | 'Proficient' | 'Needs Review';
}

export interface ChapterScore {
  chapter: number;
  name: string;
  correct: number;
  total: number;
  score: number;
}

export interface DeficientItem {
  id: string;
  question: string;
  userAnswerLetter: string;
  userAnswerText: string;
  correctAnswerLetter: string;
  correctAnswerText: string;
  explanation: string;
  source: string;
  statute?: string;
  chapter: number;
  topic?: string;
}

export interface PsychometricReport {
  id: string;
  date: string;
  timestamp: number;
  mode: ExamMode;
  totalQuestions: number;
  correctCount: number;
  scorePercentage: number;
  passed: boolean; // >= 72% (18/25)
  predictedPassRate: number; // 0 - 100%
  readinessRating: 'High Distinction' | 'Proficient' | 'Borderline' | 'At Risk';
  avgResponseTimeSec: number;
  pacingRating: 'Optimal Pace' | 'Deliberate / Cautious' | 'Rushed';
  domainScores: DomainScore[];
  chapterScores: ChapterScore[];
  deficientItems: DeficientItem[];
  remediationPlan: string[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  chapter: number;
  statute?: string;
}

export interface StudyChapter {
  id: string;
  chapterNumber: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  manualPages: string;
  statutoryBasis: string;
  executiveSummary: string;
  corePrinciples: {
    heading: string;
    details: string[];
    criticalNumber?: string;
  }[];
  statutoryTables?: {
    title: string;
    description?: string;
    headers: string[];
    rows: (string | number)[][];
  }[];
  visualCallouts?: {
    title: string;
    description: string;
    badge?: string;
  }[];
  flashcards: Flashcard[];
}

export type AchievementRarity = 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
export type AchievementCategory = 'mastery' | 'efficiency' | 'streak' | 'scholar';

export interface AcademicAchievement {
  id: string;
  title: string;
  description: string;
  criteria: string;
  category: AchievementCategory;
  rarity: AchievementRarity;
  iconName: string;
  statuteReference?: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress: number;
  maxProgress: number;
  xpReward: number;
}

