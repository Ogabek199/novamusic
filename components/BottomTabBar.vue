<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useI18n } from '~/composables/useI18n';

const route = useRoute();
const router = useRouter();
const { totalListened } = useAntiRepeat();
const { t } = useI18n();

const navigateToTab = (path: string) => {
  router.push(path);
};
</script>

<template>
  <nav class="ios-floating-bar-wrapper" id="iosTabBar">
    <!-- Asosiy navigatsiya orolchasi (Pill Island) -->
    <div class="ios-tab-bar-island">
      <button
        class="tab-item"
        :class="{ active: route.path === '/' }"
        @click="navigateToTab('/')"
      >
        <div class="tab-icon-wrapper">
          <svg class="sf-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
          </svg>
        </div>
        <span class="tab-label">{{ t('tab_home') }}</span>
      </button>

      <button
        class="tab-item"
        :class="{ active: route.path === '/history' }"
        @click="navigateToTab('/history')"
      >
        <div class="tab-icon-wrapper">
          <svg class="sf-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
            />
          </svg>
          <span v-if="totalListened > 0" class="tab-badge" id="tabHistoryBadge">
            {{ totalListened }}
          </span>
        </div>
        <span class="tab-label">{{ t('tab_history') }}</span>
      </button>

      <button
        class="tab-item"
        :class="{ active: route.path === '/settings' }"
        @click="navigateToTab('/settings')"
      >
        <div class="tab-icon-wrapper">
          <svg class="sf-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
            />
          </svg>
        </div>
        <span class="tab-label">{{ t('tab_settings') }}</span>
      </button>
    </div>

    <!-- Alohida Qidiruv tugmasi (Search Button) -->
    <button
      class="tab-item tab-search-fab"
      :class="{ active: route.path === '/search' }"
      :title="t('tab_search')"
      :aria-label="t('tab_search')"
      @click="navigateToTab('/search')"
    >
      <div class="search-fab-icon-box">
        <svg class="sf-icon" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z"
          />
        </svg>
      </div>
    </button>
  </nav>
</template>
