export interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  volume?: string;
  content: string;
  estimatedReadTime?: string;
  topics?: string[];
  notes?: string;
}

export interface Volume {
  id: string;
  title: string;
  description?: string;
  chapterIds: string[];
}

export interface BookTheme {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  paperColor: string;
  textColor: string;
  fontFamily: string;
  codeTheme: string;
  coverStyle: 'royal' | 'minimal' | 'vintage' | 'tech' | 'editorial';
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  edition: string;
  publishedYear: string;
  language: string;
  description: string;
  isbn?: string;
  copyright: string;
  tags: string[];
  coverColor: string;
  coverBadge?: string;
  coverStyle?: 'royal' | 'minimal' | 'vintage' | 'tech' | 'editorial';
  chapters: Chapter[];
  volumes?: Volume[];
  createdAt: string;
  updatedAt: string;
}

export interface GenerateOutlineRequest {
  topic: string;
  language: string;
  audience: string;
  chaptersCount: number;
}

export interface ExportPdfOptions {
  pageSize: 'a4' | 'letter' | 'b5';
  includeCover: boolean;
  includeToc: boolean;
  includeRoadmap: boolean;
  includeCopyright: boolean;
  fontSize: 'small' | 'medium' | 'large';
  colorTheme: string;
  pageNumbers: boolean;
  headerTitle: boolean;
}
