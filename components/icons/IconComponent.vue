<template>
    <CoffeeIcon v-if="category == 'coffee'"></CoffeeIcon>
    <EventIcon v-else-if="category == 'event'"></EventIcon>
    <CrochetIcon v-else-if="category == 'crochet'"></CrochetIcon>
    <PuzzleIcon v-else-if="category == 'puzzle'"></PuzzleIcon>
</template>

<script setup lang="ts">
import CoffeeIcon from './CoffeeIcon.vue';
import CrochetIcon from './CrochetIcon.vue';
import EventIcon from './EventIcon.vue';
import PuzzleIcon from './PuzzleIcon.vue';

const props = defineProps({
    category: String
})

</script>