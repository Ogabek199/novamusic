// ==========================================================================
// 1. Zaxira / Fallback Musiqalar Bazasi (API kalitsiz ham to'liq ishlash uchun)
// ==========================================================================
const FALLBACK_SONGS = [
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
    id: 'SlPhMPnQ58k',
    title: 'Maroon 5 - Memories',
    channelTitle: 'Maroon 5',
    thumbnail: 'https://i.ytimg.com/vi/SlPhMPnQ58k/hqdefault.jpg',
    duration: '3:15',
    durationSeconds: 195
  },
  {
    id: 'PT2_F-1esPk',
    title: 'The Chainsmokers - Closer ft. Halsey',
    channelTitle: 'The Chainsmokers',
    thumbnail: 'https://i.ytimg.com/vi/PT2_F-1esPk/hqdefault.jpg',
    duration: '4:05',
    durationSeconds: 245
  },
  {
    id: 'PapBptzN4uo',
    title: 'Jah Khalib - Медина',
    channelTitle: 'Jah Khalib',
    thumbnail: 'https://i.ytimg.com/vi/PapBptzN4uo/hqdefault.jpg',
    duration: '4:02',
    durationSeconds: 242
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
    id: 'tAGnKpE4NCI',
    title: 'Metallica - Nothing Else Matters',
    channelTitle: 'Metallica',
    thumbnail: 'https://i.ytimg.com/vi/tAGnKpE4NCI/hqdefault.jpg',
    duration: '6:25',
    durationSeconds: 385
  },
  {
    id: '7PCkvCPvDXk',
    title: 'Michael Jackson - Billie Jean',
    channelTitle: 'Michael Jackson',
    thumbnail: 'https://i.ytimg.com/vi/7PCkvCPvDXk/hqdefault.jpg',
    duration: '4:55',
    durationSeconds: 295
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
    id: 'pB-5XG-DbAA',
    title: 'Xcho - Ты и Я',
    channelTitle: 'Xcho',
    thumbnail: 'https://i.ytimg.com/vi/pB-5XG-DbAA/hqdefault.jpg',
    duration: '2:40',
    durationSeconds: 160
  },
  {
    id: '7wtfhZwyrcc',
    title: 'Imagine Dragons - Believer',
    channelTitle: 'Imagine Dragons',
    thumbnail: 'https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg',
    duration: '3:24',
    durationSeconds: 204
  },
  {
    id: 'ktvTqknDobU',
    title: 'Imagine Dragons - Radioactive',
    channelTitle: 'Imagine Dragons',
    thumbnail: 'https://i.ytimg.com/vi/ktvTqknDobU/hqdefault.jpg',
    duration: '3:07',
    durationSeconds: 187
  },
  {
    id: '60ItHLz5WEA',
    title: 'Alan Walker - Faded',
    channelTitle: 'Alan Walker',
    thumbnail: 'https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg',
    duration: '3:32',
    durationSeconds: 212
  },
  {
    id: 'dvgZkm1xWPE',
    title: 'Coldplay - Viva La Vida',
    channelTitle: 'Coldplay',
    thumbnail: 'https://i.ytimg.com/vi/dvgZkm1xWPE/hqdefault.jpg',
    duration: '4:02',
    durationSeconds: 242
  },
  {
    id: 'nYh-n7EOtMA',
    title: 'Sia - Cheap Thrills',
    channelTitle: 'Sia',
    thumbnail: 'https://i.ytimg.com/vi/nYh-n7EOtMA/hqdefault.jpg',
    duration: '3:44',
    durationSeconds: 224
  },
  {
    id: 'TUVcZfQe-Kw',
    title: 'Dua Lipa - Levitating',
    channelTitle: 'Dua Lipa',
    thumbnail: 'https://i.ytimg.com/vi/TUVcZfQe-Kw/hqdefault.jpg',
    duration: '3:23',
    durationSeconds: 203
  },
  {
    id: 'H5v3k2nn9pc',
    title: 'Harry Styles - As It Was',
    channelTitle: 'Harry Styles',
    thumbnail: 'https://i.ytimg.com/vi/H5v3k2nn9pc/hqdefault.jpg',
    duration: '2:45',
    durationSeconds: 165
  },
  {
    id: 'PMivT7MJ41M',
    title: "Bruno Mars - That's What I Like",
    channelTitle: 'Bruno Mars',
    thumbnail: 'https://i.ytimg.com/vi/PMivT7MJ41M/hqdefault.jpg',
    duration: '3:26',
    durationSeconds: 206
  },
  {
    id: 'XXYlFuWEuKi',
    title: 'The Weeknd - Save Your Tears',
    channelTitle: 'The Weeknd',
    thumbnail: 'https://i.ytimg.com/vi/XXYlFuWEuKi/hqdefault.jpg',
    duration: '3:35',
    durationSeconds: 215
  },
  {
    id: 'wXhTHyIgQ_U',
    title: 'Post Malone - Circles',
    channelTitle: 'Post Malone',
    thumbnail: 'https://i.ytimg.com/vi/wXhTHyIgQ_U/hqdefault.jpg',
    duration: '3:35',
    durationSeconds: 215
  },
  {
    id: 'Pkh8UtuejGw',
    title: 'Shawn Mendes, Camila Cabello - Señorita',
    channelTitle: 'Shawn Mendes',
    thumbnail: 'https://i.ytimg.com/vi/Pkh8UtuejGw/hqdefault.jpg',
    duration: '3:11',
    durationSeconds: 191
  },
  {
    id: 'uelHwf8o7_U',
    title: 'Eminem ft. Rihanna - Love The Way You Lie',
    channelTitle: 'Eminem',
    thumbnail: 'https://i.ytimg.com/vi/uelHwf8o7_U/hqdefault.jpg',
    duration: '4:23',
    durationSeconds: 263
  },
  {
    id: 'aJOTlE1K90k',
    title: 'Maroon 5 ft. Cardi B - Girls Like You',
    channelTitle: 'Maroon 5',
    thumbnail: 'https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg',
    duration: '4:30',
    durationSeconds: 270
  },
  {
    id: 'IcrbM1l_BoI',
    title: 'Avicii - Wake Me Up',
    channelTitle: 'Avicii',
    thumbnail: 'https://i.ytimg.com/vi/IcrbM1l_BoI/hqdefault.jpg',
    duration: '4:07',
    durationSeconds: 247
  },
  {
    id: 'rYEDA3JcQqw',
    title: 'Adele - Rolling in the Deep',
    channelTitle: 'Adele',
    thumbnail: 'https://i.ytimg.com/vi/rYEDA3JcQqw/hqdefault.jpg',
    duration: '3:48',
    durationSeconds: 228
  },
  {
    id: 'DyDfgMOUjCI',
    title: 'Billie Eilish - Bad Guy',
    channelTitle: 'Billie Eilish',
    thumbnail: 'https://i.ytimg.com/vi/DyDfgMOUjCI/hqdefault.jpg',
    duration: '3:14',
    durationSeconds: 194
  },
  {
    id: 'bo_efYhV2kk',
    title: 'Lady Gaga, Bradley Cooper - Shallow',
    channelTitle: 'Lady Gaga',
    thumbnail: 'https://i.ytimg.com/vi/bo_efYhV2kk/hqdefault.jpg',
    duration: '3:36',
    durationSeconds: 216
  },
  {
    id: 'KTJ3AzxEEhA',
    title: 'The Kid LAROI, Justin Bieber - STAY',
    channelTitle: 'The Kid LAROI',
    thumbnail: 'https://i.ytimg.com/vi/KTJ3AzxEEhA/hqdefault.jpg',
    duration: '2:21',
    durationSeconds: 141
  },
  {
    id: 'Y6p_gH_d85Y',
    title: 'Miyagi & Andy Panda - Minor',
    channelTitle: 'Miyagi & Andy Panda',
    thumbnail: 'https://i.ytimg.com/vi/Y6p_gH_d85Y/hqdefault.jpg',
    duration: '2:56',
    durationSeconds: 176
  },
  {
    id: 'e2X_tKx_c1c',
    title: 'JONY - Комета',
    channelTitle: 'JONY',
    thumbnail: 'https://i.ytimg.com/vi/e2X_tKx_c1c/hqdefault.jpg',
    duration: '2:38',
    durationSeconds: 158
  },
  {
    id: '1L69Pfxp558',
    title: 'HammAli & Navai - Прятки',
    channelTitle: 'HammAli & Navai',
    thumbnail: 'https://i.ytimg.com/vi/1L69Pfxp558/hqdefault.jpg',
    duration: '3:08',
    durationSeconds: 188
  },
  {
    id: 'sXnJ_6fO3oM',
    title: 'Rauf & Faik - Детство',
    channelTitle: 'Rauf & Faik',
    thumbnail: 'https://i.ytimg.com/vi/sXnJ_6fO3oM/hqdefault.jpg',
    duration: '3:08',
    durationSeconds: 188
  },
  {
    id: '5Z_l-b1c41E',
    title: 'Jaloliddin Ahmadaliyev - Janon bo\'laman',
    channelTitle: 'Jaloliddin Ahmadaliyev',
    thumbnail: 'https://i.ytimg.com/vi/5Z_l-b1c41E/hqdefault.jpg',
    duration: '3:45',
    durationSeconds: 225
  },
  {
    id: 'P9J9_j4uQ9w',
    title: 'Hamdam Sobirov - Yaxshi ko\'raman',
    channelTitle: 'Hamdam Sobirov',
    thumbnail: 'https://i.ytimg.com/vi/P9J9_j4uQ9w/hqdefault.jpg',
    duration: '3:30',
    durationSeconds: 210
  },
  {
    id: 'w1w_x99E2-8',
    title: 'Konsta - Odamlar nima deydi',
    channelTitle: 'Konsta',
    thumbnail: 'https://i.ytimg.com/vi/w1w_x99E2-8/hqdefault.jpg',
    duration: '3:40',
    durationSeconds: 220
  },
  {
    id: 'qF7Qv_i0Gj8',
    title: 'Doston Ergashev - Bo\'ydoqlar',
    channelTitle: 'Doston Ergashev',
    thumbnail: 'https://i.ytimg.com/vi/qF7Qv_i0Gj8/hqdefault.jpg',
    duration: '3:15',
    durationSeconds: 195
  },
  {
    id: 'xHk6q_r4G9A',
    title: 'Yulduz Usmonova - Muhabbat',
    channelTitle: 'Yulduz Usmonova',
    thumbnail: 'https://i.ytimg.com/vi/xHk6q_r4G9A/hqdefault.jpg',
    duration: '4:10',
    durationSeconds: 250
  },
  {
    id: 'mB3Qv_y6T9o',
    title: 'Ozodbek Nazarbekov - Rayhon',
    channelTitle: 'Ozodbek Nazarbekov',
    thumbnail: 'https://i.ytimg.com/vi/mB3Qv_y6T9o/hqdefault.jpg',
    duration: '3:55',
    durationSeconds: 235
  },
  {
    id: 'jL8Pq_x2M9k',
    title: 'Tohir Sodiqov - Kerak emas shahlo ko\'zlaring',
    channelTitle: 'Tohir Sodiqov',
    thumbnail: 'https://i.ytimg.com/vi/jL8Pq_x2M9k/hqdefault.jpg',
    duration: '4:20',
    durationSeconds: 260
  },
  {
    id: 'k87Z7aW7eL4',
    title: 'Shoxrux - Xayolimdasan',
    channelTitle: 'Shoxrux',
    thumbnail: 'https://i.ytimg.com/vi/k87Z7aW7eL4/hqdefault.jpg',
    duration: '3:50',
    durationSeconds: 230
  },
  {
    id: 'b9kL42xX1q0',
    title: 'Rayhon - Tomchi',
    channelTitle: 'Rayhon',
    thumbnail: 'https://i.ytimg.com/vi/b9kL42xX1q0/hqdefault.jpg',
    duration: '3:35',
    durationSeconds: 215
  },
  {
    id: 'u72N8y5h_8w',
    title: 'Doxxim - Yurak',
    channelTitle: 'Doxxim',
    thumbnail: 'https://i.ytimg.com/vi/u72N8y5h_8w/hqdefault.jpg',
    duration: '3:15',
    durationSeconds: 195
  },
  {
    id: 'vO4N71wP9eM',
    title: 'Ulug\'bek Rahmatullaev - Qirmizi olma',
    channelTitle: 'Ulug\'bek Rahmatullaev',
    thumbnail: 'https://i.ytimg.com/vi/vO4N71wP9eM/hqdefault.jpg',
    duration: '3:40',
    durationSeconds: 220
  },
  {
    id: 'p1Q78z5x9m0',
    title: 'Sevinch Mo\'minova - Ko\'ylagim',
    channelTitle: 'Sevinch Mo\'minova',
    thumbnail: 'https://i.ytimg.com/vi/p1Q78z5x9m0/hqdefault.jpg',
    duration: '3:20',
    durationSeconds: 200
  },
  {
    id: 'w27X_08vXwE',
    title: 'Shohruhxon - Yurak',
    channelTitle: 'Shohruhxon',
    thumbnail: 'https://i.ytimg.com/vi/w27X_08vXwE/hqdefault.jpg',
    duration: '3:45',
    durationSeconds: 225
  }
];

// ==========================================================================
// 2. Takrorlanmaslik Algoritmi va Storage Moduli
// ==========================================================================
const STORAGE_KEYS = {
  HISTORY: 'ios_yt_music_history_v1',
  HIDDEN: 'ios_yt_music_hidden_v1',
  RETENTION: 'ios_yt_music_retention_v1',
  CUSTOM_KEY: 'ios_yt_music_custom_api_key',
  REGION: 'ios_yt_music_region_v1',
  LANG: 'ios_yt_music_lang_v1',
  ACTIVE_TAB: 'ios_yt_music_active_tab_v1',
  LAST_SONG: 'ios_yt_music_last_song_v1',
  LAST_PLAYLIST: 'ios_yt_music_last_playlist_v1',
  LAST_TIME: 'ios_yt_music_last_time_v1'
};

