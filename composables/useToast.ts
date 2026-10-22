import { ref } from 'vue';

const toastMessage = ref('');
const isToastVisible = ref(false);
const toastAction = ref<(() => void) | null>(null);
let toastTimer: any = null;

export const useToast = () => {
  const showToast = (message: string, duration = 3500, action?: () => void) => {
    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastMessage.value = message;
    toastAction.value = action || null;
    isToastVisible.value = true;

    toastTimer = setTimeout(() => {
      isToastVisible.value = false;
      toastAction.value = null;
      toastTimer = null;
    }, duration);
  };

  const triggerToastAction = () => {
    if (toastAction.value) {
      toastAction.value();
      isToastVisible.value = false;
      toastAction.value = null;
    }
  };

  return {
    toastMessage,
    isToastVisible,
    toastAction,
    showToast,
    triggerToastAction
  };
};
