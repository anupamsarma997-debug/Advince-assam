import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`prose max-w-none text-[#1A1A1A] leading-relaxed font-editorial-serif ${className}`}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl sm:text-3xl font-normal font-editorial-serif text-[#1A1A1A] mt-8 mb-4 pb-2 border-b border-[#E5E1DA]">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl sm:text-2xl font-normal font-editorial-serif text-[#1A1A1A] mt-8 mb-3 pb-1 border-b border-[#E5E1DA] flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#1A1A1A]"></span>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg sm:text-xl font-medium font-editorial-serif text-[#1A1A1A] mt-6 mb-2">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="my-4 text-[#1A1A1A]/90 leading-8 text-[16px] sm:text-[17px] font-editorial-serif">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-4 pl-6 list-disc space-y-2 text-[#1A1A1A]/90 text-[16px]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 pl-6 list-decimal space-y-2 text-[#1A1A1A]/90 text-[16px]">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-2 border-[#1A1A1A] bg-[#FAF8F5] p-5 italic text-[#1A1A1A]/80 text-[16px] font-editorial-serif">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto border border-[#E5E1DA]">
              <table className="w-full text-left text-sm text-[#1A1A1A] divide-y divide-[#E5E1DA] font-editorial-serif">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#FAF8F5] text-[#1A1A1A] font-editorial-sans text-[11px] uppercase tracking-wider font-bold">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-[#E5E1DA] bg-white">{children}</tbody>
          ),
          tr: ({ children }) => <tr className="hover:bg-[#FAF8F5]/60 transition-colors">{children}</tr>,
          th: ({ children }) => <th className="px-4 py-3 font-semibold">{children}</th>,
          td: ({ children }) => <td className="px-4 py-3">{children}</td>,
          code: ({ inline, className: codeClass, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(codeClass || '');
            const lang = match ? match[1] : '';
            const codeString = String(children).replace(/\n$/, '');

            if (!inline && (match || codeString.includes('\n'))) {
              return <CodeBlock language={lang} code={codeString} />;
            }

            return (
              <code
                className="px-1.5 py-0.5 mx-0.5 bg-[#FAF8F5] text-[#1A1A1A] font-mono text-[13px] border border-[#E5E1DA]"
                {...props}
              >
                {children}
              </code>
            );
          },
          hr: () => <hr className="my-8 border-[#E5E1DA]" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 border border-[#1A1A1A] bg-[#1A1A1A] text-[#FDFCFB]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#141414] border-b border-[#2C2C2C] text-[10px] uppercase tracking-widest text-[#A0A0A0] font-editorial-sans">
        <span className="font-bold text-[#FDFCFB]/90">
          {language || 'code snippet'}
        </span>
        <button
          onClick={handleCopy}
          className="no-print flex items-center gap-1 px-2.5 py-0.5 border border-white/20 hover:border-white text-[#FDFCFB]/80 hover:text-white transition-colors cursor-pointer text-[9px] uppercase tracking-wider"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-white" />
              <span className="text-white">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-[13px] leading-relaxed font-mono bg-[#1A1A1A] text-[#F5F2ED]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
