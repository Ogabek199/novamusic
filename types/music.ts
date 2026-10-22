export interface Song {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  duration: string;
  durationSeconds: number;
  publishedAt?: string;
  viewCount?: string;
  category?: string;
}

export interface HistoryItem {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  duration: string;
  durationSeconds: number;
  timestamp: number;
  playedDuration: number;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}

export type RetentionType = 'never' | '7d' | '30d';

export type AppLanguage = 'uz' | 'ru' | 'en';

export interface Genre {
  id: string;
  nameKey: string;
  query?: string;
}
