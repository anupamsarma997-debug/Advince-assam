import React, { useState } from 'react';
import { Book, Chapter } from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';
import {
  Sparkles,
  Plus,
  Trash2,
  Save,
  Wand2,
  Languages,
  HelpCircle,
  Maximize2,
  Layers,
  FileCode,
  Eye,
  Settings,
  ArrowUp,
  ArrowDown,
  Loader2,
  Check,
  RefreshCw,
} from 'lucide-react';

interface BookEditorProps {
  book: Book;
  activeChapterId: string;
  onUpdateBook: (updatedBook: Book) => void;
  onSelectChapter: (chapterId: string) => void;
  onOpenPdfModal: () => void;
}

export function BookEditor({
  book,
  activeChapterId,
  onUpdateBook,
  onSelectChapter,
  onOpenPdfModal,
}: BookEditorProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'metadata' | 'ai'>('content');
  const [editorView, setEditorView] = useState<'split' | 'edit' | 'preview'>('split');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState('');
  const [aiCustomPrompt, setAiCustomPrompt] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('English');
  const [savedNotice, setSavedNotice] = useState(false);

  const activeIndex = book.chapters.findIndex((c) => c.id === activeChapterId);
  const currentChapter = book.chapters[activeIndex] || book.chapters[0];

  const handleUpdateCurrentChapter = (fields: Partial<Chapter>) => {
    if (!currentChapter) return;
    const updatedChapters = book.chapters.map((ch) =>
      ch.id === currentChapter.id ? { ...ch, ...fields } : ch
    );
    onUpdateBook({
      ...book,
      chapters: updatedChapters,
      updatedAt: new Date().toISOString(),
    });
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 1500);
  };

  const handleAddChapter = () => {
    const newId = `ch-${Date.now()}`;
    const newChapter: Chapter = {
      id: newId,
      title: `নতুন অধ্যায় ${book.chapters.length + 1}`,
      subtitle: 'অধ্যায়ৰ বিৱৰণ বা সাৰাংশ',
      volume: currentChapter?.volume || 'খণ্ড ১',
      content: `## নতুন বিষয়ৰ আৰম্ভণি\n\nইয়াত আপোনাৰ অধ্যায়ৰ ব্যাখ্যা আৰু প্ৰয়োজনীয় কোড লিখক...\n\n\`\`\`python\n# উদাহৰণ কোড\nprint("Hello World!")\n\`\`\``,
      topics: ['New Topic', 'Fundamental Concept'],
      estimatedReadTime: '5 min',
    };

    onUpdateBook({
      ...book,
      chapters: [...book.chapters, newChapter],
      updatedAt: new Date().toISOString(),
    });
    onSelectChapter(newId);
  };

  const handleDeleteChapter = (id: string) => {
    if (book.chapters.length <= 1) {
      alert('A book must have at least one chapter.');
      return;
    }
    if (!confirm('Are you sure you want to delete this chapter?')) return;

    const remaining = book.chapters.filter((c) => c.id !== id);
    onUpdateBook({
      ...book,
      chapters: remaining,
      updatedAt: new Date().toISOString(),
    });
    if (activeChapterId === id && remaining.length > 0) {
      onSelectChapter(remaining[0].id);
    }
  };

  const handleMoveChapter = (index: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= book.chapters.length) return;

    const newChapters = [...book.chapters];
    const [moved] = newChapters.splice(index, 1);
    newChapters.splice(targetIdx, 0, moved);

    onUpdateBook({
      ...book,
      chapters: newChapters,
      updatedAt: new Date().toISOString(),
    });
  };

  // AI Actions for Co-Pilot
  const handleAiAction = async (actionType: string, customText?: string) => {
    if (!currentChapter) return;
    try {
      setAiLoading(true);
      setAiStatus(`Applying AI: ${actionType}...`);

      const res = await fetch('/api/gemini/ai-assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: actionType,
          text: currentChapter.content,
          instructions: customText || aiCustomPrompt,
          targetLanguage,
        }),
      });

      if (!res.ok) {
        throw new Error('AI Assist API request failed');
      }

      const data = await res.json();
      if (data.result) {
        handleUpdateCurrentChapter({
          content: data.result,
        });
        setAiStatus('Applied successfully!');
      }
    } catch (err: any) {
      console.error('AI Error:', err);
      alert(`AI operation failed: ${err.message}`);
    } finally {
      setAiLoading(false);
      setTimeout(() => setAiStatus(''), 2500);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-64px-32px)] bg-[#FDFCFB] overflow-hidden font-editorial-serif">
      {/* Editor Header Bar */}
      <div className="bg-[#FDFCFB] border-b border-[#E5E1DA] px-4 sm:px-8 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex border border-[#E5E1DA] bg-white text-xs font-editorial-sans">
            <button
              onClick={() => setActiveTab('content')}
              className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'content'
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              Manuscript Text
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 border-l border-[#E5E1DA] ${
                activeTab === 'ai'
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>AI Co-Author</span>
            </button>
            <button
              onClick={() => setActiveTab('metadata')}
              className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 border-l border-[#E5E1DA] ${
                activeTab === 'metadata'
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              <Settings className="w-3 h-3" />
              <span>Edition Data</span>
            </button>
          </div>

          {savedNotice && (
            <span className="text-[10px] font-editorial-sans uppercase tracking-widest text-[#1A1A1A] flex items-center gap-1 bg-[#F5F2ED] border border-[#E5E1DA] px-2 py-0.5">
              <Check className="w-3 h-3" /> Saved
            </span>
          )}
        </div>

        {/* View toggles for Split Screen */}
        <div className="flex items-center gap-2 font-editorial-sans">
          {activeTab === 'content' && (
            <div className="hidden sm:flex items-center border border-[#E5E1DA] bg-white text-xs">
              <button
                onClick={() => setEditorView('edit')}
                className={`px-2.5 py-1 text-[10px] uppercase tracking-wider cursor-pointer ${
                  editorView === 'edit' ? 'bg-[#1A1A1A] text-white font-medium' : 'text-[#1A1A1A]/70'
                }`}
              >
                Editor
              </button>
              <button
                onClick={() => setEditorView('split')}
                className={`px-2.5 py-1 text-[10px] uppercase tracking-wider cursor-pointer border-l border-[#E5E1DA] ${
                  editorView === 'split' ? 'bg-[#1A1A1A] text-white font-medium' : 'text-[#1A1A1A]/70'
                }`}
              >
                Split
              </button>
              <button
                onClick={() => setEditorView('preview')}
                className={`px-2.5 py-1 text-[10px] uppercase tracking-wider cursor-pointer border-l border-[#E5E1DA] ${
                  editorView === 'preview' ? 'bg-[#1A1A1A] text-white font-medium' : 'text-[#1A1A1A]/70'
                }`}
              >
                Preview
              </button>
            </div>
          )}

          <button
            onClick={onOpenPdfModal}
            className="px-3.5 py-1 bg-[#1A1A1A] hover:bg-[#333333] text-white text-[10px] uppercase tracking-widest font-medium cursor-pointer transition-colors"
          >
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Chapter Navigator Sidebar */}
        <div className="w-72 bg-[#FDFCFB] border-r border-[#E5E1DA] flex flex-col shrink-0">
          <div className="p-3 border-b border-[#E5E1DA] flex items-center justify-between bg-[#FAF8F5]">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50 font-editorial-sans">
              Structure ({book.chapters.length})
            </span>
            <button
              onClick={handleAddChapter}
              className="px-2 py-1 bg-[#1A1A1A] hover:bg-[#333333] text-white text-[10px] uppercase tracking-widest font-editorial-sans flex items-center gap-1 cursor-pointer"
              title="Add new chapter"
            >
              <Plus className="w-3 h-3" />
              <span>Add</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {book.chapters.map((ch, idx) => {
              const isActive = ch.id === activeChapterId;
              return (
                <div
                  key={ch.id}
                  onClick={() => onSelectChapter(ch.id)}
                  className={`group px-3 py-2 border text-xs flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#F5F2ED] border-[#1A1A1A] text-[#1A1A1A]'
                      : 'bg-white border-[#E5E1DA] hover:border-[#1A1A1A] text-[#1A1A1A]/80'
                  }`}
                >
                  <div className="flex-1 truncate">
                    <span className="text-[9px] font-editorial-sans uppercase tracking-wider text-[#1A1A1A]/40 block font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="truncate block font-editorial-serif text-sm">{ch.title}</span>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 flex items-center gap-0.5 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoveChapter(idx, 'up');
                      }}
                      disabled={idx === 0}
                      className="p-1 hover:bg-[#E5E1DA] rounded disabled:opacity-20 cursor-pointer"
                      title="Move up"
                    >
                      <ArrowUp className="w-3 h-3 text-[#1A1A1A]" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoveChapter(idx, 'down');
                      }}
                      disabled={idx === book.chapters.length - 1}
                      className="p-1 hover:bg-[#E5E1DA] rounded disabled:opacity-20 cursor-pointer"
                      title="Move down"
                    >
                      <ArrowDown className="w-3 h-3 text-[#1A1A1A]" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteChapter(ch.id);
                      }}
                      className="p-1 hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A]/60 rounded cursor-pointer"
                      title="Delete chapter"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Editor Workspace */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#FAF8F5]">
          {/* TAB 1: CHAPTER CONTENT EDITOR */}
          {activeTab === 'content' && currentChapter && (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Chapter Meta Inputs */}
              <div className="p-4 bg-[#FDFCFB] border-b border-[#E5E1DA] grid grid-cols-1 sm:grid-cols-3 gap-4 shrink-0">
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-bold uppercase text-[#1A1A1A]/50 tracking-[0.2em] font-editorial-sans">
                    Chapter Title
                  </label>
                  <input
                    type="text"
                    value={currentChapter.title}
                    onChange={(e) => handleUpdateCurrentChapter({ title: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 bg-white border border-[#E5E1DA] text-base font-editorial-serif text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-[#1A1A1A]/50 tracking-[0.2em] font-editorial-sans">
                    Section / Volume
                  </label>
                  <input
                    type="text"
                    value={currentChapter.volume || ''}
                    onChange={(e) => handleUpdateCurrentChapter({ volume: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 bg-white border border-[#E5E1DA] text-xs font-editorial-sans text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Split Editor / Preview Panes */}
              <div className="flex-1 flex overflow-hidden">
                {/* Code / Markdown Textarea */}
                {(editorView === 'split' || editorView === 'edit') && (
                  <div
                    className={`flex-1 flex flex-col bg-[#1A1A1A] border-r border-[#333333] ${
                      editorView === 'edit' ? 'w-full' : 'w-1/2'
                    }`}
                  >
                    <div className="px-4 py-2 bg-[#141414] text-[#A0A0A0] text-xs font-mono flex items-center justify-between border-b border-[#262626]">
                      <span className="text-[10px] uppercase tracking-widest">Markdown Source</span>
                      <span className="text-[10px]">{currentChapter.content.length} chars</span>
                    </div>
                    <textarea
                      value={currentChapter.content}
                      onChange={(e) => handleUpdateCurrentChapter({ content: e.target.value })}
                      className="flex-1 w-full p-4 font-mono text-sm leading-relaxed text-[#F5F2ED] bg-transparent resize-none focus:outline-hidden"
                      placeholder="Write your chapter in Markdown with code blocks..."
                    />
                  </div>
                )}

                {/* Live Rendered Markdown Preview */}
                {(editorView === 'split' || editorView === 'preview') && (
                  <div
                    className={`flex-1 overflow-y-auto p-6 sm:p-10 bg-white ${
                      editorView === 'preview' ? 'w-full' : 'w-1/2'
                    }`}
                  >
                    <div className="max-w-2xl mx-auto">
                      <div className="mb-6 pb-4 border-b border-[#E5E1DA]">
                        <span className="text-[10px] font-editorial-sans uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/40 block">
                          {currentChapter.volume}
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-editorial-serif tracking-tight text-[#1A1A1A] mt-1">
                          {currentChapter.title}
                        </h1>
                        {currentChapter.subtitle && (
                          <p className="text-sm text-[#1A1A1A]/60 italic font-editorial-serif mt-1">
                            {currentChapter.subtitle}
                          </p>
                        )}
                      </div>
                      <MarkdownRenderer content={currentChapter.content} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: AI CHAPTER CO-PILOT */}
          {activeTab === 'ai' && currentChapter && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 max-w-4xl mx-auto w-full">
              <div className="bg-[#FDFCFB] border border-[#E5E1DA] p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#E5E1DA] pb-4">
                  <div className="w-10 h-10 bg-[#F5F2ED] border border-[#E5E1DA] text-[#1A1A1A] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xl font-editorial-serif tracking-tight text-[#1A1A1A]">Editorial AI Co-Author</h2>
                    <p className="text-xs font-editorial-sans text-[#1A1A1A]/60">
                      Co-author and refine "{currentChapter.title}" with Gemini 3.7
                    </p>
                  </div>
                </div>

                {aiStatus && (
                  <div className="p-3 bg-[#F5F2ED] border border-[#1A1A1A] text-[#1A1A1A] text-xs font-editorial-sans flex items-center gap-2">
                    {aiLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                    <span>{aiStatus}</span>
                  </div>
                )}

                {/* Quick AI Presets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => handleAiAction('expand')}
                    disabled={aiLoading}
                    className="p-4 bg-white border border-[#E5E1DA] hover:border-[#1A1A1A] text-left transition-colors cursor-pointer group disabled:opacity-50"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-editorial-sans text-[#1A1A1A]">
                      <Wand2 className="w-3.5 h-3.5" />
                      <span>Expand Chapter Content</span>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/70 mt-1 font-editorial-serif leading-relaxed">
                      Enrich with deeper conceptual reasoning, practical code examples, and edge cases.
                    </p>
                  </button>

                  <button
                    onClick={() => handleAiAction('add-quiz')}
                    disabled={aiLoading}
                    className="p-4 bg-white border border-[#E5E1DA] hover:border-[#1A1A1A] text-left transition-colors cursor-pointer group disabled:opacity-50"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-editorial-sans text-[#1A1A1A]">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Add Chapter Quizzes & Exercises</span>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/70 mt-1 font-editorial-serif leading-relaxed">
                      Constructs 5 practical review questions and implementation challenges.
                    </p>
                  </button>

                  <button
                    onClick={() => handleAiAction('summarize')}
                    disabled={aiLoading}
                    className="p-4 bg-white border border-[#E5E1DA] hover:border-[#1A1A1A] text-left transition-colors cursor-pointer group disabled:opacity-50"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-editorial-sans text-[#1A1A1A]">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Generate Chapter Synopsis</span>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/70 mt-1 font-editorial-serif leading-relaxed">
                      Extracts core bullet takeaways and concise review notes.
                    </p>
                  </button>

                  <div className="p-4 bg-white border border-[#E5E1DA] flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-editorial-sans text-[#1A1A1A]">
                      <Languages className="w-3.5 h-3.5" />
                      <span>Translate & Adapt Language</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3 font-editorial-sans">
                      <select
                        value={targetLanguage}
                        onChange={(e) => setTargetLanguage(e.target.value)}
                        className="text-xs border border-[#E5E1DA] px-2 py-1 bg-white text-[#1A1A1A]"
                      >
                        <option value="English">English</option>
                        <option value="Assamese">অসমীয়া (Assamese)</option>
                        <option value="Hindi">हिन्दी (Hindi)</option>
                        <option value="Bengali">বাংলা (Bengali)</option>
                        <option value="Spanish">Spanish</option>
                      </select>
                      <button
                        onClick={() => handleAiAction('translate')}
                        disabled={aiLoading}
                        className="px-3 py-1 bg-[#1A1A1A] hover:bg-[#333333] text-white text-[10px] uppercase tracking-widest font-medium cursor-pointer disabled:opacity-50"
                      >
                        Translate
                      </button>
                    </div>
                  </div>
                </div>

                {/* Custom Instruction Box */}
                <div className="border-t border-[#E5E1DA] pt-4 font-editorial-sans">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/60 block mb-1.5">
                    Custom Editorial Prompt for this Chapter
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. Add 2 real-world architectural design trade-offs..."
                      value={aiCustomPrompt}
                      onChange={(e) => setAiCustomPrompt(e.target.value)}
                      className="flex-1 px-3 py-2 bg-white border border-[#E5E1DA] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                    />
                    <button
                      onClick={() => handleAiAction('custom')}
                      disabled={aiLoading || !aiCustomPrompt.trim()}
                      className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#333333] text-white text-[10px] uppercase tracking-widest font-medium flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      {aiLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                      <span>Execute</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BOOK METADATA & COVER SETTINGS */}
          {activeTab === 'metadata' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 max-w-4xl mx-auto w-full">
              <div className="bg-[#FDFCFB] border border-[#E5E1DA] p-6 sm:p-8 space-y-6">
                <h2 className="text-xl font-editorial-serif tracking-tight text-[#1A1A1A] border-b border-[#E5E1DA] pb-3">
                  Publishing & Edition Metadata
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-editorial-sans">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">Book Title</label>
                    <input
                      type="text"
                      value={book.title}
                      onChange={(e) => onUpdateBook({ ...book, title: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-white border border-[#E5E1DA] text-sm text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden font-editorial-serif"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">Subtitle</label>
                    <input
                      type="text"
                      value={book.subtitle}
                      onChange={(e) => onUpdateBook({ ...book, subtitle: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-white border border-[#E5E1DA] text-sm text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden font-editorial-serif"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">Author Name</label>
                    <input
                      type="text"
                      value={book.author}
                      onChange={(e) => onUpdateBook({ ...book, author: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-white border border-[#E5E1DA] text-sm text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">Edition</label>
                    <input
                      type="text"
                      value={book.edition}
                      onChange={(e) => onUpdateBook({ ...book, edition: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-white border border-[#E5E1DA] text-sm text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">Language</label>
                    <input
                      type="text"
                      value={book.language}
                      onChange={(e) => onUpdateBook({ ...book, language: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-white border border-[#E5E1DA] text-sm text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">ISBN Code</label>
                    <input
                      type="text"
                      value={book.isbn || ''}
                      onChange={(e) => onUpdateBook({ ...book, isbn: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-white border border-[#E5E1DA] text-sm font-mono text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">Synopsis</label>
                    <textarea
                      rows={3}
                      value={book.description}
                      onChange={(e) => onUpdateBook({ ...book, description: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-white border border-[#E5E1DA] text-sm font-editorial-serif text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">Cover Ink Tone</label>
                    <div className="flex items-center gap-3 mt-2">
                      <input
                        type="color"
                        value={book.coverColor || '#1A1A1A'}
                        onChange={(e) => onUpdateBook({ ...book, coverColor: e.target.value })}
                        className="w-8 h-8 cursor-pointer border border-[#E5E1DA]"
                      />
                      <span className="text-xs font-mono text-[#1A1A1A]/70">{book.coverColor || '#1A1A1A'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
