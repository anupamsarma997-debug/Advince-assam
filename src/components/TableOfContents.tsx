import React from 'react';
import { Book, Chapter } from '../types';
import { BookOpen, ChevronRight, Clock, FileText } from 'lucide-react';

interface TableOfContentsProps {
  book: Book;
  onSelectChapter?: (chapter: Chapter) => void;
  activeChapterId?: string;
  className?: string;
  isPrintable?: boolean;
}

export function TableOfContents({
  book,
  onSelectChapter,
  activeChapterId,
  className = '',
  isPrintable = false,
}: TableOfContentsProps) {
  // Group chapters by volume if available
  const volumes = book.volumes || [];
  const hasVolumes = volumes.length > 0;

  return (
    <div className={`w-full font-editorial-serif ${className}`}>
      <div className="mb-8 border-b border-[#E5E1DA] pb-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-editorial-sans font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/40 block">
            Table of Contents
          </span>
          <h2 className="text-2xl sm:text-3xl font-editorial-serif tracking-tight text-[#1A1A1A] mt-1">
            সূচীপত্ৰ ও বিষয়-বিভাগ
          </h2>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/60 italic mt-1 font-editorial-serif">
            Total {book.chapters.length} Chapters • {book.title}
          </p>
        </div>
      </div>

      {hasVolumes ? (
        <div className="space-y-8">
          {volumes.map((vol, vIdx) => {
            const volChapters = book.chapters.filter((ch) =>
              vol.chapterIds.includes(ch.id) || ch.volume === vol.title
            );

            if (volChapters.length === 0) return null;

            return (
              <div key={vol.id || vIdx} className="border border-[#E5E1DA] bg-white">
                <div className="bg-[#FAF8F5] px-5 py-3 border-b border-[#E5E1DA]">
                  <span className="text-[9px] font-editorial-sans uppercase tracking-[0.2em] text-[#1A1A1A]/50 font-bold block">
                    Volume {vIdx + 1}
                  </span>
                  <h3 className="text-base font-editorial-serif font-bold text-[#1A1A1A]">{vol.title}</h3>
                  {vol.description && (
                    <p className="text-xs text-[#1A1A1A]/60 italic mt-0.5">{vol.description}</p>
                  )}
                </div>

                <div className="divide-y divide-[#E5E1DA]">
                  {volChapters.map((ch, idx) => {
                    const isActive = activeChapterId === ch.id;
                    return (
                      <div
                        key={ch.id}
                        onClick={() => onSelectChapter?.(ch)}
                        className={`px-5 py-3.5 flex items-start justify-between gap-3 transition-colors ${
                          !isPrintable ? 'cursor-pointer hover:bg-[#F5F2ED]' : ''
                        } ${isActive ? 'bg-[#F5F2ED] border-l-4 border-[#1A1A1A]' : ''}`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-editorial-sans font-bold text-[#1A1A1A]/50 uppercase">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <h4
                              className={`text-sm sm:text-base font-editorial-serif ${
                                isActive ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]'
                              }`}
                            >
                              {ch.title}
                            </h4>
                          </div>

                          {ch.subtitle && (
                            <p className="text-xs text-[#1A1A1A]/60 italic mt-1 pl-7">
                              {ch.subtitle}
                            </p>
                          )}

                          {ch.topics && ch.topics.length > 0 && !isPrintable && (
                            <div className="flex flex-wrap gap-1.5 mt-2 pl-7">
                              {ch.topics.map((t, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 bg-[#FAF8F5] text-[10px] uppercase font-editorial-sans tracking-wider text-[#1A1A1A]/70 border border-[#E5E1DA]"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {ch.estimatedReadTime && (
                          <div className="flex items-center gap-1 text-[10px] uppercase font-editorial-sans tracking-wider text-[#1A1A1A]/40 shrink-0 pt-0.5">
                            <Clock className="w-3 h-3" />
                            <span>{ch.estimatedReadTime}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="divide-y divide-[#E5E1DA] border border-[#E5E1DA] bg-white">
          {book.chapters.map((ch, idx) => {
            const isActive = activeChapterId === ch.id;
            return (
              <div
                key={ch.id}
                onClick={() => onSelectChapter?.(ch)}
                className={`p-5 flex items-start justify-between gap-3 transition-colors ${
                  !isPrintable ? 'cursor-pointer hover:bg-[#F5F2ED]' : ''
                } ${isActive ? 'bg-[#F5F2ED] border-l-4 border-[#1A1A1A]' : ''}`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-editorial-sans font-bold text-[#1A1A1A]/50 uppercase">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-sm sm:text-base font-editorial-serif font-medium text-[#1A1A1A]">
                      {ch.title}
                    </h4>
                  </div>
                  {ch.subtitle && (
                    <p className="text-xs text-[#1A1A1A]/60 italic mt-1 pl-7">{ch.subtitle}</p>
                  )}
                </div>
                {ch.estimatedReadTime && (
                  <span className="text-[10px] font-editorial-sans uppercase tracking-wider text-[#1A1A1A]/40">
                    {ch.estimatedReadTime}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
