<template>
    <div class="m-3 main-container">
        <div class="slideshow-container flex flex-col justify-center items-center gap-2">
            <img src="../assets/icons/chevron-up-solid.svg" class="w-8 h-8" @click="scrollList(-75)">

            <ul class="p-4 flex flex-col gap-5 items-stretch" id="calendar-list">
                <li v-for="(event, index) in events" :key="event.name"
                    class="mySlides event ka-boxshadow rounded-md bg-events p-4 pb-1 text-neutralbg flex flex-col">
                    <!-- :style="event.active ? 'display: block' : 'display: none'" -->
                    <div class="flex justify-between mb-4">
                        <div class="text-left whitespace-break-spaces">
                            <h2 class="date font-sans">{{ formatDate(event.date) }}</h2>
                            <h3 class="title">{{ event.name }}</h3>
                        </div>
                        <IconComponent :category="event.icon" class="w-8 h-8"></IconComponent>
                    </div>

                    <div class="text-left text-base whitespace-break-spaces overflow-auto flex-grow -ml-2 -mr-3 py-1">
                        {{ event.description }}
                    </div>
                    <div class="text-right text-xs flex-shrink-0">
                        {{ index + 1 }} / {{ events.length }}
                    </div>
                </li>
            </ul>
            <!-- <span class="next rotate-90 text-about" @click="plusSlides(1)">❯</span> -->
            <img src="../assets/icons/chevron-down-solid.svg" class="w-8 h-8" @click="scrollList(75)">
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import IconComponent from './icons/IconComponent.vue';

const events = ref([
    { name: 'Weihnachtskaffee Degustation', icon: 'coffee', date: new Date('12-02-2023 17:00:00'), active: false, description: 'Geniesse eine gemütliche Verkostung von exquisiten Weihnachtskaffees in unserer Veranstaltung am 2. Dezember 2023 um 17:00 Uhr.' },
    { name: 'Weihnachtsgeschenke häkeln', icon: 'crochet', date: new Date('12-05-2023 13:00:00'), active: false, description: 'Überrasche deine Liebsten mit selbstgemachten Geschenken für Weihnachten.\n\nAuch für Anfänger geeignet!' },
    { name: 'Puzzle für die ganze Familie', icon: 'puzzle', date: new Date('01-02-2024 10:00:00'), active: false, description: 'Verbringe eine spassige Zeit mit deiner Familie und löse knifflige Puzzles in unserem Familienpuzzle-Event am 2. Januar 2024 um 10:00 Uhr.\n\nEs gibt Puzzles vor Ort, oder ihr könnt auch die eigenen von zu Hause mitnehmen!' },
    { name: 'Neujahrswoche-Häkeln', icon: 'crochet', date: new Date('06-01-2024 13:00:00'), active: false, description: 'Starte das neue Jahr mit Kreativität!\nNimm an unserer Häkelveranstaltung in der Neujahrswoche teil und entdecke die Freude des Häkelns.' },
    { name: 'Test Event', icon: 'event', date: new Date('05-05-2024 13:00:00'), active: false, description: 'Dies ist ein Test-Event.\nWeitere Informationen folgen in Kürze.' },
]);

function formatDate(date: Date) {
    return date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' });
}

function scrollList(incr: number) {
    var container = document.getElementById('calendar-list');
    if (container != null) {
        container.scrollTop += incr;
    }
}

</script>
  
<style scoped>
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .slideshow-container {
        .event {
            width: 80vw;
            height: auto;
            min-height: 75%;
            border-color: var(--color-yellowish);
            border-top: solid;

            filter: drop-shadow(0px 4px 4px rgba(0, 21, 36, 0.2));

            &.unfocused {
                background: rgba(21, 97, 109, 0.5);
            }
        }
    }
}

/* //todo! add sth like this?*/
*,
body,
html {
    &::-webkit-scrollbar {
        background-color: transparent;
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--color-dark-blue);
        opacity: 0.5;
        border-radius: 99em;
    }
}

ul {
    height: 75vh;
    overflow-y: auto;
    overflow-x: hidden;
    white-space: nowrap;
    text-align: center;
}

li {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: min(50vh, 350px);
    text-align: center;
    margin-left: -4px;
}
</style>
