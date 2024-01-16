<template>
  <main>
    <section id="about">
      <div @click="toggleTheme(0)" class="accordion -mt-24 w-full">
        <img src="../assets/backgrounds/bg_about.svg" alt="">
        <div>
          <button class="border-2 border-neutralbg border-dashed rounded-xl px-6 py-2 bg-neutralbg/50">
            <span class="heading-2 text-neutralbg">Über Uns</span>
          </button>
        </div>
      </div>
      <div :class="[isOpen(0) ? 'panel scale-y-100 mb-24' : 'h-0 scale-y-0']">
        <AboutComponent></AboutComponent>
      </div>
    </section>

    <section id="events">
      <div @click="toggleTheme(1)" class="accordion -mt-28">
        <img src="../assets/backgrounds/bg_event.svg" alt="">
        <div>
          <button class="border-2 border-neutralbg border-dashed rounded-xl px-6 py-2 bg-neutralbg/50">
            <span class="heading-2 text-neutralbg">Events</span>
          </button>
        </div>
      </div>
      <div :class="[isOpen(1) ? 'panel scale-y-100 mb-24' : 'h-0 scale-y-0']">
        <EventsComponent></EventsComponent>
      </div>

    </section>
    <section id="crochet">
      <div @click="toggleTheme(2)" class="accordion -mt-26">
        <img src="../assets/backgrounds/bg_crochet.svg" alt="">
        <div>
          <button class="border-2 border-neutralbg border-dashed rounded-xl px-6 py-2 bg-neutralbg/50">
            <span class="heading-2 text-neutralbg">Häkeln</span>
          </button>
        </div>
      </div>
      <div :class="[isOpen(2) ? 'panel scale-y-100 mb-32 mt-4' : 'h-0 scale-y-0']">
        <CrochetComponent></CrochetComponent>
      </div>
    </section>

    <section id="puzzle">
      <div @click="toggleTheme(3)" class="accordion -mt-32">
        <img src="../assets/backgrounds/bg_puzzles.svg" alt="">
        <div>
          <button class="border-2 border-neutralbg border-dashed rounded-xl px-6 py-2 bg-neutralbg/50">
            <span class="heading-2 text-neutralbg">Puzzles</span>
          </button>
        </div>
      </div>
      <div :class="[isOpen(3) ? 'panel scale-y-100 mb-24' : 'h-0 scale-y-0']">
        <PuzzleComponent></PuzzleComponent>
      </div>
    </section>

    <section class="-mt-20">
      <img src="../assets/images/map.png" alt="Karte" />
    </section>
  </main>
</template>

<script setup lang="ts">
import AboutComponent from '@/components/AboutComponent.vue';
import CrochetComponent from '@/components/CrochetComponent.vue';
import EventsComponent from '@/components/EventsComponent.vue';
import PuzzleComponent from '@/components/PuzzleComponent.vue';
import { ref } from 'vue';
import { themes } from '../state/themeState.ts';

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', async () => {
  currentPath.value = window.location.hash;

  setTimeout(() => {
    const theme = themes.getThemeByHash(currentPath.value);
    if (theme != null) {
      theme.isOpen = true;
    }
  }, 450);
})

function toggleTheme(id: number) {
  const theme = themes.getThemeById(id);
  if (theme != null) {
    theme.isOpen = !theme.isOpen;
  }
}

function isOpen(id: number) {
  return themes.getThemeById(id)?.isOpen;
}

</script>

<style scoped>
/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  cursor: pointer;
  width: 100%;
  text-align: center;
  border: none;
  outline: none;
  position: relative;

  &>div {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 18rem;
    object-fit: fill;
  }
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 24px;
  overflow: hidden;
  transform-origin: top;
  transition: transform 1s;
}
</style>