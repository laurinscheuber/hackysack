<template>
  <header class="flex flex-col">
    <a href="#">
      <h1 class="text-right md:text-center py-4 px-6 md:py-8 text-6xl md:text-8xl text-puzzle">
        Hacky<br v-if="isMobile()">Sack
      </h1>
    </a>
    <div class="header-image flex-grow"></div>
  </header>
  <NavigationComponent></NavigationComponent>
  <RouterView />

  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';

const isMobile = () => window.innerWidth <= 768;
</script>

<style scoped>
.header-image {
  background: url("assets/images/cafe-exterior.jpg"), rgba(255, 236, 209, 0.3);
  background-size: cover;
  background-blend-mode: multiply;
}

header {
  height: 100svh;
}
</style>
