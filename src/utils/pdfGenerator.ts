import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Book, ExportPdfOptions } from '../types';

/**
 * Triggers the browser's high-fidelity native print-to-PDF engine
 * which produces 100% crisp vector text, exact page breaks, and rich formatting.
 */
export function printBookToPdf(book: Book) {
  window.print();
}

/**
 * Generates and downloads a complete standalone PDF file using html2canvas & jsPDF.
 */
export async function downloadBookAsPdf(
  elementId: string,
  book: Book,
  options: ExportPdfOptions,
  onProgress?: (percent: number, statusText: string) => void
): Promise<boolean> {
  try {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) {
      throw new Error(`Target element #${elementId} not found`);
    }

    onProgress?.(15, 'Preparing pages and styling...');

    // Wait a brief moment for web fonts and code highlights to settle
    await new Promise((resolve) => setTimeout(resolve, 350));

    onProgress?.(35, 'Capturing high-resolution book pages...');

    const canvas = await html2canvas(targetElement, {
      scale: 2, // High DPI for crisp text
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 1024,
    });

    onProgress?.(70, 'Building PDF document structure...');

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: options.pageSize === 'letter' ? 'letter' : 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;

    // Remaining pages
    let pageNum = 2;
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      
      onProgress?.(
        Math.min(95, 70 + Math.round((pageNum / 20) * 25)),
        `Assembling page ${pageNum}...`
      );
      
      heightLeft -= pdfHeight;
      pageNum++;
    }

    onProgress?.(98, 'Finalizing download...');

    const sanitizedTitle = book.title
      .replace(/[^a-zA-Z0-9\u0980-\u09FF\u0900-\u097F_-]/g, '_')
      .slice(0, 45);
    const fileName = `${sanitizedTitle || 'book'}_${book.edition.replace(/\s+/g, '_')}.pdf`;

    pdf.save(fileName);
    onProgress?.(100, 'Complete!');
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

/**
 * Exports book content as Markdown file
 */
export function exportBookAsMarkdown(book: Book) {
  let md = `# ${book.title}\n\n`;
  md += `**${book.subtitle}**\n\n`;
  md += `*Author:* ${book.author} | *Edition:* ${book.edition} | *Published:* ${book.publishedYear}\n\n`;
  md += `*Description:* ${book.description}\n\n---\n\n`;

  md += `## Table of Contents\n\n`;
  book.chapters.forEach((ch, idx) => {
    md += `${idx + 1}. [${ch.title}](#${ch.id})\n`;
  });
  md += `\n---\n\n`;

  book.chapters.forEach((ch, idx) => {
    md += `\n\n# ${ch.title}\n\n`;
    if (ch.subtitle) md += `*${ch.subtitle}*\n\n`;
    if (ch.volume) md += `> **Volume:** ${ch.volume}\n\n`;
    md += `${ch.content}\n\n---\n`;
  });

  md += `\n\n${book.copyright}\n`;

  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${book.title.replace(/\s+/g, '_')}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Exports book data as JSON
 */
export function exportBookAsJson(book: Book) {
  const jsonStr = JSON.stringify(book, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${book.title.replace(/\s+/g, '_')}_backup.json`;
  a.click();
  URL.revokeObjectURL(url);
}
