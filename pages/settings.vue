<script setup lang="ts">
import { ref, computed } from 'vue';
import { COUNTRIES } from '~/constants/config';
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useI18n } from '~/composables/useI18n';
import { useToast } from '~/composables/useToast';
import { usePwaInstall } from '~/composables/usePwaInstall';
import type { RetentionType, AppLanguage, Country } from '~/types/music';

const emit = defineEmits<{
  (e: 'open-country-sheet'): void;
  (e: 'open-confirm-dialog'): void;
}>();

const { retention, region, totalListened, hiddenCount, setRetention } = useAntiRepeat();
const { currentLang, setLang, t } = useI18n();
const { showToast } = useToast();
const { installPwa, isInstalled } = usePwaInstall();

const isRetentionModalOpen = ref(false);
const isLangModalOpen = ref(false);

const RETENTION_OPTIONS: Array<{ value: RetentionType; labelKey: string; icon: string }> = [
  { value: 'never', labelKey: 'settings_retention_never', icon: '⏱' },
  { value: '7d', labelKey: 'settings_retention_7d', icon: '📅' },
  { value: '30d', labelKey: 'settings_retention_30d', icon: '🗓' }
];

const LANG_OPTIONS: Array<{ value: AppLanguage; title: string; flag: string }> = [
  { value: 'uz', title: "O'zbekcha", flag: '🇺🇿' },
  { value: 'ru', title: 'Русский', flag: '🇷🇺' },
  { value: 'en', title: 'English', flag: '🇬🇧' }
];

const config = useRuntimeConfig();
const appVersion = (config.public.appVersion as string) || '1.1.0';

const currentCountry = computed(() => {
  return COUNTRIES.find((c: Country) => c.code === region.value) || COUNTRIES[0];
});

const currentRetentionLabel = computed(() => {
  const found = RETENTION_OPTIONS.find((o) => o.value === retention.value);
  return found ? t(found.labelKey) : t('settings_retention_never');
});

const currentLangLabel = computed(() => {
  const found = LANG_OPTIONS.find((o) => o.value === currentLang.value);
  return found ? `${found.flag} ${found.title}` : "🇺🇿 O'zbekcha";
});

const selectRetention = (val: RetentionType) => {
  setRetention(val);
  isRetentionModalOpen.value = false;
};

const selectLanguage = (val: AppLanguage) => {
  setLang(val);
  isLangModalOpen.value = false;
  showToast(t('toast_lang_changed'));
};
</script>

