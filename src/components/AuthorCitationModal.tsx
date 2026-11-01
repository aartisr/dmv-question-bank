import React, { useState } from 'react';
import { 
  X, 
  Award, 
  BookOpen, 
  Copy, 
  Check, 
  Share2, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Scale, 
  Download,
  GraduationCap
} from 'lucide-react';

interface AuthorCitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthorCitationModal: React.FC<AuthorCitationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeCitationTab, setActiveCitationTab] = useState<'apa' | 'mla' | 'chicago' | 'bibtex'>('apa');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const citations = {
    apa: `Ravikumar, A. S. (2026). Massachusetts RMV Driver's Manual Master Examination and Psychometric Assessment Framework. RMV Master Academy. https://ais-pre-jzyajszhshmltvxdhrtvg6-433861030990.us-east5.run.app`,
    mla: `Ravikumar, Aarti S. Massachusetts RMV Driver's Manual Master Examination and Psychometric Assessment Framework. RMV Master Academy, 2026, https://ais-pre-jzyajszhshmltvxdhrtvg6-433861030990.us-east5.run.app.`,
    chicago: `Ravikumar, Aarti S. 2026. "Massachusetts RMV Driver's Manual Master Examination and Psychometric Assessment Framework." RMV Master Academy. https://ais-pre-jzyajszhshmltvxdhrtvg6-433861030990.us-east5.run.app.`,
    bibtex: `@misc{ravikumar2026rmv,
  author = {Ravikumar, Aarti S.},
  title = {Massachusetts RMV Driver's Manual Master Examination and Psychometric Assessment Framework},
  year = {2026},
  publisher = {RMV Master Academy},
  url = {https://ais-pre-jzyajszhshmltvxdhrtvg6-433861030990.us-east5.run.app},
  note = {Grounded in Massachusetts General Laws Chapter 90 (M.G.L. c. 90) and MassDOT 2026 Driver Manual}
}`,
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleDownloadBibtex = () => {
    const element = document.createElement('a');
    const file = new Blob([citations.bibtex], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'aarti_s_ravikumar_rmv_framework.bib';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const shareText = encodeURIComponent(
    `Studying for the Massachusetts RMV Driver's License Exam using the curriculum & 300+ questions curated by Aarti S Ravikumar at RMV Master Academy!`
  );
  const shareUrl = encodeURIComponent(window.location.href);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Author Profile and Academic Citation for Aarti S Ravikumar"
      >
        {/* Header with decorative heraldry */}
        <div className="bg-slate-900 text-stone-100 p-6 sm:p-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-serif font-black text-2xl shadow-lg ring-4 ring-amber-400/20">
                AR
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-semibold px-2 py-0.5 rounded bg-amber-400/15 border border-amber-400/30">
                    Author & Curriculum Director
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">
                    M.G.L. c. 90
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-black text-white mt-1">
                  <a href="https://ai-aarti.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                    Aarti S Ravikumar
                  </a>
                </h2>
                <p className="text-xs text-stone-300 font-sans mt-0.5">
                  <a href="https://saugus.pioneercss.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors font-semibold">
                    PCSS II
                  </a> · Massachusetts RMV Licensure Assessment Framework
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close author modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick scholarly credentials */}
          <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-800 text-stone-300 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">300+ Verified Qs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="truncate">M.G.L. c. 90 Statutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">MassDOT 2026 Code</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Author Statement & Curriculum Overview */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide font-mono">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Curriculum & Psychometric Attribution</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              Every chapter analysis, statutory breakdown, and psychometric evaluation metric on this platform was researched, curated, and authored by <strong className="text-slate-950 font-semibold">Aarti S Ravikumar</strong>. Grounded strictly in the official Commonwealth of Massachusetts Driver's Manual and Massachusetts General Laws Chapter 90.
            </p>
            <div className="text-[11px] text-stone-500 font-mono pt-1">
              Author citation is globally integrated into HTML metadata, Google AI Overviews, GEO/AEO answer engines, and Schema.org semantic graphs.
            </div>
          </div>

          {/* Academic Citation Formats */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-600" />
                <span>Formal Academic Citation Formats</span>
              </label>
              {activeCitationTab === 'bibtex' && (
                <button
                  onClick={handleDownloadBibtex}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-950 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .bib</span>
                </button>
              )}
            </div>

            {/* Citation Format Selector Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200">
              {(['apa', 'mla', 'chicago', 'bibtex'] as const).map((format) => (
                <button
                  key={format}
                  onClick={() => setActiveCitationTab(format)}
                  className={`flex-1 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all cursor-pointer ${
                    activeCitationTab === format
                      ? 'bg-white text-slate-900 shadow-2xs border border-stone-200'
                      : 'text-stone-500 hover:text-slate-800'
                  }`}
                >
                  {format.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Citation Display Box */}
            <div className="relative bg-slate-900 text-stone-100 rounded-2xl p-4 font-mono text-xs leading-relaxed border border-slate-800 group">
              <pre className="whitespace-pre-wrap font-mono text-stone-200 select-all overflow-x-auto text-[11px]">
                {citations[activeCitationTab]}
              </pre>

              <button
                onClick={() => handleCopy(citations[activeCitationTab], activeCitationTab)}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-sans font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                aria-label={`Copy ${activeCitationTab.toUpperCase()} citation`}
              >
                {copiedKey === activeCitationTab ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-900" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy {activeCitationTab.toUpperCase()}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Viral & Social Sharing */}
          <div className="pt-2 border-t border-stone-200">
            <div className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide mb-3 flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Share & Spread Author Accreditation</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5 text-amber-300" />
                <span>Share on X / Twitter</span>
              </a>

              <button
                onClick={() => handleCopy(window.location.href, 'link')}
                className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                {copiedKey === 'link' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-600" />
                    <span>Copy Web Applet Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer info banner */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500 font-mono">
          <span>Author: Aarti S Ravikumar</span>
          <span>Commonwealth of Massachusetts Standard</span>
        </div>
      </div>
    </div>
  );
};
