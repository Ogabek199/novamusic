<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
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

const isLangDropdownOpen = ref(false);
const langDropdownRef = ref<HTMLElement | null>(null);

const LANGUAGES: Array<{ code: AppLanguage; flag: string; label: string; short: string }> = [
  { code: 'uz', flag: '🇺🇿', label: "O'zbekcha", short: 'UZ' },
  { code: 'ru', flag: '🇷🇺', label: 'Русский', short: 'RU' },
  { code: 'en', flag: '🇬🇧', label: 'English', short: 'EN' }
];

const currentLangMeta = computed(() => {
  return LANGUAGES.find((l) => l.code === currentLang.value) || LANGUAGES[0];
});

const selectLang = (code: AppLanguage) => {
  if (currentLang.value !== code) {
    setLang(code);
    showToast(t('toast_lang_changed'));
  }
  isLangDropdownOpen.value = false;
};

const onDocumentClick = (e: MouseEvent) => {
  if (langDropdownRef.value && !langDropdownRef.value.contains(e.target as Node)) {
    isLangDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', onDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick);
});

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
            <span class="brand-name-yt">Nova</span>
            <span class="brand-name-music">Music</span>
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
        <!-- Maxsus iOS Til Tanlash UI Dropdown -->
        <div class="header-custom-select-wrapper" ref="langDropdownRef">
          <button
            type="button"
            class="header-lang-btn"
            :class="{ active: isLangDropdownOpen }"
            aria-label="Tilni tanlash"
            aria-haspopup="listbox"
            :aria-expanded="isLangDropdownOpen"
            @click.stop="isLangDropdownOpen = !isLangDropdownOpen"
          >
            <span class="header-lang-flag">{{ currentLangMeta.flag }}</span>
            <span class="header-lang-code">{{ currentLangMeta.short }}</span>
            <svg
              class="sf-icon-xxs lang-chevron"
              :class="{ rotated: isLangDropdownOpen }"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M7 10l5 5 5-5z" />
            </svg>
          </button>

          <!-- Custom iOS Popover Dropdown -->
          <Transition name="ios-popover">
            <div v-if="isLangDropdownOpen" class="header-lang-popover" role="listbox">
              <div class="popover-options">
                <button
                  v-for="item in LANGUAGES"
                  :key="item.code"
                  type="button"
                  class="popover-option-item"
                  :class="{ selected: currentLang === item.code }"
                  role="option"
                  :aria-selected="currentLang === item.code"
                  @click="selectLang(item.code)"
                >
                  <div class="option-left">
                    <span class="option-flag">{{ item.flag }}</span>
                    <span class="option-label">{{ item.label }}</span>
                  </div>
                  <svg
                    v-if="currentLang === item.code"
                    class="sf-icon-xs check-icon"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Transition>
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
