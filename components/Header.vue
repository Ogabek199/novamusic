<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from '~/composables/useI18n';
import { useToast } from '~/composables/useToast';
import type { AppLanguage } from '~/types/music';

const emit = defineEmits<{
  (e: 'refresh'): void;
}>();

const router = useRouter();
const { currentLang, setLang, t } = useI18n();
const { showToast } = useToast();

const onLangChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const newLang = target.value as AppLanguage;
  setLang(newLang);
  showToast(t('toast_lang_changed'));
};

const onBrandClick = () => {
  router.push('/');
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const onRefreshClick = () => {
  emit('refresh');
  showToast(t('toast_refreshing'));
};
</script>

<template>
  <header class="ios-navbar app-fixed-header" id="iosNavbar">
    <div class="navbar-blur-bg"></div>
    <div class="navbar-content">
      <!-- Chap: YouTube Music Brand va Anti-Repeat Status -->
      <div
        class="header-brand-container"
        id="headerBrand"
        role="button"
        tabindex="0"
        title="Bosh sahifaga qaytish"
        @click="onBrandClick"
      >
        <div class="header-logo-badge">
          <svg class="yt-music-logo-svg" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="novaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FA2D48" />
                <stop offset="100%" stop-color="#FF6B8B" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" fill="url(#novaGrad)" fill-opacity="0.25" />
            <path
              fill="currentColor"
              d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
            />
          </svg>
          <span class="logo-glow-ring"></span>
        </div>
        <div class="header-brand-info">
          <div class="brand-text-row">
            <span class="brand-name-yt font-black tracking-tight text-white">Nova</span>
            <span class="brand-name-music font-extrabold text-nova-500">Music</span>
          </div>
          <div class="header-status-pill" id="headerStatusPill">
            <span class="status-pulse-dot"></span>
            <span class="status-pill-text" id="headerDynamicStatus">Anti-Repeat</span>
          </div>
        </div>
      </div>

      <!-- O'rta: Sarlavha konteksti -->
      <div class="navbar-inline-title" id="navbarInlineTitle">
        {{ t('music') }}
      </div>

      <!-- O'ng: Interaktiv Tugmalar -->
      <div class="header-actions-group">
        <!-- Til tanlash Select Dropdown -->
        <div class="header-lang-select-wrapper" title="Tilni tanlang">
          <select
            :value="currentLang"
            class="header-lang-select"
            aria-label="Tilni tanlang"
            @change="onLangChange"
          >
            <option value="uz">🇺🇿 UZ</option>
            <option value="ru">🇷🇺 RU</option>
            <option value="en">🇬🇧 EN</option>
          </select>
          <svg class="sf-icon-xxs lang-select-arrow" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 10l5 5 5-5z" />
          </svg>
        </div>

        <!-- Yangilash / Aralashtirish tugmasi -->
        <button
          class="navbar-action-icon-btn"
          id="navbarActionBtn"
          :title="t('refresh_tooltip')"
          :aria-label="t('refresh_tooltip')"
          @click="onRefreshClick"
        >
          <svg class="sf-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 4V1L8 5l4 4V6c3.3 0 6 2.7 6 6 0 1-.3 2-.7 2.8l1.5 1.5C19.5 14.9 20 13.5 20 12c0-4.4-3.6-8-8-8zm-6.8 1.7L3.7 7.2C4.5 8.6 5 10.2 5 12c0 4.4 3.6 8 8 8v3l4-4-4-4v3c-3.3 0-6-2.7-6-6 0-1.2.4-2.4 1.2-3.3z"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
