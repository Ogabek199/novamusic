import { ref } from 'vue';
import { useToast } from '~/composables/useToast';
import { useI18n } from '~/composables/useI18n';

// Global state across components and navigation
const deferredPrompt = ref<any>(null);
const isInstalled = ref(false);
const isInstallModalOpen = ref(false);
let isInitialized = false;

// Immediate global capture of beforeinstallprompt
if (typeof window !== 'undefined') {
  // 1. Check if early script in <head> already captured it
  if ((window as any).__deferredPrompt) {
    deferredPrompt.value = (window as any).__deferredPrompt;
  }

  // 2. Add listener to catch it as soon as this module loads
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    deferredPrompt.value = e;
    (window as any).__deferredPrompt = e;
  });

  // 3. Listen for successful installation
  window.addEventListener('appinstalled', () => {
    isInstalled.value = true;
    deferredPrompt.value = null;
    (window as any).__deferredPrompt = null;
    isInstallModalOpen.value = false;
  });
}

export function detectPlatform() {
  if (typeof navigator === 'undefined') {
    return { isIOS: false, isAndroid: false, isInApp: false, inAppName: '' };
  }
  const ua = navigator.userAgent || '';
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
  const isAndroid = /Android/i.test(ua);

  let isInApp = false;
  let inAppName = '';
  if (/telegram/i.test(ua)) {
    isInApp = true;
    inAppName = 'Telegram';
  } else if (/instagram/i.test(ua)) {
    isInApp = true;
    inAppName = 'Instagram';
  } else if (/fbav|fb_iab/i.test(ua)) {
    isInApp = true;
    inAppName = 'Facebook';
  } else if (/threads/i.test(ua)) {
    isInApp = true;
    inAppName = 'Threads';
  } else if (/tiktok/i.test(ua)) {
    isInApp = true;
    inAppName = 'TikTok';
  }

  return { isIOS, isAndroid, isInApp, inAppName };
}

export function usePwaInstall() {
  const { showToast } = useToast();
  const { currentLang, t } = useI18n();

  const initPwa = () => {
    if (typeof window === 'undefined' || isInitialized) return;
    isInitialized = true;

    // 1. Check if already running in standalone / installed PWA mode
    const checkInstalled = () => {
      const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes('android-app://');
      isInstalled.value = isStandalone;
    };
    checkInstalled();

    // Re-check early prompt if available
    if ((window as any).__deferredPrompt && !deferredPrompt.value) {
      deferredPrompt.value = (window as any).__deferredPrompt;
    }

    // 2. Register Service Worker & auto-check updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { updateViaCache: 'none' })
        .then((reg) => {
          // Darhol va har 45 soniyada yangilanishni tekshirish
          reg.update().catch(() => {});
          setInterval(() => {
            reg.update().catch(() => {});
          }, 45 * 1000);

          // Foydalanuvchi ilovaga qaytganda yangilanishni tekshirish
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              reg.update().catch(() => {});
            }
          });

          if (reg.waiting) {
            reg.waiting.postMessage({ type: 'SKIP_WAITING' });
          }

          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Yangi versiya yuklandi: avtomatik faollashtirish
                  newWorker.postMessage({ type: 'SKIP_WAITING' });

                  const updateMsg =
                    currentLang.value === 'ru'
                      ? 'Обновление загружено! Применяем... ✨'
                      : currentLang.value === 'en'
                        ? 'Update ready! Applying... ✨'
                        : "Yangi yangilanish o'rnatildi! Qo'llanilmoqda... ✨";

                  showToast(updateMsg, 3500);
                }
              });
            }
          });
        })
        .catch((err) => {
          console.warn('[PWA] Service Worker registration failed:', err);
        });

      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }
  };

  const installPwa = async () => {
    if (typeof window === 'undefined') return;

    // 1. Check if already installed
    if (
      isInstalled.value ||
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes('android-app://')
    ) {
      isInstalled.value = true;
      const msg =
        currentLang.value === 'ru'
          ? 'Приложение уже установлено!'
          : currentLang.value === 'en'
            ? 'App is already installed!'
            : "Ilova allaqachon o'rnatilgan!";
      showToast(msg);
      return;
    }

    // 2. Check if open inside Telegram or In-App browser
    const platform = detectPlatform();
    if (platform.isInApp) {
      isInstallModalOpen.value = true;
      const msg =
        currentLang.value === 'ru'
          ? `Вы открыли через ${platform.inAppName}. Нажмите (⋮) вверху и выберите «Открыть в Chrome»!`
          : currentLang.value === 'en'
            ? `Opened inside ${platform.inAppName}. Tap (⋮) above and choose 'Open in Chrome'!`
            : `Siz ${platform.inAppName} ichidasiz. O'rnatish uchun yuqoridagi (⋮) menyudan «Chrome'da ochish»ni bosing!`;
      showToast(msg, 5000);
      return;
    }

    // 3. Native browser prompt available (Android Chrome / Edge)
    const promptEvent = deferredPrompt.value || (window as any).__deferredPrompt;
    if (promptEvent) {
      try {
        promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        if (choice && choice.outcome === 'accepted') {
          const msg =
            currentLang.value === 'ru'
              ? 'Установка приложения...'
              : currentLang.value === 'en'
                ? 'Installing application...'
                : "Ilova o'rnatilmoqda...";
          showToast(msg);
          isInstalled.value = true;
          isInstallModalOpen.value = false;
        }
        deferredPrompt.value = null;
        (window as any).__deferredPrompt = null;
        return;
      } catch (err) {
        console.warn('[PWA] Native prompt error, opening guide:', err);
      }
    }

    // 4. Fallback: Open Visual Step-by-Step Install Guide Modal
    isInstallModalOpen.value = true;
  };

  const closeInstallModal = () => {
    isInstallModalOpen.value = false;
  };

  return {
    deferredPrompt,
    isInstalled,
    isInstallModalOpen,
    initPwa,
    installPwa,
    closeInstallModal,
    detectPlatform
  };
}
