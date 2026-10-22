<script setup lang="ts">
import { computed } from 'vue';
import { GENRES, COUNTRIES } from '~/constants/config';
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useI18n } from '~/composables/useI18n';

const props = defineProps<{
  activeGenre: string;
}>();

const emit = defineEmits<{
  (e: 'select-genre', genreId: string): void;
  (e: 'open-country-sheet'): void;
}>();

const { region } = useAntiRepeat();
const { t } = useI18n();

const currentCountry = computed(() => {
  return COUNTRIES.find((c) => c.code === region.value) || COUNTRIES[0];
});
</script>

<template>
  <div class="chips-scroll-view">
    <div class="chips-track" id="genreChipsTrack">
      <!-- Davlat tanlash tugmasi (Janrlar oldida) -->
      <button
        class="ios-country-chip-btn"
        id="countrySelectBtn"
        :title="t('select_country')"
        @click="emit('open-country-sheet')"
      >
        <span class="country-flag">{{ currentCountry.flag }}</span>
        <span class="country-name">{{ currentCountry.name }}</span>
        <svg class="sf-icon-xxs country-chip-arrow" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      <!-- Janr Chiplari -->
      <button
        v-for="g in GENRES"
        :key="g.id"
        class="ios-chip"
        :class="{ active: activeGenre === g.id }"
        @click="emit('select-genre', g.id)"
      >
        {{ t(g.nameKey) }}
      </button>
    </div>
  </div>
</template>