const StorageModule = {
  sessionSeenIds: new Set(),

  getLanguage() {
    return localStorage.getItem(STORAGE_KEYS.LANG) || 'uz';
  },

  setLanguage(code) {
    if (['uz', 'ru', 'en'].includes(code)) {
      localStorage.setItem(STORAGE_KEYS.LANG, code);
    }
  },

  saveLastSong(song, playlist = []) {
    if (!song) return;
    try {
      localStorage.setItem(STORAGE_KEYS.LAST_SONG, JSON.stringify(song));
      if (playlist && playlist.length > 0) {
        localStorage.setItem(STORAGE_KEYS.LAST_PLAYLIST, JSON.stringify(playlist.slice(0, 50)));
      }
    } catch { }
  },

  getLastSong() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.LAST_SONG) || 'null');
    } catch {
      return null;
    }
  },

  getLastPlaylist() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.LAST_PLAYLIST) || '[]');
    } catch {
      return [];
    }
  },

  saveLastTime(secs) {
    if (secs > 0) {
      localStorage.setItem(STORAGE_KEYS.LAST_TIME, Math.floor(secs).toString());
    }
  },

  getLastTime() {
    const t = localStorage.getItem(STORAGE_KEYS.LAST_TIME);
    return t ? parseFloat(t) : 0;
  },

  getActiveTab() {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'tabHome';
  },

  setActiveTab(tabId) {
    if (tabId) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, tabId);
    }
  },

  getRegion() {
    return localStorage.getItem(STORAGE_KEYS.REGION) || CONFIG.DEFAULT_REGION || 'UZ';
  },

  setRegion(code) {
    localStorage.setItem(STORAGE_KEYS.REGION, code);
  },

  getHistory() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || '[]');
    } catch {
      return [];
    }
  },

  saveHistory(song) {
    if (!song) return;
    const songId = song.id || song.videoId;
    if (!songId) return;
    const history = this.getHistory();
    const entry = {
      id: songId,
      videoId: songId,
      title: song.title,
      channelTitle: song.channelTitle,
      thumbnail: song.thumbnail,
      duration: song.duration,
      durationSeconds: song.durationSeconds || 240,
      listenedAt: Date.now()
    };
    const existingIndex = history.findIndex(i => (i.videoId || i.id) === songId);
    if (existingIndex > -1) {
      history[existingIndex] = entry;
    } else {
      history.unshift(entry);
    }
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    this.sessionSeenIds.add(songId);
    UIModule.updateHistoryBadge();
  },

  removeFromHistory(videoId) {
    let history = this.getHistory();
    history = history.filter(i => (i.videoId || i.id) !== videoId);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    UIModule.updateHistoryBadge();
  },

  clearHistory() {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    localStorage.removeItem(STORAGE_KEYS.HIDDEN);
    this.sessionSeenIds.clear();
    UIModule.updateHistoryBadge();
  },

  getHidden() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.HIDDEN) || '[]');
    } catch {
      return [];
    }
  },

  hideSong(videoId) {
    if (!videoId) return;
    const hidden = this.getHidden();
    if (!hidden.includes(videoId)) {
      hidden.push(videoId);
      localStorage.setItem(STORAGE_KEYS.HIDDEN, JSON.stringify(hidden));
    }
  },

  getRetention() {
    return localStorage.getItem(STORAGE_KEYS.RETENTION) || CONFIG.DEFAULT_RETENTION || 'never';
  },

  setRetention(val) {
    localStorage.setItem(STORAGE_KEYS.RETENTION, val);
  },

  getCustomApiKey() {
    return CONFIG.YOUTUBE_API_KEY || localStorage.getItem(STORAGE_KEYS.CUSTOM_KEY) || '';
  },

  setCustomApiKey(key) {
    if (key) {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_KEY, key);
    } else {
      localStorage.removeItem(STORAGE_KEYS.CUSTOM_KEY);
    }
  },

  // 7. Qayta chiqish muddati tekshiruvi (Retention)
  isSongListened(videoId) {
    const history = this.getHistory();
    const item = history.find(i => i.videoId === videoId);
    if (!item) return false;

    const policy = this.getRetention();
    if (policy === 'never') return true;

    const diff = Date.now() - item.listenedAt;
    if (policy === '7d') return diff < (7 * 86400 * 1000);
    if (policy === '30d') return diff < (30 * 86400 * 1000);
    return true;
  },

  // 3 & 5. Takrorlanmaslik filtri (Tarix + Sessiya Set + Qora ro'yxat)
  filterFreshSongs(songs) {
    const hidden = this.getHidden();
    return songs.filter(s => {
      if (this.isSongListened(s.id)) return false;
      if (hidden.includes(s.id)) return false;
      if (this.sessionSeenIds.has(s.id)) return false;
      return true;
    });
  },

  // 6. Fisher-Yates aralashtirish
  fisherYatesShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
};

// ==========================================================================
// 2.1 Ko'p Tillilik (i18n: uz, ru, en) Moduli
// ==========================================================================
const TRANSLATIONS = {
  uz: {
    anti_repeat: 'Anti-Repeat',
    music: 'Musiqa',
    refresh_tooltip: 'Yangilash va aralashtirish',
    smart_picks_sub: 'AQLLI ALGORITM TAVSIYALARI',
    top_trends: 'Top Trendlar',
    select_country: 'Davlatni tanlang',

    genre_all: 'Barchasi',
    genre_pop: 'Pop',
    genre_rap: 'Rap / Hip-Hop',
    genre_rock: 'Rock',
    genre_uzbek: "O'zbekcha",
    genre_remix: 'Remix',
    genre_new: 'Yangi 2025',
    genre_chill: 'Chill & Lofi',

    songs_filtering: "Qo'shiqlar filtrlanmoqda...",
    songs_count: '{count} ta takrorlanmas musiqa',
    all_heard_title: 'Hammasini eshitibsiz!',
    all_heard_desc: "Ushbu bo'limdagi barcha musiqalar avval tinglangan. Yangi oqim uchun tarixni tozalashingiz mumkin.",
    clear_history_btn: 'Tarixni tozalash',
    shuffle_btn: 'Aralashtirish',
    no_songs_found: 'Musiqalar topilmadi',

    search_title: 'Qidiruv',
    search_placeholder: "Qo'shiq, san'atkor yoki janr...",
    search_home_placeholder: "Musiqa, qo'shiqchi yoki janrni qidiring...",
    loading_more_songs: "Ko'proq musiqalar yuklanmoqda...",
    all_songs_loaded: "Barcha musiqalar yuklandi ✨",
    search_initial_hint: "Sevimli ijrochingiz yoki musiqangizni qidiring. Eshitilganlar bu yerda ham avtomatik chiqarib tashlanadi.",

    history_sub: 'ESHITILGANLAR',
    history_title: 'Tarix',
    clear_btn: 'Tozalash',
    history_empty_title: "Hozircha tarix bo'sh",
    history_empty_desc: 'Kamida 30 soniya yoki 50% eshitilgan musiqalar bu yerda avtomatik saqlanib boriladi.',

    settings_sub: 'PARAMETRLAR VA SOZLAMALAR',
    settings_title: 'Sozlamalar',
    settings_group_algorithm: 'TAKRORLANMASLIK ALGORITMI',
    settings_retention_label: 'Qayta chiqish muddati',
    settings_retention_sub: "Eshitilgan qo'shiq qancha vaqt ko'rsatilmasin",
    settings_retention_never: 'Hech qachon',
    settings_retention_7d: '7 kundan keyin',
    settings_retention_30d: '30 kundan keyin',
    settings_country_label: 'Mintaqa va davlat',
    settings_country_sub: 'YouTube trendlari qaysi davlatdan olinsin',
    settings_lang_label: 'Ilova tili',
    settings_lang_sub: "Interfeys va ma'lumotlar tili",
    settings_group_hint: 'Kamida 30 soniya yoki 50% eshitilgan musiqalar tanlangan muddat davomida tavsiyalardan yashiriladi.',
    settings_group_stats: 'XOTIRA VA TARIX STATISTIKASI',
    settings_total_listened: 'Jami eshitilganlar',
    settings_hidden_songs: 'Yashirilgan musiqalar',
    settings_clear_all_btn: 'Barcha eshitilganlar tarixini tozalash...',
    settings_group_about: 'ILOVA HAQIDA',
    settings_app_version: 'Ilova versiyasi',
    settings_player_engine: 'Pleyer dvigateli',
    settings_cache_offline: 'Kesh va Oflayn',
    settings_active: 'Faol',

    no_song_selected: 'Musiqa tanlanmagan',
    player_subtitle_default: 'Apple Music PWA',
    artist_placeholder: 'Ijrochi',
    action_heard: 'Eshitildi',
    action_hide: "Ko'rsatma",

    tab_home: 'Bosh sahifa',
    tab_search: 'Qidiruv',
    tab_history: 'Tarix',
    tab_settings: 'Sozlamalar',

    confirm_title: 'Tarixni tozalash',
    confirm_message: "Haqiqatan ham barcha eshitilganlar tarixini tozalamoqchimisiz? Eshitilgan musiqalar yana tavsiyalarda ko'rina boshlaydi.",
    confirm_accept: 'Ha, tozalash',
    confirm_cancel: 'Bekor qilish',

    offline_msg: "Internet yo'q. Keshdagi musiqalar ko'rsatilmoqda.",
    pwa_install_title: "Musiqa ilovasini o'rnating",
    pwa_install_desc: "Ilovani to'liq ekranda qulay tinglash uchun o'rnating.",
    pwa_install_btn: "O'rnatish",

    just_now: 'Hozirgina',
    mins_ago: '{mins} daq oldin',
    hours_ago: '{hours} soat oldin',
    days_ago: '{days} kun oldin',

    toast_added_history: '"{title}..." eshitilganlar safiga qo\'shildi',
    toast_song_hidden: "Qo'shiq yashirildi",
    toast_history_cleared: 'Tarix tozalandi',
    toast_refreshing: 'Musiqalar yangilanmoqda...',
    toast_loading: 'Musiqa yuklanmoqda...',
    toast_preparing: 'Musiqa tayyorlanmoqda...',
    toast_shuffle_on: 'Aralashtirish faol',
    toast_shuffle_off: "Aralashtirish o'chirildi",
    toast_loop_on: 'Takrorlash faol',
    toast_loop_off: "Takrorlash o'chirildi",
    toast_lang_changed: "Til o'zgartirildi: O'zbekcha",
    toast_country_changed: "Trendlar davlati o'zgartirildi: {country}",
    toast_error_embed: "Mualliflik huquqi cheklovi. Keyingi musiqa ijro etiladi...",
    toast_error_notfound: "Musiqa topilmadi. Keyingisiga o'tilmoqda...",
    toast_error_general: "Musiqani ijro etishda xatolik yuz berdi",
    toast_pick_other: "Iltimos, ro'yxatdan boshqa musiqa tanlang",

    country_UZ: "O'zbekiston",
    country_US: 'AQSH',
    country_KZ: "Qozog'iston",
    country_TR: 'Turkiya',
    country_RU: 'Rossiya',
    country_GB: 'Buyuk Britaniya',
    country_KR: 'Janubiy Koreya',
    country_DE: 'Germaniya',
    country_AZ: 'Ozarbayjon'
  },

  ru: {
    anti_repeat: 'Анти-Повтор',
    music: 'Музыка',
    refresh_tooltip: 'Обновить и перемешать',
    smart_picks_sub: 'РЕКОМЕНДАЦИИ УМНОГО АЛГОРИТМА',
    top_trends: 'Топ Тренды',
    select_country: 'Выберите страну',

    genre_all: 'Все',
    genre_pop: 'Поп',
    genre_rap: 'Рэп / Хип-Хоп',
    genre_rock: 'Рок',
    genre_uzbek: 'Узбекские',
    genre_remix: 'Ремиксы',
    genre_new: 'Новинки 2025',
    genre_chill: 'Чилл и Лофи',

    songs_filtering: 'Фильтрация треков...',
    songs_count: '{count} уникальных треков',
    all_heard_title: 'Вы всё прослушали!',
    all_heard_desc: 'Все треки в этом разделе уже прослушаны. Очистите историю для нового потока.',
    clear_history_btn: 'Очистить историю',
    shuffle_btn: 'Перемешать',
    no_songs_found: 'Треки не найдены',

    search_title: 'Поиск',
    search_placeholder: 'Трек, артист или жанр...',
    search_home_placeholder: 'Поиск трека, исполнителя или жанра...',
    loading_more_songs: 'Загрузка треков...',
    all_songs_loaded: 'Все треки загружены ✨',
    search_initial_hint: 'Ищите любимых исполнителей или треки. Прослушанные треки автоматически исключаются.',

    history_sub: 'ПРОСЛУШАННЫЕ',
    history_title: 'История',
    clear_btn: 'Очистить',
    history_empty_title: 'История пока пуста',
    history_empty_desc: 'Треки, прослушанные более 30 сек или 50%, автоматически сохраняются здесь.',

    settings_sub: 'ПАРАМЕТРЫ И НАСТРОЙКИ',
    settings_title: 'Настройки',
    settings_group_algorithm: 'АЛГОРИТМ БЕЗ ПОВТОРОВ',
    settings_retention_label: 'Срок повтора',
    settings_retention_sub: 'Сколько времени не показывать прослушанные треки',
    settings_retention_never: 'Никогда',
    settings_retention_7d: 'Через 7 дней',
    settings_retention_30d: 'Через 30 дней',
    settings_country_label: 'Регион и страна',
    settings_country_sub: 'Из какой страны брать тренды YouTube',
    settings_lang_label: 'Язык приложения',
    settings_lang_sub: 'Язык интерфейса и информации',
    settings_group_hint: 'Треки, прослушанные более 30 сек или 50%, скрываются из рекомендаций на выбранный срок.',
    settings_group_stats: 'СТАТИСТИКА И ПАМЯТЬ',
    settings_total_listened: 'Всего прослушано',
    settings_hidden_songs: 'Скрытые треки',
    settings_clear_all_btn: 'Очистить всю историю прослушиваний...',
    settings_group_about: 'О ПРИЛОЖЕНИИ',
    settings_app_version: 'Версия приложения',
    settings_player_engine: 'Движок плеера',
    settings_cache_offline: 'Кэш и офлайн',
    settings_active: 'Активен',

    no_song_selected: 'Трек не выбран',
    player_subtitle_default: 'Apple Music PWA',
    artist_placeholder: 'Исполнитель',
    action_heard: 'Прослушано',
    action_hide: 'Скрыть',

    tab_home: 'Главная',
    tab_search: 'Поиск',
    tab_history: 'История',
    tab_settings: 'Настройки',

    confirm_title: 'Очистить историю',
    confirm_message: 'Вы уверены, что хотите очистить всю историю? Прослушанные треки снова появятся в рекомендациях.',
    confirm_accept: 'Да, очистить',
    confirm_cancel: 'Отмена',

    offline_msg: 'Нет подключения. Показываются кэшированные треки.',
    pwa_install_title: 'Установите приложение Музыка',
    pwa_install_desc: 'Установите для удобного прослушивания на весь экран.',
    pwa_install_btn: 'Установить',

    just_now: 'Только что',
    mins_ago: '{mins} мин назад',
    hours_ago: '{hours} ч назад',
    days_ago: '{days} дн назад',

    toast_added_history: '"{title}..." добавлен в историю',
    toast_song_hidden: 'Трек скрыт',
    toast_history_cleared: 'История очищена',
    toast_refreshing: 'Обновление треков...',
    toast_loading: 'Загрузка трека...',
    toast_preparing: 'Подготовка музыки...',
    toast_shuffle_on: 'Перемешивание включено',
    toast_shuffle_off: 'Перемешивание выключено',
    toast_loop_on: 'Повтор включен',
    toast_loop_off: 'Повтор выключен',
    toast_lang_changed: 'Язык изменен: Русский',
    toast_country_changed: 'Страна трендов изменена: {country}',
    toast_error_embed: 'Ограничение авторских прав. Воспроизведение следующего трека...',
    toast_error_notfound: 'Трек не найден. Переход к следующему...',
    toast_error_general: 'Ошибка воспроизведения трека',
    toast_pick_other: 'Пожалуйста, выберите другой трек из списка',

    country_UZ: 'Узбекистан',
    country_US: 'США',
    country_KZ: 'Казахстан',
    country_TR: 'Турция',
    country_RU: 'Россия',
    country_GB: 'Великобритания',
    country_KR: 'Южная Корея',
    country_DE: 'Германия',
    country_AZ: 'Азербайджан'
  },

  en: {
    anti_repeat: 'Anti-Repeat',
    music: 'Music',
    refresh_tooltip: 'Refresh and shuffle',
    smart_picks_sub: 'SMART ALGORITHM PICKS',
    top_trends: 'Top Trends',
    select_country: 'Select country',

    genre_all: 'All',
    genre_pop: 'Pop',
    genre_rap: 'Rap / Hip-Hop',
    genre_rock: 'Rock',
    genre_uzbek: 'Uzbek',
    genre_remix: 'Remix',
    genre_new: 'New 2025',
    genre_chill: 'Chill & Lofi',

    songs_filtering: 'Filtering songs...',
    songs_count: '{count} non-repeat tracks',
    all_heard_title: "You've heard them all!",
    all_heard_desc: 'All songs in this section have been listened to. You can clear history for a new stream.',
    clear_history_btn: 'Clear history',
    shuffle_btn: 'Shuffle',
    no_songs_found: 'No songs found',

    search_title: 'Search',
    search_placeholder: 'Song, artist or genre...',
    search_home_placeholder: 'Search songs, artists, or genres...',
    loading_more_songs: 'Loading more songs...',
    all_songs_loaded: 'All tracks loaded ✨',
    search_initial_hint: 'Search for your favorite artist or songs. Listened tracks are automatically excluded.',

    history_sub: 'LISTENED TRACKS',
    history_title: 'History',
    clear_btn: 'Clear',
    history_empty_title: 'History is empty',
    history_empty_desc: 'Songs played for 30s or 50% are automatically saved here.',

    settings_sub: 'PREFERENCES & SETTINGS',
    settings_title: 'Settings',
    settings_group_algorithm: 'NON-REPEAT ALGORITHM',
    settings_retention_label: 'Re-appearance period',
    settings_retention_sub: 'How long listened songs remain hidden',
    settings_retention_never: 'Never',
    settings_retention_7d: 'After 7 days',
    settings_retention_30d: 'After 30 days',
    settings_country_label: 'Region and Country',
    settings_country_sub: 'Where to fetch YouTube music trends from',
    settings_lang_label: 'App Language',
    settings_lang_sub: 'Interface and data language',
    settings_group_hint: 'Songs listened for at least 30s or 50% will be hidden from recommendations for the chosen period.',
    settings_group_stats: 'STORAGE & HISTORY STATS',
    settings_total_listened: 'Total listened',
    settings_hidden_songs: 'Hidden songs',
    settings_clear_all_btn: 'Clear all listening history...',
    settings_group_about: 'ABOUT APP',
    settings_app_version: 'App Version',
    settings_player_engine: 'Player Engine',
    settings_cache_offline: 'Cache & Offline',
    settings_active: 'Active',

    no_song_selected: 'No song selected',
    player_subtitle_default: 'Apple Music PWA',
    artist_placeholder: 'Artist',
    action_heard: 'Listened',
    action_hide: 'Hide',

    tab_home: 'Home',
    tab_search: 'Search',
    tab_history: 'History',
    tab_settings: 'Settings',

    confirm_title: 'Clear History',
    confirm_message: 'Are you sure you want to clear your listening history? Heard songs will appear in recommendations again.',
    confirm_accept: 'Yes, clear',
    confirm_cancel: 'Cancel',

    offline_msg: 'No internet connection. Showing cached songs.',
    pwa_install_title: 'Install Music App',
    pwa_install_desc: 'Install for a convenient full-screen audio experience.',
    pwa_install_btn: 'Install',

    just_now: 'Just now',
    mins_ago: '{mins}m ago',
    hours_ago: '{hours}h ago',
    days_ago: '{days}d ago',

    toast_added_history: '"{title}..." added to history',
    toast_song_hidden: 'Song hidden',
    toast_history_cleared: 'History cleared',
    toast_refreshing: 'Refreshing songs...',
    toast_loading: 'Loading song...',
    toast_preparing: 'Preparing music...',
    toast_shuffle_on: 'Shuffle enabled',
    toast_shuffle_off: 'Shuffle disabled',
    toast_loop_on: 'Loop enabled',
    toast_loop_off: 'Loop disabled',
    toast_lang_changed: 'Language changed: English',
    toast_country_changed: 'Trends country changed: {country}',
    toast_error_embed: 'Copyright restriction. Skipping to next song...',
    toast_error_notfound: 'Song not found. Playing next...',
    toast_error_general: 'Playback error occurred',
    toast_pick_other: 'Please pick another song from the list',

    country_UZ: 'Uzbekistan',
    country_US: 'USA',
    country_KZ: 'Kazakhstan',
    country_TR: 'Turkey',
    country_RU: 'Russia',
    country_GB: 'United Kingdom',
    country_KR: 'South Korea',
    country_DE: 'Germany',
    country_AZ: 'Azerbaijan'
  }
};

