import type { Song } from '~/types/music';
import { CONFIG, FALLBACK_SONGS } from '~/constants/config';

const songCache = new Map<string, { data: Song[]; timestamp: number; nextPageToken?: string }>();
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

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
    t = t.replace(
      /\s*[\(\[](official\s*(music\s*)?video|official\s*audio|lyrics?|videoclip|клип|премьера\s*\d*|hd|4k|hq|visualizer)[\)\]]/gi,
      ''
    );
    t = t.replace(/\|\s*official\s*videoclip\s*\d*/gi, '');
    t = t.replace(/\|\s*official\s*video/gi, '');
    t = t.replace(/\s*-\s*official\s*video/gi, '');
    return t.trim();
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
    let list = [...FALLBACK_SONGS];
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

  const fetchChartSongs = async (
    region = CONFIG.DEFAULT_REGION,
    genreQuery?: string,
    pageToken?: string
  ): Promise<{ songs: Song[]; nextPageToken?: string }> => {
    const config = useRuntimeConfig();
    const apiKey = (config.public.youtubeApiKey as string) || CONFIG.YOUTUBE_API_KEY;
    const cacheKey = `chart_${region}_${genreQuery || 'all'}_${pageToken || 'p0'}`;
    const cached = songCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return { songs: cached.data, nextPageToken: cached.nextPageToken };
    }

    try {
      let url = '';
      if (genreQuery) {
        // Search by genre
        url = `${CONFIG.API_BASE_URL}/search?part=snippet&type=video&videoCategoryId=${
          CONFIG.MUSIC_CATEGORY_ID
        }&regionCode=${encodeURIComponent(region)}&q=${encodeURIComponent(
          genreQuery
        )}&maxResults=25&key=${apiKey}`;
      } else {
        // Most popular chart in region
        url = `${CONFIG.API_BASE_URL}/videos?part=snippet,contentDetails&chart=mostPopular&videoCategoryId=${
          CONFIG.MUSIC_CATEGORY_ID
        }&regionCode=${encodeURIComponent(region)}&maxResults=25&key=${apiKey}`;
      }

      if (pageToken) {
        url += `&pageToken=${encodeURIComponent(pageToken)}`;
      }

      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`YouTube API returned status ${res.status}. Using fallback songs.`);
        return { songs: getFallbackSongs(genreQuery), nextPageToken: undefined };
      }

      const data = await res.json();
      if (!data.items || data.items.length === 0) {
        return { songs: getFallbackSongs(genreQuery), nextPageToken: undefined };
      }

      let songs: Song[] = [];

      if (genreQuery) {
        // Need to fetch contentDetails for duration if from search
        const videoIds = data.items.map((it: any) => it.id?.videoId).filter(Boolean);
        if (videoIds.length > 0) {
          const detailUrl = `${CONFIG.API_BASE_URL}/videos?part=contentDetails,snippet&id=${videoIds.join(
            ','
          )}&key=${apiKey}`;
          const detailRes = await fetch(detailUrl);
          if (detailRes.ok) {
            const detailData = await detailRes.json();
            songs = (detailData.items || []).map((it: any) => {
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
      } else {
        songs = data.items.map((it: any) => {
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

      if (songs.length === 0) {
        songs = getFallbackSongs(genreQuery);
      }

      songCache.set(cacheKey, {
        data: songs,
        timestamp: Date.now(),
        nextPageToken: data.nextPageToken
      });

      return { songs, nextPageToken: data.nextPageToken };
    } catch (e) {
      console.warn('Network error fetching songs. Using fallback catalogue.', e);
      return { songs: getFallbackSongs(genreQuery), nextPageToken: undefined };
    }
  };

  const searchSongs = async (
    query: string,
    region = CONFIG.DEFAULT_REGION
  ): Promise<Song[]> => {
    if (!query || !query.trim()) {
      return [];
    }

    const trimmed = query.trim();
    const cacheKey = `search_${region}_${trimmed}`;
    const cached = songCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.data;
    }

    const config = useRuntimeConfig();
    const apiKey = (config.public.youtubeApiKey as string) || CONFIG.YOUTUBE_API_KEY;

    try {
      const url = `${CONFIG.API_BASE_URL}/search?part=snippet&type=video&videoCategoryId=${
        CONFIG.MUSIC_CATEGORY_ID
      }&regionCode=${encodeURIComponent(region)}&q=${encodeURIComponent(
        trimmed
      )}&maxResults=20&key=${apiKey}`;

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

      const detailUrl = `${CONFIG.API_BASE_URL}/videos?part=contentDetails,snippet&id=${videoIds.join(
        ','
      )}&key=${apiKey}`;
      const detailRes = await fetch(detailUrl);
      if (!detailRes.ok) return getFallbackSongs(trimmed);

      const detailData = await detailRes.json();
      const songs: Song[] = (detailData.items || []).map((it: any) => {
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
    parseDuration
  };
};
