<script setup lang="ts">
import { COUNTRIES } from '~/constants/config';
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useI18n } from '~/composables/useI18n';
import { useToast } from '~/composables/useToast';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'country-changed', code: string): void;
}>();

const { region, setRegion } = useAntiRepeat();
const { t } = useI18n();
const { showToast } = useToast();

const selectCountry = (code: string, name: string) => {
  setRegion(code);
  emit('country-changed', code);
  emit('close');
  showToast(t('toast_country_changed', { country: name }));
};
</script>

<template>
  <div
    class="ios-action-sheet-overlay"
    :class="{ hidden: !isOpen }"
    id="countrySheetOverlay"
    @click.self="emit('close')"
  >
    <div class="ios-action-sheet" id="countrySheet">
      <div class="action-sheet-header">
        <div class="action-sheet-handle"></div>
        <h3>{{ t('select_country') }}</h3>
        <p>{{ t('settings_country_sub') }}</p>
      </div>
      <div class="country-list-scroll" id="countryListContainer">
        <button
          v-for="country in COUNTRIES"
          :key="country.code"
          class="country-item-cell"
          :class="{ active: country.code === region }"
          @click="selectCountry(country.code, country.name)"
        >
          <div class="country-flag-title">
            <span class="flag-icon">{{ country.flag }}</span>
            <span class="name-text">{{ country.name }}</span>
          </div>
          <svg
            v-if="country.code === region"
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
        class="action-sheet-cancel-btn"
        id="closeCountrySheetBtn"
        @click="emit('close')"
      >
        {{ t('confirm_cancel') }}
      </button>
    </div>
  </div>
</template>
