<script setup lang="ts">
import { useYouTubePlayer } from '~/composables/useYouTubePlayer';
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useI18n } from '~/composables/useI18n';

const {
  currentSong,
  isPlaying,
  currentTime,
  duration,
  volume,
  isShuffle,
  isLoop,
  isFullPlayerOpen,
  formattedCurrentTime,
  formattedDuration,
  togglePlay,
  next,
  prev,
  seekTo,
  setVolume,
  toggleShuffle,
  toggleLoop,
  closeFullPlayer
} = useYouTubePlayer();

const { markAsHeard, hideSong, isHeard } = useAntiRepeat();
const { t } = useI18n();

const onClose = () => {
  closeFullPlayer();
};

// Gesture handling: telefonda yondan tortsa yoki pastga sursa yopish
const touchStartX = ref(0);
const touchStartY = ref(0);
const dragTranslateX = ref(0);
const dragTranslateY = ref(0);
const isDragging = ref(false);

const onTouchStart = (e: TouchEvent) => {
  if (e.touches.length !== 1) return;
  const target = e.target as HTMLElement;
  // Sliders yoki tugmalarni bosganda surishni to'xtatish
  if (target && (target.tagName === 'INPUT' || target.closest('button') || target.closest('input'))) {
    return;
  }
  touchStartX.value = e.touches[0].clientX;
  touchStartY.value = e.touches[0].clientY;
  isDragging.value = false;
  dragTranslateX.value = 0;
  dragTranslateY.value = 0;
};

const onTouchMove = (e: TouchEvent) => {
  if (touchStartX.value === 0 && touchStartY.value === 0) return;
  const currentX = e.touches[0].clientX;
  const currentY = e.touches[0].clientY;
  const diffX = currentX - touchStartX.value;
  const diffY = currentY - touchStartY.value;

  // Yondan o'ngga surish (diffX > 15) yoki pastga surish (diffY > 15)
  if (diffX > 15 || diffY > 15) {
    isDragging.value = true;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      dragTranslateX.value = Math.max(0, diffX);
      dragTranslateY.value = 0;
    } else {
      dragTranslateX.value = 0;
      dragTranslateY.value = Math.max(0, diffY);
    }
  }
};

const onTouchEnd = () => {
  if (isDragging.value) {
    // 70px dan ko'proq yondan surilsa yoki 90px dan ko'p pastga surilsa yopiladi
    if (dragTranslateX.value > 70 || dragTranslateY.value > 90) {
      closeFullPlayer();
    }
  }
  isDragging.value = false;
  dragTranslateX.value = 0;
  dragTranslateY.value = 0;
  touchStartX.value = 0;
  touchStartY.value = 0;
};

const sheetStyle = computed(() => {
  if (!isFullPlayerOpen.value) return {};
  if (isDragging.value) {
    if (dragTranslateX.value > 0) {
      return {
        transform: `translate3d(${dragTranslateX.value}px, 0, 0)`,
        transition: 'none'
      };
    }
    if (dragTranslateY.value > 0) {
      return {
        transform: `translate3d(0, ${dragTranslateY.value}px, 0)`,
        transition: 'none'
      };
    }
  }
  return {};
});

const onSliderChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const newSecs = (parseFloat(target.value) / 100) * (duration.value || 1);
  seekTo(newSecs);
};

const onVolumeChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  setVolume(parseInt(target.value, 10));
};

const onMarkListened = () => {
  if (currentSong.value) {
    markAsHeard(currentSong.value, currentTime.value);
  }
};

const onHideSong = () => {
  if (currentSong.value) {
    hideSong(currentSong.value.id);
    next();
  }
};
</script>

