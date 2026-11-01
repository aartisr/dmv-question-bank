import React from 'react';
import { 
  Sparkles, 
  Zap, 
  Trophy, 
  Flame, 
  ShieldCheck, 
  BookOpen, 
  Shield, 
  Scale, 
  Compass, 
  AlertTriangle, 
  Award, 
  Moon, 
  RotateCw, 
  Coins, 
  Layers, 
  Clock, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';
import { AcademicAchievement, AchievementRarity } from '../types';

interface AchievementBadgeProps {
  achievement: AcademicAchievement;
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
  onActionClick?: () => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Zap,
  Trophy,
  Flame,
  ShieldCheck,
  BookOpen,
  Shield,
  Scale,
  Compass,
  AlertTriangle,
  Award,
  Moon,
  RotateCw,
  Coins,
  Layers,
  Clock,
};

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  achievement,
  size = 'md',
  showDetails = true,
  onActionClick,
}) => {
  const IconComponent = ICON_MAP[achievement.iconName] || Award;

  // Visual styles according to academic rarity
  const getRarityConfig = (rarity: AchievementRarity, unlocked: boolean) => {
    if (!unlocked) {
      return {
        bg: 'bg-stone-50',
        border: 'border-stone-200/90',
        iconBg: 'bg-stone-100 text-stone-400',
        pillBg: 'bg-stone-100 text-stone-500 border-stone-200',
        glow: '',
      };
    }

    switch (rarity) {
      case 'Platinum':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white',
          border: 'border-indigo-400/40 shadow-md ring-1 ring-indigo-400/20',
          iconBg: 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30',
          pillBg: 'bg-indigo-500/20 text-indigo-200 border-indigo-400/30',
          glow: 'shadow-indigo-500/10',
        };
      case 'Gold':
        return {
          bg: 'bg-gradient-to-br from-amber-950/80 via-slate-900 to-amber-950/60 text-white',
          border: 'border-amber-400/50 shadow-md ring-1 ring-amber-400/30',
          iconBg: 'bg-amber-400/20 text-amber-300 border border-amber-400/40',
          pillBg: 'bg-amber-400/20 text-amber-200 border-amber-400/30',
          glow: 'shadow-amber-500/10',
        };
      case 'Silver':
        return {
          bg: 'bg-white text-slate-900',
          border: 'border-slate-300 shadow-xs ring-1 ring-slate-200',
          iconBg: 'bg-slate-100 text-slate-700 border border-slate-300',
          pillBg: 'bg-slate-100 text-slate-700 border-slate-200',
          glow: '',
        };
      case 'Bronze':
      default:
        return {
          bg: 'bg-white text-slate-900',
          border: 'border-amber-200 shadow-xs ring-1 ring-amber-100',
          iconBg: 'bg-amber-50 text-amber-800 border border-amber-200',
          pillBg: 'bg-amber-50 text-amber-800 border-amber-200',
          glow: '',
        };
    }
  };

  const style = getRarityConfig(achievement.rarity, achievement.unlocked);
  const percentProgress = Math.min(
    100,
    Math.round((achievement.progress / achievement.maxProgress) * 100)
  );

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
        style.bg
      } ${style.border} ${style.glow} ${
        size === 'sm' ? 'p-3.5' : size === 'lg' ? 'p-6' : 'p-5'
      }`}
    >
      {/* Top Header: Rarity & Category */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
              style.iconBg
            } ${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'}`}
          >
            {achievement.unlocked ? (
              <IconComponent className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
            ) : (
              <Lock className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span
                className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border font-semibold ${
                  style.pillBg
                }`}
              >
                {achievement.rarity}
              </span>
              <span className={`text-[10px] font-mono uppercase tracking-wider ${
                achievement.unlocked ? 'opacity-80' : 'text-stone-400'
              }`}>
                {achievement.category}
              </span>
            </div>
            <h3
              className={`font-serif font-bold tracking-tight leading-snug mt-1 ${
                achievement.unlocked
                  ? achievement.rarity === 'Platinum' || achievement.rarity === 'Gold'
                    ? 'text-white'
                    : 'text-slate-900'
                  : 'text-stone-600'
              } ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg' : 'text-sm'}`}
            >
              {achievement.title}
            </h3>
          </div>
        </div>

        {/* Status indicator */}
        {achievement.unlocked ? (
          <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        ) : (
          <div className="text-[10px] font-mono text-stone-500 shrink-0">
            {achievement.progress}/{achievement.maxProgress}
          </div>
        )}
      </div>

      {/* Description & Criteria */}
      {showDetails && (
        <div className="space-y-2 mt-1">
          <p
            className={`text-xs leading-relaxed ${
              achievement.unlocked
                ? achievement.rarity === 'Platinum' || achievement.rarity === 'Gold'
                  ? 'text-stone-200'
                  : 'text-stone-600'
                : 'text-stone-500'
            }`}
          >
            {achievement.description}
          </p>

          {/* Statutory Reference or Criteria */}
          {achievement.statuteReference && (
            <div
              className={`text-[11px] font-mono flex items-center gap-1.5 ${
                achievement.unlocked
                  ? achievement.rarity === 'Platinum' || achievement.rarity === 'Gold'
                    ? 'text-amber-300'
                    : 'text-amber-700'
                  : 'text-stone-400'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
              <span>{achievement.statuteReference}</span>
            </div>
          )}
        </div>
      )}

      {/* Footer: Progress Bar or Unlock Date */}
      <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-xs">
        {achievement.unlocked ? (
          <div className="flex items-center justify-between w-full font-mono text-[11px] opacity-80">
            <span>Conferred {achievement.unlockedAt}</span>
            <span className="font-semibold">+{achievement.xpReward} XP</span>
          </div>
        ) : (
          <div className="w-full space-y-1.5">
            <div className="flex items-center justify-between font-mono text-[10px] text-stone-500">
              <span>Progress: {percentProgress}%</span>
              <span>Reward: +{achievement.xpReward} XP</span>
            </div>
            <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${percentProgress}%` }}
              />
            </div>
            {onActionClick && (
              <button
                onClick={onActionClick}
                className="text-[11px] font-medium text-amber-700 hover:text-amber-900 hover:underline pt-1 block cursor-pointer"
              >
                Launch relevant drill →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
