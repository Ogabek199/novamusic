import type { Song } from '~/types/music';
import { CONFIG, FALLBACK_SONGS, GENRES } from '~/constants/config';

const songCache = new Map<string, { data: Song[]; timestamp: number; nextPageToken?: string }>();
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

// Mamlakat bo'yicha asosiy musiqa trendlarini qidirish so'rovlari
export const REGION_TOP_QUERIES: Record<string, string> = {
  UZ: "uzbek musiqa yangi xit qo'shiqlar",
  US: 'top billboard hits music',
  KZ: 'qazaqsha ander xit',
  TR: 'türkçe pop müzik en çok dinlenen',
  RU: 'русские хиты популярная музыка',
  GB: 'uk top 40 music hits',
  KR: 'kpop popular songs',
  DE: 'deutsche top hits musik',
  AZ: 'azerbaycan mahnilari yeni'
};

// Mamlakat va janrga moslashtirilgan qidiruv kalit so'zlari
export const GENRE_QUERIES_BY_REGION: Record<string, Record<string, string>> = {
  UZ: {
    pop: 'uzbek pop musiqa yangi xit',
    rap: 'uzbek rep hip hop yangi',
    rock: 'uzbek rock musiqa',
    uzbek: "o'zbek taronalari yangi xit qo'shiqlar",
    remix: 'uzbek remix bass music',
    new: 'yangi uzbekcha musiqa 2025 2026',
    chill: 'uzbek sokin musiqa lofi chill'
  },
  KZ: {
    pop: 'qazaqsha pop ander',
    rap: 'qazaq rap hip hop',
    rock: 'qazaq rock',
    uzbek: 'uzbek musiqa',
    remix: 'qazaqsha remix music',
    new: 'yangi qazaqsha ander 2025',
    chill: 'qazaq lofi chill'
  },
  RU: {
    pop: 'русский поп новинки хиты',
    rap: 'русский рэп хип хоп хиты',
    rock: 'русский рок хиты',
    uzbek: 'узбекская музыка',
    remix: 'русский ремикс новинки',
    new: 'новинки музыки 2025 2026',
    chill: 'lofi русские песни chill'
  },
  TR: {
    pop: 'türkçe pop en çok dinlenen',
    rap: 'türkçe rap hip hop',
    rock: 'türkçe rock',
    uzbek: 'özbek müzik',
    remix: 'türkçe remix',
    new: 'yeni türkçe şarkılar 2025',
    chill: 'türkçe lofi chill'
  }
};

/**
 * Nomi yoki kanali bo'yicha musiqa bo'lmagan videolarni aniqlash
 */
