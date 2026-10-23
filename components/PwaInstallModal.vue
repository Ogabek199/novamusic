<script setup lang="ts">
import { computed } from 'vue';
import { usePwaInstall, detectPlatform } from '~/composables/usePwaInstall';
import { useI18n } from '~/composables/useI18n';

const { isInstallModalOpen, closeInstallModal, deferredPrompt, installPwa } = usePwaInstall();
const { t } = useI18n();

const platform = computed(() => detectPlatform());

const onDirectInstallClick = () => {
  installPwa();
};
</script>

<template>
  <div
    class="ios-action-sheet-overlay"
    :class="{ hidden: !isInstallModalOpen }"
    id="pwaInstallModalOverlay"
    @click.self="closeInstallModal"
  >
    <div class="ios-action-sheet pwa-install-sheet" id="pwaInstallSheet">
      <div class="action-sheet-header">
        <div class="action-sheet-handle"></div>

        <!-- App Icon & Title -->
        <div class="pwa-sheet-app-header">
          <img
            src="/icons/icon-192.png"
            alt="NovaMusic"
            class="pwa-sheet-app-icon"
          />
          <div class="pwa-sheet-app-meta">
            <h3>NovaMusic</h3>
            <p>{{ t('pwa_install_desc') }}</p>
          </div>
        </div>
      </div>

      <div class="pwa-install-guide-content">
        <!-- 1. Direct Install Button (if browser prompt is ready) -->
        <button
          v-if="deferredPrompt"
          type="button"
          class="pwa-direct-install-btn"
          id="pwaDirectInstallBtn"
          @click="onDirectInstallClick"
        >
          <svg class="sf-icon-sm" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          <span>{{ t('pwa_install_btn') }}</span>
        </button>

        <!-- 2. Warning if inside In-App Browser (Telegram, Instagram, etc.) -->
        <div v-if="platform.isInApp" class="pwa-guide-notice in-app-notice">
          <div class="notice-icon">⚠️</div>
          <div class="notice-body">
            <strong>{{ platform.inAppName }} brauzerida ochilgan</strong>
            <p>Ilovani o'rnatish uchun Chrome brauzeriga o'ting:</p>
            <ol class="pwa-steps-list">
              <li>Yuqoridagi <strong>uch nuqta (⋮)</strong> belgisini bosing.</li>
              <li><strong>«Chrome'da ochish»</strong> (Open in Chrome) bandini tanlang.</li>
              <li>Chrome ochilgach, shu yerdan «O'rnatish»ni bosing.</li>
            </ol>
          </div>
        </div>

        <!-- 3. iOS Safari Instructions -->
        <div v-else-if="platform.isIOS" class="pwa-guide-notice ios-notice">
          <div class="notice-body">
            <strong>iPhone / iPad Safari'da o'rnatish:</strong>
            <ol class="pwa-steps-list">
              <li>
                Pastdagi <strong>📤 Ulashish (Share)</strong> tugmasini bosing.
              </li>
              <li>
                Menyudan pastga tushib <strong>«Bosh ekranga qo'shish» (Add to Home Screen)</strong> bandini tanlang.
              </li>
              <li>
                Yuqori o'ngdagi <strong>«Qo'shish» (Add)</strong> tugmasini bosing.
              </li>
            </ol>
          </div>
        </div>

        <!-- 4. Android Chrome / Standard Guide -->
        <div v-else class="pwa-guide-notice android-notice">
          <div class="notice-body">
            <strong>Android Chrome'da o'rnatish:</strong>
            <ol class="pwa-steps-list">
              <li>
                Brauzerning yuqori o'ng burchagidagi <strong>uch nuqta (⋮)</strong> menyusini bosing.
              </li>
              <li>
                Menyudan <strong>«Ilovani o'rnatish»</strong> yoki <strong>«Bosh ekranga qo'shish»</strong> bandini tanlang.
              </li>
              <li>
                Tasdiqlash oynasida <strong>«O'rnatish»</strong> tugmasini bosing.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="action-sheet-cancel-btn"
        id="pwaInstallModalCloseBtn"
        @click="closeInstallModal"
      >
        {{ t('confirm_cancel') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.pwa-sheet-app-header {
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
  margin-top: 10px;
  padding: 0 4px;
}

.pwa-sheet-app-icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
  object-fit: cover;
}

.pwa-sheet-app-meta h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ios-text-primary);
  margin-bottom: 3px;
}

.pwa-sheet-app-meta p {
  font-size: 0.85rem;
  color: var(--ios-text-secondary);
  line-height: 1.35;
}

.pwa-install-guide-content {
  padding: 12px 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pwa-direct-install-btn {
  background: var(--ios-accent);
  color: #fff;
  border: none;
  padding: 13px 20px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(250, 45, 72, 0.35);
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.pwa-direct-install-btn:active {
  transform: scale(0.98);
  opacity: 0.9;
}

.pwa-guide-notice {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 14px 16px;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--ios-text-primary);
}

.in-app-notice {
  background: rgba(255, 159, 10, 0.08);
  border-color: rgba(255, 159, 10, 0.3);
}

.pwa-steps-list {
  margin: 10px 0 0 18px;
  padding: 0;
  color: var(--ios-text-secondary);
}

.pwa-steps-list li {
  margin-bottom: 6px;
}

.pwa-steps-list strong {
  color: var(--ios-text-primary);
}
</style>
