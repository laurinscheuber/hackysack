<template>
  <div class="m-3">
    <p>
      Tauch mit uns in die Welt der kreativen Fäden und gemütlichen Maschen ein, denn bei uns kannst du dich treffen, um
      gemeinsam zu häkeln, Ideen auszutauschen und neue Projekte zu entdecken.
    </p>

    <h2 class="mt-8 md:mt-10 mb-4 md:mb-6 heading-2">Unsere beliebtesten Video-Anleitungen</h2>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <h3 class="font-sans mb-2">Einfaches Herz</h3>
        <div class="video-wrapper ka-boxshadow rounded-xl">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/P2BYQKlJ2wU?si=qxc6c9Z_PNciwXrJ"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
      <div class="md:w-1/2">
        <h3 class="font-sans mb-2">Granny Square</h3>
        <div class="video-wrapper ka-boxshadow rounded-xl">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lHu5awsYSRM?si=qbmAVAjfOOmTTaVt"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.video-wrapper {
  float: none;
  clear: both;
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>