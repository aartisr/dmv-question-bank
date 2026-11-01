import React from 'react';
import { PsychometricReport } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  BookOpen, 
  Target, 
  Clock, 
  Award, 
  ChevronRight,
  ShieldCheck,
  FileText,
  Printer
} from 'lucide-react';

interface PsychometricReportViewProps {
  report: PsychometricReport;
  onRetake: () => void;
  onRemediateWeakSpots?: () => void;
  onNavigateToChapter?: (chapterNumber: 1 | 2 | 3 | 4 | 5) => void;
  onBackToDashboard: () => void;
}

export const PsychometricReportView: React.FC<PsychometricReportViewProps> = ({
  report,
  onRetake,
  onRemediateWeakSpots,
  onNavigateToChapter,
  onBackToDashboard,
}) => {
  const isPassed = report.passed;

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Top Banner / Verdict */}
      <div
        className={`rounded-2xl border p-8 shadow-sm transition-all ${
          isPassed
            ? 'bg-emerald-950/5 border-emerald-300/80 text-emerald-950'
            : 'bg-rose-950/5 border-rose-300/80 text-rose-950'
        }`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                isPassed ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
              }`}
            >
              {isPassed ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-stone-100 text-slate-800">
                  {report.mode === 'simulation'
                    ? 'Official RMV 25-Question Simulation'
                    : report.mode === 'diagnostic'
                    ? 'Comprehensive 40-Q Diagnostic'
                    : 'Targeted Chapter Drill'}
                </span>
                <span className="text-xs text-stone-500 font-mono">{report.date}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mt-1 text-slate-900">
                {isPassed ? 'RMV Test Criterion Met' : 'Test Criterion Not Yet Met'}
              </h1>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                {isPassed
                  ? `Congratulations. You scored ${report.correctCount}/${report.totalQuestions} (${report.scorePercentage}%), surpassing the Massachusetts 72% minimum statutory passing bar (18/25).`
                  : `You scored ${report.correctCount}/${report.totalQuestions} (${report.scorePercentage}%). The Massachusetts RMV requires at least 72% (18/25) to pass. Targeted review is recommended below.`}
              </p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2 border-t md:border-t-0 pt-4 md:pt-0 border-stone-200">
            <div className="text-left md:text-right">
              <span className="text-xs uppercase tracking-wider font-mono text-stone-500 block">
                Predicted RMV Pass Rate
              </span>
              <span
                className={`text-4xl font-serif font-bold ${
                  report.predictedPassRate >= 80
                    ? 'text-emerald-700'
                    : report.predictedPassRate >= 65
                    ? 'text-amber-700'
                    : 'text-rose-700'
                }`}
              >
                {report.predictedPassRate}%
              </span>
            </div>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                report.readinessRating === 'High Distinction'
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  : report.readinessRating === 'Proficient'
                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                  : report.readinessRating === 'Borderline'
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'bg-rose-100 text-rose-800 border-rose-300'
              }`}
            >
              {report.readinessRating} Readiness
            </span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-6 border-t border-stone-200/80 print:hidden">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onRetake}
              className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Exam Simulation
            </button>
            {report.deficientItems.length > 0 && onRemediateWeakSpots && (
              <button
                onClick={onRemediateWeakSpots}
                className="px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400 transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Target className="w-4 h-4" />
                Remediate {report.deficientItems.length} Missed Question{report.deficientItems.length > 1 ? 's' : ''}
              </button>
            )}
            <button
              onClick={onBackToDashboard}
              className="px-5 py-2.5 rounded-lg bg-white border border-stone-300 text-slate-700 font-medium text-sm hover:bg-stone-50 transition-colors cursor-pointer"
            >
              Return to Dashboard
            </button>
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-700 border border-stone-300 font-medium text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
            title="Print or export as PDF certificate"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-stone-200/90 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-wider mb-1">
            <Award className="w-4 h-4 text-amber-600" />
            Accuracy Score
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">
            {report.scorePercentage}%
          </div>
          <p className="text-xs text-stone-500 mt-1">
            {report.correctCount} of {report.totalQuestions} questions correct
          </p>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4 text-blue-600" />
            Response Pace
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">
            {report.avgResponseTimeSec}s <span className="text-sm font-sans font-normal text-stone-500">/ question</span>
          </div>
          <p className="text-xs text-stone-500 mt-1">{report.pacingRating}</p>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            RMV Standard
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">
            18 / 25
          </div>
          <p className="text-xs text-stone-500 mt-1">72% statutory benchmark</p>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-500 text-xs font-mono uppercase tracking-wider mb-1">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            Remediation Count
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">
            {report.deficientItems.length}
          </div>
          <p className="text-xs text-stone-500 mt-1">Concepts requiring review</p>
        </div>
      </div>

      {/* Domain & Chapter Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Cognitive Domain Analysis */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-lg font-serif font-bold text-slate-900 flex items-center justify-between">
            <span>Cognitive Domain Breakdown</span>
            <span className="text-xs font-sans font-normal text-stone-500">Psychometric evaluation</span>
          </h2>
          <div className="space-y-4">
            {report.domainScores.map((ds) => (
              <div key={ds.domain} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-800">{ds.domain}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-stone-500">
                      {ds.correct}/{ds.total}
                    </span>
                    <span
                      className={`font-semibold font-mono px-1.5 py-0.5 rounded text-[10px] ${
                        ds.status === 'Mastered'
                          ? 'bg-emerald-100 text-emerald-800'
                          : ds.status === 'Proficient'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {ds.score}%
                    </span>
                  </div>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className={`h-full transition-all rounded-full ${
                      ds.score >= 80 ? 'bg-emerald-600' : ds.score >= 65 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${Math.max(ds.score, 4)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter Score Breakdown */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-lg font-serif font-bold text-slate-900 flex items-center justify-between">
            <span>Manual Chapter Alignment</span>
            <span className="text-xs font-sans font-normal text-stone-500">Massachusetts Driver's Manual</span>
          </h2>
          <div className="space-y-3">
            {report.chapterScores.map((cs) => (
              <div
                key={cs.chapter}
                className="flex items-center justify-between p-3 rounded-lg border border-stone-100 hover:bg-stone-50/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 font-mono text-xs font-bold flex items-center justify-center">
                    {cs.chapter}
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-900">{cs.name}</h3>
                    <p className="text-[11px] text-stone-500 font-mono">
                      {cs.correct} of {cs.total} correct
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-mono font-bold ${
                      cs.score >= 80 ? 'text-emerald-700' : cs.score >= 65 ? 'text-amber-700' : 'text-rose-700'
                    }`}
                  >
                    {cs.score}%
                  </span>
                  {onNavigateToChapter && (
                    <button
                      onClick={() => onNavigateToChapter(cs.chapter as 1 | 2 | 3 | 4 | 5)}
                      className="p-1 text-stone-400 hover:text-slate-900 transition-colors"
                      title="Review Chapter in Manual"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Remediation Action Plan */}
      <div className="bg-amber-500/10 border border-amber-300/80 rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-serif font-bold text-slate-950">
              Prescribed Remediation & High-Yield Focus
            </h2>
            <p className="text-xs text-amber-900/80">
              Personalized guidance derived from your test responses and psychometric error clusters.
            </p>
          </div>
        </div>

        <ul className="space-y-2.5 pt-2">
          {report.remediationPlan.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-800 leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-950 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Item-by-Item Review of Missed Questions */}
      {report.deficientItems.length > 0 ? (
        <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <span>Detailed Item Remediation</span>
                <span className="text-xs font-sans font-normal px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                  {report.deficientItems.length} Missed
                </span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Analyze why your response differed from the official Massachusetts RMV standard.
              </p>
            </div>
            {onRemediateWeakSpots && (
              <button
                onClick={onRemediateWeakSpots}
                className="px-4 py-2 rounded-lg bg-slate-900 text-amber-300 text-xs font-medium hover:bg-slate-800 transition-colors flex items-center gap-1.5 self-start cursor-pointer"
              >
                <Target className="w-3.5 h-3.5" />
                Practice Missed Items Only
              </button>
            )}
          </div>

          <div className="space-y-6">
            {report.deficientItems.map((item, index) => (
              <div
                key={item.id}
                className="border border-stone-200 rounded-xl p-5 space-y-3 bg-stone-50/40 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-600 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="font-mono text-stone-500 uppercase tracking-wider text-[11px]">
                      Chapter {item.chapter} · {item.source}
                    </span>
                  </div>
                  {item.statute && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                      {item.statute}
                    </span>
                  )}
                </div>

                <h3 className="text-sm md:text-base font-semibold text-slate-900 leading-snug">
                  {item.question}
                </h3>

                <div className="grid sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
                    <span className="font-semibold block text-[11px] text-rose-800 uppercase tracking-wider">
                      Your Answer: ({item.userAnswerLetter})
                    </span>
                    <span className="mt-1 block">{item.userAnswerText}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
                    <span className="font-semibold block text-[11px] text-emerald-800 uppercase tracking-wider">
                      Correct RMV Answer: ({item.correctAnswerLetter})
                    </span>
                    <span className="mt-1 block">{item.correctAnswerText}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-stone-200 text-xs text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900 block mb-1">Authoritative Explanation:</span>
                  {item.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-serif font-bold text-emerald-950">Flawless Examination</h2>
          <p className="text-xs md:text-sm text-emerald-800 max-w-md mx-auto">
            You answered every single question correctly with zero deficiencies recorded. You possess high conceptual and statutory mastery of Massachusetts driving regulations.
          </p>
        </div>
      )}
    </div>
  );
};
