<script setup lang="ts">
import { useToast } from '~/composables/useToast';

const { toastMessage, isToastVisible, toastAction, triggerToastAction } = useToast();
</script>

<template>
  <div
    id="iosToast"
    class="ios-toast-pill"
    :class="{ hidden: !isToastVisible, 'cursor-pointer select-none': !!toastAction }"
    @click="triggerToastAction"
  >
    <span id="iosToastText">{{ toastMessage }}</span>
  </div>
</template>
