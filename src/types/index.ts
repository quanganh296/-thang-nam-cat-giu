export type PhotoSubject = 'ttla' | 'nqa' | 'couple';

export interface Photo {
  id: string;
  title: string;
  caption: string;
  url: string;
  date: string;
  location: string;
  albumId: string;
  albumName: string;
  tags: string[];
  featured?: boolean;
  aspect?: 'portrait' | 'landscape' | 'square';
  filmStock?: string;
  subject?: PhotoSubject;
  isPlaceholder?: boolean;
  sequenceNumber?: number;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  dateRange: string;
  photoCount: number;
  theme: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  monthYear: string;
  title: string;
  description: string;
  photos: string[];
  location: string;
  tag: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  coverUrl?: string;
  tags: string[];
  readTime: string;
}

export type NavigationTab = 'home' | 'gallery' | 'albums' | 'timeline' | 'journal' | 'about';
