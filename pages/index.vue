<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useMusicApi } from '~/composables/useMusicApi';
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useYouTubePlayer } from '~/composables/useYouTubePlayer';
import { useI18n } from '~/composables/useI18n';
import { GENRES } from '~/constants/config';
import type { Song } from '~/types/music';

const emit = defineEmits<{
  (e: 'open-country-sheet'): void;
  (e: 'open-confirm-dialog'): void;
}>();

const { fetchChartSongs, searchSongs } = useMusicApi();
const { region, filterSongs, isHeard, isHidden } = useAntiRepeat();
const { playSong } = useYouTubePlayer();
const { t } = useI18n();

const activeGenre = ref('all');
const rawSongs = ref<Song[]>([]);
const homeSearchQuery = ref('');
const isLoading = ref(true);
const isLoadingMore = ref(false);
const nextPageToken = ref<string | undefined>(undefined);

// Filtered songs according to the Anti-Repeat engine & search query
const displayedSongs = computed(() => {
  let list = filterSongs(rawSongs.value);

  if (homeSearchQuery.value.trim()) {
    const q = homeSearchQuery.value.trim().toLowerCase();
    list = list.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.channelTitle.toLowerCase().includes(q)
    );
  }

  return list;
});

const isAllHeard = computed(() => {
  return !isLoading.value && rawSongs.value.length > 0 && displayedSongs.value.length === 0;
});

const loadSongs = async (reset = true) => {
  if (reset) {
    isLoading.value = true;
    nextPageToken.value = undefined;
  } else {
    isLoadingMore.value = true;
  }

  const result = await fetchChartSongs(
    region.value,
    activeGenre.value,
    reset ? undefined : nextPageToken.value
  );

  if (reset) {
    rawSongs.value = result.songs;
  } else {
    // Append unique
    const existingIds = new Set(rawSongs.value.map((s) => s.id));
    for (const s of result.songs) {
      if (!existingIds.has(s.id)) {
        rawSongs.value.push(s);
      }
    }
  }

  nextPageToken.value = result.nextPageToken;
  isLoading.value = false;
  isLoadingMore.value = false;
};

const onSelectGenre = (genreId: string) => {
  if (activeGenre.value === genreId) return;
  activeGenre.value = genreId;
  loadSongs(true);
};

const onClearSearch = () => {
  homeSearchQuery.value = '';
};

const loadMore = () => {
  if (isLoadingMore.value || !nextPageToken.value) return;
  loadSongs(false);
};

const shuffleAndPlay = () => {
  if (displayedSongs.value.length > 0) {
    const randIdx = Math.floor(Math.random() * displayedSongs.value.length);
    playSong(displayedSongs.value[randIdx], displayedSongs.value);
  }
};

watch(region, () => {
  loadSongs(true);
});

onMounted(() => {
  loadSongs(true);
});

defineExpose({
  refresh: () => loadSongs(true)
});
</script>

<template>
  <div class="page-content" id="tabHome">
    <!-- Large Title & Top Trends Badge -->
    <div class="large-title-header flex-header" id="largeTitleHeader">
      <div>
        <span class="sub-heading">{{ t('smart_picks_sub') }}</span>
        <h1 class="large-title">{{ t('music') }}</h1>
      </div>
      <div class="hero-trend-badge" id="heroTrendBadge">
        <svg class="hero-badge-svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.61 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
          />
        </svg>
        <span class="hero-badge-text">{{ t('top_trends') }}</span>
      </div>
    </div>

    <!-- Sticky Home Search Bar -->
    <div class="home-search-sticky-bar" id="homeSearchStickyBar">
      <div class="ios-search-field home-search-field">
        <svg class="sf-icon-xs home-search-icon" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z"
          />
        </svg>
        <input
          v-model="homeSearchQuery"
          type="text"
          id="homeSearchInput"
          :placeholder="t('search_home_placeholder')"
          autocomplete="off"
          enterkeyhint="search"
          aria-label="Bosh sahifada musiqa qidirish"
        />
        <button
          v-if="homeSearchQuery"
          type="button"
          class="search-clear-btn"
          aria-label="Tozalash"
          @click="onClearSearch"
        >
          &times;
        </button>
      </div>
    </div>

    <!-- Genre Chips and Country Picker -->
    <GenreChips
      :active-genre="activeGenre"
      @select-genre="onSelectGenre"
      @open-country-sheet="emit('open-country-sheet')"
    />

    <!-- Takrorlanmaslik Status Bar -->
    <div class="ios-status-bar">
      <div class="status-left">
        <span class="status-dot"></span>
        <span class="status-text" id="statusTrackCount">
          <span v-if="isLoading">{{ t('songs_filtering') }}</span>
          <span v-else>{{ t('songs_count', { count: displayedSongs.length }) }}</span>
        </span>
      </div>

      <button
        v-if="displayedSongs.length > 0"
        class="ios-text-btn"
        id="shuffleSongsBtn"
        @click="shuffleAndPlay"
      >
        <svg class="sf-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
          <line x1="4" y1="4" x2="9" y2="9" />
        </svg>
        <span>{{ t('shuffle_btn') }}</span>
      </button>
    </div>

    <!-- Loading Skeleton -->
    <div v-if="isLoading" class="songs-grid skeleton-container">
      <div v-for="n in 8" :key="n" class="skeleton-row">
        <div class="skeleton-box"></div>
        <div class="skeleton-lines">
          <div class="skeleton-line" style="width: 70%;"></div>
          <div class="skeleton-line" style="width: 45%;"></div>
        </div>
      </div>
    </div>

    <!-- Songs List/Grid -->
    <div v-else-if="displayedSongs.length > 0" class="songs-grid" id="songsGrid">
      <SongCard
        v-for="song in displayedSongs"
        :key="song.id"
        :song="song"
        :playlist="displayedSongs"
      />
    </div>

    <!-- All Heard State (Anti-Repeat Empty State) -->
    <div v-else-if="isAllHeard" class="all-heard-card" id="allHeardState">
      <div class="all-heard-icon">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
      </div>
      <h2>{{ t('all_heard_title') }}</h2>
      <p>{{ t('all_heard_desc') }}</p>
      <button
        class="ios-btn-primary"
        id="clearHistoryFromEmptyBtn"
        @click="emit('open-confirm-dialog')"
      >
        {{ t('clear_history_btn') }}
      </button>
    </div>

    <!-- No Songs Found State -->
    <div v-else class="empty-placeholder-card">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 3v9.28a4.39 4.39 0 00-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"
        />
      </svg>
      <h3>{{ t('no_songs_found') }}</h3>
      <p>{{ t('search_initial_hint') }}</p>
    </div>

    <!-- Load More Button -->
    <div v-if="nextPageToken && displayedSongs.length > 0" class="load-more-section">
      <button
        class="ios-load-more-btn"
        :disabled="isLoadingMore"
        @click="loadMore"
      >
        <span v-if="isLoadingMore">{{ t('loading_more_songs') }}</span>
        <span v-else>Ko'proq yuklash...</span>
      </button>
    </div>

    <div class="bottom-safe-spacer"></div>
  </div>
</template>
