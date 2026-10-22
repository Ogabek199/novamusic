import { ref, computed } from 'vue';
import type { Song, HistoryItem, RetentionType } from '~/types/music';
import { STORAGE_KEYS, CONFIG } from '~/constants/config';
import { useToast } from './useToast';
import { useI18n } from './useI18n';
import { isSongValid } from './useMusicApi';

const history = ref<HistoryItem[]>([]);
const hidden = ref<string[]>([]);
const retention = ref<RetentionType>('never');
const region = ref<string>(CONFIG.DEFAULT_REGION);
let isInitialized = false;

export const useAntiRepeat = () => {
  const { showToast } = useToast();
  const { t } = useI18n();

  const initAntiRepeat = () => {
    if (typeof window === 'undefined' || isInitialized) return;
    try {
      const savedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
      if (savedHistory) {
        history.value = JSON.parse(savedHistory);
      }

      const savedHidden = localStorage.getItem(STORAGE_KEYS.HIDDEN);
      if (savedHidden) {
        hidden.value = JSON.parse(savedHidden);
      }

      const savedRetention = localStorage.getItem(STORAGE_KEYS.RETENTION) as RetentionType | null;
      if (savedRetention && ['never', '7d', '30d'].includes(savedRetention)) {
        retention.value = savedRetention;
      }

      const savedRegion = localStorage.getItem(STORAGE_KEYS.REGION);
      if (savedRegion) {
        region.value = savedRegion;
      }
    } catch (e) {
      console.warn('Failed to load anti-repeat storage', e);
    }
    isInitialized = true;
  };

  const saveHistory = () => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history.value));
    } catch (e) {
      console.warn('Failed to save history', e);
    }
  };

  const saveHidden = () => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEYS.HIDDEN, JSON.stringify(hidden.value));
    } catch (e) {
      console.warn('Failed to save hidden songs', e);
    }
  };

  const setRetention = (newRetention: RetentionType) => {
    retention.value = newRetention;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEYS.RETENTION, newRetention);
      } catch (e) {
        console.warn('Failed to save retention', e);
      }
    }
  };

  const setRegion = (newRegion: string) => {
    region.value = newRegion;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEYS.REGION, newRegion);
      } catch (e) {
        console.warn('Failed to save region', e);
      }
    }
  };

  const isHeard = (songId: string): boolean => {
    const item = history.value.find((h) => h.id === songId);
    if (!item) return false;

    if (retention.value === 'never') {
      return true;
    }

    const age = Date.now() - item.timestamp;
    if (retention.value === '7d') {
      return age < 7 * 24 * 60 * 60 * 1000;
    }
    if (retention.value === '30d') {
      return age < 30 * 24 * 60 * 60 * 1000;
    }

    return true;
  };

  const isHidden = (songId: string): boolean => {
    return hidden.value.includes(songId);
  };

  const filterSongs = (songs: Song[]): Song[] => {
    return songs.filter((song) => !isHeard(song.id) && !isHidden(song.id) && isSongValid(song));
  };

  const markAsHeard = (song: Song, playedDuration = 30) => {
    const existingIndex = history.value.findIndex((h) => h.id === song.id);
    const item: HistoryItem = {
      id: song.id,
      title: song.title,
      channelTitle: song.channelTitle,
      thumbnail: song.thumbnail,
      duration: song.duration,
      durationSeconds: song.durationSeconds,
      timestamp: Date.now(),
      playedDuration
    };

    if (existingIndex >= 0) {
      history.value.splice(existingIndex, 1);
    }
    history.value.unshift(item);
    saveHistory();

    const shortTitle = song.title.length > 25 ? song.title.slice(0, 25) + '...' : song.title;
    showToast(t('toast_added_history', { title: shortTitle }));
  };

  const hideSong = (songId: string) => {
    if (!hidden.value.includes(songId)) {
      hidden.value.push(songId);
      saveHidden();
      showToast(t('toast_song_hidden'));
    }
  };

  const unhideSong = (songId: string) => {
    hidden.value = hidden.value.filter((id) => id !== songId);
    saveHidden();
  };

  const removeFromHistory = (songId: string) => {
    history.value = history.value.filter((h) => h.id !== songId);
    saveHistory();
  };

  const clearAllHistory = () => {
    history.value = [];
    saveHistory();
    showToast(t('toast_history_cleared'));
  };

  const totalListened = computed(() => history.value.length);
  const hiddenCount = computed(() => hidden.value.length);

  return {
    history,
    hidden,
    retention,
    region,
    totalListened,
    hiddenCount,
    initAntiRepeat,
    setRetention,
    setRegion,
    isHeard,
    isHidden,
    filterSongs,
    markAsHeard,
    hideSong,
    unhideSong,
    removeFromHistory,
    clearAllHistory
  };
};
