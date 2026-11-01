import React, { useState, useMemo } from 'react';
import { 
  Award, 
  Flame, 
  Trophy, 
  Sparkles, 
  Filter, 
  Search, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { AcademicAchievement, AchievementCategory } from '../types';
import { AchievementBadge } from './AchievementBadge';

interface AchievementsShowcaseProps {
  achievements: AcademicAchievement[];
  passStreak: number;
  totalXp: number;
  onLaunchSimulation: () => void;
  onLaunchChapterDrill: (chapterNumber: 1 | 2 | 3 | 4 | 5) => void;
  onCloseModal?: () => void;
  isModal?: boolean;
}

export const AchievementsShowcase: React.FC<AchievementsShowcaseProps> = ({
  achievements,
  passStreak,
  totalXp,
  onLaunchSimulation,
  onLaunchChapterDrill,
  onCloseModal,
  isModal = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Metrics
  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);

  const rarityCounts = useMemo(() => {
    return {
      Platinum: achievements.filter((a) => a.rarity === 'Platinum' && a.unlocked).length,
      Gold: achievements.filter((a) => a.rarity === 'Gold' && a.unlocked).length,
      Silver: achievements.filter((a) => a.rarity === 'Silver' && a.unlocked).length,
      Bronze: achievements.filter((a) => a.rarity === 'Bronze' && a.unlocked).length,
    };
  }, [achievements]);

  // Filtered badges
  const filteredAchievements = useMemo(() => {
    return achievements.filter((ach) => {
      // Category match
      if (selectedCategory !== 'all' && ach.category !== selectedCategory) {
        return false;
      }
      // Status match
      if (statusFilter === 'unlocked' && !ach.unlocked) return false;
      if (statusFilter === 'locked' && ach.unlocked) return false;

      // Query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = ach.title.toLowerCase().includes(q);
        const matchDesc = ach.description.toLowerCase().includes(q);
        const matchCriteria = ach.criteria.toLowerCase().includes(q);
        const matchStatute = ach.statuteReference?.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchCriteria && !matchStatute) {
          return false;
        }
      }

      return true;
    });
  }, [achievements, selectedCategory, statusFilter, searchQuery]);

  const handleAction = (achievement: AcademicAchievement) => {
    if (achievement.id.includes('chapter_1') || achievement.id === 'curfew_jol_specialist') {
      onLaunchChapterDrill(1);
    } else if (achievement.id.includes('chapter_2')) {
      onLaunchChapterDrill(2);
    } else if (achievement.id.includes('chapter_3') || achievement.id === 'speeding_fine_scholar') {
      onLaunchChapterDrill(3);
    } else if (achievement.id.includes('chapter_4') || achievement.id === 'rotary_maestro') {
      onLaunchChapterDrill(4);
    } else if (achievement.id.includes('chapter_5')) {
      onLaunchChapterDrill(5);
    } else {
      onLaunchSimulation();
    }
    if (onCloseModal) onCloseModal();
  };

  const categories: { id: AchievementCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Honours' },
    { id: 'mastery', label: 'Curricular Mastery' },
    { id: 'efficiency', label: 'Precision & Pacing' },
    { id: 'streak', label: 'Persistence & Streaks' },
    { id: 'scholar', label: 'Statutory Specialization' },
  ];

  return (
    <div className={`space-y-8 ${isModal ? 'p-6 max-h-[85vh] overflow-y-auto' : ''}`}>
      {/* Hero Honours Banner */}
      <div className="bg-slate-900 text-amber-50 rounded-3xl p-6 md:p-8 shadow-lg border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-amber-500/10 to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              <Award className="w-4 h-4" />
              <span>Massachusetts Academic Honours & Distinctions</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Academic Honours Registry
            </h1>
            <p className="text-stone-300 text-xs md:text-sm max-w-xl leading-relaxed">
              Earn permanent academic badges grounded in Massachusetts General Laws Chapter 90, official driver manual chapters, exam score benchmarks, and streak persistence.
            </p>
          </div>

          {/* Quick Metrics Badge Block */}
          <div className="flex flex-wrap items-center gap-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800 shrink-0">
            <div className="text-center px-3 border-r border-slate-800">
              <div className="text-xs font-mono text-stone-400 uppercase">Conferred</div>
              <div className="text-2xl font-serif font-bold text-amber-400">
                {unlockedCount} / {totalCount}
              </div>
              <div className="text-[10px] font-mono text-stone-400">{completionPercentage}% unlocked</div>
            </div>

            <div className="text-center px-3 border-r border-slate-800">
              <div className="text-xs font-mono text-stone-400 uppercase flex items-center justify-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                Pass Streak
              </div>
              <div className="text-2xl font-serif font-bold text-amber-400">
                {passStreak}
              </div>
              <div className="text-[10px] font-mono text-stone-400">consecutive passed</div>
            </div>

            <div className="text-center px-3">
              <div className="text-xs font-mono text-stone-400 uppercase">Honour XP</div>
              <div className="text-2xl font-serif font-bold text-amber-400">
                {totalXp}
              </div>
              <div className="text-[10px] font-mono text-stone-400">total mastery XP</div>
            </div>
          </div>
        </div>

        {/* Tier Counters */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800 text-xs">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-indigo-500/20">
            <span className="font-mono text-indigo-300">Platinum Honours</span>
            <span className="font-serif font-bold text-white">{rarityCounts.Platinum}</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-amber-500/20">
            <span className="font-mono text-amber-300">Gold Honours</span>
            <span className="font-serif font-bold text-white">{rarityCounts.Gold}</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-slate-700">
            <span className="font-mono text-slate-300">Silver Honours</span>
            <span className="font-serif font-bold text-white">{rarityCounts.Silver}</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-amber-800/30">
            <span className="font-mono text-amber-400/80">Bronze Honours</span>
            <span className="font-serif font-bold text-white">{rarityCounts.Bronze}</span>
          </div>
        </div>
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-amber-400 shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Status Segment */}
          <div className="flex items-center bg-stone-100 p-1 rounded-xl text-xs font-medium shrink-0">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                statusFilter === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-stone-600'
              }`}
            >
              All ({achievements.length})
            </button>
            <button
              onClick={() => setStatusFilter('unlocked')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                statusFilter === 'unlocked' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-stone-600'
              }`}
            >
              Conferred ({unlockedCount})
            </button>
            <button
              onClick={() => setStatusFilter('locked')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                statusFilter === 'locked' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-stone-600'
              }`}
            >
              In Progress ({totalCount - unlockedCount})
            </button>
          </div>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search honours by title, chapter topic, or statutory reference (e.g., 'Chapter 1', 'Curfew', 'Rotary', 'M.G.L. c. 90')..."
            className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-slate-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
          />
        </div>
      </div>

      {/* Badges Grid */}
      {filteredAchievements.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-base font-serif font-bold text-slate-900">
            No Honours Match the Selected Filters
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Try adjusting your search query or switching categories to explore the complete Massachusetts RMV academic honours catalog.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAchievements.map((achievement) => (
            <AchievementBadge
              key={achievement.id}
              achievement={achievement}
              size="md"
              showDetails={true}
              onActionClick={!achievement.unlocked ? () => handleAction(achievement) : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
};
