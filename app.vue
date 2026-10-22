<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from '~/composables/useI18n';
import { useAntiRepeat } from '~/composables/useAntiRepeat';
import { useYouTubePlayer } from '~/composables/useYouTubePlayer';

const { initLang } = useI18n();
const { initAntiRepeat, clearAllHistory } = useAntiRepeat();
const { initYTPlayer } = useYouTubePlayer();

const isCountrySheetOpen = ref(false);
const isConfirmDialogOpen = ref(false);
const pageComponentRef = ref<any>(null);

const onConfirmClearHistory = () => {
  clearAllHistory();
  isConfirmDialogOpen.value = false;
  if (pageComponentRef.value?.refresh) {
    pageComponentRef.value.refresh();
  }
};

const onGlobalRefresh = () => {
  if (pageComponentRef.value?.refresh) {
    pageComponentRef.value.refresh();
  }
};

onMounted(() => {
  initLang();
  initAntiRepeat();
  initYTPlayer();
});
</script>

<template>
  <div class="ios-app" id="app">
    <!-- Offline status notification -->
    <OfflineBanner />

    <!-- Fixed Header -->
    <Header @refresh="onGlobalRefresh" />

    <!-- Main scroll container with page content -->
    <div class="ios-scroll-container" id="scrollContainer">
      <NuxtPage
        ref="pageComponentRef"
        @open-country-sheet="isCountrySheetOpen = true"
        @open-confirm-dialog="isConfirmDialogOpen = true"
      />
    </div>

    <!-- Mini Floating Player -->
    <MiniPlayer />

    <!-- iOS Floating Tab Bar -->
    <BottomTabBar />

    <!-- Full Screen Player Modal Sheet -->
    <FullPlayerModal />

    <!-- Country / Region Picker Action Sheet -->
    <CountryPickerModal
      :is-open="isCountrySheetOpen"
      @close="isCountrySheetOpen = false"
    />

    <!-- Confirm Dialog -->
    <ConfirmDialog
      :is-open="isConfirmDialogOpen"
      @confirm="onConfirmClearHistory"
      @cancel="isConfirmDialogOpen = false"
    />

    <!-- Toast Notification Pill -->
    <Toast />

    <!-- Hidden YouTube IFrame Slot -->
    <div class="hidden-yt-player-slot">
      <div id="youtubePlayer"></div>
    </div>
  </div>
</template>
