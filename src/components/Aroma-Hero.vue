<template>
  <section
    class="video-bg aroma-hero"
    v-bind:class="{'aroma-hero--small': !expanded }"
    
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
        :src="video"
      ></video>
    </div>
    
    <div v-else class="video-bg__media" :style="{backgroundImage: 'url('+ cover +')'}" style="opacity:20%;background-size:cover">
    </div> 
      
    <div class="video-bg__content container max-width-lg grid justify-center" style="height:100%">
  
        <template v-if="logos">
          <div class="grid col-12 grid justify-center items-center">
            <div class="col-6 text-center align-middle" >
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
          <div v-if="expanded" class=" items-center text-component text-center max-width-md" style="flex-wrap:nowrap">
            <h1 class="text-center padding-y-sm padding-x-xl">
              <slot name="title"></slot>
            </h1>
            <p class="text-center padding-x-xxxl">
              <slot name="subtext"></slot>
            </p>
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
      type: String,
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
  height: 40vh;
  min-height: 400px;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* h1 {
  opacity: 0;
} */
</style>