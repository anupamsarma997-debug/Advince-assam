import React, { useState } from 'react';
import { Book, Chapter } from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';
import { BookCover } from './BookCover';
import { TableOfContents } from './TableOfContents';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Search,
  Maximize2,
  Minimize2,
  BookOpen,
  Eye,
  Type,
  Sun,
  Moon,
  Coffee,
  CheckCircle,
  Share2,
  Printer,
  Sparkles,
  FileDown,
} from 'lucide-react';

interface BookReaderProps {
  book: Book;
  activeChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  onOpenPdfModal: () => void;
  onOpenEditor: () => void;
}

export function BookReader({
  book,
  activeChapterId,
  onSelectChapter,
  onOpenPdfModal,
  onOpenEditor,
}: BookReaderProps) {
  const [viewMode, setViewMode] = useState<'single' | 'continuous' | 'cover' | 'toc'>('single');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [paperTheme, setPaperTheme] = useState<'white' | 'sepia' | 'dark'>('white');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeIndex = book.chapters.findIndex((c) => c.id === activeChapterId);
  const currentChapter = book.chapters[activeIndex] || book.chapters[0];

  const handlePrev = () => {
    if (viewMode === 'cover') return;
    if (viewMode === 'toc') {
      setViewMode('cover');
      return;
    }
    if (activeIndex > 0) {
      onSelectChapter(book.chapters[activeIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setViewMode('toc');
    }
  };

  const handleNext = () => {
    if (viewMode === 'cover') {
      setViewMode('toc');
      return;
    }
    if (viewMode === 'toc') {
      if (book.chapters.length > 0) {
        setViewMode('single');
        onSelectChapter(book.chapters[0].id);
      }
      return;
    }
    if (activeIndex < book.chapters.length - 1) {
      onSelectChapter(book.chapters[activeIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Filtered chapters for search
  const filteredChapters = searchQuery.trim()
    ? book.chapters.filter(
        (c) =>
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (c.subtitle && c.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : book.chapters;

  // Theme styling
  const themeClasses = {
    white: 'bg-[#FFFFFF] text-[#1A1A1A] border-[#E5E1DA]',
    sepia: 'bg-[#FAF8F5] text-[#2D2A26] border-[#E5E1DA]',
    dark: 'bg-[#1A1A1A] text-[#FDFCFB] border-[#333333]',
  }[paperTheme];

  const fontClasses = {
    sm: 'text-sm font-editorial-serif leading-relaxed',
    base: 'text-base font-editorial-serif leading-relaxed',
    lg: 'text-lg font-editorial-serif leading-relaxed',
    xl: 'text-xl font-editorial-serif leading-relaxed',
  }[fontSize];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#FDFCFB] flex flex-col font-editorial-serif">
      {/* Top Reading Navigation Bar */}
      <div className="sticky top-16 z-30 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#E5E1DA] px-4 sm:px-8 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-editorial-sans font-medium border border-[#E5E1DA] hover:border-[#1A1A1A] text-[#1A1A1A] flex items-center gap-1.5 cursor-pointer transition-colors bg-white"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#1A1A1A]/70" />
            <span>Contents ({book.chapters.length})</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs font-editorial-sans text-[#1A1A1A]/60">
            <span className="font-editorial-serif italic text-sm text-[#1A1A1A] truncate max-w-xs">{book.title}</span>
            <span className="text-[#E5E1DA]">/</span>
            <span className="uppercase text-[10px] tracking-wider truncate max-w-xs">
              {viewMode === 'cover'
                ? 'Cover'
                : viewMode === 'toc'
                ? 'Table of Contents'
                : `Chapter ${activeIndex + 1} of ${book.chapters.length}`}
            </span>
          </div>
        </div>

        {/* View Mode & Customizers */}
        <div className="flex items-center gap-2">
          {/* View Modes */}
          <div className="hidden sm:flex items-center border border-[#E5E1DA] bg-white text-xs font-editorial-sans">
            <button
              onClick={() => setViewMode('cover')}
              className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                viewMode === 'cover'
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              Cover
            </button>
            <button
              onClick={() => setViewMode('toc')}
              className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors cursor-pointer border-l border-[#E5E1DA] ${
                viewMode === 'toc'
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              Index
            </button>
            <button
              onClick={() => setViewMode('single')}
              className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors cursor-pointer border-l border-[#E5E1DA] ${
                viewMode === 'single'
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              Chapter
            </button>
            <button
              onClick={() => setViewMode('continuous')}
              className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors cursor-pointer border-l border-[#E5E1DA] ${
                viewMode === 'continuous'
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              Full
            </button>
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center border border-[#E5E1DA] bg-white">
            <button
              onClick={() => setPaperTheme('white')}
              className={`p-1.5 cursor-pointer ${
                paperTheme === 'white' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
              title="White Paper"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPaperTheme('sepia')}
              className={`p-1.5 cursor-pointer border-l border-[#E5E1DA] ${
                paperTheme === 'sepia' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
              title="Warm Paper"
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPaperTheme('dark')}
              className={`p-1.5 cursor-pointer border-l border-[#E5E1DA] ${
                paperTheme === 'dark' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
              title="Dark Mode"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Font size adjuster */}
          <button
            onClick={() => {
              const sizes: Array<'sm' | 'base' | 'lg' | 'xl'> = ['sm', 'base', 'lg', 'xl'];
              const next = sizes[(sizes.indexOf(fontSize) + 1) % sizes.length];
              setFontSize(next);
            }}
            className="p-1.5 border border-[#E5E1DA] bg-white text-[#1A1A1A] hover:border-[#1A1A1A] cursor-pointer flex items-center gap-1 text-xs font-editorial-sans font-semibold"
            title="Adjust text size"
          >
            <Type className="w-3.5 h-3.5" />
            <span className="uppercase text-[9px]">{fontSize}</span>
          </button>

          {/* Export PDF Button */}
          <button
            onClick={onOpenPdfModal}
            className="px-3.5 py-1.5 bg-[#1A1A1A] text-white text-[10px] sm:text-xs uppercase tracking-widest font-editorial-sans hover:bg-[#333333] flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Main Body with Sidebar Drawer */}
      <div className="flex-1 flex relative max-w-7xl w-full mx-auto p-4 sm:p-8 gap-8">
        {/* Left Sidebar Table of Contents */}
        {sidebarOpen && (
          <div className="fixed inset-y-0 left-0 z-40 w-80 bg-[#FDFCFB] shadow-2xl border-r border-[#E5E1DA] flex flex-col p-6 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E1DA]">
              <h3 className="font-editorial-sans uppercase tracking-[0.2em] text-xs font-bold text-[#1A1A1A] flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#1A1A1A]" />
                Contents & Search
              </h3>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-[#1A1A1A]/50 hover:text-[#1A1A1A] text-xs px-2 py-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Search Input */}
            <div className="mt-4 relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#1A1A1A]/40" />
              <input
                type="text"
                placeholder="Search manuscript..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-[#E5E1DA] text-xs text-[#1A1A1A] font-editorial-sans focus:outline-hidden focus:border-[#1A1A1A]"
              />
            </div>

            {/* Chapters List */}
            <div className="mt-4 flex-1 overflow-y-auto space-y-1.5 pr-1">
              {filteredChapters.map((ch, idx) => {
                const isActive = ch.id === activeChapterId && viewMode === 'single';
                const isBookmarked = bookmarkedIds.includes(ch.id);

                return (
                  <div
                    key={ch.id}
                    onClick={() => {
                      onSelectChapter(ch.id);
                      setViewMode('single');
                      setSidebarOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`p-3 border transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#F5F2ED] border-[#1A1A1A] text-[#1A1A1A] font-medium'
                        : 'bg-white border-[#E5E1DA] hover:border-[#1A1A1A] text-[#1A1A1A]/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-editorial-sans font-bold text-[#1A1A1A]/50">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h5 className="text-xs font-editorial-serif flex-1 leading-snug line-clamp-2">
                        {ch.title}
                      </h5>
                      {isBookmarked && <Bookmark className="w-3 h-3 text-[#1A1A1A] fill-[#1A1A1A] shrink-0" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Center Content / Reading Canvas */}
        <div className="flex-1 flex flex-col items-center">
          <div
            className={`w-full max-w-4xl border p-8 sm:p-14 transition-colors editorial-paper-shadow ${themeClasses}`}
          >
            {/* 1. COVER VIEW */}
            {viewMode === 'cover' && (
              <div className="py-4">
                <BookCover book={book} />
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setViewMode('toc')}
                    className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs uppercase tracking-widest font-editorial-sans flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <span>Read Table of Contents</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 2. TOC VIEW */}
            {viewMode === 'toc' && (
              <div className="py-2">
                <TableOfContents
                  book={book}
                  activeChapterId={activeChapterId}
                  onSelectChapter={(ch) => {
                    onSelectChapter(ch.id);
                    setViewMode('single');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            )}

            {/* 3. SINGLE CHAPTER VIEW */}
            {viewMode === 'single' && currentChapter && (
              <div className="py-2">
                {/* Chapter Meta Top Bar */}
                <div className="flex items-center justify-between border-b border-[#E5E1DA] pb-4 mb-8">
                  <div>
                    {currentChapter.volume && (
                      <span className="text-[10px] font-editorial-sans uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/50 block">
                        {currentChapter.volume}
                      </span>
                    )}
                    <span className="text-[10px] font-editorial-sans uppercase tracking-[0.15em] text-[#1A1A1A]/40 block mt-0.5">
                      Chapter {activeIndex + 1} of {book.chapters.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleBookmark(currentChapter.id)}
                      className={`p-2 border border-[#E5E1DA] transition-colors cursor-pointer ${
                        bookmarkedIds.includes(currentChapter.id)
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                          : 'hover:border-[#1A1A1A] text-[#1A1A1A]/60'
                      }`}
                      title="Bookmark this chapter"
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${
                          bookmarkedIds.includes(currentChapter.id) ? 'fill-current' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Chapter Title */}
                <div className="mb-6">
                  <h1 className="text-3xl sm:text-4xl font-editorial-serif tracking-tight leading-tight text-[#1A1A1A]">
                    {currentChapter.title}
                  </h1>

                  {currentChapter.subtitle && (
                    <p className="text-base sm:text-lg text-[#1A1A1A]/70 mt-2 font-editorial-serif italic">
                      {currentChapter.subtitle}
                    </p>
                  )}
                </div>

                {/* Tags / Topics */}
                {currentChapter.topics && currentChapter.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 my-4">
                    {currentChapter.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-[#F5F2ED] text-[#1A1A1A]/80 text-[10px] uppercase tracking-wider font-editorial-sans border border-[#E5E1DA]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <hr className="my-8 border-[#E5E1DA]" />

                {/* Chapter Markdown Content */}
                <div className={fontClasses}>
                  <MarkdownRenderer content={currentChapter.content} />
                </div>

                {/* Bottom Navigation Buttons */}
                <div className="mt-14 pt-6 border-t border-[#E5E1DA] flex items-center justify-between gap-4 font-editorial-sans">
                  <button
                    onClick={handlePrev}
                    className="px-4 py-2 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-xs uppercase tracking-widest flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/40">
                    {activeIndex + 1} / {book.chapters.length}
                  </span>

                  <button
                    onClick={handleNext}
                    className="px-5 py-2 bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs uppercase tracking-widest flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 4. FULL CONTINUOUS BOOK VIEW */}
            {viewMode === 'continuous' && (
              <div className="space-y-16">
                <div className="text-center py-6 border-b border-[#E5E1DA]">
                  <h1 className="text-3xl sm:text-4xl font-editorial-serif tracking-tight text-[#1A1A1A]">{book.title}</h1>
                  <p className="text-[#1A1A1A]/60 italic font-editorial-serif mt-2">{book.subtitle}</p>
                </div>

                {book.chapters.map((ch, idx) => (
                  <div key={ch.id} className="border-b border-[#E5E1DA] pb-14">
                    <span className="text-[10px] font-editorial-sans uppercase tracking-[0.25em] text-[#1A1A1A]/40 font-bold block mb-1">
                      Chapter {idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial-serif tracking-tight text-[#1A1A1A] mb-3">{ch.title}</h2>
                    {ch.subtitle && <p className="text-sm text-[#1A1A1A]/70 italic font-editorial-serif mb-6">{ch.subtitle}</p>}
                    <MarkdownRenderer content={ch.content} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
