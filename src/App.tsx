/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { NavTab } from './components/Navbar';
import { UserDashboard } from './components/UserDashboard';
import { StudyManualViewer } from './components/StudyManualViewer';
import { OfficialExamSimulator } from './components/OfficialExamSimulator';
import { AssessmentHistory } from './components/AssessmentHistory';
import { QuestionBankExplorer } from './components/QuestionBankExplorer';
import { PsychometricReportView } from './components/PsychometricReportView';
import { AchievementsShowcase } from './components/AchievementsShowcase';
import { AchievementCelebrationModal } from './components/AchievementCelebrationModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { AuthorCitationModal } from './components/AuthorCitationModal';
import { useStudyTracker } from './hooks/useStudyTracker';
import { ExamMode, PsychometricReport } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [examMode, setExamMode] = useState<ExamMode>('simulation');
  const [activeReport, setActiveReport] = useState<PsychometricReport | null>(null);
  const [weakSpotQuestionIds, setWeakSpotQuestionIds] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCitationModalOpen, setIsCitationModalOpen] = useState(false);
  const [bankSearchQuery, setBankSearchQuery] = useState('');

  const {
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
  } = useStudyTracker();

  // Global keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handlers
  const handleOpenStudyChapter = (chapterNumber: 1 | 2 | 3 | 4 | 5) => {
    setSelectedChapterNumber(chapterNumber);
    setActiveTab('study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const handleStartExam = (
    mode: ExamMode = 'simulation',
    chapterNumber: 1 | 2 | 3 | 4 | 5 = 1,
    weakIds: string[] = []
  ) => {
    setExamMode(mode);
    setSelectedChapterNumber(chapterNumber);
    if (weakIds.length > 0) {
      setWeakSpotQuestionIds(weakIds);
    }
    setActiveTab('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExamComplete = (report: PsychometricReport) => {
    saveReport(report);
    setActiveReport(report);
    // Collect missed question IDs for targeted weak-spot drill
    if (report.deficientItems.length > 0) {
      setWeakSpotQuestionIds(report.deficientItems.map((item) => item.id));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewReport = (report: PsychometricReport) => {
    setActiveReport(report);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemediateWeakSpots = () => {
    if (activeReport && activeReport.deficientItems.length > 0) {
      const ids = activeReport.deficientItems.map((i) => i.id);
      setActiveReport(null);
      handleStartExam('weak_spots', 1, ids);
    } else {
      setActiveReport(null);
      handleStartExam('simulation');
    }
  };

  return (
    <Layout
      activeTab={activeTab}
      onSelectTab={(tab) => {
        setActiveReport(null);
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onOpenSearch={() => setIsSearchOpen(true)}
      onOpenCitationModal={() => setIsCitationModalOpen(true)}
      focusTime={totalFocusTime}
      xp={totalXp}
    >
      {/* If a report is currently active and selected, display the Psychometric Report View */}
      {activeReport ? (
        <PsychometricReportView
          report={activeReport}
          onRetake={() => {
            setActiveReport(null);
            handleStartExam('simulation');
          }}
          onRemediateWeakSpots={handleRemediateWeakSpots}
          onNavigateToChapter={(ch) => {
            setActiveReport(null);
            handleOpenStudyChapter(ch);
          }}
          onBackToDashboard={() => {
            setActiveReport(null);
            setActiveTab('dashboard');
          }}
        />
      ) : activeTab === 'dashboard' ? (
        <UserDashboard
          focusTime={totalFocusTime}
          xp={totalXp}
          recentReports={history}
          passStreak={passStreak}
          achievements={achievements}
          onOpenAchievements={() => {
            setActiveTab('achievements');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenCitationModal={() => setIsCitationModalOpen(true)}
          onStartSimulation={() => handleStartExam('simulation')}
          onStartDiagnostic={() => handleStartExam('diagnostic')}
          onOpenStudyChapter={handleOpenStudyChapter}
          onStartChapterDrill={(ch) => handleStartExam('chapter_drill', ch)}
          onViewReport={handleViewReport}
          onViewAllHistory={() => setActiveTab('history')}
          onOpenQuestionBank={() => setActiveTab('bank')}
          onOpenFlashcards={() => {
            setActiveTab('study');
          }}
          onRemediateGaps={(ids) => handleStartExam('weak_spots', 1, ids)}
        />
      ) : activeTab === 'study' ? (
        <StudyManualViewer
          initialChapterId={`ch${selectedChapterNumber}`}
          onLaunchChapterDrill={(ch) => handleStartExam('chapter_drill', ch)}
        />
      ) : activeTab === 'exam' ? (
        <OfficialExamSimulator
          initialMode={examMode}
          initialChapterFilter={selectedChapterNumber}
          weakSpotQuestionIds={weakSpotQuestionIds}
          onExamComplete={handleExamComplete}
        />
      ) : activeTab === 'bank' ? (
        <QuestionBankExplorer
          initialSearchQuery={bankSearchQuery}
          onLaunchChapterDrill={(ch) => handleStartExam('chapter_drill', ch)}
          onPracticeFiltered={(ids) => handleStartExam('weak_spots', 1, ids)}
        />
      ) : activeTab === 'achievements' ? (
        <AchievementsShowcase
          achievements={achievements}
          passStreak={passStreak}
          totalXp={totalXp}
          onLaunchSimulation={() => handleStartExam('simulation')}
          onLaunchChapterDrill={(ch) => handleStartExam('chapter_drill', ch)}
        />
      ) : (
        <AssessmentHistory
          history={history}
          onSelectReport={handleViewReport}
          onStartExam={() => handleStartExam('simulation')}
        />
      )}

      {/* Global Command Palette Modal */}
      <CommandPaletteModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenCitationModal={() => setIsCitationModalOpen(true)}
        onNavigateToTab={(tab) => {
          setActiveReport(null);
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenStudyChapter={(ch) => {
          setActiveReport(null);
          handleOpenStudyChapter(ch);
        }}
        onStartExam={(mode, ch, ids) => {
          setActiveReport(null);
          handleStartExam(mode, ch, ids);
        }}
        onOpenQuestionInBank={(query) => {
          setActiveReport(null);
          setBankSearchQuery(query);
          setActiveTab('bank');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Author Profile and Scholarly Citation Modal */}
      <AuthorCitationModal
        isOpen={isCitationModalOpen}
        onClose={() => setIsCitationModalOpen(false)}
      />

      {/* Celebratory Modal when an academic honour is conferred */}
      {recentlyUnlocked && (
        <AchievementCelebrationModal
          achievement={recentlyUnlocked}
          onDismiss={dismissCelebration}
          onViewAllHonours={() => {
            setActiveReport(null);
            setActiveTab('achievements');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </Layout>
  );
}


