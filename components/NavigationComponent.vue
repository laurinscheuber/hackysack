<template>
    <div class="nav-container">
        <div class="icon-bar p-2 flex gap-1">
            <a href="#about" class="about" :class="[{ 'active': isActive('#about') }]">
                <CoffeeIcon></CoffeeIcon>
            </a>
            <a href="#events" class="events" :class="[{ 'active': isActive('#events') }]">
                <EventIcon></EventIcon>
            </a>
            <a href="#crochet" class="crochet" :class="[{ 'active': isActive('#crochet') }]">
                <CrochetIcon></CrochetIcon>
            </a>
            <a href="#puzzle" class="puzzle" :class="[{ 'active': isActive('#puzzle') }]">
                <PuzzleIcon></PuzzleIcon>
            </a>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import CoffeeIcon from '@/components/icons/CoffeeIcon.vue';
import CrochetIcon from '@/components/icons/CrochetIcon.vue';
import EventIcon from '@/components/icons/EventIcon.vue';
import PuzzleIcon from '@/components/icons/PuzzleIcon.vue';
import { ref } from 'vue';
import { themes } from '../state/themeState.ts'; // todo! why red

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', async () => {
    currentPath.value = window.location.hash;

    themes.list.forEach(t => t.isNavActive = false);
    const theme = themes.getThemeByHash(currentPath.value);
    if (theme != null) {
        theme.isNavActive = true;
    }
})

function isActive(hash: String) {
    return themes.getThemeByHash(hash)?.isNavActive;
}

// todo! event to set isActive on click, set isOpen if not yet in HomeView
</script>
  
<style scoped>
@import "tailwindcss/screens";

.nav-container {
    z-index: 99;

    position: fixed;
    bottom: 0%;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    margin-bottom: 10px;
}

.icon-bar {
    background: var(--color-yellowish);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 60px;
}

@media (min-width: 768px) {

    /* theme('screens.md') */
    .nav-container {
        position: fixed;
        top: 50%;
        right: 0%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);


        height: 100%;
        width: auto;
        margin-right: 10px;
    }

    .icon-bar {
        flex-direction: column;
    }
}

.icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    border-radius: 60px;

    &.active,
    &:hover {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
}

.icon-bar a svg {
    width: 1.75em;
    height: 1.75em;
}

.icon-bar a svg:hover,
.icon-bar a:hover,
.icon-bar a.active {
    color: var(--color-yellowish);

    svg {
        color: var(--color-yellowish);
    }
}

.about {

    &:hover,
    &.active {
        background-color: var(--color-dark-blue);
    }

    svg {
        color: var(--color-dark-blue);
    }
}


.events {

    &:hover,
    &.active {
        background-color: var(--color-turquoise);
    }

    svg {
        color: var(--color-turquoise);
    }
}

.crochet {

    &:hover,
    &.active {
        background-color: var(--color-orange);
    }

    svg {
        color: var(--color-orange);
    }
}


.puzzle {

    &:hover,
    &.active {
        background-color: var(--color-purple);
    }

    svg {
        color: var(--color-purple);
    }
}
</style>