export const isBlacklistedMusicTitle = (title: string, channelTitle = ''): boolean => {
  const t = (title || '').toLowerCase();
  const ch = (channelTitle || '').toLowerCase();
  const text = `${t} ${ch}`;

  // 1. Shorts / reels / tiktok kliplar
  if (/#shorts?\b|#tiktok\b|\bshorts\b|\btik\s*tok\b|\breels?\b/i.test(text)) {
    return true;
  }

  // 2. Intervyu, suhbat va podkastlar
  if (/\binterv(iew|yu|yusi)\b|интервью|\bsuhbat\b|\bpodcast\b|podkast|подкаст/i.test(text)) {
    return true;
  }

  // 3. To'plamlar, albom dasturlari, konsert dasturlari, diskografiya va 10-soatlik videolar
  if (
    /to[‘'`]plam|terma\b|termasi|albom\s*dasturi|konsert\s*dasturi|to[‘'`]liq\s*konsert|full\s*album|full\s*concert|сборник|дискография|\bplaylist\b|megamix|mega\s*mix|\b10\s*hours?\b|\b1\s*hour\b/i.test(
      text
    )
  ) {
    return true;
  }

  // 4. Filmlar, seriallar, treylerlar va multfilmlar (OST / Saundtrek bundan mustasno)
  const isOst = /\b(ost|soundtrack|sound\s*track|sauyndtrak)\b/i.test(t);
  if (
    !isOst &&
    /\btrailer\b|treyler|тизер|\bteaser\b|\bserial\b|сериал|\bfilm\b|фильм|kinolar|\b(kino\s*film|to'liq\s*kino|yangi\s*kino|o'zbek\s*kino|premyera\s*film)\b|\bqism\b|\bqismi\b|серия\b|мультфильм|multfilm/i.test(
      text
    )
  ) {
    return true;
  }

  // 5. Yangiliklar, xabarlar, siyosat
  if (/yangiliklar|xabarlar|\bnews\b|новости|tezkor\b|davr\b|axborot\b/i.test(text)) {
    return true;
  }

  // 6. Prikol, prank, komediya, vaynlar, standup
  if (/\bvines?\b|vaynlari|\bvayn\b|prikol|прикол|\bprank\b|пранк|comedy\s*club|stand\s*up|\bstandup\b/i.test(text)) {
    return true;
  }

  // 7. Vloglar, obzor, darsliklar, geymplay, unboxing
  if (
    /\bvlogs?\b|влог|\bobzor\b|обзор|\breview\b|\bdars\b|darslik|\bkurs\b|tutorial|gameplay|\bpubg\b|unboxing|\bhighlights\b/i.test(
      text
    )
  ) {
    return true;
  }

  // 8. Reaksiyalar (reaction)
  if (/\breaction\b|reaksiya|реакция/i.test(text)) {
    return true;
  }

  // 9. Ma'ruza, audio kitoblar, namoz o'rganish (qo'shiq emas)
  if (/maruza\b|ma'ruza|маруза|audio\s*kitob|audiokitob|namoz\s*o[‘'`]qish/i.test(text)) {
    return true;
  }

  return false;
};

/**
 * YouTube videoning haqiqiy yakka musiqa (track) ekanligini tekshirish
 */
export const isMusicTrack = (item: any): boolean => {
  if (!item) return false;

  const snippet = item.snippet || {};
  const contentDetails = item.contentDetails || {};
  const topicDetails = item.topicDetails || {};

  // 1. Jonli efirlarni o'tkazib yuborish
  if (snippet.liveBroadcastContent === 'live' || snippet.liveBroadcastContent === 'upcoming') {
    return false;
  }

  // 2. Davomiylikni tekshirish: faqat 60 soniya (1 daqiqa) dan 720 soniya (12 daqiqa) gacha
  // Qisqa Shorts kliplar (< 60s) va soatlab cho'ziladigan to'plamlar (> 12m) chiqarib tashlanadi
  const durationIso = contentDetails.duration || '';
  const match = durationIso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  let totalSec = 210;
  if (match) {
    const h = parseInt(match[1] || '0', 10);
    const m = parseInt(match[2] || '0', 10);
    const s = parseInt(match[3] || '0', 10);
    totalSec = h * 3600 + m * 60 + s;
  }
  if (totalSec < 60 || totalSec > 720) {
    return false;
  }

  // 3. YouTube Kategoriya ID sini tekshirish
  // Musiqa bo'lmagan kategoriyalar: 1 Film, 17 Sports, 19 Travel, 20 Gaming, 23 Comedy, 25 News, 26 Howto, 27 Education, 28 Science, 29 Nonprofits
  const catId = snippet.categoryId;
  const nonMusicCats = ['1', '17', '19', '20', '23', '25', '26', '27', '28', '29'];
  if (catId && nonMusicCats.includes(catId)) {
    return false;
  }

  // 4. Topic details (Vikipediya mavzulari)
  const topics: string[] = topicDetails.topicCategories || [];
  if (topics.length > 0) {
    const hasMusicTopic = topics.some((t) =>
      /music|song|hip_hop|rock|pop|jazz|rhythm|electronic|folk/i.test(t)
    );
    const nonMusicOnlyTopics = [
      'Action_game',
      'Video_game_culture',
      'Television_program',
      'Film',
      'Politics',
      'Society',
      'Sports',
      'Knowledge'
    ];
    const isExplicitlyNonMusic =
      topics.some((t) => nonMusicOnlyTopics.some((n) => t.includes(n))) && !hasMusicTopic;
    if (isExplicitlyNonMusic) {
      return false;
    }
  }

  // 5. Nomi va kanali bo'yicha qora ro'yxat
  if (isBlacklistedMusicTitle(snippet.title || '', snippet.channelTitle || '')) {
    return false;
  }

  return true;
};

