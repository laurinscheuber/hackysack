<template>
  <div class="cursor-pointer">
    <div class="accordion py-4 flex items-center" @click="isOpen = !isOpen">
      <div class="heading-1 mr-4 transition-transform" :class="{ 'rotate-90': isOpen }">></div>
      <h2>{{ title }}</h2>
    </div>
    <div v-if="isOpen" class="mb-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref<boolean>(false);
defineProps(['title']);
</script>