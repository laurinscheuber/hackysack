<template>
  <div :class="'bg-' + color" class="rounded-2xl ka-boxshadow p-4">
    <img class="mb-4 rounded" :src="image.src" :alt="image.title">
    <div>
      <h3 class="mb-1 text-neutralbg">{{ title }}</h3>
      <p v-for="attribute in attributes" class="text-neutralbg text-sm">
        {{ attribute.label }}: {{ attribute.value }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  attributes: { label: string, value: string }[],
  color: string,
  image: { src: string, title: string },
  title: string
}>();

</script>

<style></style>