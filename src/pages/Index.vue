<template>
  <Layout>
    <!-- Hero: video background -->
    <section class="video-bg margin-bottom-xl hero--full-screen">
      <div
        class="video-bg__media"
        aria-hidden="true"
        style="opacity:20%;"
      >
        <!-- <img src="~/assets/img/video-background-hero-img-1.jpg" alt="Video Preview"> -->
        <video
          autoplay
          loop
          muted
          playsInline
          src="@/assets/video/1.mp4"
        ></video>
      </div>
      <div class="video-bg__content height-100% container max-width-lg">
        <div class="flex justify-center height-100% max-width-s parent grid grid-gap-xs" style="align-items: center;">          
          <div class="col-6@sm text-center align-middle">Logo 1</div>
          <div class="col-6@sm text-center align-middle">Logo 2</div>
        </div>
      </div>
    </section>
    <!-- What is Aroma: goal -->
    <section
      class="container max-width-lg padding-bottom-xxl"
      id="learnmore"
    >
    <div class="flex justify-center height-100% max-width-s parent grid grid-gap-xxl" style="align-items: center;">          
      <div class="col-6@sm  align-middle">
        <p class="text-primary--lightest">FR<p>
        <h2 class="text-primary">Approvisionnement Régional Organisé pour une Meilleure Alimentation.</h2>
        <div class="aroma-arrow"></div>
        <p class="text-primary">Favoriser l’utilisation de produits locaux et de qualité dans les cuisines de collectivités, c’est le but du projet Interreg AROMA lancé en avril 2018 au niveau de la Grande Région.</p>
      </div>
        <div class="col-6@sm  align-middle">
        <p class="text-primary--lightest">FR<p>
        <h2 class="text-primary">Approvisionnement Régional Organisé pour une Meilleure Alimentation.</h2>
        <div class="aroma-arrow flip"></div>
        <p class="text-primary">Favoriser l’utilisation de produits locaux et de qualité dans les cuisines de collectivités, c’est le but du projet Interreg AROMA lancé en avril 2018 au niveau de la Grande Région.</p>
      </div>
      </div>
    </section>


  </Layout>
</template>

<page-query>
query {
    craft {
     	entries(section: "articles", limit: 1, orderBy: "dateCreated DESC") {
        title,
        slug,
        uid 
      }
    }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  mounted() {
    //require the full cody library
    window.cody = require("~/assets/js/cody-scripts.js");
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

