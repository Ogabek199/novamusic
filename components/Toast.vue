<script setup lang="ts">
import { useToast } from '~/composables/useToast';

const { toastMessage, isToastVisible } = useToast();
</script>

<template>
  <div
    id="iosToast"
    class="ios-toast-pill"
    :class="{ hidden: !isToastVisible }"
  >
    <span id="iosToastText">{{ toastMessage }}</span>
  </div>
</template>
