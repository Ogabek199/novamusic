<script setup lang="ts">
import { useYouTubePlayer } from '~/composables/useYouTubePlayer';
import { useI18n } from '~/composables/useI18n';

const { currentSong, isPlaying, togglePlay, next, openFullPlayer } = useYouTubePlayer();
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
          <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
        <svg v-else class="sf-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 5v14l11-7z" />
        </svg>
      </button>
      <button
        class="mini-action-btn"
        id="miniNextBtn"
        title="Keyingi musiqa"
        @click.stop="next"
      >
        <svg class="sf-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
      </button>
    </div>
  </aside>
</template>
