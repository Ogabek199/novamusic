import { ref } from 'vue';
import type { AppLanguage } from '~/types/music';
import { TRANSLATIONS } from '~/constants/locales';
import { STORAGE_KEYS } from '~/constants/config';

const currentLang = ref<AppLanguage>('uz');
let isInitialized = false;

export const useI18n = () => {
  const initLang = () => {
    if (typeof window === 'undefined' || isInitialized) return;
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANG) as AppLanguage | null;
      if (saved && (saved === 'uz' || saved === 'ru' || saved === 'en')) {
        currentLang.value = saved;
      }
    } catch (e) {
      console.warn('Could not read lang from localStorage', e);
    }
    isInitialized = true;
  };

  const setLang = (lang: AppLanguage) => {
    currentLang.value = lang;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEYS.LANG, lang);
      } catch (e) {
        console.warn('Could not save lang to localStorage', e);
      }
    }
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const langDict = TRANSLATIONS[currentLang.value] || TRANSLATIONS.uz;
    let text = langDict[key] || TRANSLATIONS.uz[key] || key;

    if (params) {
      for (const [paramKey, paramVal] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramVal));
      }
    }
    return text;
  };

  return {
    currentLang,
    initLang,
    setLang,
    t
  };
};