/**
 * Song obyektini tekshirish (masalan kesh yoki boshqa manbalardan kelganda)
 */
export const isSongValid = (song: Song): boolean => {
  if (!song || !song.id) return false;
  if (song.durationSeconds < 60 || song.durationSeconds > 720) return false;
  if (isBlacklistedMusicTitle(song.title, song.channelTitle)) return false;
  return true;
};

export const useMusicApi = () => {
  const decodeHtmlEntities = (text: string): string => {
    if (!text) return '';
    return text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&ndash;/g, '–')
      .replace(/&mdash;/g, '—');
  };

  const cleanSongTitle = (title: string): string => {
    if (!title) return '';
    let t = decodeHtmlEntities(title);

    // Hashtaglarni tozalash
    t = t.replace(/#\w+/gu, '');

    // Qo'shimcha video/audio yozuvlarini olib tashlash
    t = t.replace(
      /\s*[\(\[](official\s*(music\s*)?video|official\s*audio|official\s*videoclip\s*\d*|audio\s*\d*|lyrics?|videoclip|видеоклип|видео|клип|премьера\s*\d*|hd|4k|hq|visualizer|konsert\s*version)[\)\]]/gi,
      ''
    );
    t = t.replace(/\|\s*official\s*(music\s*)?video(clip)?\s*\d*/gi, '');
    t = t.replace(/\|\s*(video\s*klip|videoklip|klip|audio)\s*\d*/gi, '');
    t = t.replace(/\s*-\s*official\s*(music\s*)?video/gi, '');
    t = t.replace(/\|\s*клип\s*\d*/gi, '');

    // Boshidagi va oxiridagi emojilar, keraksiz belgilarni tozalash
    t = t.replace(/^[\s\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}❌🔴🔥💥🐀👑⭐✨⚡⚠️|\-\\\/]+/gu, '');
    t = t.replace(/[\s\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}❌🔴🔥💥🐀👑⭐✨⚡⚠️|\-\\\/]+$/gu, '');
    t = t.replace(/\s{2,}/g, ' ');

    return t.trim() || title;
  };

  const parseDuration = (isoDuration?: string): { formatted: string; seconds: number } => {
    if (!isoDuration) return { formatted: '3:30', seconds: 210 };
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return { formatted: '3:30', seconds: 210 };

    const hours = parseInt(match[1] || '0', 10);
    const minutes = parseInt(match[2] || '0', 10);
    const seconds = parseInt(match[3] || '0', 10);

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const formatted =
      hours > 0
        ? `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        : `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return { formatted, seconds: totalSeconds };
  };

  const getFallbackSongs = (query?: string): Song[] => {
    let list = [...FALLBACK_SONGS].filter(isSongValid);
    if (query && query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (s) => s.title.toLowerCase().includes(q) || s.channelTitle.toLowerCase().includes(q)
      );
    }
    // Fisher-Yates shuffle
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  /**
   * Hudud va janr bo'yicha eng yaxshi qidiruv so'rovini hosil qilish
   */
  const resolveMusicQuery = (region: string, genreOrQuery?: string): string => {
    if (!genreOrQuery || genreOrQuery === 'all') {
      return REGION_TOP_QUERIES[region] || REGION_TOP_QUERIES.UZ;
    }

    // Agar genre ID berilgan bo'lsa (pop, rap, rock, uzbek, remix, new, chill)
    const byRegion = GENRE_QUERIES_BY_REGION[region]?.[genreOrQuery];
    if (byRegion) return byRegion;

    const defaultGenre = GENRES.find((g) => g.id === genreOrQuery);
    if (defaultGenre?.query) return defaultGenre.query;

    return `${genreOrQuery} music`;
  };

  /**
   * Asosiy sahifa uchun musiqalarni filtrlangan holda yuklash
   */
  const fetchChartSongs = async (
    region = CONFIG.DEFAULT_REGION,
    genreOrQuery?: string,
    pageToken?: string
  ): Promise<{ songs: Song[]; nextPageToken?: string }> => {
    const config = useRuntimeConfig();
    const apiKey = (config.public.youtubeApiKey as string) || CONFIG.YOUTUBE_API_KEY;
    const cacheKey = `chart_v2_${region}_${genreOrQuery || 'all'}_${pageToken || 'p0'}`;
    const cached = songCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return { songs: cached.data, nextPageToken: cached.nextPageToken };
    }

    try {
      // YouTube Data API 'UZ' hududi uchun mostPopular chartni qo'llab-quvvatlamaydi (HTTP 400).
      // Shuningdek, janr tanlanganda ham YouTube search orqali to'g'ri musiqa olinadi.
      const isAllGenre = !genreOrQuery || genreOrQuery === 'all';
      const canUsePopularChart = region !== 'UZ' && isAllGenre;

      let songs: Song[] = [];
      let nextPageTokenResult: string | undefined = undefined;

      if (canUsePopularChart) {
        let url = `${CONFIG.API_BASE_URL}/videos?part=snippet,contentDetails,topicDetails&chart=mostPopular&videoCategoryId=${CONFIG.MUSIC_CATEGORY_ID}&regionCode=${encodeURIComponent(
          region
        )}&maxResults=50&key=${apiKey}`;
        if (pageToken) {
          url += `&pageToken=${encodeURIComponent(pageToken)}`;
        }

        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          nextPageTokenResult = data.nextPageToken;

          const filteredItems = (data.items || []).filter(isMusicTrack);
          songs = filteredItems.map((it: any) => {
            const dur = parseDuration(it.contentDetails?.duration);
            return {
              id: it.id,
              title: cleanSongTitle(it.snippet?.title || 'Noma\'lum musiqa'),
              channelTitle: decodeHtmlEntities(it.snippet?.channelTitle || 'Ijrochi'),
              thumbnail:
                it.snippet?.thumbnails?.high?.url ||
                it.snippet?.thumbnails?.medium?.url ||
                `https://i.ytimg.com/vi/${it.id}/hqdefault.jpg`,
              duration: dur.formatted,
              durationSeconds: dur.seconds,
              publishedAt: it.snippet?.publishedAt
            };
          });
        }
      }

      // Agar mostPopular ishlatilmagan bo'lsa yoki natija bo'sh bo'lsa -> Qidiruv orqali olish
      if (songs.length === 0) {
        const queryText = resolveMusicQuery(region, genreOrQuery);
        let searchUrl = `${CONFIG.API_BASE_URL}/search?part=snippet&type=video&videoCategoryId=${CONFIG.MUSIC_CATEGORY_ID}&regionCode=${encodeURIComponent(
          region
        )}&q=${encodeURIComponent(queryText)}&maxResults=50&key=${apiKey}`;
        if (pageToken) {
          searchUrl += `&pageToken=${encodeURIComponent(pageToken)}`;
        }

        const sRes = await fetch(searchUrl);
        if (sRes.ok) {
          const sData = await sRes.json();
          nextPageTokenResult = sData.nextPageToken;

          const videoIds = (sData.items || []).map((it: any) => it.id?.videoId).filter(Boolean);
          if (videoIds.length > 0) {
            const detailUrl = `${CONFIG.API_BASE_URL}/videos?part=contentDetails,snippet,topicDetails&id=${videoIds.join(
              ','
            )}&key=${apiKey}`;
            const detailRes = await fetch(detailUrl);
            if (detailRes.ok) {
              const detailData = await detailRes.json();
              const filteredItems = (detailData.items || []).filter(isMusicTrack);

              songs = filteredItems.map((it: any) => {
                const dur = parseDuration(it.contentDetails?.duration);
                return {
                  id: it.id,
                  title: cleanSongTitle(it.snippet?.title || 'Noma\'lum musiqa'),
                  channelTitle: decodeHtmlEntities(it.snippet?.channelTitle || 'Ijrochi'),
                  thumbnail:
                    it.snippet?.thumbnails?.high?.url ||
                    it.snippet?.thumbnails?.medium?.url ||
                    `https://i.ytimg.com/vi/${it.id}/hqdefault.jpg`,
                  duration: dur.formatted,
                  durationSeconds: dur.seconds,
                  publishedAt: it.snippet?.publishedAt
                };
              });
            }
          }
        }
      }

      if (songs.length === 0) {
        songs = getFallbackSongs(genreOrQuery);
      }

      songCache.set(cacheKey, {
        data: songs,
        timestamp: Date.now(),
        nextPageToken: nextPageTokenResult
      });

      return { songs, nextPageToken: nextPageTokenResult };
    } catch (e) {
      console.warn('Network error fetching songs. Using fallback catalogue.', e);
      return { songs: getFallbackSongs(genreOrQuery), nextPageToken: undefined };
    }
  };

  /**
   * Qidiruv oynasi uchun musiqalarni qidirish va filtrlash
   */
  const searchSongs = async (
    query: string,
    region = CONFIG.DEFAULT_REGION
  ): Promise<Song[]> => {
    if (!query || !query.trim()) {
      return [];
    }

    const trimmed = query.trim();
    const cacheKey = `search_v2_${region}_${trimmed}`;
    const cached = songCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.data;
    }

    const config = useRuntimeConfig();
    const apiKey = (config.public.youtubeApiKey as string) || CONFIG.YOUTUBE_API_KEY;

    try {
      const url = `${CONFIG.API_BASE_URL}/search?part=snippet&type=video&videoCategoryId=${CONFIG.MUSIC_CATEGORY_ID}&regionCode=${encodeURIComponent(
        region
      )}&q=${encodeURIComponent(trimmed)}&maxResults=50&key=${apiKey}`;

      const res = await fetch(url);
      if (!res.ok) {
        return getFallbackSongs(trimmed);
      }

      const data = await res.json();
      if (!data.items || data.items.length === 0) {
        return getFallbackSongs(trimmed);
      }

      const videoIds = data.items.map((it: any) => it.id?.videoId).filter(Boolean);
      if (videoIds.length === 0) return getFallbackSongs(trimmed);

      const detailUrl = `${CONFIG.API_BASE_URL}/videos?part=contentDetails,snippet,topicDetails&id=${videoIds.join(
        ','
      )}&key=${apiKey}`;
      const detailRes = await fetch(detailUrl);
      if (!detailRes.ok) return getFallbackSongs(trimmed);

      const detailData = await detailRes.json();
      const filteredItems = (detailData.items || []).filter(isMusicTrack);

      const songs: Song[] = filteredItems.map((it: any) => {
        const dur = parseDuration(it.contentDetails?.duration);
        return {
          id: it.id,
          title: cleanSongTitle(it.snippet?.title || 'Noma\'lum musiqa'),
          channelTitle: decodeHtmlEntities(it.snippet?.channelTitle || 'Ijrochi'),
          thumbnail:
            it.snippet?.thumbnails?.high?.url ||
            it.snippet?.thumbnails?.medium?.url ||
            `https://i.ytimg.com/vi/${it.id}/hqdefault.jpg`,
          duration: dur.formatted,
          durationSeconds: dur.seconds,
          publishedAt: it.snippet?.publishedAt
        };
      });

      songCache.set(cacheKey, { data: songs, timestamp: Date.now() });
      return songs;
    } catch (e) {
      console.warn('Search failed, returning fallback match', e);
      return getFallbackSongs(trimmed);
    }
  };

  return {
    fetchChartSongs,
    searchSongs,
    cleanSongTitle,
    parseDuration,
    isMusicTrack,
    isSongValid
  };
};
