import React, { useState } from 'react';
import { Book, ExportPdfOptions } from '../types';
import { printBookToPdf, downloadBookAsPdf, exportBookAsMarkdown, exportBookAsJson } from '../utils/pdfGenerator';
import {
  FileDown,
  Printer,
  FileCode,
  FileJson,
  CheckCircle2,
  Loader2,
  X,
  Sparkles,
  Sliders,
  BookOpen,
} from 'lucide-react';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
  printableElementId: string;
}

export function PdfExportModal({
  isOpen,
  onClose,
  book,
  printableElementId,
}: PdfExportModalProps) {
  const [options, setOptions] = useState<ExportPdfOptions>({
    pageSize: 'a4',
    includeCover: true,
    includeToc: true,
    includeRoadmap: true,
    includeCopyright: true,
    fontSize: 'medium',
    colorTheme: 'classic',
    pageNumbers: true,
    headerTitle: true,
  });

  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [progressStatus, setProgressStatus] = useState('');

  if (!isOpen) return null;

  const handlePrint = () => {
    printBookToPdf(book);
    onClose();
  };

  const handleDownloadPdf = async () => {
    try {
      setDownloading(true);
      setDownloadProgress(10);
      setProgressStatus('Initializing PDF render engine...');

      await downloadBookAsPdf(
        printableElementId,
        book,
        options,
        (percent, status) => {
          setDownloadProgress(percent);
          setProgressStatus(status);
        }
      );

      setTimeout(() => {
        setDownloading(false);
        onClose();
      }, 800);
    } catch (err: any) {
      console.error('PDF export failed:', err);
      alert(`PDF download failed: ${err.message}. You can also use the "Print to PDF" option for 100% vector quality.`);
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-red-600 to-rose-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white">
              <FileDown className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base">Export Book to PDF</h3>
              <p className="text-xs text-rose-100">Professional multi-page publication formats</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={downloading}
            className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Main 2 Export Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Direct Vector Print (Recommended) */}
            <div
              onClick={handlePrint}
              className="p-4 rounded-xl border-2 border-red-500/80 bg-red-50/40 hover:bg-red-50 hover:border-red-600 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-red-950">
                    <Printer className="w-4 h-4 text-red-600" />
                    <span>Print to PDF (Vector)</span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white uppercase">
                    Best Quality
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Opens native print dialog. 100% sharp vector text, native page-breaks, crisp Assamese/Devanagari fonts.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-red-200/60 flex items-center text-xs font-bold text-red-700 group-hover:text-red-800">
                <span>Print or Save as PDF &rarr;</span>
              </div>
            </div>

            {/* Direct File Download */}
            <div
              onClick={handleDownloadPdf}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-900">
                    <FileDown className="w-4 h-4 text-blue-600" />
                    <span>Direct File Download</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Compiles and saves a standalone <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px]">.pdf</code> file directly to your downloads.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span>Download .PDF File &rarr;</span>
              </div>
            </div>
          </div>

          {/* Progress Bar when compiling PDF */}
          {downloading && (
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-red-400" />
                  {progressStatus}
                </span>
                <span className="text-red-400 font-bold">{downloadProgress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-rose-400 transition-all duration-300 rounded-full"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Options & Document Configuration */}
          <div className="border-t border-slate-200 pt-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              Document Layout Options
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.includeCover}
                  onChange={(e) => setOptions({ ...options, includeCover: e.target.checked })}
                  className="rounded text-red-600"
                />
                <span className="font-medium text-slate-800">Cover Page</span>
              </label>

              <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.includeToc}
                  onChange={(e) => setOptions({ ...options, includeToc: e.target.checked })}
                  className="rounded text-red-600"
                />
                <span className="font-medium text-slate-800">Table of Contents</span>
              </label>

              <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.includeCopyright}
                  onChange={(e) => setOptions({ ...options, includeCopyright: e.target.checked })}
                  className="rounded text-red-600"
                />
                <span className="font-medium text-slate-800">Copyright Page</span>
              </label>

              <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.pageNumbers}
                  onChange={(e) => setOptions({ ...options, pageNumbers: e.target.checked })}
                  className="rounded text-red-600"
                />
                <span className="font-medium text-slate-800">Page Numbers</span>
              </label>

              <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.headerTitle}
                  onChange={(e) => setOptions({ ...options, headerTitle: e.target.checked })}
                  className="rounded text-red-600"
                />
                <span className="font-medium text-slate-800">Header Titles</span>
              </label>

              <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="font-medium text-slate-700">Size</span>
                <select
                  value={options.pageSize}
                  onChange={(e) => setOptions({ ...options, pageSize: e.target.value as any })}
                  className="text-xs bg-transparent font-semibold text-slate-800 focus:outline-hidden"
                >
                  <option value="a4">A4 Standard</option>
                  <option value="letter">US Letter</option>
                  <option value="b5">B5 Book</option>
                </select>
              </div>
            </div>
          </div>

          {/* Alternative Formats (Markdown / JSON) */}
          <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Also export source format:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => exportBookAsMarkdown(book)}
                className="px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-1 cursor-pointer"
              >
                <FileCode className="w-3.5 h-3.5 text-blue-600" />
                <span>Markdown (.md)</span>
              </button>
              <button
                onClick={() => exportBookAsJson(book)}
                className="px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-1 cursor-pointer"
              >
                <FileJson className="w-3.5 h-3.5 text-amber-600" />
                <span>JSON (.json)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 truncate max-w-xs">{book.title}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
