import React, { useState } from 'react';
import { Book, Chapter } from '../types';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  BookPlus,
  Loader2,
  CheckCircle,
  HelpCircle,
  Cpu,
  Layers,
  Code,
  Globe2,
  X,
} from 'lucide-react';

interface BookGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookGenerated: (newBook: Book) => void;
}

const PRESET_IDEAS = [
  {
    title: 'কোড-যাত্ৰা: অসমীয়া পাইথন আৰু ছফ্টৱেৰ ডেভেলপমেণ্ট',
    topic: 'Python Programming, Data Structures, FastAPI Backend and React Frontend in Assamese',
    lang: 'অসমীয়া (Assamese)',
  },
  {
    title: 'Modern Cloud & Microservices Architecture (2026)',
    topic: 'Docker, Kubernetes, Event-Driven Architecture, Kafka and Go in English',
    lang: 'English',
  },
  {
    title: 'पायथन एवं मशीन लर्निंग सम्पूर्ण गाइड (हिंदी)',
    topic: 'Python, NumPy, Pandas, Scikit-Learn, Neural Networks & PyTorch in Hindi',
    lang: 'हिन्दी (Hindi)',
  },
  {
    title: 'Full-Stack Web Dev: React 19, Next.js 15 & PostgreSQL',
    topic: 'Frontend to Backend Fullstack Web Development with modern tools',
    lang: 'English',
  },
];

