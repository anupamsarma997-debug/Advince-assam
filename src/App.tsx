import React, { useState, useEffect } from 'react';
import { Book, Chapter, ExportPdfOptions } from './types';
import { SAMPLE_BOOKS, CODE_YATRA_BOOK } from './data/defaultBooks';
import { Navbar } from './components/Navbar';
import { BookReader } from './components/BookReader';
import { BookEditor } from './components/BookEditor';
import { BookGeneratorModal } from './components/BookGeneratorModal';
import { PdfExportModal } from './components/PdfExportModal';
import { PrintableDocument } from './components/PrintableDocument';

export default function App() {
  const [books, setBooks] = useState<Book[]>(() => {
    try {
      const saved = localStorage.getItem('book_studio_library');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not load local books:', e);
    }
    return SAMPLE_BOOKS;
  });

  const [activeBookId, setActiveBookId] = useState<string>(CODE_YATRA_BOOK.id);
  const activeBook = books.find((b) => b.id === activeBookId) || books[0] || CODE_YATRA_BOOK;

  const [activeChapterId, setActiveChapterId] = useState<string>(() => {
    return activeBook.chapters[0]?.id || 'ch-1';
  });

  const [activeMode, setActiveMode] = useState<'reader' | 'editor'>('reader');
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Sync active chapter when book changes
  useEffect(() => {
    if (activeBook.chapters.length > 0) {
      const exists = activeBook.chapters.some((c) => c.id === activeChapterId);
      if (!exists) {
        setActiveChapterId(activeBook.chapters[0].id);
      }
    }
  }, [activeBookId]);

  // Persist library
  useEffect(() => {
    try {
      localStorage.setItem('book_studio_library', JSON.stringify(books));
    } catch (e) {
      console.warn('Failed to persist library:', e);
    }
  }, [books]);

  const handleUpdateBook = (updatedBook: Book) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === updatedBook.id ? updatedBook : b))
    );
  };

  const handleBookGenerated = (newBook: Book) => {
    setBooks((prev) => [newBook, ...prev]);
    setActiveBookId(newBook.id);
    if (newBook.chapters.length > 0) {
      setActiveChapterId(newBook.chapters[0].id);
    }
    setActiveMode('reader');
  };

  const defaultPdfOptions: ExportPdfOptions = {
    pageSize: 'a4',
    includeCover: true,
    includeToc: true,
    includeRoadmap: true,
    includeCopyright: true,
    fontSize: 'medium',
    colorTheme: 'classic',
    pageNumbers: true,
    headerTitle: true,
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] flex flex-col font-editorial-serif selection:bg-[#1A1A1A] selection:text-[#FDFCFB]">
      {/* Top Navbar */}
      <Navbar
        books={books}
        activeBook={activeBook}
        onSelectBook={(book) => {
          setActiveBookId(book.id);
          if (book.chapters.length > 0) {
            setActiveChapterId(book.chapters[0].id);
          }
        }}
        activeMode={activeMode}
        onChangeMode={setActiveMode}
        onOpenGenerator={() => setIsGeneratorOpen(true)}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      {/* Main Workspace (Reader vs Editor) */}
      <main className="flex-1 flex flex-col">
        {activeMode === 'reader' ? (
          <BookReader
            book={activeBook}
            activeChapterId={activeChapterId}
            onSelectChapter={setActiveChapterId}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
            onOpenEditor={() => setActiveMode('editor')}
          />
        ) : (
          <BookEditor
            book={activeBook}
            activeChapterId={activeChapterId}
            onUpdateBook={handleUpdateBook}
            onSelectChapter={setActiveChapterId}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}
      </main>

      {/* Editorial Bottom Status Bar */}
      <footer className="no-print h-8 bg-[#1A1A1A] text-[#FDFCFB] flex items-center px-4 sm:px-8 justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-editorial-sans shrink-0 border-t border-[#1A1A1A]">
        <div className="flex items-center gap-4">
          <span className="opacity-60">{activeBook.title}</span>
          <span className="hidden sm:inline opacity-30">|</span>
          <span className="hidden sm:inline opacity-60">{activeBook.edition}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="opacity-60">{activeBook.chapters.length} Chapters</span>
          <span className="hidden sm:inline opacity-30">|</span>
          <span className="text-[#FDFCFB]/80 font-bold">PDF Ready</span>
        </div>
      </footer>

      {/* Hidden Printable Document Container for High Resolution PDF Capture & Print Styles */}
      <div className="hidden print:block" style={{ position: 'relative' }}>
        <PrintableDocument book={activeBook} options={defaultPdfOptions} />
      </div>

      {/* Standalone hidden DOM container for html2canvas to capture when generating downloadable PDF */}
      <div
        id="pdf-render-target"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          width: '900px',
          backgroundColor: '#ffffff',
        }}
      >
        <PrintableDocument book={activeBook} options={defaultPdfOptions} />
      </div>

      {/* AI Book Generator Modal */}
      <BookGeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        onBookGenerated={handleBookGenerated}
      />

      {/* PDF Export Modal */}
      <PdfExportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        book={activeBook}
        printableElementId="pdf-render-target"
      />
    </div>
  );
}
