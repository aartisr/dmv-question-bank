import React, { useState, useMemo, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
} from '@tanstack/react-table';
import { Question } from '../types';
import { masterQuestions } from '../data/questionsData';
import { Search, Filter, BookOpen, ChevronDown, ChevronUp, CheckCircle, ChevronLeft, ChevronRight, HelpCircle, Star, Bookmark, Play } from 'lucide-react';

interface QuestionBankExplorerProps {
  onPracticeQuestion?: (question: Question) => void;
  onLaunchChapterDrill?: (chapterNumber: 1 | 2 | 3 | 4 | 5) => void;
  onPracticeFiltered?: (questionIds: string[]) => void;
  initialSearchQuery?: string;
  initialQuestionId?: string;
}

export const QuestionBankExplorer: React.FC<QuestionBankExplorerProps> = ({
  onLaunchChapterDrill,
  onPracticeFiltered,
  initialSearchQuery = '',
  initialQuestionId,
}) => {
  const [globalFilter, setGlobalFilter] = useState(initialSearchQuery);
  const [chapterFilter, setChapterFilter] = useState<string>('all');
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);
  const [sorting, setSorting] = useState<SortingState>([{ id: 'id', desc: false }]);
  const [expandedId, setExpandedId] = useState<string | null>(initialQuestionId || null);

  useEffect(() => {
    if (initialSearchQuery) {
      setGlobalFilter(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  useEffect(() => {
    if (initialQuestionId) {
      setExpandedId(initialQuestionId);
    }
  }, [initialQuestionId]);


  // Persistent bookmarked questions
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rmv_bookmarked_questions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('rmv_bookmarked_questions', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Filtered dataset
  const filteredData = useMemo(() => {
    return masterQuestions.filter((q) => {
      if (onlyBookmarked && !bookmarkedIds.includes(q.id)) {
        return false;
      }
      if (chapterFilter !== 'all' && q.chapter.toString() !== chapterFilter) {
        return false;
      }
      if (domainFilter !== 'all' && q.cognitiveDomain !== domainFilter) {
        return false;
      }
      if (!globalFilter) return true;
      const term = globalFilter.toLowerCase();
      return (
        q.question.toLowerCase().includes(term) ||
        q.options.some((opt) => opt.toLowerCase().includes(term)) ||
        q.explanation.toLowerCase().includes(term) ||
        (q.statute && q.statute.toLowerCase().includes(term)) ||
        q.topic.toLowerCase().includes(term)
      );
    });
  }, [chapterFilter, domainFilter, globalFilter, onlyBookmarked, bookmarkedIds]);

  // Column definitions
  const columns = useMemo<ColumnDef<Question>[]>(
    () => [
      {
        id: 'bookmark',
        header: '',
        cell: (info) => {
          const q = info.row.original;
          const isStarred = bookmarkedIds.includes(q.id);
          return (
            <button
              onClick={(e) => toggleBookmark(q.id, e)}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                isStarred
                  ? 'text-amber-500 hover:text-amber-600 bg-amber-50'
                  : 'text-stone-300 hover:text-amber-500 hover:bg-stone-100'
              }`}
              title={isStarred ? 'Remove from bookmarked' : 'Bookmark this question for study'}
            >
              <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
            </button>
          );
        },
        size: 40,
      },
      {
        accessorKey: 'id',
        header: 'ID',
        cell: (info) => (
          <span className="font-mono text-xs font-semibold text-stone-500">
            {info.getValue() as string}
          </span>
        ),
        size: 70,
      },
      {
        accessorKey: 'chapter',
        header: 'Chapter',
        cell: (info) => {
          const val = info.getValue() as number;
          return (
            <span className="inline-flex items-center gap-1.5 font-medium text-xs text-slate-800">
              <span className="w-5 h-5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 font-mono text-[11px] font-bold flex items-center justify-center">
                {val}
              </span>
              <span className="hidden sm:inline">Ch. {val}</span>
            </span>
          );
        },
        size: 100,
      },
      {
        accessorKey: 'question',
        header: 'Question Statement',
        cell: (info) => {
          const q = info.row.original;
          const isExpanded = expandedId === q.id;
          return (
            <div className="py-1">
              <p className="text-xs md:text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
                {info.getValue() as string}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] text-stone-500 font-mono">{q.topic}</span>
                {q.statute && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-stone-100 text-stone-600">
                    {q.statute}
                  </span>
                )}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: 'cognitiveDomain',
        header: 'Domain',
        cell: (info) => (
          <span className="text-[11px] font-medium text-slate-600 bg-stone-100/90 px-2 py-0.5 rounded">
            {info.getValue() as string}
          </span>
        ),
      },
      {
        accessorKey: 'difficulty',
        header: 'Difficulty',
        cell: (info) => {
          const diff = info.getValue() as string;
          return (
            <span
              className={`text-[10px] font-semibold uppercase font-mono px-2 py-0.5 rounded ${
                diff === 'Rigorous'
                  ? 'bg-rose-100 text-rose-800'
                  : diff === 'Standard'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-emerald-100 text-emerald-800'
              }`}
            >
              {diff}
            </span>
          );
        },
      },
      {
        id: 'actions',
        header: '',
        cell: (info) => {
          const q = info.row.original;
          const isExpanded = expandedId === q.id;
          return (
            <button
              onClick={() => setExpandedId(isExpanded ? null : q.id)}
              className="p-1.5 rounded hover:bg-stone-100 text-stone-500 hover:text-slate-900 transition-colors cursor-pointer"
              title="Expand Details"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          );
        },
        size: 50,
      },
    ],
    [expandedId, bookmarkedIds]
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-wider">
              <span>RMV Question Repository</span>
              <span>·</span>
              <span className="text-slate-900 font-semibold font-sans lowercase">Curated by Aarti S Ravikumar</span>
              <span>·</span>
              <span>M.G.L. c. 90 Standards</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mt-1">
              Curated Question Bank Explorer
            </h1>
            <p className="text-slate-600 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
              Explore all {masterQuestions.length} authenticated examination items from the Registry of Motor Vehicles practice files and statutory chapters.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-center">
              <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block">
                Total Available Items
              </span>
              <span className="text-xl font-serif font-bold text-slate-900">
                {masterQuestions.length} Questions
              </span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-6 pt-6 border-t border-stone-200">
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search by topic, keyword, or statute (e.g. rotary, curfew, BAC)..."
              className="w-full pl-9 pr-4 py-2 text-xs md:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 focus:bg-white text-slate-900"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={chapterFilter}
              onChange={(e) => setChapterFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs md:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-700"
            >
              <option value="all">All Chapters (1 - 5)</option>
              <option value="1">Chapter 1: Obtaining Your License</option>
              <option value="2">Chapter 2: Safety First</option>
              <option value="3">Chapter 3: Keeping Your License</option>
              <option value="4">Chapter 4: Rules of the Road</option>
              <option value="5">Chapter 5: Special Situations</option>
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs md:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-700"
            >
              <option value="all">All Cognitive Domains</option>
              <option value="Statutory Thresholds">Statutory Thresholds</option>
              <option value="Right-of-Way & Spatial">Right-of-Way & Spatial</option>
              <option value="Signs & Markings">Signs & Markings</option>
              <option value="Hazard & Emergencies">Hazard & Emergencies</option>
              <option value="Defensive Operation">Defensive Operation</option>
            </select>
          </div>

          <div className="md:col-span-2 flex items-center">
            <button
              onClick={() => setOnlyBookmarked((prev) => !prev)}
              className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border ${
                onlyBookmarked
                  ? 'bg-amber-100 text-amber-900 border-amber-300 ring-1 ring-amber-400'
                  : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-amber-500 text-amber-500' : 'text-stone-400'}`} />
              <span>Starred ({bookmarkedIds.length})</span>
            </button>
          </div>
        </div>

        {/* Action strip: matching count & practice drill launcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-stone-100 text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-mono">
            <span>Showing <strong className="text-slate-900">{filteredData.length}</strong> matching questions</span>
            {(globalFilter || chapterFilter !== 'all' || domainFilter !== 'all' || onlyBookmarked) && (
              <button
                onClick={() => {
                  setGlobalFilter('');
                  setChapterFilter('all');
                  setDomainFilter('all');
                  setOnlyBookmarked(false);
                }}
                className="text-amber-800 hover:underline font-sans cursor-pointer ml-2"
              >
                Reset filters
              </button>
            )}
          </div>

          {onPracticeFiltered && filteredData.length > 0 && (
            <button
              onClick={() => onPracticeFiltered(filteredData.map((q) => q.id))}
              className="py-1.5 px-3.5 bg-slate-900 hover:bg-slate-800 text-amber-200 rounded-lg font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Play className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Practice Filtered ({Math.min(filteredData.length, 25)} Qs)</span>
            </button>
          )}
        </div>
      </div>

      {/* TanStack Table Container */}
      <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-stone-50/80 border-b border-stone-200">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-slate-600"
                      style={{ width: header.getSize() !== 150 ? header.getSize() : undefined }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={header.column.getCanSort() ? 'cursor-pointer select-none flex items-center gap-1.5' : ''}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: ' ▴',
                            desc: ' ▾',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-stone-100">
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => {
                  const q = row.original;
                  const isExpanded = expandedId === q.id;
                  return (
                    <React.Fragment key={row.id}>
                      <tr
                        className={`hover:bg-amber-500/5 transition-colors cursor-pointer ${
                          isExpanded ? 'bg-amber-50/40' : ''
                        }`}
                        onClick={() => setExpandedId(isExpanded ? null : q.id)}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} className="px-4 py-3.5 align-middle">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>

                      {/* Expandable Row Content */}
                      {isExpanded && (
                        <tr className="bg-stone-50/70 border-b border-stone-200">
                          <td colSpan={columns.length} className="px-6 py-4">
                            <div className="space-y-4">
                              <div className="text-xs font-mono text-stone-500 flex items-center gap-2">
                                <span>Citation: {q.source}</span>
                                {q.statute && <span>· Statutory Basis: {q.statute}</span>}
                              </div>

                              {/* Options */}
                              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                                {q.options.map((option, optIdx) => {
                                  const letter = ['A', 'B', 'C', 'D'][optIdx];
                                  const isCorrect = letter === q.correctAnswer;
                                  return (
                                    <div
                                      key={optIdx}
                                      className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                                        isCorrect
                                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                                          : 'bg-white border-stone-200 text-slate-700'
                                      }`}
                                    >
                                      <span
                                        className={`w-5 h-5 rounded-full font-mono text-[11px] font-bold flex items-center justify-center shrink-0 ${
                                          isCorrect
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-stone-100 text-slate-600'
                                        }`}
                                      >
                                        {letter}
                                      </span>
                                      <span className="flex-1">{option}</span>
                                      {isCorrect && (
                                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                      )}
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Authoritative Explanation */}
                              <div className="bg-white border border-stone-200 rounded-lg p-4 text-xs text-slate-800 leading-relaxed shadow-2xs">
                                <span className="font-semibold text-slate-900 block mb-1">
                                  Official RMV Manual Explanation:
                                </span>
                                {q.explanation}
                              </div>

                              {onLaunchChapterDrill && (
                                <div className="flex justify-end pt-1">
                                  <button
                                    onClick={() => onLaunchChapterDrill(q.chapter)}
                                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-amber-200 text-xs font-medium hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                                  >
                                    <BookOpen className="w-3.5 h-3.5" />
                                    Drill Chapter {q.chapter} Questions
                                  </button>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-12 text-center text-stone-500 text-sm">
                    No matching questions found in repository matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-stone-200 bg-stone-50/50 gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span>
              Showing {table.getRowModel().rows.length > 0 ? table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1 : 0} to{' '}
              {Math.min(
                (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                filteredData.length
              )}{' '}
              of {filteredData.length} questions
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1.5 rounded border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer font-medium"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Previous
            </button>
            <span className="font-mono px-2">
              Page {table.getState().pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)}
            </span>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1.5 rounded border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer font-medium"
            >
              Next
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
