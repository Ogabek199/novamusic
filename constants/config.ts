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
  CUSTOM_KEY: 'ios_yt_music_custom_api_key',
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
    id: "592ua7dCjYc",
    title: "Jaloliddin Ahmadaliyev - Janon",
    channelTitle: "Jaloliddin Ahmadaliyev",
    thumbnail: "https://i.ytimg.com/vi/592ua7dCjYc/hqdefault.jpg",
    duration: "3:40",
    durationSeconds: 220
  },
  {
    id: "9_A5sK1Kdzw",
    title: "Xamdam Sobirov - Yaxshi ko'rsam nima qipti",
    channelTitle: "Xamdam Sobirov",
    thumbnail: "https://i.ytimg.com/vi/9_A5sK1Kdzw/hqdefault.jpg",
    duration: "3:35",
    durationSeconds: 215
  },
  {
    id: "RHSwgMHLI2w",
    title: "Ziyoda - Dalalar",
    channelTitle: "Ziyoda",
    thumbnail: "https://i.ytimg.com/vi/RHSwgMHLI2w/hqdefault.jpg",
    duration: "5:07",
    durationSeconds: 307
  },
  {
    id: "Olu07fLkfpo",
    title: "Xurshid Rasulov - Bo'laveradi",
    channelTitle: "Xurshid Rasulov",
    thumbnail: "https://i.ytimg.com/vi/Olu07fLkfpo/hqdefault.jpg",
    duration: "4:38",
    durationSeconds: 278
  },
  {
    id: "CRM13i0dEQo",
    title: "G'aybulla Tursunov - Quralay",
    channelTitle: "G'aybulla Tursunov",
    thumbnail: "https://i.ytimg.com/vi/CRM13i0dEQo/hqdefault.jpg",
    duration: "3:02",
    durationSeconds: 182
  },
  {
    id: "5Q5Tua57_0o",
    title: "Jaloliddin Ahmadaliyev - Chaqirsam",
    channelTitle: "Jaloliddin Ahmadaliyev",
    thumbnail: "https://i.ytimg.com/vi/5Q5Tua57_0o/hqdefault.jpg",
    duration: "3:52",
    durationSeconds: 232
  },
  {
    id: "Hf4Ng5aror4",
    title: "Jaloliddin Ahmadaliyev - Erkam (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/Hf4Ng5aror4/hqdefault.jpg",
    duration: "5:02",
    durationSeconds: 302
  },
  {
    id: "70AWIFL7LMQ",
    title: "Jaloliddin Ahmadaliyev - Yolg’on dunyo (Videoklip)",
    channelTitle: "NevoMusic and Jaloliddin Ahmadaliyev",
    thumbnail: "https://i.ytimg.com/vi/70AWIFL7LMQ/hqdefault.jpg",
    duration: "3:44",
    durationSeconds: 224
  },
  {
    id: "2eElkGOFVWA",
    title: "Jaloliddin Ahmadaliyev - Yuragimey (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/2eElkGOFVWA/hqdefault.jpg",
    duration: "4:26",
    durationSeconds: 266
  },
  {
    id: "hGvnuSk8hFo",
    title: "Jaloliddin Ahmadaliyev - Tong otguncha (Videoklip)",
    channelTitle: "NevoMusic and Jaloliddin Ahmadaliyev",
    thumbnail: "https://i.ytimg.com/vi/hGvnuSk8hFo/hqdefault.jpg",
    duration: "4:44",
    durationSeconds: 284
  },
  {
    id: "RFRHiqFcczs",
    title: "Jaloliddin Ahmadaliyev - Qo'qonlik (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/RFRHiqFcczs/hqdefault.jpg",
    duration: "5:16",
    durationSeconds: 316
  },
  {
    id: "LFZRKkt3aVU",
    title: "Jaloliddin Ahmadaliyev - Yaxshi qiz (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/LFZRKkt3aVU/hqdefault.jpg",
    duration: "3:37",
    durationSeconds: 217
  },
  {
    id: "hhrG-RS2XFQ",
    title: "Jaloliddin Ahmadaliyev - Meni yo'qlab kelgan emushsan",
    channelTitle: "Jaloliddin Ahmadaliyev",
    thumbnail: "https://i.ytimg.com/vi/hhrG-RS2XFQ/hqdefault.jpg",
    duration: "4:25",
    durationSeconds: 265
  },
  {
    id: "3mXHhxNCFHU",
    title: "Jaloliddin Ahmadaliyev - Nigoro (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/3mXHhxNCFHU/hqdefault.jpg",
    duration: "4:40",
    durationSeconds: 280
  },
  {
    id: "d00iO2tEaxQ",
    title: "Jaloliddin Ahmadaliyev - Yugurgannikimas buyurganniki",
    channelTitle: "Jaloliddin Ahmadaliyev",
    thumbnail: "https://i.ytimg.com/vi/d00iO2tEaxQ/hqdefault.jpg",
    duration: "4:21",
    durationSeconds: 261
  },
  {
    id: "fIR4YF0_B6M",
    title: "Jaloliddin Ahmadaliyev - 19 yil (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/fIR4YF0_B6M/hqdefault.jpg",
    duration: "5:15",
    durationSeconds: 315
  },
  {
    id: "x5RbMNOlVT4",
    title: "Jaloliddin Ahmadaliyev - Chiroylisan (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/x5RbMNOlVT4/hqdefault.jpg",
    duration: "4:57",
    durationSeconds: 297
  },
  {
    id: "IqZnhpKdR5I",
    title: "Jaloliddin Ahmadaliyev - Ketavering yalinmayman",
    channelTitle: "Jaloliddin Ahmadaliyev",
    thumbnail: "https://i.ytimg.com/vi/IqZnhpKdR5I/hqdefault.jpg",
    duration: "4:23",
    durationSeconds: 263
  },
  {
    id: "m2eu_Ln9wbQ",
    title: "Jaloliddin Ahmadaliyev - Bevafo dil (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/m2eu_Ln9wbQ/hqdefault.jpg",
    duration: "4:42",
    durationSeconds: 282
  },
  {
    id: "fZK6y0W34A0",
    title: "Jaloliddin Ahmadaliyev & Saida Saidbekova - Bu dunyoda siz kam, men ortiqcha",
    channelTitle: "Jaloliddin Ahmadaliyev",
    thumbnail: "https://i.ytimg.com/vi/fZK6y0W34A0/hqdefault.jpg",
    duration: "4:14",
    durationSeconds: 254
  },
  {
    id: "hIHWPLlO9IM",
    title: "Jaloliddin Ahmadaliyev - Yor bizdan ketdi",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/hIHWPLlO9IM/hqdefault.jpg",
    duration: "5:56",
    durationSeconds: 356
  },
  {
    id: "wTYSP1iDsWU",
    title: "Jaloliddin Ahmadaliyev - Janonim (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/wTYSP1iDsWU/hqdefault.jpg",
    duration: "4:36",
    durationSeconds: 276
  },
  {
    id: "9TckOLmtHyU",
    title: "Jaloliddin Ahmadaliyev - Bo'ydoqlik (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/9TckOLmtHyU/hqdefault.jpg",
    duration: "4:08",
    durationSeconds: 248
  },
  {
    id: "vSA7yMrTETg",
    title: "Xamdam Sobirov - Peshta / Хамдам Собиров - Пешта / Video Klip",
    channelTitle: "Xamdam Sobirov and Muzalar",
    thumbnail: "https://i.ytimg.com/vi/vSA7yMrTETg/hqdefault.jpg",
    duration: "3:01",
    durationSeconds: 181
  },
  {
    id: "NUv2uTtjBBk",
    title: "Shokhrullo Abdullaev feat. Xamdam Sobirov - Gal",
    channelTitle: "Shokhrullo Abdullaev and Xamdam Sobirov",
    thumbnail: "https://i.ytimg.com/vi/NUv2uTtjBBk/hqdefault.jpg",
    duration: "5:00",
    durationSeconds: 300
  },
  {
    id: "NJS1BdvTkXM",
    title: "Yulduz Usmonova, Xamdam Sobirov - Peshta (Aren't You Sleeping?)",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/NJS1BdvTkXM/hqdefault.jpg",
    duration: "3:52",
    durationSeconds: 232
  },
  {
    id: "-QBnFEVL9Jo",
    title: "Xamdam Sobirov - Kapalagim (Animation clip)",
    channelTitle: "Xamdam Sobirov",
    thumbnail: "https://i.ytimg.com/vi/-QBnFEVL9Jo/hqdefault.jpg",
    duration: "3:31",
    durationSeconds: 211
  },
  {
    id: "zIHfdHFH-VA",
    title: "Xamdam Sobirov - Sog’insang (Video Clip) 2025",
    channelTitle: "Xamdam Sobirov and Muzalar",
    thumbnail: "https://i.ytimg.com/vi/zIHfdHFH-VA/hqdefault.jpg",
    duration: "5:21",
    durationSeconds: 321
  },
  {
    id: "IvVj4FrzdVo",
    title: "Xamdam Sobirov ft Jamshid Ximmatov - Yomg'irlar (Video Clip)",
    channelTitle: "Xamdam Sobirov and 2 more",
    thumbnail: "https://i.ytimg.com/vi/IvVj4FrzdVo/hqdefault.jpg",
    duration: "4:43",
    durationSeconds: 283
  },
  {
    id: "sSepE8s3M2c",
    title: "Yulduz Usmonova & Xamdam Sobirov - Daryo Daryo",
    channelTitle: "Xamdam Sobirov and Muzalar",
    thumbnail: "https://i.ytimg.com/vi/sSepE8s3M2c/hqdefault.jpg",
    duration: "4:48",
    durationSeconds: 288
  },
  {
    id: "5STw387vWis",
    title: "Xamdam Sobirov - Lola",
    channelTitle: "Xamdam Sobirov",
    thumbnail: "https://i.ytimg.com/vi/5STw387vWis/hqdefault.jpg",
    duration: "5:31",
    durationSeconds: 331
  },
  {
    id: "UUlDF308ZHQ",
    title: "Xamdam Sobirov - Xolimga Qara (Muxlislar tomonidan ishlangan klip)",
    channelTitle: "Xamdam Sobirov",
    thumbnail: "https://i.ytimg.com/vi/UUlDF308ZHQ/hqdefault.jpg",
    duration: "4:50",
    durationSeconds: 290
  },
  {
    id: "ShUYWwOkTdI",
    title: "Xamdam Sobirov - Chupa Chupsim Janim (Music Video)",
    channelTitle: "NeoMusic™ and MuzaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/ShUYWwOkTdI/hqdefault.jpg",
    duration: "3:19",
    durationSeconds: 199
  },
  {
    id: "Z_aA3qr-Me0",
    title: "Xamdam Sobirov - Yengildim (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/Z_aA3qr-Me0/hqdefault.jpg",
    duration: "3:53",
    durationSeconds: 233
  },
  {
    id: "3uSk4AOzAKo",
    title: "Xamdam Sobirov - Altingul 2025",
    channelTitle: "Xamdam Sobirov and Muzalar",
    thumbnail: "https://i.ytimg.com/vi/3uSk4AOzAKo/hqdefault.jpg",
    duration: "5:36",
    durationSeconds: 336
  },
  {
    id: "Qk9Irn7-pTY",
    title: "Xamdam Sobirov - Raqse 2026",
    channelTitle: "Xamdam Sobirov",
    thumbnail: "https://i.ytimg.com/vi/Qk9Irn7-pTY/hqdefault.jpg",
    duration: "4:27",
    durationSeconds: 267
  },
  {
    id: "qgLkj3pynh4",
    title: "Xamdam Sobirov - Daydib (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/qgLkj3pynh4/hqdefault.jpg",
    duration: "5:05",
    durationSeconds: 305
  },
  {
    id: "QKTYAGHbU_c",
    title: "Xamdam Sobirov - Janze (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/QKTYAGHbU_c/hqdefault.jpg",
    duration: "5:00",
    durationSeconds: 300
  },
  {
    id: "WHTAeJWy_hE",
    title: "Xamdam Sobirov & Gulinur - Yuragimni yaraladi (Videoklip)",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/WHTAeJWy_hE/hqdefault.jpg",
    duration: "3:20",
    durationSeconds: 200
  },
  {
    id: "RRaZwB56djI",
    title: "Xamdam Sobirov - Maktabimda",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/RRaZwB56djI/hqdefault.jpg",
    duration: "4:59",
    durationSeconds: 299
  },
  {
    id: "7gdxYH4LAuM",
    title: "Konsta - Sengacha",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/7gdxYH4LAuM/hqdefault.jpg",
    duration: "2:18",
    durationSeconds: 138
  },
  {
    id: "PZUr2YyYmFY",
    title: "Konsta - Insonlar",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/PZUr2YyYmFY/hqdefault.jpg",
    duration: "2:32",
    durationSeconds: 152
  },
  {
    id: "Nb2Z4UqBZg8",
    title: "Konsta - Hech kim yo'q",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/Nb2Z4UqBZg8/hqdefault.jpg",
    duration: "2:48",
    durationSeconds: 168
  },
  {
    id: "rKzMOeWk1P8",
    title: "Konsta - Seni Sevaman",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/rKzMOeWk1P8/hqdefault.jpg",
    duration: "2:31",
    durationSeconds: 151
  },
  {
    id: "lC6dIjIWZXw",
    title: "Konsta - Jonga tegdi",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/lC6dIjIWZXw/hqdefault.jpg",
    duration: "2:55",
    durationSeconds: 175
  },
  {
    id: "Mup6uM2gdKk",
    title: "Konsta - Bilmaydi",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/Mup6uM2gdKk/hqdefault.jpg",
    duration: "3:12",
    durationSeconds: 192
  },
  {
    id: "NcdC5D5gcbc",
    title: "Konsta & Lola - Sog'indim",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/NcdC5D5gcbc/hqdefault.jpg",
    duration: "2:27",
    durationSeconds: 147
  },
  {
    id: "rmE8HN0L3Bw",
    title: "Konsta - Qizim",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/rmE8HN0L3Bw/hqdefault.jpg",
    duration: "3:01",
    durationSeconds: 181
  },
  {
    id: "NXBcwHfVvjg",
    title: "KONSTA & ABBBOSE - CHEKISH O'LDIRADI",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/NXBcwHfVvjg/hqdefault.jpg",
    duration: "3:41",
    durationSeconds: 221
  },
  {
    id: "6tX7iw_k6zc",
    title: "Konsta - Havo",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/6tX7iw_k6zc/hqdefault.jpg",
    duration: "2:26",
    durationSeconds: 146
  },
  {
    id: "qhR6mBiRgLs",
    title: "Konsta - Yengilma tur",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/qhR6mBiRgLs/hqdefault.jpg",
    duration: "3:29",
    durationSeconds: 209
  },
  {
    id: "_TqeyyPDXKc",
    title: "Konsta - Odamlar ucha olar",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/_TqeyyPDXKc/hqdefault.jpg",
    duration: "2:42",
    durationSeconds: 162
  },
  {
    id: "bvttaM4r2aA",
    title: "Munisa Rizayeva va Konsta - O'ylamading",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/bvttaM4r2aA/hqdefault.jpg",
    duration: "4:06",
    durationSeconds: 246
  },
  {
    id: "qFOA9K64wq8",
    title: "Lola & Konsta - Chidama | Лола & Конста - Чидама",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/qFOA9K64wq8/hqdefault.jpg",
    duration: "4:12",
    durationSeconds: 252
  },
  {
    id: "oTRNaEhfuJg",
    title: "Konsta & Timur Alixonov - Odamlar nima deydi ?",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/oTRNaEhfuJg/hqdefault.jpg",
    duration: "3:58",
    durationSeconds: 238
  },
  {
    id: "EMDhqk8VHlE",
    title: "KONSTA - O‘zbekistonlik | Official Soundtrack",
    channelTitle: "Uzbekistan's club",
    thumbnail: "https://i.ytimg.com/vi/EMDhqk8VHlE/hqdefault.jpg",
    duration: "2:40",
    durationSeconds: 160
  },
  {
    id: "xrCQbwSA9ng",
    title: "KONSTA - Loneliness Official Music Video 2022",
    channelTitle: "Konsta Uz",
    thumbnail: "https://i.ytimg.com/vi/xrCQbwSA9ng/hqdefault.jpg",
    duration: "3:27",
    durationSeconds: 207
  },
  {
    id: "g_uas0mKRLI",
    title: "Ozodbek Nazarbekov - Sarson | Озодбек Назарбеков - Сарсон",
    channelTitle: "RizaNovaUZ and Ozodbek Nazarbekov",
    thumbnail: "https://i.ytimg.com/vi/g_uas0mKRLI/hqdefault.jpg",
    duration: "4:34",
    durationSeconds: 274
  },
  {
    id: "OQBbVttyeXY",
    title: "Ozodbek Nazarbekov - Nimam yoqmaydi | Озодбек Назарбеков - Нимам ёкмайди",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/OQBbVttyeXY/hqdefault.jpg",
    duration: "3:43",
    durationSeconds: 223
  },
  {
    id: "mfK9Z-OWEUM",
    title: "Ozodbek Nazarbekov - Atirgul | Озодбек Назарбеков - Атиргул",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/mfK9Z-OWEUM/hqdefault.jpg",
    duration: "5:04",
    durationSeconds: 304
  },
  {
    id: "BnLHvioMj8s",
    title: "Ozodbek Nazarbekov - Kelgin gulim | Озодбек Назарбеков - Келгин гулим (VIDEO)",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/BnLHvioMj8s/hqdefault.jpg",
    duration: "3:51",
    durationSeconds: 231
  },
  {
    id: "_zU_YHQRTdY",
    title: "Ozodbek Nazarbekov - Uyg'on o'g'lim | Озодбек Назарбеков - Уйгон углим",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/_zU_YHQRTdY/hqdefault.jpg",
    duration: "5:13",
    durationSeconds: 313
  },
  {
    id: "BkQZBbfWpYc",
    title: "Ozodbek Nazarbekov - Pariro'y | Озодбек Назарбеков - Парируй (VIDEO)",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/BkQZBbfWpYc/hqdefault.jpg",
    duration: "3:41",
    durationSeconds: 221
  },
  {
    id: "1C6qJQXhRJk",
    title: "Ozodbek Nazarbekov - Qaro ko'zim | Озодбек Назарбеков - Каро кузим",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/1C6qJQXhRJk/hqdefault.jpg",
    duration: "2:45",
    durationSeconds: 165
  },
  {
    id: "ENBWWP77JcY",
    title: "Ozodbek Nazarbekov - Lola | Озодбек Назарбеков - Лола (VIDEO)",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/ENBWWP77JcY/hqdefault.jpg",
    duration: "4:35",
    durationSeconds: 275
  },
  {
    id: "DiQlpiZT-go",
    title: "Ozodbek Nazarbekov - Dekabrning o’ttiz birida | Озодбек Назарбеков - Декабрнинг уттиз бирида",
    channelTitle: "RizaNovaUZ and Ozodbek Nazarbekov",
    thumbnail: "https://i.ytimg.com/vi/DiQlpiZT-go/hqdefault.jpg",
    duration: "2:15",
    durationSeconds: 135
  },
  {
    id: "Vpe82cYwFCY",
    title: "Ozodbek Nazarbekov - Kutaman | Озодбек Назарбеков - Кутаман",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/Vpe82cYwFCY/hqdefault.jpg",
    duration: "5:06",
    durationSeconds: 306
  },
  {
    id: "98nKiiu4Ni4",
    title: "Ozodbek Nazarbekov - Dil bo'ldi | Озодбек Назарбеков - Дил булди (VIDEO)",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/98nKiiu4Ni4/hqdefault.jpg",
    duration: "4:16",
    durationSeconds: 256
  },
  {
    id: "IdEr8xTCL4E",
    title: "Ozodbek Nazarbekov - Kimlar | Озодбек Назарбеков - Кимлар (soundtrack)",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/IdEr8xTCL4E/hqdefault.jpg",
    duration: "4:52",
    durationSeconds: 292
  },
  {
    id: "Vp3cIsQ-954",
    title: "Ozodbek Nazarbekov - Sening | Озодбек Назарбеков - Сенинг (VIDEO)",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/Vp3cIsQ-954/hqdefault.jpg",
    duration: "3:51",
    durationSeconds: 231
  },
  {
    id: "e9WM5Tn0_lk",
    title: "Ozodbek Nazarbekov - Mani sevib qolsayding @abduvvahobov",
    channelTitle: "мухаммадзохид",
    thumbnail: "https://i.ytimg.com/vi/e9WM5Tn0_lk/hqdefault.jpg",
    duration: "4:27",
    durationSeconds: 267
  },
  {
    id: "b9ugyJJ61jU",
    title: "Ozodbek Nazarbekov - Ketaman der | Озодбек Назарбеков - Кетаман дер (VIDEO)",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/b9ugyJJ61jU/hqdefault.jpg",
    duration: "4:21",
    durationSeconds: 261
  },
  {
    id: "PP2sy7bc5qo",
    title: "Yulduz Usmonova - Onamga aytmang",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/PP2sy7bc5qo/hqdefault.jpg",
    duration: "4:20",
    durationSeconds: 260
  },
  {
    id: "emy-7aeC52Q",
    title: "Yulduz Usmonova - Ko'ngil | Юлдуз Усмонова - Кўнгил",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/emy-7aeC52Q/hqdefault.jpg",
    duration: "4:19",
    durationSeconds: 259
  },
  {
    id: "riQJbIvB-xk",
    title: "Yulduz Usmonova - Senmiding",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/riQJbIvB-xk/hqdefault.jpg",
    duration: "3:19",
    durationSeconds: 199
  },
  {
    id: "cjvByDLkFb8",
    title: "Yulduz Usmonova - Eh ko'chalar | Юлдуз Усмонова - Эҳ кўчалар",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/cjvByDLkFb8/hqdefault.jpg",
    duration: "5:17",
    durationSeconds: 317
  },
  {
    id: "YJqWR5Lx-YM",
    title: "Yulduz Usmonova & Malik - Pomada",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/YJqWR5Lx-YM/hqdefault.jpg",
    duration: "3:44",
    durationSeconds: 224
  },
  {
    id: "uUbvjNW_dOE",
    title: "Yulduz Usmonova & Xamdam Sobirov - Daryo daryo",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/uUbvjNW_dOE/hqdefault.jpg",
    duration: "3:55",
    durationSeconds: 235
  },
  {
    id: "w48ws_UwLn8",
    title: "Yulduz Usmonova – Tut qo'limdan (Cho'pon va Shaharlik qiz)",
    channelTitle: "𝐦𝐢𝐫𝐚𝐤𝐦𝐚𝐥𝐨𝐯",
    thumbnail: "https://i.ytimg.com/vi/w48ws_UwLn8/hqdefault.jpg",
    duration: "3:43",
    durationSeconds: 223
  },
  {
    id: "QMQ2uj3lgV8",
    title: "Yulduz Usmonova - Devonalarmiz | Юлдуз Усмонова - Девоналармиз",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/QMQ2uj3lgV8/hqdefault.jpg",
    duration: "5:19",
    durationSeconds: 319
  },
  {
    id: "q-84M5nrGQc",
    title: "Yulduz Usmonova - Tut qo'limdan | Юлдуз Усмонова - Тут қўлимдан (2018)",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/q-84M5nrGQc/hqdefault.jpg",
    duration: "4:53",
    durationSeconds: 293
  },
  {
    id: "liZY1StYDXY",
    title: "Yulduz Usmonova - Telbadek sevaman (premyera)",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/liZY1StYDXY/hqdefault.jpg",
    duration: "3:47",
    durationSeconds: 227
  },
  {
    id: "PC0gjHTL1lo",
    title: "Yulduz Usmonova - Shivir shivir 2023",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/PC0gjHTL1lo/hqdefault.jpg",
    duration: "2:55",
    durationSeconds: 175
  },
  {
    id: "gLdPi7vJwb8",
    title: "Yulduz Usmonova -- Qizg'aldog'im | Юлдуз Усмонова -- К,изг'алдог'им",
    channelTitle: "Music Media",
    thumbnail: "https://i.ytimg.com/vi/gLdPi7vJwb8/hqdefault.jpg",
    duration: "3:41",
    durationSeconds: 221
  },
  {
    id: "ZwKeWWnzeE4",
    title: "Yulduz Usmonova - Ensa",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/ZwKeWWnzeE4/hqdefault.jpg",
    duration: "2:49",
    durationSeconds: 169
  },
  {
    id: "KPPMI-A7h-c",
    title: "Yulduz Usmonova - Daydi yorim",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/KPPMI-A7h-c/hqdefault.jpg",
    duration: "4:08",
    durationSeconds: 248
  },
  {
    id: "SIy7NXWVs9c",
    title: "Yulduz Usmonova - Ey yor",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/SIy7NXWVs9c/hqdefault.jpg",
    duration: "5:51",
    durationSeconds: 351
  },
  {
    id: "xU8txfgMFEE",
    title: "Yulduz Usmonova - Sanamey (2019) | Юлдуз Усмонова - Санамей (2019)",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/xU8txfgMFEE/hqdefault.jpg",
    duration: "3:59",
    durationSeconds: 239
  },
  {
    id: "zITtQxPty5A",
    title: "Yulduz Usmonova & Malik - O'zbekcha gapir",
    channelTitle: "Yulduz Usmanova",
    thumbnail: "https://i.ytimg.com/vi/zITtQxPty5A/hqdefault.jpg",
    duration: "3:34",
    durationSeconds: 214
  },
  {
    id: "sZZW0o9iP8M",
    title: "Munisa Rizayeva - Bevafo",
    channelTitle: "Munisa Rizayeva and RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/sZZW0o9iP8M/hqdefault.jpg",
    duration: "3:56",
    durationSeconds: 236
  },
  {
    id: "A4BTmescumY",
    title: "Munisa Rizayeva - Arzimaysan (feat. Toiraxmed)",
    channelTitle: "Munisa Rizayeva and RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/A4BTmescumY/hqdefault.jpg",
    duration: "4:14",
    durationSeconds: 254
  },
  {
    id: "OSndSyFsbCU",
    title: "Munisa Rizayeva - Yonar",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/OSndSyFsbCU/hqdefault.jpg",
    duration: "3:49",
    durationSeconds: 229
  },
  {
    id: "4whXArgQAU8",
    title: "Munisa Rizayeva - Hollywood",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/4whXArgQAU8/hqdefault.jpg",
    duration: "3:57",
    durationSeconds: 237
  },
  {
    id: "ulxmo6lmVxU",
    title: "Munisa Rizayeva - Sekin-asta",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/ulxmo6lmVxU/hqdefault.jpg",
    duration: "3:33",
    durationSeconds: 213
  },
  {
    id: "-NZonuTQlXI",
    title: "Munisa Rizayeva - Gulg'uncha",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/-NZonuTQlXI/hqdefault.jpg",
    duration: "4:47",
    durationSeconds: 287
  },
  {
    id: "7NcnU-TjN-g",
    title: "Munisa Rizayeva - Man bop",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/7NcnU-TjN-g/hqdefault.jpg",
    duration: "3:57",
    durationSeconds: 237
  },
  {
    id: "Va2QWAX-_sw",
    title: "Munisa Rizayeva - Xafa-xafa | Муниса Ризаева - Хафа-хафа",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/Va2QWAX-_sw/hqdefault.jpg",
    duration: "3:41",
    durationSeconds: 221
  },
  {
    id: "Ye-fZ4A-UW0",
    title: "Munisa Rizayeva - Mish-Mish",
    channelTitle: "Munisa Rizayeva and 2 more",
    thumbnail: "https://i.ytimg.com/vi/Ye-fZ4A-UW0/hqdefault.jpg",
    duration: "3:36",
    durationSeconds: 216
  },
  {
    id: "aR07an7Pl1c",
    title: "Munisa Rizayeva - Оka",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/aR07an7Pl1c/hqdefault.jpg",
    duration: "2:51",
    durationSeconds: 171
  },
  {
    id: "artTJLCZ5Ok",
    title: "Munisa Rizayeva - Bir nima de",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/artTJLCZ5Ok/hqdefault.jpg",
    duration: "3:03",
    durationSeconds: 183
  },
  {
    id: "6IxHVDh2SyE",
    title: "Munisa Rizayeva - Aybim sevganim",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/6IxHVDh2SyE/hqdefault.jpg",
    duration: "4:04",
    durationSeconds: 244
  },
  {
    id: "jnvp5ivmDys",
    title: "Munisa Rizayeva - Yonma dil | Муниса Ризаева - Ёнма дил",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/jnvp5ivmDys/hqdefault.jpg",
    duration: "4:33",
    durationSeconds: 273
  },
  {
    id: "cvfDVuO2Irg",
    title: "Munisa Rizayeva - Qop-qora | Муниса Ризаева - Коп-кора",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/cvfDVuO2Irg/hqdefault.jpg",
    duration: "4:16",
    durationSeconds: 256
  },
  {
    id: "trlJ7SdLW4M",
    title: "Munisa Rizayeva - Bo'ldi yurak | Муниса Ризаева - Булди юрак",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/trlJ7SdLW4M/hqdefault.jpg",
    duration: "3:57",
    durationSeconds: 237
  },
  {
    id: "R_lTt6yMgMM",
    title: "Munisa Rizayeva - Sensiz",
    channelTitle: "Munisa Rizayeva",
    thumbnail: "https://i.ytimg.com/vi/R_lTt6yMgMM/hqdefault.jpg",
    duration: "3:56",
    durationSeconds: 236
  },
  {
    id: "j4hTIRyRnnw",
    title: "Shohruhxon va Umidaxon - Xatlar",
    channelTitle: "Shohruhxon and Umidaxon",
    thumbnail: "https://i.ytimg.com/vi/j4hTIRyRnnw/hqdefault.jpg",
    duration: "4:13",
    durationSeconds: 253
  },
  {
    id: "DolIUDGAHcc",
    title: "Shohruhxon - Lola",
    channelTitle: "Shohruhxon",
    thumbnail: "https://i.ytimg.com/vi/DolIUDGAHcc/hqdefault.jpg",
    duration: "3:17",
    durationSeconds: 197
  },
  {
    id: "BKfZP4_1x-I",
    title: "Shohruhxon - Mening qo'shig'im | Шохруххон - Менинг кушигим",
    channelTitle: "Shohruhxon",
    thumbnail: "https://i.ytimg.com/vi/BKfZP4_1x-I/hqdefault.jpg",
    duration: "3:02",
    durationSeconds: 182
  },
  {
    id: "WZDInkXSmtw",
    title: "Shohruhxon - Ayamay | Шохруххон - Аямай",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/WZDInkXSmtw/hqdefault.jpg",
    duration: "4:35",
    durationSeconds: 275
  },
  {
    id: "uJ2raEnG6GQ",
    title: "Shohruhxon - Qo'g'irchoq | Шохруххон - Кугирчок",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/uJ2raEnG6GQ/hqdefault.jpg",
    duration: "3:44",
    durationSeconds: 224
  },
  {
    id: "bs5-_LxXocI",
    title: "Shohruhxon - Oy jamol | Шохруххон - Ой жамол",
    channelTitle: "Shohruhxon",
    thumbnail: "https://i.ytimg.com/vi/bs5-_LxXocI/hqdefault.jpg",
    duration: "5:43",
    durationSeconds: 343
  },
  {
    id: "gBWYa_f3u2U",
    title: "Shohruhxon - Aylandi boshim | Шохруххон - Айланди бошим",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/gBWYa_f3u2U/hqdefault.jpg",
    duration: "3:19",
    durationSeconds: 199
  },
  {
    id: "6vdk8Xzir3Q",
    title: "Shohruhxon - Yurak | Шохруххон - Юрак",
    channelTitle: "Shohruhxon",
    thumbnail: "https://i.ytimg.com/vi/6vdk8Xzir3Q/hqdefault.jpg",
    duration: "5:30",
    durationSeconds: 330
  },
  {
    id: "cM0L1EpOyP8",
    title: "Shohruhxon - Yoningdaman | Шохруххон - Ёнингдаман",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/cM0L1EpOyP8/hqdefault.jpg",
    duration: "4:47",
    durationSeconds: 287
  },
  {
    id: "dnBUJJ7RUIs",
    title: "Shahzoda va Shohruhxon - Allo | Шахзода ва Шохруххон - Алло",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/dnBUJJ7RUIs/hqdefault.jpg",
    duration: "3:21",
    durationSeconds: 201
  },
  {
    id: "LbOJTHIl7Tg",
    title: "Shohruhxon - Menga farqi yo'q | Шохруххон - Менга фарки йук",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/LbOJTHIl7Tg/hqdefault.jpg",
    duration: "3:39",
    durationSeconds: 219
  },
  {
    id: "CuRXQ32vqvU",
    title: "Shohruhxon - Unamaydi | Шохруххон - Унамайди",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/CuRXQ32vqvU/hqdefault.jpg",
    duration: "4:09",
    durationSeconds: 249
  },
  {
    id: "P0M_jIatNxo",
    title: "Shohruhxon - Sumbula | Шоҳруҳхон - Сумбула",
    channelTitle: "Shohruhxon",
    thumbnail: "https://i.ytimg.com/vi/P0M_jIatNxo/hqdefault.jpg",
    duration: "2:53",
    durationSeconds: 173
  },
  {
    id: "ik0xtniymi8",
    title: "Shohruhxon - Telba | Шохруххон - Телба",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/ik0xtniymi8/hqdefault.jpg",
    duration: "3:45",
    durationSeconds: 225
  },
  {
    id: "G-KBT0NPJmQ",
    title: "Shohruhxon - O'yin",
    channelTitle: "Shohruhxon",
    thumbnail: "https://i.ytimg.com/vi/G-KBT0NPJmQ/hqdefault.jpg",
    duration: "4:13",
    durationSeconds: 253
  },
  {
    id: "-USRi1AROrc",
    title: "Shohruhxon - Moda (Avtobus bekatda) | Шоруххон - Мода (Автобус бекатда)",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/-USRi1AROrc/hqdefault.jpg",
    duration: "4:03",
    durationSeconds: 243
  },
  {
    id: "c8hmme9nlxg",
    title: "Shohruhxon - Zo'rsan | Шохруххон - Зурсан",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/c8hmme9nlxg/hqdefault.jpg",
    duration: "4:17",
    durationSeconds: 257
  },
  {
    id: "7fYSRAIMMew",
    title: "Shohruhxon - Ey yor | Шохруххон - Эй ёр",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/7fYSRAIMMew/hqdefault.jpg",
    duration: "4:03",
    durationSeconds: 243
  },
  {
    id: "pzNo-qzr4QM",
    title: "Shohruhxon - Chorla | Шохруххон - Чорла",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/pzNo-qzr4QM/hqdefault.jpg",
    duration: "4:02",
    durationSeconds: 242
  },
  {
    id: "OUNfScHgThI",
    title: "Rayhon - Parvoz etay | Райхон - Парвоз этай",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/OUNfScHgThI/hqdefault.jpg",
    duration: "3:28",
    durationSeconds: 208
  },
  {
    id: "BCxFszWS8Iw",
    title: "Rayhon - Qayerdasan",
    channelTitle: "Rayhon Ganieva",
    thumbnail: "https://i.ytimg.com/vi/BCxFszWS8Iw/hqdefault.jpg",
    duration: "4:06",
    durationSeconds: 246
  },
  {
    id: "HIZTS13B3iA",
    title: "Rayhon - Bilmagandek | Райхон - Билмагандек",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/HIZTS13B3iA/hqdefault.jpg",
    duration: "4:28",
    durationSeconds: 268
  },
  {
    id: "opE5I5iRmVU",
    title: "Rayhon - Tomchi | Райхон - Томчи",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/opE5I5iRmVU/hqdefault.jpg",
    duration: "4:10",
    durationSeconds: 250
  },
  {
    id: "WWa-aCc7oFc",
    title: "Rayhon - Hech ayrilma",
    channelTitle: "Rayhon Ganieva",
    thumbnail: "https://i.ytimg.com/vi/WWa-aCc7oFc/hqdefault.jpg",
    duration: "3:28",
    durationSeconds: 208
  },
  {
    id: "dqReqzN2wzg",
    title: "Rayhon - Azobdaman | Райхон - Азобдаман (Aldandim - 2)",
    channelTitle: "Maestro musiqa",
    thumbnail: "https://i.ytimg.com/vi/dqReqzN2wzg/hqdefault.jpg",
    duration: "4:22",
    durationSeconds: 262
  },
  {
    id: "vgtrNIAJAv4",
    title: "Rayhon - Alda | Райхон - Алда",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/vgtrNIAJAv4/hqdefault.jpg",
    duration: "3:06",
    durationSeconds: 186
  },
  {
    id: "NHL_s41pBXY",
    title: "Rayhon - Seni deb (Official Soundtrack)",
    channelTitle: "Rayhon Ganieva",
    thumbnail: "https://i.ytimg.com/vi/NHL_s41pBXY/hqdefault.jpg",
    duration: "3:16",
    durationSeconds: 196
  },
  {
    id: "CC-wAFFVzzE",
    title: "Rayhon - Dil poralar",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/CC-wAFFVzzE/hqdefault.jpg",
    duration: "3:34",
    durationSeconds: 214
  },
  {
    id: "G9l5u9uR2Kg",
    title: "Xamdam Sobirov & Rayhon - Qizil ko'ylak",
    channelTitle: "NevoMusic",
    thumbnail: "https://i.ytimg.com/vi/G9l5u9uR2Kg/hqdefault.jpg",
    duration: "3:58",
    durationSeconds: 238
  },
  {
    id: "qlpfL4kLUUw",
    title: "Rayhon - Tabib | Райхон - Табиб",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/qlpfL4kLUUw/hqdefault.jpg",
    duration: "3:11",
    durationSeconds: 191
  },
  {
    id: "X-ijSYY7dYc",
    title: "Rayhon - Izlama 2014",
    channelTitle: "Rayhon Ganieva",
    thumbnail: "https://i.ytimg.com/vi/X-ijSYY7dYc/hqdefault.jpg",
    duration: "3:51",
    durationSeconds: 231
  },
  {
    id: "hnBIk-J_WB8",
    title: "Rayhon - Yaxshimasmi | Райхон - яхшимасми 4K 2023",
    channelTitle: "Maestro musiqa",
    thumbnail: "https://i.ytimg.com/vi/hnBIk-J_WB8/hqdefault.jpg",
    duration: "3:42",
    durationSeconds: 222
  },
  {
    id: "NqhyRp5ytOk",
    title: "Rayhon - Yolg'onmi | Райхон - Ёлгонми",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/NqhyRp5ytOk/hqdefault.jpg",
    duration: "4:41",
    durationSeconds: 281
  },
  {
    id: "lPPYH7fIEzI",
    title: "Rayhon - Yurak uradi",
    channelTitle: "Rayhon Ganieva",
    thumbnail: "https://i.ytimg.com/vi/lPPYH7fIEzI/hqdefault.jpg",
    duration: "3:52",
    durationSeconds: 232
  },
  {
    id: "FIuh1bV4-NI",
    title: "Rayhon - Ayt nega | Райхон - Айт нега",
    channelTitle: "RizaNovaUZ",
    thumbnail: "https://i.ytimg.com/vi/FIuh1bV4-NI/hqdefault.jpg",
    duration: "4:08",
    durationSeconds: 248
  },
  {
    id: "GnRGxUai8xM",
    title: "Rayhon - So'naman 2014",
    channelTitle: "Rayhon Ganieva",
    thumbnail: "https://i.ytimg.com/vi/GnRGxUai8xM/hqdefault.jpg",
    duration: "4:46",
    durationSeconds: 286
  },
  {
    id: "tdCjVMAAdxw",
    title: "Izzat Shukurov - Oshiqman",
    channelTitle: "IZZAT SHUKUROV",
    thumbnail: "https://i.ytimg.com/vi/tdCjVMAAdxw/hqdefault.jpg",
    duration: "4:25",
    durationSeconds: 265
  },
  {
    id: "OlfM51vqI50",
    title: "Shahlo Ahmedova - Avayla",
    channelTitle: "Shahlo Ahmedova",
    thumbnail: "https://i.ytimg.com/vi/OlfM51vqI50/hqdefault.jpg",
    duration: "2:58",
    durationSeconds: 178
  },
  {
    id: "anfSyaMbMzI",
    title: "Ismail - Ifori kelsin",
    channelTitle: "Ismail Akhbarov",
    thumbnail: "https://i.ytimg.com/vi/anfSyaMbMzI/hqdefault.jpg",
    duration: "3:13",
    durationSeconds: 193
  },
  {
    id: "Kf3FgYLZ3EQ",
    title: "Xojiakbar Ruzmetov - Ko'rmasam bo'lmas",
    channelTitle: "Xojiakbar Ruzmetov",
    thumbnail: "https://i.ytimg.com/vi/Kf3FgYLZ3EQ/hqdefault.jpg",
    duration: "4:00",
    durationSeconds: 240
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Luis Fonsi - Despacito ft. Daddy Yankee",
    channelTitle: "Luis Fonsi",
    thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    duration: "4:42",
    durationSeconds: 282
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "Queen – Bohemian Rhapsody",
    channelTitle: "Queen Official",
    thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
    duration: "5:59",
    durationSeconds: 359
  },
  {
    id: "JGwWNGJdvx8",
    title: "Ed Sheeran - Shape of You",
    channelTitle: "Ed Sheeran",
    thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    duration: "4:23",
    durationSeconds: 263
  },
  {
    id: "OPf0YbXqDm0",
    title: "Mark Ronson - Uptown Funk ft. Bruno Mars",
    channelTitle: "Mark Ronson",
    thumbnail: "https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg",
    duration: "4:30",
    durationSeconds: 270
  },
  {
    id: "4NRXx6U8ABQ",
    title: "The Weeknd - Blinding Lights",
    channelTitle: "The Weeknd",
    thumbnail: "https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
    duration: "4:20",
    durationSeconds: 260
  },
  {
    id: "34Na4j8AVgA",
    title: "The Weeknd - Starboy ft. Daft Punk",
    channelTitle: "The Weeknd",
    thumbnail: "https://i.ytimg.com/vi/34Na4j8AVgA/hqdefault.jpg",
    duration: "3:50",
    durationSeconds: 230
  },
  {
    id: "hT_nvWreIhg",
    title: "OneRepublic - Counting Stars",
    channelTitle: "OneRepublic",
    thumbnail: "https://i.ytimg.com/vi/hT_nvWreIhg/hqdefault.jpg",
    duration: "4:44",
    durationSeconds: 284
  },
  {
    id: "09R8_2nJtjg",
    title: "Maroon 5 - Sugar",
    channelTitle: "Maroon 5",
    thumbnail: "https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg",
    duration: "5:01",
    durationSeconds: 301
  },
  {
    id: "YQHsXMglC9A",
    title: "Adele - Hello",
    channelTitle: "Adele",
    thumbnail: "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
    duration: "6:07",
    durationSeconds: 367
  },
  {
    id: "RgKAFK5djSk",
    title: "Wiz Khalifa - See You Again ft. Charlie Puth",
    channelTitle: "Wiz Khalifa",
    thumbnail: "https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg",
    duration: "3:57",
    durationSeconds: 237
  },
  {
    id: "kOHB85vDuow",
    title: "Eminem - Not Afraid",
    channelTitle: "EminemMusic",
    thumbnail: "https://i.ytimg.com/vi/kOHB85vDuow/hqdefault.jpg",
    duration: "4:19",
    durationSeconds: 259
  },
  {
    id: "YVkUvmDQ3HY",
    title: "Eminem - Without Me",
    channelTitle: "EminemMusic",
    thumbnail: "https://i.ytimg.com/vi/YVkUvmDQ3HY/hqdefault.jpg",
    duration: "4:58",
    durationSeconds: 298
  },
  {
    id: "2Vv-BfVoq4g",
    title: "Ed Sheeran - Perfect",
    channelTitle: "Ed Sheeran",
    thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    duration: "4:40",
    durationSeconds: 280
  },
  {
    id: "CevxZvSJLk8",
    title: "Katy Perry - Roar",
    channelTitle: "Katy Perry",
    thumbnail: "https://i.ytimg.com/vi/CevxZvSJLk8/hqdefault.jpg",
    duration: "4:30",
    durationSeconds: 270
  },
  {
    id: "nfWlot6h_JM",
    title: "Taylor Swift - Shake It Off",
    channelTitle: "Taylor Swift",
    thumbnail: "https://i.ytimg.com/vi/nfWlot6h_JM/hqdefault.jpg",
    duration: "4:02",
    durationSeconds: 242
  },
  {
    id: "e-ORhEE9VVg",
    title: "Taylor Swift - Blank Space",
    channelTitle: "Taylor Swift",
    thumbnail: "https://i.ytimg.com/vi/e-ORhEE9VVg/hqdefault.jpg",
    duration: "4:33",
    durationSeconds: 273
  },
  {
    id: "uelHwf8o7_U",
    title: "Eminem - Love The Way You Lie ft. Rihanna",
    channelTitle: "EminemMusic",
    thumbnail: "https://i.ytimg.com/vi/uelHwf8o7_U/hqdefault.jpg",
    duration: "4:27",
    durationSeconds: 267
  },
  {
    id: "kXYiU_JCYtU",
    title: "Linkin Park - Numb",
    channelTitle: "Linkin Park",
    thumbnail: "https://i.ytimg.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    duration: "3:07",
    durationSeconds: 187
  },
  {
    id: "eVTXPUF4Oz4",
    title: "Linkin Park - In The End",
    channelTitle: "Linkin Park",
    thumbnail: "https://i.ytimg.com/vi/eVTXPUF4Oz4/hqdefault.jpg",
    duration: "3:39",
    durationSeconds: 219
  },
  {
    id: "IcrbM1l_BoI",
    title: "Avicii - Wake Me Up",
    channelTitle: "Avicii",
    thumbnail: "https://i.ytimg.com/vi/IcrbM1l_BoI/hqdefault.jpg",
    duration: "4:33",
    durationSeconds: 273
  },
  {
    id: "fLexgOxsZu0",
    title: "Bruno Mars - The Lazy Song",
    channelTitle: "Bruno Mars",
    thumbnail: "https://i.ytimg.com/vi/fLexgOxsZu0/hqdefault.jpg",
    duration: "3:20",
    durationSeconds: 200
  },
  {
    id: "L3wKzyIN1yk",
    title: "Rihanna - Diamonds",
    channelTitle: "Rihanna",
    thumbnail: "https://i.ytimg.com/vi/L3wKzyIN1yk/hqdefault.jpg",
    duration: "4:43",
    durationSeconds: 283
  },
  {
    id: "7wtfhZwyrcc",
    title: "Imagine Dragons - Thunder",
    channelTitle: "Imagine Dragons",
    thumbnail: "https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg",
    duration: "3:08",
    durationSeconds: 188
  },
  {
    id: "7PCkvCPvDXk",
    title: "Dua Lipa - New Rules",
    channelTitle: "Dua Lipa",
    thumbnail: "https://i.ytimg.com/vi/7PCkvCPvDXk/hqdefault.jpg",
    duration: "3:45",
    durationSeconds: 225
  },
  {
    id: "SlPhMPnQ58k",
    title: "Maroon 5 - Memories",
    channelTitle: "Maroon 5",
    thumbnail: "https://i.ytimg.com/vi/SlPhMPnQ58k/hqdefault.jpg",
    duration: "3:15",
    durationSeconds: 195
  },
  {
    id: "PT2_F-1esPk",
    title: "The Chainsmokers - Closer ft. Halsey",
    channelTitle: "The Chainsmokers",
    thumbnail: "https://i.ytimg.com/vi/PT2_F-1esPk/hqdefault.jpg",
    duration: "4:05",
    durationSeconds: 245
  },
  {
    id: "tAGnKpE4NCI",
    title: "Metallica - Nothing Else Matters",
    channelTitle: "Metallica",
    thumbnail: "https://i.ytimg.com/vi/tAGnKpE4NCI/hqdefault.jpg",
    duration: "6:25",
    durationSeconds: 385
  },
  {
    id: "pB-5XG-DbAA",
    title: "Xcho - Ты и Я",
    channelTitle: "Xcho",
    thumbnail: "https://i.ytimg.com/vi/pB-5XG-DbAA/hqdefault.jpg",
    duration: "2:40",
    durationSeconds: 160
  },
  {
    id: "ktvTqknDobU",
    title: "Imagine Dragons - Radioactive",
    channelTitle: "Imagine Dragons",
    thumbnail: "https://i.ytimg.com/vi/ktvTqknDobU/hqdefault.jpg",
    duration: "3:07",
    durationSeconds: 187
  },
  {
    id: "60ItHLz5WEA",
    title: "Alan Walker - Faded",
    channelTitle: "Alan Walker",
    thumbnail: "https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg",
    duration: "3:32",
    durationSeconds: 212
  },
  {
    id: "dvgZkm1xWPE",
    title: "Coldplay - Viva La Vida",
    channelTitle: "Coldplay",
    thumbnail: "https://i.ytimg.com/vi/dvgZkm1xWPE/hqdefault.jpg",
    duration: "4:02",
    durationSeconds: 242
  },
  {
    id: "nYh-n7EOtMA",
    title: "Sia - Cheap Thrills",
    channelTitle: "Sia",
    thumbnail: "https://i.ytimg.com/vi/nYh-n7EOtMA/hqdefault.jpg",
    duration: "3:44",
    durationSeconds: 224
  },
  {
    id: "TUVcZfQe-Kw",
    title: "Dua Lipa - Levitating",
    channelTitle: "Dua Lipa",
    thumbnail: "https://i.ytimg.com/vi/TUVcZfQe-Kw/hqdefault.jpg",
    duration: "3:23",
    durationSeconds: 203
  },
  {
    id: "PMivT7MJ41M",
    title: "Bruno Mars - That's What I Like",
    channelTitle: "Bruno Mars",
    thumbnail: "https://i.ytimg.com/vi/PMivT7MJ41M/hqdefault.jpg",
    duration: "3:26",
    durationSeconds: 206
  },
  {
    id: "wXhTHyIgQ_U",
    title: "Post Malone - Circles",
    channelTitle: "Post Malone",
    thumbnail: "https://i.ytimg.com/vi/wXhTHyIgQ_U/hqdefault.jpg",
    duration: "3:35",
    durationSeconds: 215
  },
  {
    id: "Pkh8UtuejGw",
    title: "Shawn Mendes, Camila Cabello - Señorita",
    channelTitle: "Shawn Mendes",
    thumbnail: "https://i.ytimg.com/vi/Pkh8UtuejGw/hqdefault.jpg",
    duration: "3:11",
    durationSeconds: 191
  },
  {
    id: "aJOTlE1K90k",
    title: "Maroon 5 ft. Cardi B - Girls Like You",
    channelTitle: "Maroon 5",
    thumbnail: "https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg",
    duration: "4:30",
    durationSeconds: 270
  },
  {
    id: "rYEDA3JcQqw",
    title: "Adele - Rolling in the Deep",
    channelTitle: "Adele",
    thumbnail: "https://i.ytimg.com/vi/rYEDA3JcQqw/hqdefault.jpg",
    duration: "3:48",
    durationSeconds: 228
  },
  {
    id: "DyDfgMOUjCI",
    title: "Billie Eilish - Bad Guy",
    channelTitle: "Billie Eilish",
    thumbnail: "https://i.ytimg.com/vi/DyDfgMOUjCI/hqdefault.jpg",
    duration: "3:14",
    durationSeconds: 194
  },
  {
    id: "RBumgq5yVrA",
    title: "Passenger - Let Her Go",
    channelTitle: "Passenger",
    thumbnail: "https://i.ytimg.com/vi/RBumgq5yVrA/hqdefault.jpg",
    duration: "4:14",
    durationSeconds: 254
  },
  {
    id: "kTJczUoc26U",
    title: "The Kid LAROI, Justin Bieber - STAY",
    channelTitle: "The Kid LAROI",
    thumbnail: "https://i.ytimg.com/vi/kTJczUoc26U/hqdefault.jpg",
    duration: "2:38",
    durationSeconds: 158
  },
  {
    id: "H5v3kku4y6Q",
    title: "Harry Styles - As It Was",
    channelTitle: "Harry Styles",
    thumbnail: "https://i.ytimg.com/vi/H5v3kku4y6Q/hqdefault.jpg",
    duration: "2:46",
    durationSeconds: 166
  }
];
