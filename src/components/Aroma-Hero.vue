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
    
    <div v-else-if="typeof cover === 'object'" class="video-bg__media" :style="{background: 'url('+ cover.url +') no-repeat center center fixed'}" style="opacity:20%;background-size:cover;">
    </div> 

    <div v-else class="video-bg__media" :style="{background: 'url('+ cover +') no-repeat center center fixed'}" style="opacity:20%;background-size:cover;">
    </div> 
      
    <div class="video-bg__content container max-width-md flex flex-column justify-center" style="height:100%">
  
        <template v-if="logos">
          <div class="flex  justify-center items-center">
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
          <div v-if="expanded" class=" text-component text-center ">
            <h1 v-if="showtitle" class="text-center padding-y-sm padding-x-xl">
              <slot name="title"></slot>
            </h1>

              <h2 class="text-center padding-y-sm padding-x-xl">
              <slot name="subtitle"></slot>
            </h2>

            <p class="text-center padding-x-lg">
              <slot name="subtext"></slot>
            </p>
          </div>
        </template>
        <template v-else>
          <div class="text-center flex flex-column justify-center text-component">
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
      type: [Object, String]
    },
    video: {
      type: String,
      default: ''
    },
    showtitle: {
      type: Boolean,
      default: true
    }
  }
};
</script>


<style scoped>
.aroma-hero {
  background-size: cover;
  height: 40vh;
  min-height: 500px;

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