<template>
  <div class="page-content" id="tabSettings">
    <!-- Large Title Header -->
    <div class="large-title-header">
      <span class="sub-heading">{{ t('settings_sub') }}</span>
      <h1 class="large-title">{{ t('settings_title') }}</h1>
    </div>

    <div class="ios-grouped-list">
      <!-- 1. Algoritm Sozlamalari -->
      <div class="group-header">{{ t('settings_group_algorithm') }}</div>
      <div class="group-cells">
        <!-- Qayta Chiqish Muddati (Retention) -->
        <div
          class="ios-cell interactive-cell"
          role="button"
          tabindex="0"
          @click="isRetentionModalOpen = true"
        >
          <div class="cell-main-left">
            <div class="cell-icon-badge purple-badge">
              <svg class="sf-icon-xs" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
                />
              </svg>
            </div>
            <div class="cell-label-text">
              <span class="cell-title">{{ t('settings_retention_label') }}</span>
              <span class="cell-subtitle">{{ t('settings_retention_sub') }}</span>
            </div>
          </div>
          <div class="cell-value-action">
            <span class="selected-value-preview">{{ currentRetentionLabel }}</span>
            <svg class="sf-icon-xxs arrow-right" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
        </div>

        <!-- Mintaqa va Davlat (Country) -->
        <div class="ios-cell interactive-cell" role="button" tabindex="0" @click="emit('open-country-sheet')">
          <div class="cell-main-left">
            <div class="cell-icon-badge blue-badge">
              <svg class="sf-icon-xs" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                />
              </svg>
            </div>
            <div class="cell-label-text">
              <span class="cell-title">{{ t('settings_country_label') }}</span>
              <span class="cell-subtitle">{{ t('settings_country_sub') }}</span>
            </div>
          </div>
          <div class="cell-value-action">
            <span class="selected-country-preview">
              {{ currentCountry.flag }} {{ currentCountry.name }}
            </span>
            <svg class="sf-icon-xxs arrow-right" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
        </div>

        <!-- Ilova Tili (Language) -->
        <div
          class="ios-cell interactive-cell"
          role="button"
          tabindex="0"
          @click="isLangModalOpen = true"
        >
          <div class="cell-main-left">
            <div class="cell-icon-badge orange-badge">
              <svg class="sf-icon-xs" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
                />
              </svg>
            </div>
            <div class="cell-label-text">
              <span class="cell-title">{{ t('settings_lang_label') }}</span>
              <span class="cell-subtitle">{{ t('settings_lang_sub') }}</span>
            </div>
          </div>
          <div class="cell-value-action">
            <span class="selected-value-preview">{{ currentLangLabel }}</span>
            <svg class="sf-icon-xxs arrow-right" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="group-footer-hint">
        {{ t('settings_group_hint') }}
      </div>

      <!-- 2. Tarix va Xotira Statistikasi -->
      <div class="group-header">{{ t('settings_group_stats') }}</div>
      <div class="group-cells">
        <div class="ios-cell readonly">
          <div class="cell-main-left">
            <div class="cell-icon-badge green-badge">
              <svg class="sf-icon-xs" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"
                />
              </svg>
            </div>
            <span class="cell-title">{{ t('settings_total_listened') }}</span>
          </div>
          <span class="cell-value" id="statsHeardCount">{{ totalListened }} ta</span>
        </div>

        <div class="ios-cell readonly">
          <div class="cell-main-left">
            <div class="cell-icon-badge gray-badge">
              <svg class="sf-icon-xs" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27z"
                />
              </svg>
            </div>
            <span class="cell-title">{{ t('settings_hidden_songs') }}</span>
          </div>
          <span class="cell-value" id="statsHiddenCount">{{ hiddenCount }} ta</span>
        </div>

        <button
          type="button"
          class="ios-cell-btn-danger"
          id="settingsClearHistoryBtn"
          @click="emit('open-confirm-dialog')"
        >
          <svg class="sf-icon-xs" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
          <span>{{ t('settings_clear_all_btn') }}</span>
        </button>
      </div>

      <!-- 3. Ilova Haqida -->
      <div class="group-header">{{ t('settings_group_about') }}</div>
      <div class="group-cells">
        <div class="ios-cell" role="button" tabindex="0" style="cursor: pointer;" @click="installPwa">
          <div class="cell-main-left">
            <div class="cell-icon-badge orange-badge">
              <svg class="sf-icon-xs" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
            </div>
            <span class="cell-title">{{ t('pwa_install_title') }}</span>
          </div>
          <span class="cell-value" style="color: var(--ios-accent); font-weight: 700;">
            {{ t('pwa_install_btn') }}
          </span>
        </div>

        <div class="ios-cell readonly">
          <span class="cell-title">{{ t('settings_app_version') }}</span>
          <span class="cell-value font-mono">v{{ appVersion }}</span>
        </div>
      </div>
    </div>

    <div class="bottom-safe-spacer"></div>

    <!-- Retention Picker Action Sheet Modal -->
    <div
      class="ios-action-sheet-overlay"
      :class="{ hidden: !isRetentionModalOpen }"
      @click.self="isRetentionModalOpen = false"
    >
      <div class="ios-action-sheet" id="retentionSheet">
        <div class="action-sheet-header">
          <div class="action-sheet-handle"></div>
          <h3>{{ t('settings_retention_label') }}</h3>
          <p>{{ t('settings_retention_sub') }}</p>
        </div>
        <div class="country-list-scroll">
          <button
            v-for="opt in RETENTION_OPTIONS"
            :key="opt.value"
            type="button"
            class="country-item-cell"
            :class="{ active: retention === opt.value }"
            @click="selectRetention(opt.value)"
          >
            <div class="country-flag-title">
              <span class="flag-icon">{{ opt.icon }}</span>
              <span class="name-text">{{ t(opt.labelKey) }}</span>
            </div>
            <svg
              v-if="retention === opt.value"
              class="sf-icon-sm checkmark"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          class="action-sheet-cancel-btn"
          @click="isRetentionModalOpen = false"
        >
          {{ t('confirm_cancel') }}
        </button>
      </div>
    </div>

    <!-- Language Picker Action Sheet Modal -->
    <div
      class="ios-action-sheet-overlay"
      :class="{ hidden: !isLangModalOpen }"
      @click.self="isLangModalOpen = false"
    >
      <div class="ios-action-sheet" id="langSheet">
        <div class="action-sheet-header">
          <div class="action-sheet-handle"></div>
          <h3>{{ t('settings_lang_label') }}</h3>
          <p>{{ t('settings_lang_sub') }}</p>
        </div>
        <div class="country-list-scroll">
          <button
            v-for="opt in LANG_OPTIONS"
            :key="opt.value"
            type="button"
            class="country-item-cell"
            :class="{ active: currentLang === opt.value }"
            @click="selectLanguage(opt.value)"
          >
            <div class="country-flag-title">
              <span class="flag-icon">{{ opt.flag }}</span>
              <span class="name-text">{{ opt.title }}</span>
            </div>
            <svg
              v-if="currentLang === opt.value"
              class="sf-icon-sm checkmark"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          class="action-sheet-cancel-btn"
          @click="isLangModalOpen = false"
        >
          {{ t('confirm_cancel') }}
        </button>
      </div>
    </div>
  </div>
</template>
