import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  SortingState,
} from '@tanstack/react-table';
import { PsychometricReport } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  Award, 
  Clock, 
  ChevronRight, 
  RotateCcw, 
  FileText, 
  BarChart2, 
  Calendar 
} from 'lucide-react';

interface AssessmentHistoryProps {
  history: PsychometricReport[];
  onSelectReport: (report: PsychometricReport) => void;
  onStartExam: () => void;
}

export const AssessmentHistory: React.FC<AssessmentHistoryProps> = ({
  history,
  onSelectReport,
  onStartExam,
}) => {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'timestamp', desc: true }]);

  // Summary Metrics
  const summaryStats = useMemo(() => {
    if (history.length === 0) return null;
    const total = history.length;
    const passedCount = history.filter((h) => h.passed).length;
    const passRate = Math.round((passedCount / total) * 100);
    const avgScore = Math.round(history.reduce((acc, h) => acc + h.scorePercentage, 0) / total);
    const bestScore = Math.max(...history.map((h) => h.scorePercentage));
    const avgPace = Math.round(history.reduce((acc, h) => acc + h.avgResponseTimeSec, 0) / total);

    return { total, passRate, avgScore, bestScore, avgPace };
  }, [history]);

  // Column definitions
  const columns = useMemo<ColumnDef<PsychometricReport>[]>(
    () => [
      {
        accessorKey: 'timestamp',
        header: 'Date & Time',
        cell: (info) => {
          const report = info.row.original;
          return (
            <div>
              <div className="font-medium text-slate-900 text-xs sm:text-sm">{report.date}</div>
              <div className="text-[11px] font-mono text-stone-500">
                {new Date(report.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: 'mode',
        header: 'Assessment Type',
        cell: (info) => {
          const mode = info.getValue() as string;
          return (
            <span className="font-mono text-xs uppercase tracking-wider text-slate-700 bg-stone-100 px-2.5 py-1 rounded">
              {mode === 'simulation'
                ? 'Official 25-Q Simulation'
                : mode === 'diagnostic'
                ? '40-Q Diagnostic'
                : mode === 'chapter_drill'
                ? 'Chapter Drill'
                : 'Weak-Spots Drill'}
            </span>
          );
        },
      },
      {
        accessorKey: 'scorePercentage',
        header: 'Score',
        cell: (info) => {
          const report = info.row.original;
          return (
            <div className="flex items-center gap-2">
              <span className="text-base font-serif font-bold text-slate-900">
                {report.scorePercentage}%
              </span>
              <span className="text-xs font-mono text-stone-500">
                ({report.correctCount}/{report.totalQuestions})
              </span>
            </div>
          );
        },
      },
      {
        accessorKey: 'passed',
        header: 'RMV Result',
        cell: (info) => {
          const passed = info.getValue() as boolean;
          return (
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                passed
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-rose-50 text-rose-800 border-rose-300'
              }`}
            >
              {passed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <XCircle className="w-3.5 h-3.5 text-rose-600" />}
              {passed ? 'Passed (≥72%)' : 'Did Not Pass'}
            </span>
          );
        },
      },
      {
        accessorKey: 'avgResponseTimeSec',
        header: 'Avg. Pace',
        cell: (info) => {
          const val = info.getValue() as number;
          return (
            <span className="font-mono text-xs text-stone-600">
              {val}s / item
            </span>
          );
        },
      },
      {
        id: 'actions',
        header: '',
        cell: (info) => {
          const report = info.row.original;
          return (
            <button
              onClick={() => onSelectReport(report)}
              className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-slate-900 hover:text-white text-slate-700 font-medium text-xs transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>View Report</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          );
        },
      },
    ],
    [onSelectReport]
  );

  const table = useReactTable({
    data: history,
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
        pageSize: 8,
      },
    },
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-wider">
              <span>Performance Ledger</span>
              <span>·</span>
              <span>TanStack Psychometric History</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mt-1">
              Assessment History & Records
            </h1>
            <p className="text-slate-600 text-xs md:text-sm mt-1 max-w-xl">
              Track your test attempts, identify learning trajectories over time, and inspect in-depth diagnostic reports.
            </p>
          </div>

          <button
            onClick={onStartExam}
            className="px-5 py-2.5 rounded-lg bg-slate-900 text-amber-200 text-xs md:text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2 self-start md:self-auto cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            Take New Exam Simulation
          </button>
        </div>

        {/* Aggregate Stats */}
        {summaryStats && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6 pt-6 border-t border-stone-200">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">Total Tests</span>
              <span className="text-xl font-serif font-bold text-slate-900">{summaryStats.total}</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">Pass Rate</span>
              <span className="text-xl font-serif font-bold text-emerald-700">{summaryStats.passRate}%</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">Average Score</span>
              <span className="text-xl font-serif font-bold text-slate-900">{summaryStats.avgScore}%</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">Peak Score</span>
              <span className="text-xl font-serif font-bold text-amber-700">{summaryStats.bestScore}%</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">Avg Response Pace</span>
              <span className="text-xl font-serif font-bold text-blue-700">{summaryStats.avgPace}s</span>
            </div>
          </div>
        )}
      </div>

      {/* TanStack Table */}
      <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden">
        {history.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} className="bg-stone-50/80 border-b border-stone-200">
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="px-4 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-slate-600"
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
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="hover:bg-stone-50/70 transition-colors">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-4 py-3.5 align-middle">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {table.getPageCount() > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200 bg-stone-50/50 text-xs text-slate-600">
                <span>
                  Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{' '}
                  {Math.min(
                    (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                    history.length
                  )}{' '}
                  of {history.length} attempts
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="px-3 py-1.5 rounded border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Previous
                  </button>
                  <span className="font-mono px-2">
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                  </span>
                  <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="px-3 py-1.5 rounded border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="px-6 py-16 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900">No Assessment Runs Recorded Yet</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Complete an official 25-question simulation or a chapter drill to populate your psychometric performance ledger.
            </p>
            <button
              onClick={onStartExam}
              className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Launch Initial Simulation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
