<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useMusicApi } from '~/composables/useMusicApi';
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useI18n } from '~/composables/useI18n';
import type { Song } from '~/types/music';

const { searchSongs } = useMusicApi();
const { region, filterSongs } = useAntiRepeat();
const { t } = useI18n();

const searchQuery = ref('');
const searchResults = ref<Song[]>([]);
const isSearching = ref(false);
const hasSearched = ref(false);
let debounceTimer: any = null;

const performSearch = async () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = [];
    hasSearched.value = false;
    isSearching.value = false;
    return;
  }

  isSearching.value = true;
  hasSearched.value = true;
  const songs = await searchSongs(searchQuery.value.trim(), region.value);
  searchResults.value = filterSongs(songs);
  isSearching.value = false;
};

watch(searchQuery, (newVal) => {
  if (debounceTimer) clearTimeout(debounceTimer);
  if (!newVal.trim()) {
    searchResults.value = [];
    hasSearched.value = false;
    return;
  }
  debounceTimer = setTimeout(() => {
    performSearch();
  }, 400);
});

const clearSearch = () => {
  searchQuery.value = '';
  searchResults.value = [];
  hasSearched.value = false;
};
</script>

<template>
  <div class="page-content" id="tabSearch">
    <!-- Large Title Header -->
    <div class="large-title-header">
      <h1 class="large-title">{{ t('search_title') }}</h1>
    </div>

    <!-- Search Input Wrapper -->
    <div class="ios-search-wrapper">
      <div class="ios-search-field">
        <svg class="sf-icon-sm" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z"
          />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          id="searchInput"
          :placeholder="t('search_placeholder')"
          autocomplete="off"
          enterkeyhint="search"
          autofocus
          @keyup.enter="performSearch"
        />
        <button
          v-if="searchQuery"
          type="button"
          class="search-clear-btn"
          aria-label="Tozalash"
          @click="clearSearch"
        >
          &times;
        </button>
      </div>
    </div>

    <!-- Results or States -->
    <div class="search-results-list" id="searchResultsContainer">
      <!-- Loading Skeleton -->
      <div v-if="isSearching" class="songs-grid skeleton-container">
        <div v-for="n in 6" :key="n" class="song-card skeleton-card">
          <div class="skeleton-thumb"></div>
          <div class="skeleton-meta">
            <div class="skeleton-line line-title"></div>
            <div class="skeleton-line line-sub"></div>
          </div>
        </div>
      </div>

      <!-- Found Songs -->
      <div v-else-if="searchResults.length > 0" class="songs-grid">
        <SongCard
          v-for="song in searchResults"
          :key="song.id"
          :song="song"
          :playlist="searchResults"
        />
      </div>

      <!-- Empty Results State -->
      <div v-else-if="hasSearched" class="empty-placeholder-card">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z"
          />
        </svg>
        <h3>{{ t('no_songs_found') }}</h3>
        <p>Boshqa so'z yoki ijrochi nomini sinab ko'ring.</p>
      </div>

      <!-- Initial Hint -->
      <div v-else class="search-initial-hint">
        <p>{{ t('search_initial_hint') }}</p>
      </div>
    </div>

    <div class="bottom-safe-spacer"></div>
  </div>
</template>
