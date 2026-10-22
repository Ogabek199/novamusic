import type { Country, Genre, Song } from '~/types/music';

export const CONFIG = {
  YOUTUBE_API_KEY: '',
  API_BASE_URL: 'https://www.googleapis.com/youtube/v3',
  MUSIC_CATEGORY_ID: '10',

  MIN_SONGS_THRESHOLD: 20,
  DEFAULT_RETENTION: 'never' as const,
  CACHE_TTL_MINUTES: 60,
  DEFAULT_REGION: 'UZ',

  LISTEN_CRITERIA: {
    MIN_SECONDS: 30,
    MIN_PERCENT: 50
  }
};

export const STORAGE_KEYS = {
  HISTORY: 'ios_yt_music_history_v1',
  HIDDEN: 'ios_yt_music_hidden_v1',
  RETENTION: 'ios_yt_music_retention_v1',
  REGION: 'ios_yt_music_region_v1',
  LANG: 'ios_yt_music_lang_v1',
  LAST_SONG: 'ios_yt_music_last_song_v1',
  LAST_TIME: 'ios_yt_music_last_time_v1',
  VOLUME: 'ios_yt_music_volume_v1'
};

export const COUNTRIES: Country[] = [
  { code: 'UZ', name: "O'zbekiston", flag: '🇺🇿' },
  { code: 'US', name: 'AQSH', flag: '🇺🇸' },
  { code: 'KZ', name: "Qozog'iston", flag: '🇰🇿' },
  { code: 'TR', name: 'Turkiya', flag: '🇹🇷' },
  { code: 'RU', name: 'Rossiya', flag: '🇷🇺' },
  { code: 'GB', name: 'Buyuk Britaniya', flag: '🇬🇧' },
  { code: 'KR', name: 'Janubiy Koreya', flag: '🇰🇷' },
  { code: 'DE', name: 'Germaniya', flag: '🇩🇪' },
  { code: 'AZ', name: 'Ozarbayjon', flag: '🇦🇿' }
];

export const GENRES: Genre[] = [
  { id: 'all', nameKey: 'genre_all' },
  { id: 'pop', nameKey: 'genre_pop', query: 'pop music top hits' },
  { id: 'rap', nameKey: 'genre_rap', query: 'hip hop rap music' },
  { id: 'rock', nameKey: 'genre_rock', query: 'rock music classics modern' },
  { id: 'uzbek', nameKey: 'genre_uzbek', query: "o'zbek taronalari yangi xit" },
  { id: 'remix', nameKey: 'genre_remix', query: 'club remix bass boosted music' },
  { id: 'new', nameKey: 'genre_new', query: 'new release songs 2025' },
  { id: 'chill', nameKey: 'genre_chill', query: 'chill lofi hip hop relax beats' }
];

