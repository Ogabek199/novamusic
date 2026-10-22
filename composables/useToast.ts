import { ref } from 'vue';

const toastMessage = ref('');
const isToastVisible = ref(false);
let toastTimer: any = null;

export const useToast = () => {
  const showToast = (message: string, duration = 3000) => {
    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastMessage.value = message;
    isToastVisible.value = true;

    toastTimer = setTimeout(() => {
      isToastVisible.value = false;
      toastTimer = null;
    }, duration);
  };

  return {
    toastMessage,
    isToastVisible,
    showToast
  };
};