export function BookGeneratorModal({
  isOpen,
  onClose,
  onBookGenerated,
}: BookGeneratorModalProps) {
  const [topic, setTopic] = useState('');
  const [language, setLanguage] = useState('অসমীয়া (Assamese)');
  const [audience, setAudience] = useState('Beginner to Advanced');
  const [chaptersCount, setChaptersCount] = useState(6);
  const [generateAllChapters, setGenerateAllChapters] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progressStatus, setProgressStatus] = useState('');

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!topic.trim()) {
      alert('Please enter a book topic');
      return;
    }

    try {
      setLoading(true);
      setProgressStatus('Generating structured book outline with Gemini 3.7...');

      // 1. Generate Outline
      const outlineRes = await fetch('/api/gemini/generate-outline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          language,
          audience,
          chaptersCount,
        }),
      });

      if (!outlineRes.ok) {
        throw new Error('Failed to generate outline');
      }

      const outline = await outlineRes.json();

      let createdChapters: Chapter[] = (outline.chapters || []).map((ch: any, idx: number) => ({
        id: `gen-ch-${Date.now()}-${idx + 1}`,
        title: ch.title || `অধ্যায় ${idx + 1}`,
        subtitle: ch.subtitle || '',
        volume: ch.volume || 'খণ্ড ১',
        topics: ch.topics || [],
        estimatedReadTime: `${ch.estimatedPages ? ch.estimatedPages * 2 : 6} min`,
        content: `## ${ch.title}\n\n${ch.summary || 'এই অধ্যায়ত আমি বিষয়টোৰ মূল ধাৰণাসমূহ আলোচনা কৰিম।'}\n\n\`\`\`python\n# নিদৰ্শন কোড\nprint("Welcome to ${ch.title}")\n\`\`\``,
      }));

      // 2. If user selected generateAllChapters, auto-expand the first 2-3 key chapters
      if (generateAllChapters && createdChapters.length > 0) {
        const chaptersToExpand = Math.min(3, createdChapters.length);
        for (let i = 0; i < chaptersToExpand; i++) {
          setProgressStatus(
            `Writing in-depth content for Chapter ${i + 1}/${createdChapters.length}: ${
              createdChapters[i].title
            }...`
          );

          try {
            const chRes = await fetch('/api/gemini/generate-chapter', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                bookTitle: outline.title,
                chapterTitle: createdChapters[i].title,
                chapterSubtitle: createdChapters[i].subtitle,
                volume: createdChapters[i].volume,
                topics: createdChapters[i].topics,
                language,
              }),
            });

            if (chRes.ok) {
              const chData = await chRes.json();
              if (chData.content) {
                createdChapters[i].content = chData.content;
              }
            }
          } catch (e) {
            console.warn('Chapter generation sub-step warning:', e);
          }
        }
      }

      const newBook: Book = {
        id: `book-${Date.now()}`,
        title: outline.title || topic,
        subtitle: outline.subtitle || `Comprehensive Masterclass in ${language}`,
        author: outline.author || 'AI Studio Author',
        edition: outline.edition || '২০২৬ বিশেষ সংস্কৰণ',
        publishedYear: '২০২৬',
        language: language,
        isbn: `ISBN 978-${Math.floor(100000000 + Math.random() * 900000000)}`,
        copyright: `© ২০২৬ ${outline.title || topic}। সকলো অধিকাৰ সংৰক্ষিত।`,
        description: outline.description || `A complete guide covering ${topic}.`,
        coverColor: '#0f172a',
        coverBadge: 'AI Masterclass 2026',
        coverStyle: 'royal',
        tags: outline.tags || ['Masterclass', 'Programming', 'Architecture'],
        chapters: createdChapters,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

      onBookGenerated(newBook);
      onClose();
    } catch (error: any) {
      console.error('Book generation error:', error);
      alert(`Generation failed: ${error.message}`);
    } finally {
      setLoading(false);
      setProgressStatus('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base">AI Book Creator Studio</h3>
              <p className="text-xs text-blue-200">Generate a complete book with chapters & code</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={loading}
            className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* Preset Prompts */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Popular Presets & Ideas
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRESET_IDEAS.map((idea, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setTopic(idea.topic);
                    setLanguage(idea.lang);
                  }}
                  className="p-2.5 text-left rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-xs transition-colors cursor-pointer"
                >
                  <p className="font-semibold text-slate-800 line-clamp-1">{idea.title}</p>
                  <span className="text-[10px] text-blue-600 font-mono mt-0.5 block">{idea.lang}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Topic Input */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Book Subject or Topic <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Complete Rust & System Programming, or Cloud Native DevOps Guide, or Python for Data Science..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:border-blue-500 focus:outline-hidden"
            />
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:border-blue-500 focus:outline-hidden"
              >
                <option value="অসমীয়া (Assamese)">অসমীয়া (Assamese)</option>
                <option value="हिन्दी (Hindi)">हिन्दी (Hindi)</option>
                <option value="English">English</option>
                <option value="বাংলা (Bengali)">বাংলা (Bengali)</option>
                <option value="Hinglish (Hindi in Latin script)">Hinglish</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Target Audience
              </label>
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:border-blue-500 focus:outline-hidden"
              >
                <option value="Beginner to Advanced">Beginner to Advanced (Masterclass)</option>
                <option value="Zero to Hero (Beginners)">Zero to Hero (Complete Beginners)</option>
                <option value="Senior Engineers & Architects">Senior Engineers & Architects</option>
                <option value="Students & Exam Candidates">Students & Interview Candidates</option>
              </select>
            </div>
          </div>

          {/* Chapter Count & Deep write toggle */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs font-semibold text-slate-800 block">Number of Chapters</span>
              <span className="text-[11px] text-slate-500">Comprehensive structured breakdown</span>
            </div>
            <div className="flex items-center gap-2">
              {[4, 6, 8, 10].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setChaptersCount(count)}
                  className={`w-7 h-7 rounded-md text-xs font-semibold cursor-pointer ${
                    chaptersCount === count
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={generateAllChapters}
              onChange={(e) => setGenerateAllChapters(e.target.checked)}
              className="rounded text-blue-600"
            />
            <span>Auto-write in-depth initial chapter content with code & explanations</span>
          </label>

          {/* Progress Box if loading */}
          {loading && (
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center gap-3 animate-pulse">
              <Loader2 className="w-5 h-5 animate-spin shrink-0 text-blue-600" />
              <span>{progressStatus || 'Generating book content...'}</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading || !topic.trim()}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            <span>Generate Full Book</span>
          </button>
        </div>
      </div>
    </div>
  );
}
