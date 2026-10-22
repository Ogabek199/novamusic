<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from '~/composables/useI18n';

const isOffline = ref(false);
const { t } = useI18n();

const updateOnlineStatus = () => {
  if (typeof window !== 'undefined') {
    isOffline.value = !navigator.onLine;
  }
};

onMounted(() => {
  updateOnlineStatus();
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus);
  window.removeEventListener('offline', updateOnlineStatus);
});
</script>

<template>
  <div v-if="isOffline" class="offline-banner" id="offlineBanner">
    <svg class="sf-icon" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 4c4.4 0 8 3.6 8 8 0 1.6-.5 3.1-1.3 4.4l-1.5-1.5c.5-.9.8-1.9.8-2.9 0-3.3-2.7-6-6-6-1 0-2 .3-2.9.8L7.6 5.3C8.9 4.5 10.4 4 12 4zm9.7 17.1L3.3 2.7 2 4l2.5 2.5C2.9 8.1 2 10 2 12c0 5.5 4.5 10 10 10 2 0 3.9-.6 5.5-1.7l2.8 2.8 1.4-1.3zM12 20c-4.4 0-8-3.6-8-8 0-1.4.4-2.8 1.1-4l10.9 10.9c-1.2.7-2.6 1.1-4 1.1z"
      />
    </svg>
    <span>{{ t('offline_msg') }}</span>
  </div>
</template>
