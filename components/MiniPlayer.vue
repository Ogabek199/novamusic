<script setup lang="ts">
import { useYouTubePlayer } from '~/composables/useYouTubePlayer';
import { useI18n } from '~/composables/useI18n';

const { currentSong, isPlaying, togglePlay, next, closePlayer, openFullPlayer } = useYouTubePlayer();
const { t } = useI18n();
</script>

<template>
  <aside v-if="currentSong" class="ios-mini-player" id="miniPlayer">
    <div class="mini-player-blur"></div>
    <div
      class="mini-player-content"
      id="miniPlayerOpenArea"
      role="button"
      tabindex="0"
      @click="openFullPlayer"
    >
      <img
        :src="currentSong.thumbnail"
        :alt="currentSong.title"
        id="miniPlayerThumb"
        class="mini-thumb"
        loading="lazy"
      />
      <div class="mini-player-info">
        <div class="mini-title" id="miniPlayerTitle">
          {{ currentSong.title }}
        </div>
        <div class="mini-artist" id="miniPlayerArtist">
          {{ currentSong.channelTitle }}
        </div>
      </div>
    </div>
    <div class="mini-player-actions">
      <button
        class="mini-action-btn"
        id="miniPlayPauseBtn"
        :title="isPlaying ? 'Pauza' : 'Ijro'"
        @click.stop="togglePlay"
      >
        <svg v-if="isPlaying" class="sf-icon" viewBox="0 0 24 24">
          <rect x="6" y="5" width="4" height="14" rx="2" fill="currentColor" />
          <rect x="14" y="5" width="4" height="14" rx="2" fill="currentColor" />
        </svg>
        <svg v-else class="sf-icon" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8.5 5.5v13a1 1 0 0 0 1.54.84l10.4-6.5a1 1 0 0 0 0-1.68l-10.4-6.5A1 1 0 0 0 8.5 5.5z"
          />
        </svg>
      </button>
      <button
        class="mini-action-btn"
        id="miniNextBtn"
        title="Keyingi musiqa"
        @click.stop="next"
      >
        <svg class="sf-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM4.73 5.7v12.6a1 1 0 0 0 1.54.83l9.53-6.35a1 1 0 0 0 0-1.56L6.27 4.87a1 1 0 0 0-1.54.83z" />
        </svg>
      </button>
      <button
        class="mini-action-btn mini-close-btn"
        id="miniCloseBtn"
        title="Yopish"
        aria-label="Qo'shiqni yopish"
        @click.stop="closePlayer"
      >
        <svg class="sf-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </aside>
</template>
