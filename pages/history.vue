<script setup lang="ts">
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useYouTubePlayer } from '~/composables/useYouTubePlayer';
import { useI18n } from '~/composables/useI18n';
import type { Song, HistoryItem } from '~/types/music';

const emit = defineEmits<{
  (e: 'open-confirm-dialog'): void;
}>();

const { history, removeFromHistory } = useAntiRepeat();
const { playSong, currentSong, isPlaying } = useYouTubePlayer();
const { t } = useI18n();

const formatTimeAgo = (timestamp: number): string => {
  const diffSecs = Math.floor((Date.now() - timestamp) / 1000);
  if (diffSecs < 60) return t('just_now');
  const diffMins = Math.floor(diffSecs / 60);
  if (diffMins < 60) return t('mins_ago', { mins: diffMins });
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return t('hours_ago', { hours: diffHours });
  const diffDays = Math.floor(diffHours / 24);
  return t('days_ago', { days: diffDays });
};

const onPlayHistoryItem = (item: HistoryItem) => {
  const song: Song = {
    id: item.id,
    title: item.title,
    channelTitle: item.channelTitle,
    thumbnail: item.thumbnail,
    duration: item.duration,
    durationSeconds: item.durationSeconds
  };
  playSong(song);
};

const onDeleteItem = (id: string, e: Event) => {
  e.stopPropagation();
  removeFromHistory(id);
};
</script>

<template>
  <div class="page-content" id="tabHistory">
    <!-- Header with Clear Action -->
    <div
      class="large-title-header"
      style="display: flex; justify-content: space-between; align-items: flex-end;"
    >
      <div>
        <span class="sub-heading">{{ t('history_sub') }}</span>
        <h1 class="large-title">{{ t('history_title') }}</h1>
      </div>
      <button
        v-if="history.length > 0"
        id="clearAllHistoryBtn"
        class="ios-text-btn danger-text"
        @click="emit('open-confirm-dialog')"
      >
        {{ t('clear_btn') }}
      </button>
    </div>

    <!-- History List -->
    <div v-if="history.length > 0" class="history-list-view" id="historyContainer">
      <div
        v-for="item in history"
        :key="item.id + '_' + item.timestamp"
        class="history-item-row"
        :class="{ active: currentSong?.id === item.id }"
        role="button"
        tabindex="0"
        @click="onPlayHistoryItem(item)"
      >
        <div class="history-thumb-wrapper">
          <img
            :src="item.thumbnail"
            :alt="item.title"
            class="history-thumb"
            loading="lazy"
          />
          <div v-if="currentSong?.id === item.id && isPlaying" class="history-wave-indicator">
            <span class="bar bar-1"></span>
            <span class="bar bar-2"></span>
            <span class="bar bar-3"></span>
          </div>
        </div>

        <div class="history-meta">
          <h4 class="history-title" :title="item.title">
            {{ item.title }}
          </h4>
          <div class="history-sub">
            <span>{{ item.channelTitle }}</span>
            <span class="meta-dot">&bull;</span>
            <span class="history-time-ago">{{ formatTimeAgo(item.timestamp) }}</span>
          </div>
        </div>

        <button
          class="history-delete-btn"
          title="Tarixdan o'chirish"
          @click="onDeleteItem(item.id, $event)"
        >
          <svg class="sf-icon-xs" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-placeholder-card" id="historyEmptyState">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 3v9.28a4.39 4.39 0 00-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"
        />
      </svg>
      <h3>{{ t('history_empty_title') }}</h3>
      <p>{{ t('history_empty_desc') }}</p>
    </div>

    <div class="bottom-safe-spacer"></div>
  </div>
</template>
