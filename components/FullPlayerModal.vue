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
    :class="{ open: isFullPlayerOpen }"
    id="fullPlayerSheet"
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
      @click="closeFullPlayer"
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
          :value="duration > 0 ? (currentTime / duration) * 100 : 0"
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
          <svg class="sf-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10.6 13.4l-1.4 1.4-4-4c-.8-.8-.8-2 0-2.8l4-4 1.4 1.4L7.8 8.2c.4.1.8.3 1.1.6l1.7 1.7zm2.8-2.8l1.4-1.4 4 4c.8.8.8 2 0 2.8l-4 4-1.4-1.4 2.8-2.8c-.4-.1-.8-.3-1.1-.6l-1.7-1.7zm1.4 5.6l4 4-1.4 1.4-4-4 1.4-1.4zm-5.6-5.6L5.2 6.6 6.6 5.2l4 4-1.4 1.4z"
            />
          </svg>
        </button>

        <button
          class="control-nav-btn"
          id="fullPrevBtn"
          title="Oldingi musiqa"
          @click="prev"
        >
          <svg class="sf-icon-lg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        </button>

        <button
          class="control-play-btn"
          id="fullPlayPauseBtn"
          :title="isPlaying ? 'Pauza' : 'Ijro'"
          @click="togglePlay"
        >
          <svg v-if="isPlaying" class="sf-icon-hero" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
          <svg v-else class="sf-icon-hero" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8 5v14l11-7z" />
          </svg>
        </button>

        <button
          class="control-nav-btn"
          id="fullNextBtn"
          title="Keyingi musiqa"
          @click="next"
        >
          <svg class="sf-icon-lg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>

        <button
          class="control-secondary-btn"
          :class="{ active: isLoop }"
          id="fullLoopBtn"
          title="Takrorlash"
          @click="toggleLoop"
        >
          <svg class="sf-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
            />
          </svg>
        </button>
      </div>

      <!-- Ovoz Sladeri -->
      <div class="sheet-volume-section">
        <svg class="sf-icon-sm" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 9v6h4l5 5V4l-5 5H7z" />
        </svg>
        <input
          type="range"
          id="fullVolumeSlider"
          min="0"
          max="100"
          :value="volume"
          class="ios-slider"
          @input="onVolumeChange"
        />
        <svg class="sf-icon-sm" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3 9v6h4l5 5V4l-5 5H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
