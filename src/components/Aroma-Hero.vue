<template>
  <section
    class="video-bg margin-bottom-xl aroma-hero"
    v-bind:class="{'aroma-hero--small': !expanded }"
    :style="{backgroundImage: 'url('+ cover +')'}"
  >
    <div
      v-if="video"
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
    <!-- <div v-else class="video-bg__media" :style="{backgroundImage: 'url('+ cover +')'}">
      </div> -->
    <div class="video-bg__content height-100% container max-width-lg">
      <div
        class="flex justify-center max-width-s parent grid grid-gap-xs align-middle"
        style="align-items: center;height:70vh"
      >
        <template v-if="logos">
          <div class="col-6 text-center align-middle">

            <g-image
              :src="cover"
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
        </template>
        <template v-else>
          <div class="align-middle text-center">
            <h1>
              <slot name="title"></slot>
            </h1>
            <p>
              <slot name="subtitle"></slot>
            </p>
          </div>
        </template>
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
    logos: {
      type: Boolean,
      default: true
    },
    cover: {
      type: String,
      default: "~/assets/img/AROMA-Interreg_opacity.png"
    },
    video: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.aroma-hero {
  background-size: cover;
  height: 70vh;
  min-height: 400px;

}
.aroma-hero--small {
  height: unset;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* h1 {
  opacity: 0;
} */
</style>