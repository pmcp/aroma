<template>
   <section class="video-bg margin-bottom-xl hero--full-screen" v-bind:class="{'aroma-hero--small': !expanded }">
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
        <div
          class="flex justify-center height-100% max-width-s parent grid grid-gap-xs"
          style="align-items: center;"
        >
          <div class="col-6 text-center align-middle">
            <g-image
              src="~/assets/img/AROMA-Interreg_opacity.png"
              alt="Aroma-Interreg logo"
              width="500"
            />
          </div>
          <div class="col-6 text-center align-middle">
            <g-image
              src="~/assets/svg/aroma-color.svg"
              alt="Aroma logo"
              width="500"
            />
          </div>
        </div>
      </div>
    </section>
</template>



<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
  },
}
</script>


<style scoped>
.aroma-hero--small {
 height: unset;
 padding-top: 2rem;
 padding-bottom: 2rem;
}
</style>