const I18nModule = {
  currentLang: 'uz',
  translations: TRANSLATIONS,

  init() {
    this.currentLang = StorageModule.getLanguage();
    this.applyLanguage(this.currentLang, false);
  },

  t(key, params = {}) {
    const dict = this.translations[this.currentLang] || this.translations.uz;
    let text = dict[key] || this.translations.uz[key] || key;
    Object.keys(params).forEach(p => {
      text = text.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
    });
    return text;
  },

  getCountryName(code) {
    const key = `country_${code}`;
    return this.t(key);
  },

  setLanguage(lang) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;
    StorageModule.setLanguage(lang);
    this.applyLanguage(lang, true);
  },

  applyLanguage(lang, showToast = false) {
    document.documentElement.lang = lang;

    // Header language select
    const headerLang = document.getElementById('headerLangSelect');
    if (headerLang) headerLang.value = lang;

    const flagMap = { uz: '🇺🇿', ru: '🇷🇺', en: '🇬🇧' };
    const headerLangFlag = document.getElementById('headerLangFlag');
    if (headerLangFlag) headerLangFlag.textContent = flagMap[lang] || '🌐';

    // Header segmented buttons (legacy fallback)
    document.querySelectorAll('#headerLangSwitcher .lang-seg-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Settings select
    const settingsLang = document.getElementById('settingsLangSelect');
    if (settingsLang) settingsLang.value = lang;

    // Translate DOM elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (key) el.textContent = this.t(key);
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (key) el.placeholder = this.t(key);
    });

    // Update country dropdowns
    if (typeof UIModule !== 'undefined' && UIModule.updateCountryUI) {
      UIModule.updateCountryUI();
      UIModule.updateDynamicTexts();
    }

    if (showToast && typeof UIModule !== 'undefined' && UIModule.showToast) {
      UIModule.showToast(this.t('toast_lang_changed'));
    }
  }
};

