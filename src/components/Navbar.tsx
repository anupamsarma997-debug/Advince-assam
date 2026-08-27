import React from 'react';
import { Book } from '../types';
import {
  BookOpen,
  Edit3,
  Sparkles,
  FileDown,
  Plus,
  Library,
  ChevronDown,
  Code2,
  Printer,
  CheckCircle2,
} from 'lucide-react';

interface NavbarProps {
  books: Book[];
  activeBook: Book;
  onSelectBook: (book: Book) => void;
  activeMode: 'reader' | 'editor';
  onChangeMode: (mode: 'reader' | 'editor') => void;
  onOpenGenerator: () => void;
  onOpenPdfModal: () => void;
}

export function Navbar({
  books,
  activeBook,
  onSelectBook,
  activeMode,
  onChangeMode,
  onOpenGenerator,
  onOpenPdfModal,
}: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <header className="no-print bg-[#FDFCFB] text-[#1A1A1A] border-b border-[#E5E1DA] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand & Manuscript Title */}
        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-[#1A1A1A]/40 whitespace-nowrap">
              Manuscript
            </span>
            <span className="hidden sm:inline text-xs text-[#E5E1DA]">/</span>
          </div>

          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-editorial-serif italic lowercase tracking-tight text-[#1A1A1A] truncate">
              {activeBook.title}
            </h1>
          </div>
        </div>

        {/* Action Controls & Mode Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Manuscript Selector */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-sans border border-[#E5E1DA] hover:border-[#1A1A1A] text-[#1A1A1A] flex items-center gap-1.5 transition-colors cursor-pointer bg-white"
            >
              <Library className="w-3.5 h-3.5 text-[#1A1A1A]/70" />
              <span className="hidden md:inline truncate max-w-[120px]">Library ({books.length})</span>
              <ChevronDown className="w-3 h-3 text-[#1A1A1A]/50" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-[#FDFCFB] border border-[#E5E1DA] shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-2 text-[9px] uppercase tracking-[0.25em] font-sans font-bold text-[#1A1A1A]/40 border-b border-[#E5E1DA]">
                  Manuscript Library ({books.length})
                </div>
                <div className="max-h-64 overflow-y-auto space-y-1 my-1">
                  {books.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        onSelectBook(b);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs transition-colors cursor-pointer flex items-start justify-between gap-2 ${
                        b.id === activeBook.id
                          ? 'bg-[#F5F2ED] text-[#1A1A1A] font-medium border border-[#E5E1DA]'
                          : 'text-[#1A1A1A]/80 hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="truncate flex-1">
                        <p className="font-serif text-sm truncate">{b.title}</p>
                        <p className="text-[10px] text-[#1A1A1A]/50 font-sans tracking-wide truncate">
                          {b.language} • {b.chapters.length} chapters
                        </p>
                      </div>
                      {b.id === activeBook.id && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="pt-2 border-t border-[#E5E1DA]">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenGenerator();
                    }}
                    className="w-full py-1.5 text-[10px] uppercase tracking-widest font-sans border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Create Manuscript with AI</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mode Switcher */}
          <div className="flex border border-[#E5E1DA] bg-white">
            <button
              onClick={() => onChangeMode('reader')}
              className={`px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-sans transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeMode === 'reader'
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#FAF8F5]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read</span>
            </button>
            <button
              onClick={() => onChangeMode('editor')}
              className={`px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-sans transition-colors cursor-pointer flex items-center gap-1.5 border-l border-[#E5E1DA] ${
                activeMode === 'editor'
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#FAF8F5]'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Studio</span>
            </button>
          </div>

          {/* AI Book Creator Button */}
          <button
            onClick={onOpenGenerator}
            className="hidden lg:flex px-4 py-2 text-xs uppercase tracking-widest font-sans border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Author</span>
          </button>

          {/* Instant PDF Export CTA */}
          <button
            onClick={onOpenPdfModal}
            className="px-4 sm:px-5 py-2 text-xs uppercase tracking-widest font-sans bg-[#1A1A1A] text-white hover:bg-[#333333] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Export PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}
