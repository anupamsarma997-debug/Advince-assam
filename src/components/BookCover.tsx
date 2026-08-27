import React from 'react';
import { Book } from '../types';
import { BookOpen, Sparkles, Award, Code2, Layers, Cpu } from 'lucide-react';

interface BookCoverProps {
  book: Book;
  compact?: boolean;
  className?: string;
}

export function BookCover({ book, compact = false, className = '' }: BookCoverProps) {
  const coverBg = book.coverColor || '#1A1A1A';

  if (compact) {
    return (
      <div
        className={`relative aspect-[3/4] w-28 overflow-hidden border border-[#E5E1DA] shadow-md flex flex-col justify-between p-3 text-white select-none font-editorial-serif ${className}`}
        style={{ backgroundColor: coverBg }}
      >
        <div className="z-10">
          <span className="text-[8px] font-editorial-sans uppercase tracking-[0.2em] text-[#FDFCFB]/60 block line-clamp-1">
            {book.edition}
          </span>
          <h4 className="text-xs font-editorial-serif font-bold leading-tight mt-1 line-clamp-2 text-[#FDFCFB]">{book.title}</h4>
        </div>
        <div className="z-10 text-[9px] font-editorial-sans uppercase tracking-wider text-[#FDFCFB]/70 border-t border-[#FDFCFB]/20 pt-1">
          <p className="truncate">{book.author}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full max-w-2xl aspect-[1/1.414] mx-auto overflow-hidden border-2 border-[#1A1A1A] p-8 sm:p-14 text-white select-none editorial-paper-shadow flex flex-col justify-between font-editorial-serif ${className}`}
      style={{ backgroundColor: coverBg }}
    >
      {/* Editorial Frame Inset Line */}
      <div className="absolute inset-4 sm:inset-6 border border-[#FDFCFB]/30 pointer-events-none"></div>

      {/* Book Spine Simulation on left */}
      <div className="absolute left-0 top-0 bottom-0 w-5 book-spine-effect pointer-events-none"></div>

      {/* Top Header Badge & Series Tag */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#FDFCFB]/20 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 border border-[#FDFCFB]/40 text-[#FDFCFB] text-[10px] uppercase font-editorial-sans tracking-[0.2em] font-medium">
            {book.edition}
          </span>
          {book.language && (
            <span className="text-[10px] font-editorial-sans uppercase tracking-widest text-[#FDFCFB]/70">
              {book.language}
            </span>
          )}
        </div>
        <div className="text-[10px] uppercase font-editorial-sans tracking-[0.2em] text-[#FDFCFB]/60">
          <span>{book.publishedYear}</span>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="relative z-10 my-auto py-8 text-center sm:text-left">
        <div className="inline-block text-[10px] uppercase font-editorial-sans tracking-[0.25em] text-[#FDFCFB]/70 mb-4 border-b border-[#FDFCFB]/30 pb-1">
          {book.coverBadge || 'Specialized Master Edition'}
        </div>

        <h1 className="text-3xl sm:text-5xl font-editorial-serif font-normal tracking-tight leading-[1.15] text-[#FDFCFB]">
          {book.title}
        </h1>

        <p className="mt-4 text-base sm:text-xl text-[#FDFCFB]/80 font-editorial-serif italic leading-relaxed max-w-xl">
          {book.subtitle}
        </p>

        {/* Highlight Tags */}
        {book.tags && book.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 justify-center sm:justify-start font-editorial-sans">
            {book.tags.slice(0, 6).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 border border-[#FDFCFB]/20 text-[9px] uppercase tracking-widest text-[#FDFCFB]/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer Info: Author & Publishing metadata */}
      <div className="relative z-10 border-t border-[#FDFCFB]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDFCFB]/70 font-editorial-sans">
        <div>
          <p className="text-[#FDFCFB]/40 uppercase tracking-[0.25em] text-[9px] font-bold">Author</p>
          <p className="font-editorial-serif text-base text-[#FDFCFB] mt-0.5 font-medium">{book.author}</p>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-[#FDFCFB]/40 uppercase tracking-[0.25em] text-[9px] font-bold">Registration / ISBN</p>
          <p className="font-mono text-[#FDFCFB]/80 text-[10px] tracking-wider mt-0.5">{book.isbn || 'ISBN 978-2026-CODE'}</p>
        </div>
      </div>
    </div>
  );
}