// ==========================================================================
// 3. YouTube Data API v3 Moduli
// ==========================================================================
const ApiModule = {
  decodeHtmlEntities(text) {
    if (!text) return '';
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent || text;
  },

  cleanSongTitle(title) {
    if (!title) return '';
    let t = this.decodeHtmlEntities(title);
    // 1. Videorolik va klip teglari: (Official Music Video), (Lyrics), (Videoclip) va h.k.
    t = t.replace(/\s*[\(\[](official\s*(music\s*)?video|official\s*audio|lyrics?|videoclip|клип|премьера\s*\d*|hd|4k|hq|visualizer)[\)\]]/gi, '');
    t = t.replace(/\|\s*official\s*videoclip\s*\d*/gi, '');
    t = t.replace(/\|\s*клип\s*\d*/gi, '');
    t = t.replace(/\|\s*videoklip/gi, '');
    // 2. Boshidagi va oxiridagi keraksiz emojilar, belgi va krestlar (❌, 🔴, 🔥, 💥, 🐀, ⚠️ va h.k.)
    t = t.replace(/^[\s\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}❌🔴🔥💥🐀👑⭐✨⚡⚠️]+/gu, '');
    t = t.replace(/[\s\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}❌🔴🔥💥🐀👑⭐✨⚡⚠️]+$/gu, '');
    t = t.replace(/\s*❌+\s*/g, ' ');
    return t.trim() || title;
  },

  parseDuration(iso) {
    if (!iso) return { formatted: '0:00', seconds: 0 };
    const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return { formatted: '0:00', seconds: 0 };
    const h = parseInt(match[1] || '0', 10);
    const m = parseInt(match[2] || '0', 10);
    const s = parseInt(match[3] || '0', 10);
    const total = h * 3600 + m * 60 + s;
    const formatted = h > 0 ? `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}` : `${m}:${s.toString().padStart(2, '0')}`;
    return { formatted, seconds: total };
  },

  buildSearchQuery(genre, query = '', reg = 'UZ') {
    if (query && query.trim()) return query.trim();

    const countryMap = {
      UZ: { default: 'uzbek musiqa yangi xit', Pop: 'uzbek pop musiqa', Rap: 'uzbek rep hip hop', Rock: 'uzbek rock', Uzbek: 'uzbekcha yangi qoshiqlar', Remix: 'uzbek remix bass', New: 'yangi uzbekcha musiqa 2025 2026', Chill: 'uzbek lofi chill musiqa' },
      US: { default: 'top billboard hits 2025', Pop: 'pop hits billboard', Rap: 'hip hop rap hits', Rock: 'rock hits classics', Uzbek: 'uzbek musiqa', Remix: 'club dance remix', New: 'new music hits 2025 2026', Chill: 'lofi chill beats' },
      KZ: { default: 'qazaqsha ander xit', Pop: 'qazaqsha pop ander', Rap: 'qazaq rap hip hop', Rock: 'qazaq rock', Uzbek: 'uzbek musiqa', Remix: 'qazaqsha remix', New: 'yangi qazaqsha ander 2025', Chill: 'qazaq lofi chill' },
      TR: { default: 'türkçe pop müzik en çok dinlenen', Pop: 'türkçe pop', Rap: 'türkçe rap', Rock: 'türkçe rock', Uzbek: 'özbek müzik', Remix: 'türkçe remix', New: 'yeni türkçe şarkılar 2025', Chill: 'türkçe lofi chill' },
      RU: { default: 'русские хиты популярная музыка', Pop: 'русский поп новинки', Rap: 'русский рэп хип хоп', Rock: 'русский рок хиты', Uzbek: 'узбекская музыка', Remix: 'русский ремикс', New: 'новинки музыки 2025', Chill: 'lofi русские песни chill' },
      GB: { default: 'uk top 40 music hits', Pop: 'uk pop hits', Rap: 'uk drill rap grime', Rock: 'british rock classics', Uzbek: 'uzbek music', Remix: 'uk dance remix club', New: 'new uk songs 2025', Chill: 'uk chill lofi' },
      KR: { default: 'kpop popular songs', Pop: 'k-pop girl groups boy groups', Rap: 'korean hip hop khh', Rock: 'k-rock bands', Uzbek: 'uzbek music', Remix: 'k-pop remix dance', New: 'k-pop comeback 2025 2026', Chill: 'k-indie k-rnb chill' },
      DE: { default: 'deutsche top hits musik', Pop: 'deutscher pop', Rap: 'deutschrap', Rock: 'deutschrock', Uzbek: 'usbekische musik', Remix: 'german dance remix', New: 'neue musik 2025', Chill: 'german lofi chill' },
      AZ: { default: 'azerbaycan mahnilari yeni', Pop: 'azerbaycan pop', Rap: 'azerbaycan rep', Rock: 'azerbaycan rock', Uzbek: 'özbək musiqisi', Remix: 'azerbaycan remix', New: 'yeni azeri mahnilar 2025', Chill: 'azerbaycan lofi' }
    };

    const regData = countryMap[reg] || countryMap['US'];
    if (genre === 'all' || !genre) {
      return regData.default;
    }
    return regData[genre] || `${genre} music`;
  },

  async fetchBatch(genre, query = '', pageToken = '', regionCode = '') {
    const key = StorageModule.getCustomApiKey();
    if (!key) throw new Error('NO_API_KEY');
    const reg = regionCode || StorageModule.getRegion();

    const cacheKey = `yt_pwa_cache_${reg}_${genre}_${query}_${pageToken}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.time < 60 * 60 * 1000 && parsed.data?.songs?.length > 0) {
          return parsed.data;
        }
      } catch { }
    }

    // UZ davlatida yoki janr bo'yicha qidiruvda search API ishlatiladi
    // YouTube Data API v3 'UZ' uchun mostPopular chartni qo'llab-quvvatlamaydi (400 xatosi beradi)
    // Va mostPopular chartda janrlar bo'yicha filter yo'q
    const canUsePopularChart = (reg !== 'UZ') && (genre === 'all') && (!query || !query.trim());
    let url = '';

    if (canUsePopularChart) {
      url = `${CONFIG.API_BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=${CONFIG.MUSIC_CATEGORY_ID}&regionCode=${reg}&maxResults=50&key=${key}${pageToken ? `&pageToken=${pageToken}` : ''}`;
    } else {
      const q = this.buildSearchQuery(genre, query, reg);
      url = `${CONFIG.API_BASE_URL}/search?part=snippet&type=video&videoCategoryId=${CONFIG.MUSIC_CATEGORY_ID}&regionCode=${reg}&q=${encodeURIComponent(q)}&maxResults=50&key=${key}${pageToken ? `&pageToken=${pageToken}` : ''}`;
    }

    let res = await fetch(url);
    if (!res.ok) {
      // Agar mostPopular xato bersa, search qilib qutqarish
      if (canUsePopularChart) {
        const fallbackQ = this.buildSearchQuery(genre, query, reg);
        const fallbackUrl = `${CONFIG.API_BASE_URL}/search?part=snippet&type=video&videoCategoryId=${CONFIG.MUSIC_CATEGORY_ID}&regionCode=${reg}&q=${encodeURIComponent(fallbackQ)}&maxResults=50&key=${key}${pageToken ? `&pageToken=${pageToken}` : ''}`;
        res = await fetch(fallbackUrl);
      }
      if (!res.ok) {
        if (res.status === 403) throw new Error('QUOTA_EXCEEDED');
        throw new Error(`API_ERROR_${res.status}`);
      }
    }

    const data = await res.json();
    let songs = [];

    if (canUsePopularChart && data.items && data.items[0]?.id && typeof data.items[0].id === 'string') {
      songs = (data.items || []).map(item => {
        const dur = this.parseDuration(item.contentDetails?.duration);
        return {
          id: item.id,
          title: this.cleanSongTitle(item.snippet?.title || 'Nomsiz musiqa'),
          channelTitle: this.decodeHtmlEntities(item.snippet?.channelTitle || 'YouTube Musiqa'),
          thumbnail: item.snippet?.thumbnails?.maxres?.url || item.snippet?.thumbnails?.standard?.url || item.snippet?.thumbnails?.high?.url || item.snippet?.thumbnails?.medium?.url || '',
          duration: dur.formatted,
          durationSeconds: dur.seconds
        };
      });
    } else {
      const vIds = (data.items || []).map(i => i.id?.videoId).filter(Boolean);
      if (vIds.length > 0) {
        try {
          const detailRes = await fetch(`${CONFIG.API_BASE_URL}/videos?part=snippet,contentDetails&id=${vIds.join(',')}&key=${key}`);
          if (detailRes.ok) {
            const detailData = await detailRes.json();
            songs = (detailData.items || []).map(item => {
              const dur = this.parseDuration(item.contentDetails?.duration);
              return {
                id: item.id,
                title: this.cleanSongTitle(item.snippet?.title || 'Nomsiz musiqa'),
                channelTitle: this.decodeHtmlEntities(item.snippet?.channelTitle || 'YouTube Musiqa'),
                thumbnail: item.snippet?.thumbnails?.maxres?.url || item.snippet?.thumbnails?.standard?.url || item.snippet?.thumbnails?.high?.url || item.snippet?.thumbnails?.medium?.url || '',
                duration: dur.formatted,
                durationSeconds: dur.seconds
              };
            });
          }
        } catch { }
      }

      // Agar duration olishda detailRes ishlamasa ham asosiy ma'lumotlar bilan qolish
      if (songs.length === 0 && data.items) {
        songs = (data.items || []).map(item => ({
          id: item.id?.videoId,
          title: this.cleanSongTitle(item.snippet?.title || 'Nomsiz musiqa'),
          channelTitle: this.decodeHtmlEntities(item.snippet?.channelTitle || 'YouTube Musiqa'),
          thumbnail: item.snippet?.thumbnails?.maxres?.url || item.snippet?.thumbnails?.standard?.url || item.snippet?.thumbnails?.high?.url || item.snippet?.thumbnails?.medium?.url || '',
          duration: '3:30',
          durationSeconds: 210
        })).filter(s => !!s.id);
      }
    }

    const payload = { songs, nextPageToken: data.nextPageToken };
    if (songs.length > 0) {
      sessionStorage.setItem(cacheKey, JSON.stringify({ data: payload, time: Date.now() }));
    }
    return payload;
  },

  // 4. Sahifalab yuklash va Cheksiz Scroll (Infinite Scroll)
  async fetchSongsPage({ genre = 'all', query = '', regionCode = '', pageToken = '', targetCount = 30 }) {
    const key = StorageModule.getCustomApiKey();
    const reg = regionCode || StorageModule.getRegion();

    // API kalit yo'q bo'lsa yoki offline bo'lsa -> Fallback bazasidan sahifalab berish
    if (!key || !navigator.onLine) {
      let pool = [...FALLBACK_SONGS];
      if (query && query.trim()) {
        const q = query.toLowerCase().trim();
        pool = pool.filter(s => s.title.toLowerCase().includes(q) || s.channelTitle.toLowerCase().includes(q));
      }
      const offset = parseInt(pageToken || '0', 10);
      const slice = pool.slice(offset, offset + targetCount);
      const nextOffset = offset + slice.length;
      const hasMore = nextOffset < pool.length;

      slice.forEach(s => StorageModule.sessionSeenIds.add(s.id));
      return {
        songs: slice,
        nextPageToken: hasMore ? String(nextOffset) : '',
        hasMore,
        allHeard: pool.length === 0
      };
    }

    try {
      let freshCollected = [];
      let token = pageToken;
      let pages = 0;
      let hasMore = true;

      // Kamida targetCount ta takrorlanmas musiqa to'planguncha yoki 3 ta sahifa so'rovigacha
      while (freshCollected.length < targetCount && hasMore && pages < 3) {
        pages++;
        const batch = await this.fetchBatch(genre, query, token, reg);
        const fresh = StorageModule.filterFreshSongs(batch.songs);
        freshCollected.push(...fresh);

        if (batch.nextPageToken) {
          token = batch.nextPageToken;
        } else {
          hasMore = false;
        }
      }

      // Agar barcha qo'shiqlar eshitilgan bo'lsa, foydalanuvchiga bo'sh ekran ko'rsatmaslik uchun
      if (freshCollected.length === 0 && !pageToken) {
        const lastBatch = await this.fetchBatch(genre, query, '', reg);
        const nonHidden = (lastBatch.songs || []).filter(s => !StorageModule.getHidden().includes(s.id));
        freshCollected.push(...nonHidden.slice(0, targetCount));
      }

      const shuffled = StorageModule.fisherYatesShuffle(freshCollected);
      shuffled.forEach(s => StorageModule.sessionSeenIds.add(s.id));

      return {
        songs: shuffled.slice(0, targetCount),
        nextPageToken: token,
        hasMore: !!token,
        allHeard: freshCollected.length === 0
      };
    } catch (err) {
      console.warn('YouTube API xatoligi:', err);
      let pool = [...FALLBACK_SONGS];
      if (query && query.trim()) {
        const q = query.toLowerCase().trim();
        pool = pool.filter(s => s.title.toLowerCase().includes(q) || s.channelTitle.toLowerCase().includes(q));
      }
      const offset = parseInt(pageToken || '0', 10);
      const slice = pool.slice(offset, offset + targetCount);
      const nextOffset = offset + slice.length;
      const hasMore = nextOffset < pool.length;

      slice.forEach(s => StorageModule.sessionSeenIds.add(s.id));
      return {
        songs: slice,
        nextPageToken: hasMore ? String(nextOffset) : '',
        hasMore,
        allHeard: pool.length === 0
      };
    }
  },

  // Auto-pagination (Kamida MIN_SONGS_THRESHOLD ta yangi qo'shiq to'planguncha)
  async getSongsWithAntiRepeat(genre = 'all', query = '', regionCode = '') {
    const res = await this.fetchSongsPage({
      genre,
      query,
      regionCode,
      pageToken: '',
      targetCount: CONFIG.MIN_SONGS_THRESHOLD
    });
    return {
      songs: res.songs,
      allHeard: res.allHeard
    };
  }
};

// ==========================================================================
// 4. YouTube IFrame Player & Media Session Moduli
// ==========================================================================
const PlayerModule = {
  ytPlayer: null,
  isReady: false,
  pendingSong: null,
  shouldAutoPlay: false,
  errorCount: 0,
  currentSong: null,
  playlist: [],
  currentIndex: -1,
  isPlaying: false,
  playedSeconds: 0,
  hasMarkedHeard: false,
  progressTimer: null,
  isShuffle: true,
  isLoop: false,

  init() {
    this.restoreLastSession();
    this.initYTPlayer();
    this.setupMediaSession();
  },

  initYTPlayer() {
    if (this.ytPlayer) return;
    const playerEl = document.getElementById('youtubePlayer');
    if (!playerEl) return;

    if (!window.YT || !window.YT.Player) {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prev === 'function') {
          try { prev(); } catch { }
        }
        this.initYTPlayer();
      };
      return;
    }

    try {
      this.ytPlayer = new YT.Player('youtubePlayer', {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin
        },
        events: {
          onReady: (e) => {
            this.isReady = true;
            try { e.target.setVolume(80); } catch { }
            console.log('[PlayerModule] YouTube Player tayyor');

            if (this.pendingSong) {
              const pending = this.pendingSong;
              this.pendingSong = null;
              this.play(pending);
            } else if (this.currentSong && !this.isPlaying) {
              const lastTime = StorageModule.getLastTime() || 0;
              const songId = this.currentSong.id || this.currentSong.videoId;
              try {
                e.target.cueVideoById({
                  videoId: songId,
                  startSeconds: lastTime
                });
              } catch { }
            }
          },
          onStateChange: (e) => this.onStateChange(e),
          onError: (e) => this.handlePlayerError(e)
        }
      });
    } catch (err) {
      console.error('[PlayerModule] initYTPlayer xatosi:', err);
    }
  },

  restoreLastSession() {
    const lastSong = StorageModule.getLastSong();
    if (lastSong) {
      const songId = lastSong.id || lastSong.videoId;
      const normalized = { ...lastSong, id: songId, videoId: songId };
      this.currentSong = normalized;
      const playlist = StorageModule.getLastPlaylist();
      if (playlist && playlist.length > 0) {
        this.playlist = playlist.map(s => ({ ...s, id: s.id || s.videoId, videoId: s.id || s.videoId }));
        this.currentIndex = this.playlist.findIndex(s => (s.id || s.videoId) === songId);
      }
      UIModule.updatePlayerUI(normalized);
      const lastTime = StorageModule.getLastTime() || 0;
      const dur = normalized.durationSeconds || 210;
      UIModule.updateTimeline(lastTime, dur);
      UIModule.updatePlayPauseIcons(false);
      this.setMediaSessionMetadata(normalized);
    }
  },

  onStateChange(event) {
    if (!window.YT) return;
    if (event.data === YT.PlayerState.PLAYING) {
      this.errorCount = 0;
      this.isPlaying = true;
      UIModule.updatePlayPauseIcons(true);
      this.startTracker();
      this.updateMediaSessionState();
    } else if (event.data === YT.PlayerState.PAUSED) {
      this.isPlaying = false;
      UIModule.updatePlayPauseIcons(false);
      this.stopTracker();
      this.updateMediaSessionState();
    } else if (event.data === YT.PlayerState.CUED) {
      if (this.shouldAutoPlay) {
        this.shouldAutoPlay = false;
        try { this.ytPlayer.playVideo(); } catch { }
      }
    } else if (event.data === YT.PlayerState.ENDED) {
      this.isPlaying = false;
      UIModule.updatePlayPauseIcons(false);
      this.stopTracker();
      if (this.isLoop && this.currentSong) {
        this.play(this.currentSong);
      } else {
        this.playNext();
      }
    }
  },

  handlePlayerError(event) {
    const errCode = event?.data;
    console.warn('[PlayerModule] YouTube Player xatosi:', errCode);

    let msg = "Ushbu musiqa litsenziya sababli ijro etilmadi. Keyingisiga o'tilmoqda...";
    if (errCode === 101 || errCode === 150) {
      msg = "Mualliflik huquqi cheklovi. Keyingi musiqa ijro etiladi...";
    } else if (errCode === 100 || errCode === 2) {
      msg = "Musiqa topilmadi. Keyingisiga o'tilmoqda...";
    }
    UIModule.showToast(msg);

    this.errorCount = (this.errorCount || 0) + 1;
    if (this.errorCount < 4) {
      setTimeout(() => {
        this.playNext();
      }, 1200);
    } else {
      this.errorCount = 0;
      this.isPlaying = false;
      UIModule.updatePlayPauseIcons(false);
      UIModule.showToast("Iltimos, ro'yxatdan boshqa musiqa tanlang");
    }
  },

  // 1. Qo'shiq kamida 30s yoki 50% ijro etilsa -> Eshitilgan deb hisoblanadi
  startTracker() {
    this.stopTracker();
    this.progressTimer = setInterval(() => {
      if (!this.ytPlayer || !this.ytPlayer.getCurrentTime) return;
      const curr = this.ytPlayer.getCurrentTime() || 0;
      const dur = this.ytPlayer.getDuration() || (this.currentSong?.durationSeconds || 0);

      this.playedSeconds += 1;
      UIModule.updateTimeline(curr, dur);
      StorageModule.saveLastTime(curr);

      if (!this.hasMarkedHeard && this.currentSong) {
        const thirtySec = this.playedSeconds >= CONFIG.LISTEN_CRITERIA.MIN_SECONDS;
        const fiftyPercent = dur > 0 && (curr / dur) >= (CONFIG.LISTEN_CRITERIA.MIN_PERCENT / 100);
        if (thirtySec || fiftyPercent) {
          this.hasMarkedHeard = true;
          StorageModule.saveHistory(this.currentSong);
          UIModule.showToast(`"${this.currentSong.title.substring(0, 24)}..." eshitilganlar safiga qo'shildi`);
        }
      }
    }, 1000);
  },

  stopTracker() {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
  },

  play(song, newPlaylist = null) {
    if (!song) return;
    const songId = song.id || song.videoId;
    if (!songId) return;

    const normalizedSong = {
      ...song,
      id: songId,
      videoId: songId,
      title: song.title || 'Musiqa',
      channelTitle: song.channelTitle || 'YouTube Musiqa',
      thumbnail: song.thumbnail || `https://i.ytimg.com/vi/${songId}/hqdefault.jpg`,
      duration: song.duration || '3:30',
      durationSeconds: song.durationSeconds || 210
    };

    if (newPlaylist && Array.isArray(newPlaylist)) {
      this.playlist = newPlaylist.map(s => ({
        ...s,
        id: s.id || s.videoId,
        videoId: s.id || s.videoId
      }));
      this.currentIndex = this.playlist.findIndex(s => (s.id || s.videoId) === songId);
    } else if (this.playlist.length === 0) {
      this.playlist = [normalizedSong];
      this.currentIndex = 0;
    } else {
      const idx = this.playlist.findIndex(s => (s.id || s.videoId) === songId);
      if (idx !== -1) {
        this.currentIndex = idx;
      }
    }

    this.currentSong = normalizedSong;
    this.playedSeconds = 0;
    this.hasMarkedHeard = false;
    this.shouldAutoPlay = true;

    StorageModule.saveLastSong(normalizedSong, this.playlist);
    UIModule.updatePlayerUI(normalizedSong);
    UIModule.updatePlayPauseIcons(true);
    this.setMediaSessionMetadata(normalizedSong);

    if (!this.isReady || !this.ytPlayer || typeof this.ytPlayer.loadVideoById !== 'function') {
      console.log('[PlayerModule] YouTube Player hali tayyor emas, kutish navbatiga olindi:', songId);
      this.pendingSong = normalizedSong;
      this.initYTPlayer();
      UIModule.showToast("Musiqa tayyorlanmoqda...");
      return;
    }

    try {
      this.ytPlayer.loadVideoById({
        videoId: songId,
        startSeconds: 0
      });
      try {
        this.ytPlayer.playVideo();
      } catch { }
      this.isPlaying = true;
    } catch (err) {
      console.warn('[PlayerModule] loadVideoById object failed, trying string parameter:', err);
      try {
        this.ytPlayer.loadVideoById(songId, 0);
        this.ytPlayer.playVideo();
        this.isPlaying = true;
      } catch (err2) {
        console.error('[PlayerModule] play xatoligi:', err2);
        UIModule.showToast("Musiqani ijro etishda xatolik yuz berdi");
      }
    }
  },

  togglePlayPause() {
    if (!this.currentSong && this.playlist.length > 0) {
      this.play(this.playlist[0]);
      return;
    }
    if (!this.currentSong) {
      if (UIModule.currentSongs && UIModule.currentSongs.length > 0) {
        this.play(UIModule.currentSongs[0], UIModule.currentSongs);
        return;
      }
      if (FALLBACK_SONGS.length > 0) {
        this.play(FALLBACK_SONGS[0], FALLBACK_SONGS);
        return;
      }
      return;
    }

    if (!this.isReady || !this.ytPlayer) {
      this.play(this.currentSong);
      return;
    }

    if (this.isPlaying) {
      try {
        this.ytPlayer.pauseVideo();
      } catch { }
      this.isPlaying = false;
      UIModule.updatePlayPauseIcons(false);
      this.stopTracker();
    } else {
      try {
        const state = (this.ytPlayer.getPlayerState && this.ytPlayer.getPlayerState()) ?? -1;
        if (state === 5 || state === 2 || state === -1) {
          this.ytPlayer.playVideo();
        } else {
          const songId = this.currentSong.id || this.currentSong.videoId;
          const lastTime = StorageModule.getLastTime() || 0;
          this.ytPlayer.loadVideoById({
            videoId: songId,
            startSeconds: lastTime
          });
          this.ytPlayer.playVideo();
        }
        this.isPlaying = true;
        UIModule.updatePlayPauseIcons(true);
      } catch (err) {
        console.error('[PlayerModule] togglePlayPause xatoligi:', err);
        this.play(this.currentSong);
      }
    }
  },

  playNext() {
    if (this.playlist.length === 0) return;
    let nextIdx = this.currentIndex + 1;
    if (this.isShuffle && this.playlist.length > 2) {
      let rand = Math.floor(Math.random() * this.playlist.length);
      if (rand === this.currentIndex) rand = (rand + 1) % this.playlist.length;
      nextIdx = rand;
    } else if (nextIdx >= this.playlist.length) {
      nextIdx = 0;
    }
    this.currentIndex = nextIdx;
    this.play(this.playlist[nextIdx]);
  },

  playPrev() {
    if (this.playlist.length === 0) return;
    if (this.ytPlayer && this.ytPlayer.getCurrentTime && this.ytPlayer.getCurrentTime() > 3) {
      this.seekTo(0);
      return;
    }
    let prevIdx = this.currentIndex - 1;
    if (prevIdx < 0) prevIdx = this.playlist.length - 1;
    this.currentIndex = prevIdx;
    this.play(this.playlist[prevIdx]);
  },

  seekTo(seconds) {
    if (this.ytPlayer && this.ytPlayer.seekTo) {
      this.ytPlayer.seekTo(seconds, true);
    }
  },

  setVolume(val) {
    if (this.ytPlayer && this.ytPlayer.setVolume) {
      this.ytPlayer.setVolume(val);
    }
  },

  // 6. Media Session API (Qulflangan ekran & Control Center)
  setupMediaSession() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => this.togglePlayPause());
      navigator.mediaSession.setActionHandler('pause', () => this.togglePlayPause());
      navigator.mediaSession.setActionHandler('previoustrack', () => this.playPrev());
      navigator.mediaSession.setActionHandler('nexttrack', () => this.playNext());
      navigator.mediaSession.setActionHandler('seekto', (details) => {
        if (details.seekTime) this.seekTo(details.seekTime);
      });
    }
  },

  setMediaSessionMetadata(song) {
    if ('mediaSession' in navigator && song) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: song.title,
        artist: song.channelTitle,
        album: 'Musiqa PWA',
        artwork: [
          { src: song.thumbnail, sizes: '512x512', type: 'image/jpeg' }
        ]
      });
    }
  },

  updateMediaSessionState() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = this.isPlaying ? 'playing' : 'paused';
    }
  }
};

