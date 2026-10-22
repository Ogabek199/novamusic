<script setup lang="ts">
import { computed } from 'vue';
import type { Song } from '~/types/music';
import { useYouTubePlayer } from '~/composables/useYouTubePlayer';
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useI18n } from '~/composables/useI18n';

const props = defineProps<{
  song: Song;
  playlist?: Song[];
}>();

const { currentSong, isPlaying, playSong, togglePlay } = useYouTubePlayer();
const { isHeard, markAsHeard, hideSong } = useAntiRepeat();
const { t } = useI18n();

const isCurrent = computed(() => currentSong.value?.id === props.song.id);
const isCurrentlyPlaying = computed(() => isCurrent.value && isPlaying.value);
const isSongHeard = computed(() => isHeard(props.song.id));

const onCardClick = () => {
  if (isCurrent.value) {
    togglePlay();
  } else {
    playSong(props.song, props.playlist);
  }
};

const onMarkHeard = (e: Event) => {
  e.stopPropagation();
  markAsHeard(props.song);
};

const onHide = (e: Event) => {
  e.stopPropagation();
  hideSong(props.song.id);
};
</script>

<template>
  <div class="ios-song-row-wrapper" :data-id="song.id">
    <div
      class="ios-song-card"
      :class="{
        'is-active': isCurrent,
        'is-playing': isCurrentlyPlaying,
        'is-heard': isSongHeard
      }"
      role="button"
      tabindex="0"
      @click="onCardClick"
    >
      <!-- Thumbnail box with duration tag and playing wave -->
      <div class="song-thumb-box">
        <img
          :src="song.thumbnail"
          :alt="song.title"
          class="song-thumb-img"
          loading="lazy"
        />
        <span class="song-duration-tag">{{ song.duration }}</span>
        <div v-if="isCurrentlyPlaying" class="song-playing-wave-overlay">
          <span class="wave-bar bar-1"></span>
          <span class="wave-bar bar-2"></span>
          <span class="wave-bar bar-3"></span>
        </div>
      </div>

      <!-- Details: Title & Artist -->
      <div class="song-details">
        <div class="song-title-text" :title="song.title">
          {{ song.title }}
        </div>
        <div class="song-artist-text">
          <span>{{ song.channelTitle }}</span>
          <span v-if="isSongHeard" class="heard-indicator-tag">
            &bull; {{ t('action_heard') }}
          </span>
        </div>
      </div>

      <!-- Quick Actions (Mark Heard, Hide) -->
      <div class="song-actions-cluster" @click.stop>
        <button
          class="song-action-pill-btn"
          :class="{ heard: isSongHeard }"
          :title="t('action_heard')"
          @click="onMarkHeard"
        >
          <svg class="sf-icon-xs" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
            />
          </svg>
        </button>

        <button
          class="song-action-pill-btn hide-btn"
          :title="t('action_hide')"
          @click="onHide"
        >
          <svg class="sf-icon-xs" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
