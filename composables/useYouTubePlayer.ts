import { ref, computed } from 'vue';
import type { Song } from '~/types/music';
import { CONFIG, STORAGE_KEYS } from '~/constants/config';
import { useAntiRepeat } from './useAntiRepeat';
import { useToast } from './useToast';
import { useI18n } from './useI18n';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const currentSong = ref<Song | null>(null);
const playlist = ref<Song[]>([]);
const currentIndex = ref<number>(-1);
const isPlaying = ref<boolean>(false);
const currentTime = ref<number>(0);
const duration = ref<number>(0);
const volume = ref<number>(80);
const isShuffle = ref<boolean>(true);
const isLoop = ref<boolean>(false);
const isFullPlayerOpen = ref<boolean>(false);

let ytPlayer: any = null;
let isPlayerReady = false;
let progressTimer: any = null;
let playedSeconds = 0;
let hasMarkedHeard = false;
let pendingSong: Song | null = null;
let pendingPlaylist: Song[] | null = null;

export const useYouTubePlayer = () => {
  const { markAsHeard, isHeard, isHidden } = useAntiRepeat();
  const { showToast } = useToast();
  const { t } = useI18n();

  const formattedCurrentTime = computed(() => formatTime(currentTime.value));
  const formattedDuration = computed(() =>
    formatTime(duration.value || currentSong.value?.durationSeconds || 0)
  );

  function formatTime(seconds: number): string {
    const s = Math.max(0, Math.floor(seconds || 0));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  const updateMediaSession = (song: Song) => {
    if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: song.title,
        artist: song.channelTitle,
        album: 'YouTube Music - Anti-Repeat',
        artwork: [
          { src: song.thumbnail, sizes: '512x512', type: 'image/jpeg' },
          { src: song.thumbnail, sizes: '128x128', type: 'image/jpeg' }
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => togglePlay());
      navigator.mediaSession.setActionHandler('pause', () => togglePlay());
      navigator.mediaSession.setActionHandler('previoustrack', () => prev());
      navigator.mediaSession.setActionHandler('nexttrack', () => next());
    }
  };

  const startProgressTimer = () => {
    stopProgressTimer();
    progressTimer = setInterval(() => {
      if (ytPlayer && isPlayerReady && isPlaying.value) {
        try {
          const curr = ytPlayer.getCurrentTime() || 0;
          const dur = ytPlayer.getDuration() || 0;
          currentTime.value = curr;
          if (dur > 0) duration.value = dur;

          playedSeconds++;

          // Anti-Repeat detection rule: 30 seconds OR 50%
          const songDur = duration.value || currentSong.value?.durationSeconds || 180;
          if (!hasMarkedHeard && currentSong.value) {
            if (
              playedSeconds >= CONFIG.LISTEN_CRITERIA.MIN_SECONDS ||
              (songDur > 0 && (playedSeconds / songDur) >= 0.5)
            ) {
              hasMarkedHeard = true;
              markAsHeard(currentSong.value, playedSeconds);
            }
          }
        } catch (e) {
          // ignore
        }
      }
    }, 1000);
  };

  const stopProgressTimer = () => {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  };

  const initYTPlayer = (containerId = 'youtubePlayer') => {
    if (typeof window === 'undefined') return;

    const createPlayer = () => {
      if (ytPlayer || !window.YT || !window.YT.Player) return;
      const el = document.getElementById(containerId);
      if (!el) return;

      ytPlayer = new window.YT.Player(containerId, {
        height: '1',
        width: '1',
        videoId: '',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin
        },
        events: {
          onReady: (event: any) => {
            isPlayerReady = true;
            try {
              event.target.setVolume(volume.value);
            } catch (e) {}

            if (pendingSong) {
              const song = pendingSong;
              const pl = pendingPlaylist;
              pendingSong = null;
              pendingPlaylist = null;
              playSong(song, pl || undefined);
            }
          },
          onStateChange: (event: any) => {
            // YT.PlayerState: 1 = PLAYING, 2 = PAUSED, 0 = ENDED, 3 = BUFFERING
            if (event.data === 1) {
              isPlaying.value = true;
              startProgressTimer();
            } else if (event.data === 2) {
              isPlaying.value = false;
              stopProgressTimer();
            } else if (event.data === 0) {
              // Ended
              isPlaying.value = false;
              stopProgressTimer();
              if (currentSong.value && !hasMarkedHeard) {
                markAsHeard(currentSong.value, playedSeconds);
                hasMarkedHeard = true;
              }

              if (isLoop.value) {
                if (ytPlayer && isPlayerReady) {
                  ytPlayer.seekTo(0);
                  ytPlayer.playVideo();
                }
              } else {
                next();
              }
            }
          },
          onError: (event: any) => {
            console.warn('YouTube Player error code:', event.data);
            stopProgressTimer();
            isPlaying.value = false;

            // Error 101 or 150: Embed copyright not allowed
            if (event.data === 150 || event.data === 101) {
              showToast(t('toast_error_embed'));
            } else {
              showToast(t('toast_error_notfound'));
            }

            // Automatically skip to next available song
            setTimeout(() => {
              next();
            }, 1200);
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    }
  };

  const playSong = (song: Song, newPlaylist?: Song[]) => {
    currentSong.value = song;
    playedSeconds = 0;
    hasMarkedHeard = false;
    currentTime.value = 0;
    duration.value = song.durationSeconds || 0;

    if (newPlaylist && newPlaylist.length > 0) {
      playlist.value = [...newPlaylist];
      currentIndex.value = playlist.value.findIndex((s) => s.id === song.id);
    } else if (playlist.value.length === 0) {
      playlist.value = [song];
      currentIndex.value = 0;
    } else {
      const idx = playlist.value.findIndex((s) => s.id === song.id);
      if (idx >= 0) {
        currentIndex.value = idx;
      } else {
        playlist.value.push(song);
        currentIndex.value = playlist.value.length - 1;
      }
    }

    if (!isPlayerReady || !ytPlayer) {
      pendingSong = song;
      if (newPlaylist) pendingPlaylist = newPlaylist;
      initYTPlayer();
      return;
    }

    try {
      ytPlayer.loadVideoById(song.id);
      isPlaying.value = true;
      updateMediaSession(song);
      startProgressTimer();
    } catch (e) {
      console.warn('Error loading video in YT Player', e);
    }
  };

  const togglePlay = () => {
    if (!currentSong.value) {
      if (playlist.value.length > 0) {
        playSong(playlist.value[0]);
      }
      return;
    }

    if (!ytPlayer || !isPlayerReady) {
      playSong(currentSong.value);
      return;
    }

    try {
      if (isPlaying.value) {
        ytPlayer.pauseVideo();
        isPlaying.value = false;
        stopProgressTimer();
      } else {
        ytPlayer.playVideo();
        isPlaying.value = true;
        startProgressTimer();
      }
    } catch (e) {
      console.warn('Toggle play failed', e);
    }
  };

  const next = () => {
    if (playlist.value.length === 0) return;

    if (isShuffle.value) {
      // Find songs in playlist that haven't been heard or hidden
      const candidates = playlist.value.filter(
        (s) => s.id !== currentSong.value?.id && !isHeard(s.id) && !isHidden(s.id)
      );

      if (candidates.length > 0) {
        const randomIndex = Math.floor(Math.random() * candidates.length);
        playSong(candidates[randomIndex]);
        return;
      }
    }

    // Normal sequential next
    let nextIdx = currentIndex.value + 1;
    if (nextIdx >= playlist.value.length) {
      nextIdx = 0; // Loop playlist
    }

    playSong(playlist.value[nextIdx]);
  };

  const prev = () => {
    if (playlist.value.length === 0) return;

    // If more than 3 seconds in, restart track
    if (currentTime.value > 3 && ytPlayer && isPlayerReady) {
      seekTo(0);
      return;
    }

    let prevIdx = currentIndex.value - 1;
    if (prevIdx < 0) {
      prevIdx = playlist.value.length - 1;
    }
    playSong(playlist.value[prevIdx]);
  };

  const seekTo = (seconds: number) => {
    currentTime.value = seconds;
    if (ytPlayer && isPlayerReady) {
      try {
        ytPlayer.seekTo(seconds, true);
      } catch (e) {}
    }
  };

  const setVolume = (val: number) => {
    volume.value = Math.max(0, Math.min(100, val));
    if (ytPlayer && isPlayerReady) {
      try {
        ytPlayer.setVolume(volume.value);
      } catch (e) {}
    }
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEYS.VOLUME, String(volume.value));
      } catch (e) {}
    }
  };

  const toggleShuffle = () => {
    isShuffle.value = !isShuffle.value;
    showToast(t(isShuffle.value ? 'toast_shuffle_on' : 'toast_shuffle_off'));
  };

  const toggleLoop = () => {
    isLoop.value = !isLoop.value;
    showToast(t(isLoop.value ? 'toast_loop_on' : 'toast_loop_off'));
  };

  const openFullPlayer = () => {
    isFullPlayerOpen.value = true;
  };

  const closeFullPlayer = () => {
    isFullPlayerOpen.value = false;
  };

  return {
    currentSong,
    playlist,
    currentIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    isShuffle,
    isLoop,
    isFullPlayerOpen,
    formattedCurrentTime,
    formattedDuration,
    initYTPlayer,
    playSong,
    togglePlay,
    next,
    prev,
    seekTo,
    setVolume,
    toggleShuffle,
    toggleLoop,
    openFullPlayer,
    closeFullPlayer
  };
};