// ==========================================================================
// 5. UI va iOS Interfeys Moduli
// ==========================================================================
const UIModule = {
  currentGenre: 'all',
  currentRegion: 'UZ',
  currentSongs: [],
  searchSongs: [],
  songRegistry: new Map(),
  isSheetOpen: false,

  // Bosh sahifa holati va sahifalash
  homeState: {
    songs: [],
    nextPageToken: '',
    hasMore: true,
    isLoading: false,
    isLoadingMore: false,
    searchQuery: ''
  },

  // Qurilma o'lchamiga qarab qo'shiqlar soni:
  // Desktop: 30 ta, Tablet: 20 ta, Mobile: 10 ta
  getPageSize() {
    const width = window.innerWidth;
    if (width >= 1024) return 30; // Desktop
    if (width >= 768) return 20;  // Tablet
    return 10;                    // Mobile
  },

  registerSongs(songs) {
    if (!Array.isArray(songs)) return;
    songs.forEach(s => {
      if (!s) return;
      const songId = s.id || s.videoId;
      if (!songId) return;
      const normalized = {
        ...s,
        id: songId,
        videoId: songId,
        title: s.title || 'Musiqa',
        channelTitle: s.channelTitle || 'YouTube Musiqa',
        thumbnail: s.thumbnail || `https://i.ytimg.com/vi/${songId}/hqdefault.jpg`,
        duration: s.duration || '3:30',
        durationSeconds: s.durationSeconds || 210
      };
      this.songRegistry.set(songId, normalized);
    });
  },

  getSongById(songId) {
    if (!songId) return null;
    return this.songRegistry.get(songId) ||
      this.currentSongs.find(s => (s.id || s.videoId) === songId) ||
      this.searchSongs.find(s => (s.id || s.videoId) === songId) ||
      FALLBACK_SONGS.find(s => (s.id || s.videoId) === songId) ||
      null;
  },

  init() {
    this.registerSongs(FALLBACK_SONGS);
    this.registerSongs(StorageModule.getHistory().map(i => ({ ...i, id: i.videoId || i.id })));
    this.currentRegion = StorageModule.getRegion();
    this.bindTabs();
    this.bindChips();
    this.bindHomeSearch();
    this.bindSearch();
    this.bindNavbarScroll();
    this.bindInfiniteScroll();
    this.bindFullPlayerSheet();
    this.bindSwipeActions();
    this.bindSettings();
    this.bindCountryPicker();
    this.bindLanguageSwitcher();
    this.updateHistoryBadge();
    this.loadHomeSongs(true);
    this.initPWAInstallPrompt();

    // Ekran o'lchami o'zgarganda (Resize)
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Agar birinchi sahifadagi musiqalar soni yangi o'lchamdan kam bo'lsa
        const needed = this.getPageSize();
        if (this.homeState.songs.length < needed && this.homeState.hasMore) {
          this.loadMoreHomeSongs();
        }
      }, 300);
    });

    // Sahifa yangilanganda (refresh) oxirgi ochilgan sahifada qolish
    const hashToTab = {
      '#home': 'tabHome',
      '#search': 'tabSearch',
      '#history': 'tabHistory',
      '#settings': 'tabSettings'
    };
    const currentHash = window.location.hash.toLowerCase();
    const initialTab = hashToTab[currentHash] || StorageModule.getActiveTab() || 'tabHome';
    this.switchTab(initialTab, false);

    window.addEventListener('hashchange', () => {
      const h = window.location.hash.toLowerCase();
      if (hashToTab[h]) {
        this.switchTab(hashToTab[h], false);
      }
    });
  },

  // iOS Tabs Navigatsiyasi
  bindTabs() {
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTabId = tab.dataset.tab;
        this.switchTab(targetTabId, true);
      });
    });
  },

  // Sahifalar (Tabs) almashinuvi va holatni saqlash
  switchTab(targetTabId, updateUrl = true) {
    const tabs = document.querySelectorAll('.tab-item');
    const dynamicStatus = document.getElementById('headerDynamicStatus');
    const inlineTitle = document.getElementById('navbarInlineTitle');

    const tabConfig = {
      tabHome: { status: 'Anti-Repeat', title: 'Musiqa', hash: 'home' },
      tabSearch: { status: 'Qidiruv', title: 'Qidiruv', hash: 'search' },
      tabHistory: { status: 'Eshitilganlar', title: 'Tarix', hash: 'history' },
      tabSettings: { status: 'Parametrlar', title: 'Sozlamalar', hash: 'settings' }
    };

    const targetTabBtn = document.querySelector(`.tab-item[data-tab="${targetTabId}"]`);
    const targetPage = document.getElementById(targetTabId);

    if (!targetPage || !targetTabBtn) return;

    tabs.forEach(t => t.classList.remove('active'));
    targetTabBtn.classList.add('active');

    document.querySelectorAll('.tab-page').forEach(page => {
      page.classList.add('hidden');
    });
    targetPage.classList.remove('hidden');

    // Header status va inline sarlavhasini sinxronlash
    if (tabConfig[targetTabId]) {
      if (dynamicStatus) dynamicStatus.textContent = tabConfig[targetTabId].status;
      if (inlineTitle) inlineTitle.textContent = tabConfig[targetTabId].title;
    }

    if (targetTabId === 'tabHistory') this.renderHistoryPage();
    if (targetTabId === 'tabSettings') this.updateStatsUI();

    // LocalStorage'ga faol sahifani saqlash
    StorageModule.setActiveTab(targetTabId);

    // URL hash'ni yangilash (foydalanuvchi sahifani yangilaganda yoki link ulashganda)
    if (updateUrl && tabConfig[targetTabId]) {
      history.replaceState(null, '', `#${tabConfig[targetTabId].hash}`);
    }
  },

  // Janr Filtrlari (iOS Chips)
  bindChips() {
    const chips = document.querySelectorAll('.ios-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentGenre = chip.dataset.genre;
        this.homeState.searchQuery = '';
        const homeInput = document.getElementById('homeSearchInput');
        if (homeInput) homeInput.value = '';
        const homeClear = document.getElementById('clearHomeSearchBtn');
        if (homeClear) homeClear.classList.add('hidden');
        this.showToast(`${chip.textContent.trim()} yuklanmoqda...`);
        this.loadHomeSongs(true);
      });
    });
  },

  // Bosh sahifadagi Fixed / Sticky Search
  bindHomeSearch() {
    const input = document.getElementById('homeSearchInput');
    const clearBtn = document.getElementById('clearHomeSearchBtn');
    if (!input) return;

    let debounceTimer = null;

    input.addEventListener('input', () => {
      const val = input.value;
      if (clearBtn) clearBtn.classList.toggle('hidden', !val);

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.homeState.searchQuery = val.trim();
        this.loadHomeSongs(true);
      }, 350);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        clearTimeout(debounceTimer);
        this.homeState.searchQuery = input.value.trim();
        this.loadHomeSongs(true);
        input.blur();
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.classList.add('hidden');
        this.homeState.searchQuery = '';
        this.loadHomeSongs(true);
      });
    }
  },

  // Cheksiz Scroll (Infinite Scroll)
  bindInfiniteScroll() {
    const scrollContainer = document.getElementById('scrollContainer');
    if (!scrollContainer) return;

    let ticking = false;
    scrollContainer.addEventListener('scroll', () => {
      const stickyBar = document.getElementById('homeSearchStickyBar');
      if (stickyBar) {
        stickyBar.classList.toggle('is-stuck', scrollContainer.scrollTop > 30);
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const threshold = 500;
          const scrollBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop - scrollContainer.clientHeight;
          if (scrollBottom < threshold) {
            this.loadMoreHomeSongs();
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  },

  // 3. Fixed Navbar Scroll & Header Actions
  bindNavbarScroll() {
    const scrollContainer = document.getElementById('scrollContainer');
    const iosNavbar = document.getElementById('iosNavbar');
    if (scrollContainer && iosNavbar) {
      scrollContainer.addEventListener('scroll', () => {
        if (scrollContainer.scrollTop > 20) {
          iosNavbar.classList.add('scrolled');
        } else {
          iosNavbar.classList.remove('scrolled');
        }
      }, { passive: true });
    }

    // Logo / Brand bosilganda yuqoriga silliq qaytish
    const headerBrand = document.getElementById('headerBrand');
    if (headerBrand && scrollContainer) {
      headerBrand.addEventListener('click', () => {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Header yangilash / aralashtirish tugmasi
    const navbarActionBtn = document.getElementById('navbarActionBtn');
    if (navbarActionBtn) {
      navbarActionBtn.addEventListener('click', () => {
        navbarActionBtn.classList.add('spinning');
        this.showToast("Musiqalar yangilanmoqda...");
        this.loadHomeSongs(true);
        setTimeout(() => navbarActionBtn.classList.remove('spinning'), 800);
      });
    }
  },

  // Qidiruv
  bindSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    let debounceTimer = null;

    input.addEventListener('input', () => {
      clearBtn.classList.toggle('hidden', !input.value);
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(async () => {
        const q = input.value.trim();
        if (!q) {
          document.getElementById('searchResultsContainer').innerHTML = `
            <div class="search-initial-hint">
              <p>Sevimli ijrochingiz yoki musiqangizni qidiring. Eshitilganlar bu yerda ham avtomatik chiqarib tashlanadi.</p>
            </div>
          `;
          return;
        }
        this.renderSkeleton('searchResultsContainer');
        const res = await ApiModule.getSongsWithAntiRepeat('all', q);
        this.searchSongs = res.songs;
        this.registerSongs(res.songs);
        this.renderSongs(res.songs, 'searchResultsContainer');
      }, 400);
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.add('hidden');
      this.searchSongs = [];
      document.getElementById('searchResultsContainer').innerHTML = '';
    });
  },

  // 7. Full Player Bottom Sheet va Swipe-Down to Dismiss
  bindFullPlayerSheet() {
    const mini = document.getElementById('miniPlayerOpenArea');
    const sheet = document.getElementById('fullPlayerSheet');
    const handle = document.getElementById('sheetDragHandle');

    mini.addEventListener('click', () => {
      sheet.classList.add('open');
      this.isSheetOpen = true;
    });

    handle.addEventListener('click', () => {
      sheet.classList.remove('open');
      this.isSheetOpen = false;
    });

    // Pastga tortib (Swipe down) yopish mantiqi
    let startY = 0;
    let currentY = 0;

    handle.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
    }, { passive: true });

    handle.addEventListener('touchmove', (e) => {
      currentY = e.touches[0].clientY;
      const diff = currentY - startY;
      if (diff > 0) {
        sheet.style.transform = `translateY(${diff}px)`;
      }
    }, { passive: true });

    handle.addEventListener('touchend', () => {
      sheet.style.transform = '';
      if (currentY - startY > 120) {
        sheet.classList.remove('open');
        this.isSheetOpen = false;
      }
    });

    // Pleyer boshqaruv tugmalari
    document.getElementById('miniPlayPauseBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      PlayerModule.togglePlayPause();
    });
    document.getElementById('miniNextBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      PlayerModule.playNext();
    });

    document.getElementById('fullPlayPauseBtn').addEventListener('click', () => PlayerModule.togglePlayPause());
    document.getElementById('fullNextBtn').addEventListener('click', () => PlayerModule.playNext());
    document.getElementById('fullPrevBtn').addEventListener('click', () => PlayerModule.playPrev());

    // Timeline Slider
    const slider = document.getElementById('fullTimelineSlider');
    slider.addEventListener('input', () => {
      slider.style.setProperty('--progress-percent', `${slider.value}%`);
      const targetSec = (slider.value / 100) * (PlayerModule.ytPlayer?.getDuration() || 0);
      PlayerModule.seekTo(targetSec);
    });

    // Volume Slider
    const volSlider = document.getElementById('fullVolumeSlider');
    if (volSlider) {
      volSlider.style.setProperty('--vol-percent', `${volSlider.value}%`);
      volSlider.addEventListener('input', () => {
        volSlider.style.setProperty('--vol-percent', `${volSlider.value}%`);
        PlayerModule.setVolume(volSlider.value);
      });
    }

    // Aralashtirish & Takrorlash
    document.getElementById('fullShuffleBtn').addEventListener('click', function () {
      PlayerModule.isShuffle = !PlayerModule.isShuffle;
      this.classList.toggle('active', PlayerModule.isShuffle);
      UIModule.showToast(PlayerModule.isShuffle ? "Aralashtirish faol" : "Aralashtirish o'chirildi");
    });

    document.getElementById('fullLoopBtn').addEventListener('click', function () {
      PlayerModule.isLoop = !PlayerModule.isLoop;
      this.classList.toggle('active', PlayerModule.isLoop);
      UIModule.showToast(PlayerModule.isLoop ? "Takrorlash faol" : "Takrorlash o'chirildi");
    });

    // Tezkor amallar: Eshitilgan & Yashirish
    document.getElementById('fullMarkListenedBtn').addEventListener('click', () => {
      if (PlayerModule.currentSong) {
        StorageModule.saveHistory(PlayerModule.currentSong);
        this.showToast(`"${PlayerModule.currentSong.title.substring(0, 20)}..." tarixga qo'shildi`);
      }
    });

    document.getElementById('fullHideSongBtn').addEventListener('click', () => {
      if (PlayerModule.currentSong) {
        StorageModule.hideSong(PlayerModule.currentSong.id);
        this.showToast("Qo'shiq endi tavsiyalarda ko'rsatilmaydi");
        PlayerModule.playNext();
      }
    });

    // Asosiy aralashtirish tugmasi
    document.getElementById('shuffleSongsBtn').addEventListener('click', () => {
      if (this.currentSongs.length > 0) {
        this.currentSongs = StorageModule.fisherYatesShuffle(this.currentSongs);
        this.renderSongs(this.currentSongs, 'songsContainer');
        this.showToast("Ro'yxat Fisher-Yates bo'yicha aralashtirildi");
      }
    });

    // "Hammasini eshitibsiz" dagi tarixni tozalash
    document.getElementById('clearHistoryFromEmptyBtn').addEventListener('click', () => {
      StorageModule.clearHistory();
      this.showToast("Tarix tozalandi");
      this.loadHomeSongs();
    });
  },

  // 8. Swipe-to-Action (Chapga surib Eshitilgan / Yashirish tugmalarini chiqarish)
  bindSwipeActions() {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isSwiping = false;
    let activeCard = null;

    document.addEventListener('touchstart', (e) => {
      const card = e.target.closest('.ios-song-card');
      if (!card) {
        // Kartadan tashqariga bosilganda ochiq kartalarni yopish
        document.querySelectorAll('.ios-song-card').forEach(c => {
          if (c.style.transform && c.style.transform !== 'translateX(0px)') {
            c.style.transform = 'translateX(0px)';
          }
        });
        activeCard = null;
        return;
      }
      activeCard = card;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      currentX = startX;
      currentY = startY;
      isSwiping = false;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      if (!activeCard) return;
      currentX = e.touches[0].clientX;
      currentY = e.touches[0].clientY;
      const diffX = currentX - startX;
      const diffY = currentY - startY;

      // Faqat gorizontal surish bo'lsa va 10px dan oshsa swipe deb hisoblash
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        isSwiping = true;
        if (diffX < 0 && diffX > -150) {
          activeCard.style.transform = `translateX(${diffX}px)`;
        }
      }
    }, { passive: true });

    document.addEventListener('touchend', () => {
      if (!activeCard) return;
      if (isSwiping) {
        const diffX = currentX - startX;
        if (diffX < -60) {
          activeCard.style.transform = 'translateX(-130px)';
        } else {
          activeCard.style.transform = 'translateX(0px)';
        }
      }
      activeCard = null;
      isSwiping = false;
    });
  },

  // Sozlamalar bo'limi va Validatsiyalar
  bindSettings() {
    const sel = document.getElementById('retentionSelect');
    if (sel) {
      sel.value = StorageModule.getRetention();
      sel.addEventListener('change', () => {
        StorageModule.setRetention(sel.value);
        this.showToast(`Qayta chiqish muddati: ${sel.value}`);
        this.loadHomeSongs();
      });
    }

    // API Kalit Parol Ko'rsatish/Yashirish (Eye toggle)
    const keyInput = document.getElementById('customApiKeyInput');
    const eyeBtn = document.getElementById('toggleApiKeyVisibilityBtn');
    if (keyInput && eyeBtn) {
      keyInput.value = StorageModule.getCustomApiKey();
      this.checkApiKeyStatus(keyInput.value, false);

      eyeBtn.addEventListener('click', () => {
        const isPass = keyInput.type === 'password';
        keyInput.type = isPass ? 'text' : 'password';
        eyeBtn.style.color = isPass ? 'var(--ios-accent)' : 'var(--ios-text-secondary)';
      });
    }

    // API Kalitni Tekshirish va Saqlash (Validation & Connection test)
    const saveBtn = document.getElementById('testAndSaveApiKeyBtn');
    if (saveBtn && keyInput) {
      saveBtn.addEventListener('click', async () => {
        const key = keyInput.value.trim();
        await this.validateAndSaveApiKey(key);
      });
    }

    // API Kalitni Tozalash
    const clearKeyBtn = document.getElementById('clearApiKeyBtn');
    if (clearKeyBtn && keyInput) {
      clearKeyBtn.addEventListener('click', () => {
        keyInput.value = '';
        StorageModule.setCustomApiKey('');
        this.updateApiStatusUI('neutral', "Zaxira bazasi faol (Kalit o'chirildi)");
        this.showToast("API kalit o'chirildi. Zaxira bazasi ishga tushirildi");
        this.loadHomeSongs();
      });
    }

    // Tarixni tozalash va Tasdiqlash dialogi
    this.bindConfirmationDialog();
    this.updateStatsUI();
  },

  // API Kalit Statusini Tekshirish (Google Server Ping & Format validation)
  async validateAndSaveApiKey(key) {
    if (!key) {
      StorageModule.setCustomApiKey('');
      this.updateApiStatusUI('neutral', "Zaxira bazasi faol (Kalit kiritilmagan)");
      this.showToast("Zaxira bazasidan foydalanilmoqda");
      this.loadHomeSongs();
      return;
    }

    // 1. Format Validatsiyasi
    if (key.length < 30 || !/^[A-Za-z0-9_\-]+$/.test(key)) {
      this.updateApiStatusUI('invalid', "Format xato: Google API kalit 39 ta belgidan iborat bo'lishi kerak");
      this.showToast("API kalit formati noto'g'ri", 'error');
      return;
    }

    // 2. Google Serveri Bilan Jonli Tekshiruv (Live Validation)
    this.updateApiStatusUI('checking', "Google YouTube serveri tekshirilmoqda...");
    const saveBtnText = document.getElementById('saveBtnText');
    if (saveBtnText) saveBtnText.textContent = "Tekshirilmoqda...";

    try {
      const pingUrl = `https://www.googleapis.com/youtube/v3/videos?part=id&chart=mostPopular&maxResults=1&key=${key}`;
      const res = await fetch(pingUrl);

      if (saveBtnText) saveBtnText.textContent = "Tekshirish va Saqlash";

      if (res.ok) {
        StorageModule.setCustomApiKey(key);
        this.updateApiStatusUI('valid', "✅ Kalit haqiqiy va faol (Google API ulandi)");
        this.showToast("API kalit tasdiqlandi va saqlandi!");
        this.loadHomeSongs();
      } else {
        const errorData = await res.json().catch(() => ({}));
        const reason = errorData?.error?.errors?.[0]?.reason || res.statusText;

        if (res.status === 403 || reason === 'quotaExceeded') {
          this.updateApiStatusUI('invalid', "⚠️ Ushbu kalitning YouTube kvotasi tugagan");
          this.showToast("API kvotasi tugagan!", 'warning');
        } else if (res.status === 400 || reason === 'keyInvalid') {
          this.updateApiStatusUI('invalid', "❌ Kalit xato yoki YouTube Data API v3 yoqilmagan");
          this.showToast("Kalit yaroqsiz yoki ruxsat yo'q", 'error');
        } else {
          this.updateApiStatusUI('invalid', `❌ Xatolik: ${reason}`);
          this.showToast("API xatosi yuz berdi", 'error');
        }
      }
    } catch (err) {
      if (saveBtnText) saveBtnText.textContent = "Tekshirish va Saqlash";
      this.updateApiStatusUI('invalid', "Internet ulanishida muammo yuz berdi");
      this.showToast("Internet yo'q", 'error');
    }
  },

  checkApiKeyStatus(key, livePing = false) {
    if (!key) {
      this.updateApiStatusUI('neutral', "Standart zaxira bazasi faol");
      return;
    }
    if (livePing) {
      this.validateAndSaveApiKey(key);
    } else {
      this.updateApiStatusUI('neutral', "Saqlangan kalit mavjud (Tekshirish uchun 'Saqlash'ni bosing)");
    }
  },

  updateApiStatusUI(status, text) {
    const dot = document.getElementById('apiStatusDot');
    const textEl = document.getElementById('apiKeyStatusText');
    if (!dot || !textEl) return;

    dot.className = 'api-status-dot';
    textEl.className = 'api-status-text';

    if (status === 'valid') {
      dot.classList.add('valid');
      textEl.classList.add('valid');
    } else if (status === 'invalid') {
      dot.classList.add('invalid');
      textEl.classList.add('invalid');
    } else if (status === 'checking') {
      dot.classList.add('checking');
      textEl.classList.add('checking');
    }

    textEl.textContent = text;
  },

  // Xotira & Statistika ma'lumotlarini yangilash
  updateStatsUI() {
    const heardCount = StorageModule.getHistory().length;
    const hiddenCount = StorageModule.getHidden().length;

    const statsHeardEl = document.getElementById('statsHeardCount');
    const statsHiddenEl = document.getElementById('statsHiddenCount');

    let suffix = 'ta musiqa';
    if (typeof I18nModule !== 'undefined') {
      if (I18nModule.currentLang === 'ru') suffix = 'треков';
      else if (I18nModule.currentLang === 'en') suffix = 'tracks';
      else suffix = 'ta musiqa';
    }

    if (statsHeardEl) statsHeardEl.textContent = `${heardCount} ${suffix}`;
    if (statsHiddenEl) statsHiddenEl.textContent = `${hiddenCount} ${suffix}`;
  },

  // iOS Tasdiqlash Modali (Confirmation Dialog)
  bindConfirmationDialog() {
    const confirmOverlay = document.getElementById('confirmDialogOverlay');
    const acceptBtn = document.getElementById('confirmAcceptBtn');
    const cancelBtn = document.getElementById('confirmCancelBtn');

    const showConfirm = () => {
      if (confirmOverlay) confirmOverlay.classList.remove('hidden');
    };

    const hideConfirm = () => {
      if (confirmOverlay) confirmOverlay.classList.add('hidden');
    };

    const settingsClearBtn = document.getElementById('settingsClearHistoryBtn');
    if (settingsClearBtn) settingsClearBtn.addEventListener('click', showConfirm);

    const navClearBtn = document.getElementById('clearAllHistoryBtn');
    if (navClearBtn) navClearBtn.addEventListener('click', showConfirm);

    if (cancelBtn) cancelBtn.addEventListener('click', hideConfirm);
    if (confirmOverlay) {
      confirmOverlay.addEventListener('click', (e) => {
        if (e.target === confirmOverlay) hideConfirm();
      });
    }

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        StorageModule.clearHistory();
        hideConfirm();
        this.updateStatsUI();
        this.renderHistoryPage();
        this.loadHomeSongs();
        this.showToast("Barcha eshitilganlar tarixi tozalandi!");
      });
    }
  },

  // Davlat Tanlash (Country Selector - Janrlar oldidagi va Sozlamalardagi)
  bindCountryPicker() {
    this.updateCountryUI();

    // 1. Janrlar oldidagi davlat tanlash select
    const genreCountrySelect = document.getElementById('genreCountrySelect');
    if (genreCountrySelect) {
      genreCountrySelect.addEventListener('change', (e) => {
        this.selectCountry(e.target.value);
      });
    }

    // 2. Sozlamalar tabidagi select
    const settingsSelect = document.getElementById('settingsCountrySelect');
    if (settingsSelect) {
      settingsSelect.addEventListener('change', (e) => {
        this.selectCountry(e.target.value);
      });
    }

    // 3. Davlat modali overlay va yopish
    const overlay = document.getElementById('countrySheetOverlay');
    const closeBtn = document.getElementById('closeCountrySheetBtn');

    document.querySelectorAll('#countryPickerBtn, .ios-country-btn, .header-country-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        this.renderCountryList();
        if (overlay) overlay.classList.remove('hidden');
      });
    });

    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.add('hidden');
      });
    }
  },

  // 3 ta Til Bo'yicha Almashish (UZ, RU, EN)
  bindLanguageSwitcher() {
    const headerLang = document.getElementById('headerLangSelect');
    if (headerLang) {
      headerLang.addEventListener('change', () => {
        if (typeof I18nModule !== 'undefined') {
          I18nModule.setLanguage(headerLang.value);
        }
      });
    }

    document.querySelectorAll('#headerLangSwitcher .lang-seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (typeof I18nModule !== 'undefined') {
          I18nModule.setLanguage(lang);
        }
      });
    });

    const settingsLang = document.getElementById('settingsLangSelect');
    if (settingsLang) {
      settingsLang.addEventListener('change', () => {
        if (typeof I18nModule !== 'undefined') {
          I18nModule.setLanguage(settingsLang.value);
        }
      });
    }
  },

  updateCountryUI() {
    const countries = CONFIG.COUNTRIES || [];
    const country = countries.find(c => c.code === this.currentRegion) || { flag: '🇺🇿', name: "O'zbekiston", code: 'UZ' };
    const localizedCountryName = (typeof I18nModule !== 'undefined') ? I18nModule.getCountryName(country.code) : country.name;
    document.querySelectorAll('.country-flag-el, #countryFlag').forEach(el => el.textContent = country.flag);
    document.querySelectorAll('.country-name-el, #countryName').forEach(el => el.textContent = localizedCountryName);

    // Janrlar oldidagi Select'ni to'ldirish va sinxronlash
    const genreSelect = document.getElementById('genreCountrySelect');
    if (genreSelect) {
      genreSelect.innerHTML = countries.map(c => {
        const cName = (typeof I18nModule !== 'undefined') ? I18nModule.getCountryName(c.code) : c.name;
        return `<option value="${c.code}" ${c.code === this.currentRegion ? 'selected' : ''}>${c.flag} ${cName}</option>`;
      }).join('');
      genreSelect.value = this.currentRegion;
    }

    // Sozlamalardagi Select'ni to'ldirish va sinxronlash
    const settingsSelect = document.getElementById('settingsCountrySelect');
    if (settingsSelect) {
      settingsSelect.innerHTML = countries.map(c => {
        const cName = (typeof I18nModule !== 'undefined') ? I18nModule.getCountryName(c.code) : c.name;
        return `<option value="${c.code}" ${c.code === this.currentRegion ? 'selected' : ''}>${c.flag} ${cName}</option>`;
      }).join('');
      settingsSelect.value = this.currentRegion;
    }

    // Chip kengligini tanlangan matnga mos ravishda ixchamlashtirish
    this.updateCountryChipWidth();
  },

  updateCountryChipWidth() {
    const genreSelect = document.getElementById('genreCountrySelect');
    if (!genreSelect) return;
    const selectedText = genreSelect.options[genreSelect.selectedIndex]?.text || '';
    if (!selectedText) return;

    let measurer = document.getElementById('selectWidthMeasurer');
    if (!measurer) {
      measurer = document.createElement('span');
      measurer.id = 'selectWidthMeasurer';
      measurer.style.cssText = 'position:fixed;top:-9999px;left:-9999px;visibility:hidden;white-space:nowrap;font-size:13px;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif;pointer-events:none;';
      document.body.appendChild(measurer);
    }
    measurer.textContent = selectedText;
    const textWidth = measurer.getBoundingClientRect().width;
    genreSelect.style.width = `${Math.ceil(textWidth + 20)}px`;
  },

  renderCountryList() {
    const container = document.getElementById('countryListContainer');
    if (!container) return;
    const countries = CONFIG.COUNTRIES || [];
    container.innerHTML = countries.map(c => {
      const cName = (typeof I18nModule !== 'undefined') ? I18nModule.getCountryName(c.code) : c.name;
      return `
        <div class="country-option-item ${c.code === this.currentRegion ? 'active' : ''}" onclick="UIModule.selectCountry('${c.code}')">
          <div class="country-option-left">
            <span class="country-option-flag">${c.flag}</span>
            <span>${cName}</span>
          </div>
          ${c.code === this.currentRegion ? '<svg class="sf-icon-sm country-check-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>' : ''}
        </div>
      `;
    }).join('');
  },

  selectCountry(code) {
    this.currentRegion = code;
    StorageModule.setRegion(code);
    this.updateCountryUI();
    const overlay = document.getElementById('countrySheetOverlay');
    if (overlay) overlay.classList.add('hidden');

    const country = (CONFIG.COUNTRIES || []).find(c => c.code === code);
    const countryName = (typeof I18nModule !== 'undefined') ? I18nModule.getCountryName(code) : (country?.name || code);
    const toastMsg = (typeof I18nModule !== 'undefined')
      ? I18nModule.t('toast_country_changed', { country: `${countryName} ${country?.flag || ''}` })
      : `Trendlar davlati o'zgartirildi: ${countryName} ${country?.flag || ''}`;
    this.showToast(toastMsg);
    this.loadHomeSongs();
  },

  updateDynamicTexts() {
    // 1. Agar hozirda musiqa tanlanmagan bo'lsa, pleerdagi yozuvlarni yangilash
    if (!PlayerModule || !PlayerModule.currentSong) {
      const emptyTitle = (typeof I18nModule !== 'undefined') ? I18nModule.t('no_song_selected') : 'Musiqa tanlanmagan';
      const emptyArtist = (typeof I18nModule !== 'undefined') ? I18nModule.t('artist_placeholder') : 'Ijrochi';

      const miniTitle = document.getElementById('miniPlayerTitle');
      const miniArtist = document.getElementById('miniPlayerArtist');
      const fullTitle = document.getElementById('fullPlayerTitle');
      const fullArtist = document.getElementById('fullPlayerArtist');

      if (miniTitle && (!miniTitle.textContent || miniTitle.textContent.includes('tanlanmagan') || miniTitle.textContent.includes('выбран') || miniTitle.textContent.includes('selected'))) {
        miniTitle.textContent = emptyTitle;
      }
      if (miniArtist && (!miniArtist.textContent || miniArtist.textContent.includes('Ijrochi') || miniArtist.textContent.includes('Исполнитель') || miniArtist.textContent.includes('Artist'))) {
        miniArtist.textContent = emptyArtist;
      }
      if (fullTitle && (!fullTitle.textContent || fullTitle.textContent.includes('tanlanmagan') || fullTitle.textContent.includes('выбран') || fullTitle.textContent.includes('selected'))) {
        fullTitle.textContent = emptyTitle;
      }
      if (fullArtist && (!fullArtist.textContent || fullArtist.textContent.includes('Ijrochi') || fullArtist.textContent.includes('Исполнитель') || fullArtist.textContent.includes('Artist'))) {
        fullArtist.textContent = emptyArtist;
      }
    }

    // 2. Status track count
    const statusEl = document.getElementById('statusTrackCount');
    if (statusEl && this.currentSongs && this.currentSongs.length > 0) {
      statusEl.textContent = (typeof I18nModule !== 'undefined')
        ? I18nModule.t('songs_count', { count: this.currentSongs.length })
        : `${this.currentSongs.length} ta takrorlanmas musiqa`;
    }

    // 3. Statistika hisoblagichlari
    this.updateStatsUI();

    // 4. Tarix sahifasi ochiq bo'lsa vaqtlarini qayta formatlash
    const historyContainer = document.getElementById('historyContainer');
    if (historyContainer && !historyContainer.closest('.tab-content')?.classList.contains('hidden')) {
      this.renderHistoryPage();
    }
  },

  // Bosh sahifa musiqalarini yuklash
  async loadHomeSongs(reset = true) {
    const songsContainer = document.getElementById('songsContainer');
    const allHeardState = document.getElementById('allHeardState');
    const statusTrackCount = document.getElementById('statusTrackCount');
    const endHint = document.getElementById('infiniteScrollEndHint');
    const loader = document.getElementById('infiniteScrollLoader');

    if (reset) {
      this.homeState.songs = [];
      this.homeState.nextPageToken = '';
      this.homeState.hasMore = true;
      this.homeState.isLoading = true;
      this.homeState.isLoadingMore = false;

      const pageSize = this.getPageSize();
      this.renderSkeleton('songsContainer', pageSize);
      if (allHeardState) allHeardState.classList.add('hidden');
      if (endHint) endHint.classList.add('hidden');
      if (loader) loader.classList.add('hidden');

      const filteringText = (typeof I18nModule !== 'undefined') ? I18nModule.t('songs_filtering') : 'Qo\'shiqlar filtrlanmoqda...';
      if (statusTrackCount) statusTrackCount.textContent = filteringText;

      const res = await ApiModule.fetchSongsPage({
        genre: this.currentGenre,
        query: this.homeState.searchQuery || '',
        regionCode: this.currentRegion,
        pageToken: '',
        targetCount: pageSize
      });

      this.homeState.isLoading = false;
      this.homeState.songs = res.songs || [];
      this.homeState.nextPageToken = res.nextPageToken || '';
      this.homeState.hasMore = res.hasMore;
      this.currentSongs = this.homeState.songs;
      this.registerSongs(this.homeState.songs);

      if (res.allHeard && this.homeState.songs.length === 0) {
        if (songsContainer) songsContainer.innerHTML = '';
        if (allHeardState) allHeardState.classList.remove('hidden');
        const allHeardText = (typeof I18nModule !== 'undefined') ? I18nModule.t('all_heard_title') : 'Barcha qo\'shiqlar eshitilgan';
        if (statusTrackCount) statusTrackCount.textContent = allHeardText;
        return;
      }

      this.renderSongs(this.homeState.songs, 'songsContainer');

      const queryLabel = this.homeState.searchQuery ? ` ("${this.homeState.searchQuery}")` : '';
      const countText = (typeof I18nModule !== 'undefined')
        ? `${I18nModule.t('songs_count', { count: this.homeState.songs.length })}${queryLabel}`
        : `${this.homeState.songs.length} ta takrorlanmas musiqa${queryLabel}`;
      if (statusTrackCount) statusTrackCount.textContent = countText;
    }
  },

  // Cheksiz scroll orqali oxiriga yetganda ko'proq qo'shiq yuklash
  async loadMoreHomeSongs() {
    if (this.homeState.isLoading || this.homeState.isLoadingMore || !this.homeState.hasMore) {
      return;
    }

    const tabHome = document.getElementById('tabHome');
    if (!tabHome || tabHome.classList.contains('hidden')) return;

    this.homeState.isLoadingMore = true;
    const loader = document.getElementById('infiniteScrollLoader');
    const endHint = document.getElementById('infiniteScrollEndHint');
    if (loader) loader.classList.remove('hidden');

    const pageSize = this.getPageSize();
    const res = await ApiModule.fetchSongsPage({
      genre: this.currentGenre,
      query: this.homeState.searchQuery || '',
      regionCode: this.currentRegion,
      pageToken: this.homeState.nextPageToken,
      targetCount: pageSize
    });

    if (loader) loader.classList.add('hidden');
    this.homeState.isLoadingMore = false;

    const existingIds = new Set(this.homeState.songs.map(s => s.id));
    const newUniqueSongs = (res.songs || []).filter(s => !existingIds.has(s.id));

    if (newUniqueSongs.length > 0) {
      this.homeState.songs.push(...newUniqueSongs);
      this.currentSongs = this.homeState.songs;
      this.registerSongs(newUniqueSongs);
      this.appendSongsToContainer(newUniqueSongs, 'songsContainer');

      const statusTrackCount = document.getElementById('statusTrackCount');
      const queryLabel = this.homeState.searchQuery ? ` ("${this.homeState.searchQuery}")` : '';
      if (statusTrackCount) {
        statusTrackCount.textContent = (typeof I18nModule !== 'undefined')
          ? `${I18nModule.t('songs_count', { count: this.homeState.songs.length })}${queryLabel}`
          : `${this.homeState.songs.length} ta musiqa${queryLabel}`;
      }
    }

    this.homeState.nextPageToken = res.nextPageToken || '';
    this.homeState.hasMore = res.hasMore && (newUniqueSongs.length > 0 || !!res.nextPageToken);

    if (!this.homeState.hasMore && endHint) {
      endHint.classList.remove('hidden');
    }
  },

  appendSongsToContainer(songs, containerId) {
    const el = document.getElementById(containerId);
    if (!el || !songs || songs.length === 0) return;

    const heardLabel = (typeof I18nModule !== 'undefined') ? I18nModule.t('action_heard') : 'Eshitildi';
    const hideLabel = (typeof I18nModule !== 'undefined') ? I18nModule.t('action_hide') : "Ko'rsatma";

    const fragment = document.createDocumentFragment();
    songs.forEach(song => {
      const wrapper = document.createElement('div');
      wrapper.className = 'ios-song-row-wrapper song-fade-in';
      wrapper.setAttribute('data-id', song.id);
      wrapper.innerHTML = `
        <div class="swipe-actions-backdrop">
          <button class="swipe-btn swipe-btn-heard" onclick="UIModule.handleSwipeMarkHeard('${song.id}')">
            <svg class="sf-icon-xs" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            <span>${heardLabel}</span>
          </button>
          <button class="swipe-btn swipe-btn-hide" onclick="UIModule.handleSwipeHide('${song.id}')">
            <svg class="sf-icon-xs" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27z"/></svg>
            <span>${hideLabel}</span>
          </button>
        </div>
        <div class="ios-song-card" onclick="UIModule.handleSongClick('${song.id}', '${containerId}')">
          <div class="song-thumb-box">
            <img src="${song.thumbnail}" alt="${song.title}" class="song-thumb-img" loading="lazy">
            <span class="song-duration-tag">${song.duration}</span>
          </div>
          <div class="song-details">
            <div class="song-title-text">${song.title}</div>
            <div class="song-artist-text">${song.channelTitle}</div>
          </div>
          <button class="song-more-btn" onclick="event.stopPropagation(); UIModule.openSongActionSheet('${song.id}')">
            <svg class="sf-icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </button>
        </div>
      `;
      fragment.appendChild(wrapper);
    });

    el.appendChild(fragment);
  },

  renderSkeleton(containerId, count) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const num = count || this.getPageSize();
    el.innerHTML = Array(num).fill(0).map(() => `
      <div class="skeleton-row">
        <div class="skeleton-box"></div>
        <div class="skeleton-lines">
          <div class="skeleton-line" style="width: 75%;"></div>
          <div class="skeleton-line" style="width: 45%;"></div>
        </div>
      </div>
    `).join('');
  },

  renderSongs(songs, containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;

    this.registerSongs(songs);
    if (containerId === 'searchResultsContainer') {
      this.searchSongs = songs;
    } else if (containerId === 'songsContainer') {
      this.currentSongs = songs;
    }

    const noSongsText = (typeof I18nModule !== 'undefined') ? I18nModule.t('no_songs_found') : 'Musiqalar topilmadi';
    const heardLabel = (typeof I18nModule !== 'undefined') ? I18nModule.t('action_heard') : 'Eshitildi';
    const hideLabel = (typeof I18nModule !== 'undefined') ? I18nModule.t('action_hide') : 'Ko\'rsatma';

    if (songs.length === 0) {
      el.innerHTML = `
        <div class="empty-placeholder-card">
          <p>${noSongsText}</p>
        </div>
      `;
      return;
    }

    el.innerHTML = songs.map(song => `
      <div class="ios-song-row-wrapper" data-id="${song.id}">
        <!-- Swipe Action tugmalari -->
        <div class="swipe-actions-backdrop">
          <button class="swipe-btn swipe-btn-heard" onclick="UIModule.handleSwipeMarkHeard('${song.id}')">
            <svg class="sf-icon-xs" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            <span>${heardLabel}</span>
          </button>
          <button class="swipe-btn swipe-btn-hide" onclick="UIModule.handleSwipeHide('${song.id}')">
            <svg class="sf-icon-xs" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27z"/></svg>
            <span>${hideLabel}</span>
          </button>
        </div>

        <!-- Asosiy Qo'shiq Kartochkasi -->
        <div class="ios-song-card" onclick="UIModule.handleSongClick('${song.id}', '${containerId}')">
          <div class="song-thumb-box">
            <img src="${song.thumbnail}" alt="${song.title}" class="song-thumb-img" loading="lazy">
            <span class="song-duration-tag">${song.duration}</span>
          </div>
          <div class="song-details">
            <div class="song-title-text">${song.title}</div>
            <div class="song-artist-text">${song.channelTitle}</div>
          </div>
          <button class="song-more-btn" onclick="event.stopPropagation(); UIModule.openSongActionSheet('${song.id}')">
            <svg class="sf-icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </button>
        </div>
      </div>
    `).join('');
  },

  handleSongClick(songId, containerId = 'songsContainer') {
    const song = this.getSongById(songId);
    if (!song) {
      console.warn('Musiqa topilmadi:', songId);
      const fallback = FALLBACK_SONGS.find(s => (s.id || s.videoId) === songId);
      if (fallback) {
        PlayerModule.play(fallback, FALLBACK_SONGS);
      }
      return;
    }

    let playlist = this.currentSongs;
    if (containerId === 'searchResultsContainer' && this.searchSongs && this.searchSongs.length > 0) {
      playlist = this.searchSongs;
    } else if (containerId === 'historyContainer') {
      playlist = StorageModule.getHistory().map(i => ({ ...i, id: i.videoId || i.id, videoId: i.videoId || i.id }));
    }
    PlayerModule.play(song, playlist);
  },

  handleSwipeMarkHeard(songId) {
    const song = this.getSongById(songId) || this.currentSongs.find(s => s.id === songId);
    if (song) {
      StorageModule.saveHistory(song);
      this.currentSongs = this.currentSongs.filter(s => s.id !== songId);
      this.renderSongs(this.currentSongs, 'songsContainer');
      this.showToast("Eshitilganlar safiga qo'shildi");
    }
  },

  handleSwipeHide(songId) {
    StorageModule.hideSong(songId);
    this.currentSongs = this.currentSongs.filter(s => s.id !== songId);
    this.renderSongs(this.currentSongs, 'songsContainer');
    this.showToast("Qo'shiq yashirildi");
  },

  openSongActionSheet(songId) {
    this.handleSwipeMarkHeard(songId);
  },

  renderHistoryPage() {
    const container = document.getElementById('historyContainer');
    const empty = document.getElementById('historyEmptyState');
    const history = StorageModule.getHistory();

    if (history.length === 0) {
      container.innerHTML = '';
      empty.classList.remove('hidden');
      return;
    }

    this.registerSongs(history.map(item => ({ ...item, id: item.videoId || item.id })));
    empty.classList.add('hidden');
    container.innerHTML = history.map(item => {
      const songId = item.videoId || item.id;
      return `
        <div class="ios-song-card" style="margin-bottom: 8px;" onclick="UIModule.handleSongClick('${songId}', 'historyContainer')">
          <div class="song-thumb-box">
            <img src="${item.thumbnail}" alt="${item.title}" class="song-thumb-img">
          </div>
          <div class="song-details">
            <div class="song-title-text">${item.title}</div>
            <div class="song-artist-text">${item.channelTitle} • ${this.formatAgo(item.listenedAt)}</div>
          </div>
          <button class="song-more-btn" onclick="event.stopPropagation(); StorageModule.removeFromHistory('${songId}'); UIModule.renderHistoryPage();">
            <svg class="sf-icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </button>
        </div>
      `;
    }).join('');
  },

  formatAgo(timestamp) {
    const diff = Math.floor((Date.now() - timestamp) / 1000);
    if (diff < 60) return (typeof I18nModule !== 'undefined') ? I18nModule.t('just_now') : 'Hozirgina';
    const mins = Math.floor(diff / 60);
    if (mins < 60) return (typeof I18nModule !== 'undefined') ? I18nModule.t('mins_ago', { mins }) : `${mins} daq oldin`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return (typeof I18nModule !== 'undefined') ? I18nModule.t('hours_ago', { hours: hrs }) : `${hrs} soat oldin`;
    const days = Math.floor(hrs / 24);
    return (typeof I18nModule !== 'undefined') ? I18nModule.t('days_ago', { days }) : `${days} kun oldin`;
  },

  updatePlayerUI(song) {
    const cleanTitle = ApiModule.cleanSongTitle(song.title);
    document.getElementById('miniPlayerTitle').textContent = cleanTitle;
    document.getElementById('miniPlayerArtist').textContent = song.channelTitle;
    document.getElementById('miniPlayerThumb').src = song.thumbnail;

    document.getElementById('fullPlayerTitle').textContent = cleanTitle;
    document.getElementById('fullPlayerArtist').textContent = song.channelTitle;
    document.getElementById('fullPlayerThumb').src = song.thumbnail;

    const ambientGlow = document.getElementById('sheetAmbientGlow');
    if (ambientGlow && song.thumbnail) {
      ambientGlow.style.backgroundImage = `url('${song.thumbnail}')`;
      ambientGlow.style.backgroundSize = 'cover';
      ambientGlow.style.backgroundPosition = 'center';
      ambientGlow.style.opacity = '0.35';
    }
  },

  updatePlayPauseIcons(isPlaying) {
    const playSvg = '<path fill="currentColor" d="M8 5v14l11-7z"/>';
    const pauseSvg = '<path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';

    document.getElementById('miniPlayIcon').innerHTML = isPlaying ? pauseSvg : playSvg;
    document.getElementById('fullPlayIcon').innerHTML = isPlaying ? pauseSvg : playSvg;
  },

  updateTimeline(curr, dur) {
    const format = (secs) => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s.toString().padStart(2, '0')}`;
    };

    document.getElementById('fullCurrentTime').textContent = format(curr);
    document.getElementById('fullDuration').textContent = format(dur);

    const percent = dur > 0 ? (curr / dur) * 100 : 0;
    const slider = document.getElementById('fullTimelineSlider');
    if (slider) {
      slider.value = percent;
      slider.style.setProperty('--progress-percent', `${percent}%`);
    }
  },

  updateHistoryBadge() {
    const count = StorageModule.getHistory().length;
    document.getElementById('tabHistoryBadge').textContent = count;
  },

  showToast(text) {
    const pill = document.getElementById('iosToast');
    document.getElementById('iosToastText').textContent = text;
    pill.classList.remove('hidden');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => pill.classList.add('hidden'), 2600);
  },

  // 5. PWA va "Bosh ekranga qo'shish" (Add to Home Screen)
  initPWAInstallPrompt() {
    let deferredPrompt = null;
    const banner = document.getElementById('a2hsBanner');
    const installBtn = document.getElementById('a2hsInstallBtn');
    const closeBtn = document.getElementById('a2hsCloseBtn');
    const settingsInstallRow = document.getElementById('settingsInstallRow');

    const triggerInstall = async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted' && banner) {
          banner.classList.add('hidden');
        }
        deferredPrompt = null;
      } else {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const lang = (typeof I18nModule !== 'undefined' && I18nModule.currentLang) ? I18nModule.currentLang : 'uz';
        if (isIOS) {
          const msg = (lang === 'ru')
            ? 'В Safari нажмите 📤 «Поделиться» и выберите «На экран Домой»'
            : (lang === 'en')
              ? "In Safari, tap 📤 Share and choose 'Add to Home Screen'"
              : "Safari pastidagi 📤 'Ulashish' tugmasini bosing va 'Bosh ekranga qo'shish'ni tanlang";
          this.showToast(msg);
        } else {
          const msg = (lang === 'ru')
            ? 'В меню браузера (⋮) выберите «Установить приложение»'
            : (lang === 'en')
              ? "In browser menu (⋮) select 'Install app' or 'Add to Home Screen'"
              : "Brauzer menyusidan (⋮) 'Ilovani o'rnatish' bandini tanlang";
          this.showToast(msg);
        }
      }
    };

    // Android/Chrome va PWA qo'llab-quvvatlaydigan brauzerlar
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (banner) banner.classList.remove('hidden');
      if (installBtn) installBtn.classList.remove('hidden');
      const descEl = document.getElementById('a2hsInstructions');
      if (descEl && typeof I18nModule !== 'undefined' && I18nModule.t) {
        descEl.textContent = I18nModule.t('pwa_install_desc');
      }
    });

    if (installBtn) {
      installBtn.addEventListener('click', triggerInstall);
    }

    const headerInstallBtn = document.getElementById('headerInstallBtn');
    if (headerInstallBtn) {
      headerInstallBtn.addEventListener('click', triggerInstall);
    }

    if (settingsInstallRow) {
      settingsInstallRow.addEventListener('click', triggerInstall);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (banner) banner.classList.add('hidden');
        sessionStorage.setItem('a2hs_dismissed', '1');
      });
    }

    // Standalone (o'rnatilgan) rejimda emasligini tekshirish
    const isStandalone = window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;

    if (isStandalone && headerInstallBtn) {
      headerInstallBtn.classList.add('hidden');
    }

    if (!isStandalone && !sessionStorage.getItem('a2hs_dismissed')) {
      setTimeout(() => {
        if (banner) banner.classList.remove('hidden');
      }, 2000);
    }

    // Oflayn holat tekshiruvi
    const offlineBanner = document.getElementById('offlineBanner');
    const updateOnlineStatus = () => {
      if (!navigator.onLine) {
        offlineBanner.classList.remove('hidden');
      } else {
        offlineBanner.classList.add('hidden');
      }
    };
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
  }
};

// ==========================================================================
// 6. Service Worker Ro'yxatdan O'tkazish
// ==========================================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('PWA Service Worker faol:', reg.scope))
      .catch(err => console.warn('Service Worker xatoligi:', err));
  });
}

// Global YouTube IFrame API Callback
window.onYouTubeIframeAPIReady = function () {
  if (typeof PlayerModule !== 'undefined' && PlayerModule.initYTPlayer) {
    PlayerModule.initYTPlayer();
  }
};

// Ilovani ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
  PlayerModule.init();
  UIModule.init();
});