<template>
  <div
    class="ios-full-player-sheet"
    :class="{ open: isFullPlayerOpen, dragging: isDragging }"
    :style="sheetStyle"
    id="fullPlayerSheet"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <!-- Orqa fon bluri va rang gradiyenti -->
    <div class="sheet-backdrop-blur"></div>
    <div
      class="sheet-art-ambient-glow"
      id="sheetAmbientGlow"
      :style="
        currentSong ? `background-image: url(${currentSong.thumbnail})` : ''
      "
    ></div>

    <!-- Pastga surish tutqichi (Drag handle) -->
    <div
      class="sheet-drag-handle-wrapper"
      id="sheetDragHandle"
      role="button"
      tabindex="0"
      title="Yopish"
      @click="onClose"
    >
      <div class="sheet-drag-handle"></div>
    </div>

    <div v-if="currentSong" class="sheet-inner-container">
      <!-- Katta kvadrat muqova -->
      <div class="sheet-artwork-wrapper">
        <img
          :src="currentSong.thumbnail"
          :alt="currentSong.title"
          id="fullPlayerThumb"
          class="sheet-artwork-img"
        />
      </div>

      <!-- Qo'shiq Ma'lumotlari -->
      <div class="sheet-track-info">
        <div class="sheet-text-meta">
          <h2 class="sheet-track-title" id="fullPlayerTitle">
            {{ currentSong.title }}
          </h2>
          <div class="sheet-artist-row">
            <p class="sheet-track-artist" id="fullPlayerArtist">
              {{ currentSong.channelTitle }}
            </p>
            <span
              class="anti-repeat-badge"
              :class="{ 'is-heard': isHeard(currentSong.id) }"
              title="30 soniya yoki 50% eshitilganda avtomatik ro'yxatdan o'chiriladi"
            >
              <svg class="sf-icon-xs" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                />
              </svg>
              <span>{{ t('anti_repeat') }}</span>
            </span>
          </div>
        </div>

        <div class="sheet-quick-actions">
          <button
            class="sheet-round-btn"
            :class="{ active: isHeard(currentSong.id) }"
            id="fullMarkListenedBtn"
            :title="t('action_heard')"
            @click="onMarkListened"
          >
            <svg class="sf-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
              />
            </svg>
          </button>
          <button
            class="sheet-round-btn"
            id="fullHideSongBtn"
            :title="t('action_hide')"
            @click="onHideSong"
          >
            <svg class="sf-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Progress Slider -->
      <div class="sheet-progress-section">
        <input
          type="range"
          id="fullTimelineSlider"
          min="0"
          max="100"
          step="0.1"
          :value="duration > 0 ? (currentTime / duration) * 100 : 0"
          :style="{
            '--progress-percent': `${duration > 0 ? (currentTime / duration) * 100 : 0}%`
          }"
          class="ios-slider"
          @input="onSliderChange"
        />
        <div class="sheet-time-labels">
          <span id="fullCurrentTime">{{ formattedCurrentTime }}</span>
          <span id="fullDuration">{{ formattedDuration }}</span>
        </div>
      </div>

      <!-- Boshqaruv Tugmalari -->
      <div class="sheet-main-controls">
        <button
          class="control-secondary-btn"
          :class="{ active: isShuffle }"
          id="fullShuffleBtn"
          :title="t('shuffle_btn')"
          @click="toggleShuffle"
        >
          <svg class="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 3 21 3 21 8" />
            <line x1="4" y1="20" x2="21" y2="3" />
            <polyline points="21 16 21 21 16 21" />
            <line x1="15" y1="15" x2="21" y2="21" />
            <line x1="4" y1="4" x2="9" y2="9" />
          </svg>
        </button>

        <button
          class="control-nav-btn"
          id="fullPrevBtn"
          title="Oldingi musiqa"
          @click="prev"
        >
          <svg class="sf-icon-lg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm3.2 7.78l9.53 6.35A1 1 0 0 0 20.27 18.3V5.7a1 1 0 0 0-1.54-.83L9.2 11.22a1 1 0 0 0 0 1.56z" />
          </svg>
        </button>

        <button
          class="control-play-btn"
          id="fullPlayPauseBtn"
          :title="isPlaying ? 'Pauza' : 'Ijro'"
          @click="togglePlay"
        >
          <svg v-if="isPlaying" class="sf-icon-hero" viewBox="0 0 24 24">
            <rect x="5.5" y="4.5" width="4.5" height="15" rx="2.25" fill="currentColor" />
            <rect x="14" y="4.5" width="4.5" height="15" rx="2.25" fill="currentColor" />
          </svg>
          <svg v-else class="sf-icon-hero" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M8.5 5.5v13a1 1 0 0 0 1.54.84l10.4-6.5a1 1 0 0 0 0-1.68l-10.4-6.5A1 1 0 0 0 8.5 5.5z"
            />
          </svg>
        </button>

        <button
          class="control-nav-btn"
          id="fullNextBtn"
          title="Keyingi musiqa"
          @click="next"
        >
          <svg class="sf-icon-lg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM4.73 5.7v12.6a1 1 0 0 0 1.54.83l9.53-6.35a1 1 0 0 0 0-1.56L6.27 4.87a1 1 0 0 0-1.54.83z" />
          </svg>
        </button>

        <button
          class="control-secondary-btn"
          :class="{ active: isLoop }"
          id="fullLoopBtn"
          title="Takrorlash"
          @click="toggleLoop"
        >
          <svg class="sf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="17 1 21 5 17 9" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <polyline points="7 23 3 19 7 15" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
          </svg>
        </button>
      </div>

      <!-- Ovoz Sladeri -->
      <div class="sheet-volume-section">
        <button
          type="button"
          class="volume-icon-btn"
          title="Ovozni o'chirish"
          @click="setVolume(0)"
        >
          <svg class="sf-icon-sm" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 5L6 9H3v6h3l5 4V5z" />
          </svg>
        </button>
        <input
          type="range"
          id="fullVolumeSlider"
          min="0"
          max="100"
          :value="volume"
          :style="{ '--vol-percent': `${volume}%` }"
          class="ios-slider ios-volume-slider"
          @input="onVolumeChange"
        />
        <button
          type="button"
          class="volume-icon-btn"
          title="Maksimal ovoz"
          @click="setVolume(100)"
        >
          <svg class="sf-icon-sm" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M3 9v6h4l5 5V4l-5 5H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
