import React from 'react';
import { Award, Sparkles, CheckCircle2, X, ArrowRight } from 'lucide-react';
import { AcademicAchievement } from '../types';
import { AchievementBadge } from './AchievementBadge';

interface AchievementCelebrationModalProps {
  achievement: AcademicAchievement;
  onDismiss: () => void;
  onViewAllHonours?: () => void;
}

export const AchievementCelebrationModal: React.FC<AchievementCelebrationModalProps> = ({
  achievement,
  onDismiss,
  onViewAllHonours,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-stone-200 overflow-hidden transform transition-all animate-scaleUp relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Subtle decorative banner */}
        <div className="bg-slate-900 text-amber-50 px-6 py-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-amber-500/20 to-transparent pointer-events-none" />
          
          <button
            onClick={onDismiss}
            className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close celebration modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Academic Distinction Conferred
          </div>

          <h2 className="text-2xl font-serif font-bold text-white tracking-tight">
            Honour Unlocked!
          </h2>
          <p className="text-stone-300 text-xs max-w-xs mx-auto mt-1">
            Your performance has met Massachusetts RMV psychometric mastery standards.
          </p>
        </div>

        {/* Content & Badge Card */}
        <div className="p-6 space-y-5">
          <div className="transform hover:scale-[1.02] transition-transform">
            <AchievementBadge achievement={achievement} size="lg" showDetails={true} />
          </div>

          <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-700" />
              <span className="font-serif font-semibold text-amber-900">
                Scholastic XP Awarded
              </span>
            </div>
            <span className="font-mono font-bold text-amber-900 text-sm">
              +{achievement.xpReward} XP
            </span>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={onDismiss}
              className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-sm transition-colors cursor-pointer text-center"
            >
              Continue Studies
            </button>

            {onViewAllHonours && (
              <button
                onClick={() => {
                  onDismiss();
                  onViewAllHonours();
                }}
                className="py-3 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 font-medium text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>All Honours</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
