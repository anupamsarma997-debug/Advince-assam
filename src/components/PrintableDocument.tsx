import React from 'react';
import { Book, ExportPdfOptions } from '../types';
import { BookCover } from './BookCover';
import { TableOfContents } from './TableOfContents';
import { MarkdownRenderer } from './MarkdownRenderer';
import { Sparkles, Shield, Bookmark, Terminal, CheckCircle2 } from 'lucide-react';

interface PrintableDocumentProps {
  book: Book;
  options: ExportPdfOptions;
}

export function PrintableDocument({ book, options }: PrintableDocumentProps) {
  return (
    <div id="printable-book-document" className="w-full max-w-4xl mx-auto bg-white text-[#1A1A1A] font-editorial-serif">
      {/* 1. COVER PAGE */}
      {options.includeCover && (
        <div className="min-h-[1050px] flex flex-col justify-center items-center p-6 sm:p-12 border-b border-[#E5E1DA]">
          <BookCover book={book} />
        </div>
      )}

      {/* 2. COPYRIGHT & METADATA PAGE */}
      {options.includeCopyright && (
        <div className="print-page-break min-h-[950px] p-12 sm:p-16 flex flex-col justify-between border-b border-[#E5E1DA]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/40 font-editorial-sans font-bold">
              Publication Notice & Cataloging
            </span>
            <h2 className="text-3xl font-editorial-serif tracking-tight text-[#1A1A1A] mt-3">{book.title}</h2>
            <p className="text-base text-[#1A1A1A]/70 italic mt-1 font-editorial-serif">{book.subtitle}</p>

            <div className="mt-10 space-y-3 text-xs text-[#1A1A1A]/80 leading-relaxed border-t border-b border-[#E5E1DA] py-6 font-editorial-sans">
              <p><strong>Edition:</strong> {book.edition}</p>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Language:</strong> {book.language}</p>
              <p><strong>Publication Year:</strong> {book.publishedYear}</p>
              <p><strong>Standard Book Identifier:</strong> {book.isbn || 'ISBN 978-93-5492-2026-X'}</p>
            </div>

            <div className="mt-8 text-xs text-[#1A1A1A]/80 space-y-3 font-editorial-serif">
              <p className="leading-relaxed">{book.description}</p>
              <p className="pt-4 text-[#1A1A1A]/60 italic">
                {book.copyright}
              </p>
            </div>
          </div>

          <div className="border-t border-[#E5E1DA] pt-4 flex items-center justify-between text-[10px] text-[#1A1A1A]/40 uppercase tracking-widest font-editorial-sans">
            <span>Special Master Publication</span>
            <span>Book Studio AI Engine</span>
          </div>
        </div>
      )}

      {/* 3. TABLE OF CONTENTS PAGE */}
      {options.includeToc && (
        <div className="print-page-break min-h-[950px] p-10 sm:p-14 border-b border-[#E5E1DA]">
          <TableOfContents book={book} isPrintable={true} />
        </div>
      )}

      {/* 4. CHAPTERS */}
      {book.chapters.map((chapter, index) => {
        return (
          <div
            key={chapter.id}
            id={`chapter-section-${chapter.id}`}
            className="print-page-break p-10 sm:p-14 border-b border-[#E5E1DA] min-h-[950px]"
          >
            {/* Header / Running Header */}
            {options.headerTitle && (
              <div className="no-print hidden sm:flex items-center justify-between border-b border-[#E5E1DA] pb-2 mb-8 text-[10px] text-[#1A1A1A]/40 uppercase tracking-[0.2em] font-editorial-sans">
                <span className="truncate max-w-sm">{book.title}</span>
                <span>Chapter {index + 1}</span>
              </div>
            )}

            {/* Volume indicator if any */}
            {chapter.volume && (
              <div className="mb-2">
                <span className="text-[10px] font-editorial-sans uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/50 block">
                  {chapter.volume}
                </span>
              </div>
            )}

            {/* Chapter Header */}
            <div className="mb-8 pb-4 border-b border-[#1A1A1A]">
              <span className="text-[10px] uppercase font-editorial-sans tracking-[0.2em] text-[#1A1A1A]/40 block mb-1">
                Chapter {index + 1}
              </span>
              <h1 className="text-3xl sm:text-4xl font-editorial-serif tracking-tight text-[#1A1A1A]">
                {chapter.title}
              </h1>
              {chapter.subtitle && (
                <p className="text-base text-[#1A1A1A]/70 mt-2 font-editorial-serif italic">
                  {chapter.subtitle}
                </p>
              )}

              {chapter.topics && chapter.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 font-editorial-sans">
                  {chapter.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 border border-[#E5E1DA] text-[#1A1A1A]/70 text-[10px] uppercase tracking-wider"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Chapter Body Content */}
            <MarkdownRenderer content={chapter.content} />

            {/* Chapter Footer */}
            {options.pageNumbers && (
              <div className="mt-14 pt-4 border-t border-[#E5E1DA] flex items-center justify-between text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-editorial-sans">
                <span className="truncate max-w-xs">{chapter.title}</span>
                <span>Page {index + 4}</span>
              </div>
            )}
          </div>
        );
      })}

      {/* 5. BACK COVER / CLOSING */}
      <div className="print-page-break min-h-[600px] p-12 bg-[#1A1A1A] text-[#FDFCFB] flex flex-col justify-between items-center text-center font-editorial-serif">
        <div className="my-auto max-w-md">
          <span className="text-[10px] font-editorial-sans uppercase tracking-[0.25em] text-[#FDFCFB]/40 block mb-3">
            Closing Colophon
          </span>
          <h3 className="text-2xl font-editorial-serif font-normal text-[#FDFCFB]">{book.title}</h3>
          <p className="text-sm text-[#FDFCFB]/70 mt-2 italic">{book.subtitle}</p>
          <div className="mt-6 p-6 border border-[#FDFCFB]/20 text-xs text-[#FDFCFB]/80 leading-relaxed">
            <p className="italic font-editorial-serif">"{book.description}"</p>
          </div>
        </div>

        <div className="border-t border-[#FDFCFB]/20 pt-4 w-full text-[10px] uppercase tracking-widest text-[#FDFCFB]/40 flex items-center justify-between font-editorial-sans">
          <span>{book.copyright}</span>
          <span>{book.publishedYear}</span>
        </div>
      </div>
    </div>
  );
}
