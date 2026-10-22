import { ref } from 'vue';
import { useToast } from '~/composables/useToast';
import { useI18n } from '~/composables/useI18n';

// Global state across components and navigation
const deferredPrompt = ref<any>(null);
const isInstalled = ref(false);
let isInitialized = false;

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
        (window.navigator as any).standalone === true;
      isInstalled.value = isStandalone;
    };
    checkInstalled();

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

    // 3. Listen for beforeinstallprompt event (Android, Chrome, Edge)
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      deferredPrompt.value = e;
    });

    // 4. Listen for successful installation
    window.addEventListener('appinstalled', () => {
      isInstalled.value = true;
      deferredPrompt.value = null;
      showToast(t('pwa_install_btn') + ': OK!');
    });
  };

  const installPwa = async () => {
    if (typeof window === 'undefined') return;

    // Check if already installed
    if (
      isInstalled.value ||
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true
    ) {
      const msg =
        currentLang.value === 'ru'
          ? 'Приложение уже установлено!'
          : currentLang.value === 'en'
            ? 'App is already installed!'
            : "Ilova allaqachon o'rnatilgan!";
      showToast(msg);
      return;
    }

    // Native browser prompt available
    if (deferredPrompt.value) {
      try {
        deferredPrompt.value.prompt();
        const choice = await deferredPrompt.value.userChoice;
        if (choice.outcome === 'accepted') {
          const msg =
            currentLang.value === 'ru'
              ? 'Установка приложения...'
              : currentLang.value === 'en'
                ? 'Installing application...'
                : "Ilova o'rnatilmoqda...";
          showToast(msg);
        }
        deferredPrompt.value = null;
        return;
      } catch (err) {
        console.error('[PWA] Error launching install prompt:', err);
      }
    }

    // Fallback: iOS Safari instructions or browser menu guidance
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    if (isIOS) {
      const msg =
        currentLang.value === 'ru'
          ? 'В Safari нажмите 📤 «Поделиться» и выберите «На экран Домой»'
          : currentLang.value === 'en'
            ? "In Safari, tap 📤 Share and choose 'Add to Home Screen'"
            : "Safari pastidagi 📤 'Ulashish' tugmasini bosing va 'Bosh ekranga qo'shish'ni tanlang";
      showToast(msg);
    } else {
      const msg =
        currentLang.value === 'ru'
          ? 'В меню браузера (⋮) выберите «Установить приложение»'
          : currentLang.value === 'en'
            ? "In browser menu (⋮) select 'Install app' or 'Add to Home Screen'"
            : "Brauzer menyusidan (⋮) 'Ilovani o'rnatish' bandini tanlang";
      showToast(msg);
    }
  };

  return {
    deferredPrompt,
    isInstalled,
    initPwa,
    installPwa
  };
}
