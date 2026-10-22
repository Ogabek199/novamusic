<script setup lang="ts">
import { useI18n } from '~/composables/useI18n';

const props = defineProps<{
  isOpen: boolean;
  title?: string;
  message?: string;
}>();

const emit = defineEmits<{
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}>();

const { t } = useI18n();
</script>

<template>
  <div
    class="ios-action-sheet-overlay"
    :class="{ hidden: !isOpen }"
    id="confirmDialogOverlay"
    @click.self="emit('cancel')"
  >
    <div class="ios-confirm-box">
      <h3 id="confirmDialogTitle">
        {{ title || t('confirm_title') }}
      </h3>
      <p id="confirmDialogMessage">
        {{ message || t('confirm_message') }}
      </p>
      <div class="confirm-actions-stack">
        <button
          type="button"
          class="confirm-btn danger-btn"
          id="confirmAcceptBtn"
          @click="emit('confirm')"
        >
          {{ t('confirm_accept') }}
        </button>
        <button
          type="button"
          class="confirm-btn cancel-btn"
          id="confirmCancelBtn"
          @click="emit('cancel')"
        >
          {{ t('confirm_cancel') }}
        </button>
      </div>
    </div>
  </div>
</template>
