const CONFIG = {
  YOUTUBE_API_KEY: 'AIzaSyBOr_0rN-RMsO9EtJ8sf4rVKBJp27n5_IA',
  API_BASE_URL: 'https://www.googleapis.com/youtube/v3',
  MUSIC_CATEGORY_ID: '10',

  // Algoritm mezonlari
  MIN_SONGS_THRESHOLD: 20, // Kamida 20 ta yangi qo'shiq to'planishi shart
  DEFAULT_RETENTION: 'never', // 'never' | '7d' | '30d'
  CACHE_TTL_MINUTES: 60,

  // Standart davlat kodi (ISO 3166-1 alpha-2)
  DEFAULT_REGION: 'UZ',

  // Qo'llab-quvvatlanadigan davlatlar ro'yxati
  COUNTRIES: [
    { code: 'UZ', name: "O'zbekiston", flag: '🇺🇿' },
    { code: 'US', name: 'AQSH', flag: '🇺🇸' },
    { code: 'KZ', name: "Qozog'iston", flag: '🇰🇿' },
    { code: 'TR', name: 'Turkiya', flag: '🇹🇷' },
    { code: 'RU', name: 'Rossiya', flag: '🇷🇺' },
    { code: 'GB', name: 'Buyuk Britaniya', flag: '🇬🇧' },
    { code: 'KR', name: 'Janubiy Koreya', flag: '🇰🇷' },
    { code: 'DE', name: 'Germaniya', flag: '🇩🇪' },
    { code: 'AZ', name: 'Ozarbayjon', flag: '🇦🇿' }
  ],

  // Eshitilgan deb hisoblash qoidalari
  LISTEN_CRITERIA: {
    MIN_SECONDS: 30, // Kamida 30 soniya ijro
    MIN_PERCENT: 50  // Yoki umumiy davomiylikning 50 foizi
  }
};