export const FALLBACK_SONGS: Song[] = [
  {
    id: 'kJQP7kiw5Fk',
    title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
    channelTitle: 'Luis Fonsi',
    thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg',
    duration: '4:42',
    durationSeconds: 282
  },
  {
    id: 'fJ9rUzIMcZQ',
    title: 'Queen – Bohemian Rhapsody (Official Video)',
    channelTitle: 'Queen Official',
    thumbnail: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg',
    duration: '5:59',
    durationSeconds: 359
  },
  {
    id: 'JGwWNGJdvx8',
    title: 'Ed Sheeran - Shape of You',
    channelTitle: 'Ed Sheeran',
    thumbnail: 'https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg',
    duration: '4:23',
    durationSeconds: 263
  },
  {
    id: 'OPf0YbXqDm0',
    title: 'Mark Ronson - Uptown Funk ft. Bruno Mars',
    channelTitle: 'Mark Ronson',
    thumbnail: 'https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg',
    duration: '4:30',
    durationSeconds: 270
  },
  {
    id: '4NRXx6U8ABQ',
    title: 'The Weeknd - Blinding Lights',
    channelTitle: 'The Weeknd',
    thumbnail: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg',
    duration: '4:20',
    durationSeconds: 260
  },
  {
    id: '34Na4j8AVgA',
    title: 'The Weeknd - Starboy ft. Daft Punk',
    channelTitle: 'The Weeknd',
    thumbnail: 'https://i.ytimg.com/vi/34Na4j8AVgA/hqdefault.jpg',
    duration: '3:50',
    durationSeconds: 230
  },
  {
    id: 'hT_nvWreIhg',
    title: 'OneRepublic - Counting Stars',
    channelTitle: 'OneRepublic',
    thumbnail: 'https://i.ytimg.com/vi/hT_nvWreIhg/hqdefault.jpg',
    duration: '4:44',
    durationSeconds: 284
  },
  {
    id: '09R8_2nJtjg',
    title: 'Maroon 5 - Sugar',
    channelTitle: 'Maroon 5',
    thumbnail: 'https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg',
    duration: '5:01',
    durationSeconds: 301
  },
  {
    id: 'YQHsXMglC9A',
    title: 'Adele - Hello',
    channelTitle: 'Adele',
    thumbnail: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg',
    duration: '6:07',
    durationSeconds: 367
  },
  {
    id: 'RgKAFK5djSk',
    title: 'Wiz Khalifa - See You Again ft. Charlie Puth',
    channelTitle: 'Wiz Khalifa',
    thumbnail: 'https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg',
    duration: '3:57',
    durationSeconds: 237
  },
  {
    id: 'kOHB85vDuow',
    title: 'Eminem - Not Afraid',
    channelTitle: 'EminemMusic',
    thumbnail: 'https://i.ytimg.com/vi/kOHB85vDuow/hqdefault.jpg',
    duration: '4:19',
    durationSeconds: 259
  },
  {
    id: 'YVkUvmDQ3HY',
    title: 'Eminem - Without Me',
    channelTitle: 'EminemMusic',
    thumbnail: 'https://i.ytimg.com/vi/YVkUvmDQ3HY/hqdefault.jpg',
    duration: '4:58',
    durationSeconds: 298
  },
  {
    id: '2Vv-BfVoq4g',
    title: 'Ed Sheeran - Perfect',
    channelTitle: 'Ed Sheeran',
    thumbnail: 'https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg',
    duration: '4:40',
    durationSeconds: 280
  },
  {
    id: 'CevxZvSJLk8',
    title: 'Katy Perry - Roar',
    channelTitle: 'Katy Perry',
    thumbnail: 'https://i.ytimg.com/vi/CevxZvSJLk8/hqdefault.jpg',
    duration: '4:30',
    durationSeconds: 270
  },
  {
    id: 'nfWlot6h_JM',
    title: 'Taylor Swift - Shake It Off',
    channelTitle: 'Taylor Swift',
    thumbnail: 'https://i.ytimg.com/vi/nfWlot6h_JM/hqdefault.jpg',
    duration: '4:02',
    durationSeconds: 242
  },
  {
    id: 'e-ORhEE9VVg',
    title: 'Taylor Swift - Blank Space',
    channelTitle: 'Taylor Swift',
    thumbnail: 'https://i.ytimg.com/vi/e-ORhEE9VVg/hqdefault.jpg',
    duration: '4:33',
    durationSeconds: 273
  },
  {
    id: 'uelHwf8o7_U',
    title: 'Eminem - Love The Way You Lie ft. Rihanna',
    channelTitle: 'EminemMusic',
    thumbnail: 'https://i.ytimg.com/vi/uelHwf8o7_U/hqdefault.jpg',
    duration: '4:27',
    durationSeconds: 267
  },
  {
    id: 'kXYiU_JCYtU',
    title: 'Linkin Park - Numb',
    channelTitle: 'Linkin Park',
    thumbnail: 'https://i.ytimg.com/vi/kXYiU_JCYtU/hqdefault.jpg',
    duration: '3:07',
    durationSeconds: 187
  },
  {
    id: 'eVTXPUF4Oz4',
    title: 'Linkin Park - In The End',
    channelTitle: 'Linkin Park',
    thumbnail: 'https://i.ytimg.com/vi/eVTXPUF4Oz4/hqdefault.jpg',
    duration: '3:39',
    durationSeconds: 219
  },
  {
    id: 'IcrbM1l_BoI',
    title: 'Avicii - Wake Me Up',
    channelTitle: 'Avicii',
    thumbnail: 'https://i.ytimg.com/vi/IcrbM1l_BoI/hqdefault.jpg',
    duration: '4:33',
    durationSeconds: 273
  },
  {
    id: 'fLexgOxsZu0',
    title: 'Bruno Mars - The Lazy Song',
    channelTitle: 'Bruno Mars',
    thumbnail: 'https://i.ytimg.com/vi/fLexgOxsZu0/hqdefault.jpg',
    duration: '3:20',
    durationSeconds: 200
  },
  {
    id: 'L3wKzyIN1yk',
    title: 'Rihanna - Diamonds',
    channelTitle: 'Rihanna',
    thumbnail: 'https://i.ytimg.com/vi/L3wKzyIN1yk/hqdefault.jpg',
    duration: '4:43',
    durationSeconds: 283
  },
  {
    id: 'pt8VZX48AVE',
    title: 'Imagine Dragons - Believer',
    channelTitle: 'Imagine Dragons',
    thumbnail: 'https://i.ytimg.com/vi/pt8VZX48AVE/hqdefault.jpg',
    duration: '3:37',
    durationSeconds: 217
  },
  {
    id: '7wtfhZwyrcc',
    title: 'Imagine Dragons - Thunder',
    channelTitle: 'Imagine Dragons',
    thumbnail: 'https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg',
    duration: '3:08',
    durationSeconds: 188
  },
  {
    id: '7PCkvCPvDXk',
    title: 'Dua Lipa - New Rules',
    channelTitle: 'Dua Lipa',
    thumbnail: 'https://i.ytimg.com/vi/7PCkvCPvDXk/hqdefault.jpg',
    duration: '3:45',
    durationSeconds: 225
  }
];
