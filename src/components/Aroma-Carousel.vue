<template>


<section class="bg-primary ">
<div class="loop-tabs  container max-width-adaptive-xl ">
  <div class="grid grid-gap-md padding-md padding-y-lg">
    <!-- <div class="col-2@md"></div> -->
    <div class="loop-tabs__content col-7@md col-12@sm flex flex-column flex-column-reverse@md justify-center@md text-center text-left@md">
      <ul class="loop-tabs__controls  flex flex-center flex-wrap flex-column@md items-start@md">
        <li 
          v-for="(i, index) in content.items"
          @click="setActive(index)"
          :key="`text-${index}`">
            <a :href="`#tab${index}`" class="loop-tabs__control " :class="{'loop-tabs__control--selected': index === active}">
             {{ i.text}}
            </a>
        </li>
      </ul>
    </div>
    <div class="loop-tabs__media col-12 col-5@md col-12@sm " aria-hidden="true">
      <ul class="loop-tabs__assets width-100%">
        <li v-for="(i, index) in content.items"
            :key="`images-${index}`" class="loop-tabs__asset " :class="{'loop-tabs__asset--selected': index === active}">
          
            <div class="aroma-loop__image" :style="{'backgroundImage':'url('+ i.image  +')'}"></div>
            <div class="aroma-loop__caption ">
              <aroma-content-text  :content="i.caption"></aroma-content-text>
            </div>
            
        </li>

       
      </ul>
    </div>
  </div>
</div>


</section>
 
</template>




<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      active: 0,
      touched: false,
    }
  },
  methods: {
    setActive(index) {
      this.touched = true;
      this.active = index;
    },
    loopTabs(){
      if(this.touched) return;
      (this.active === this.content.items.length-1) ? this.active = 0 : this.active++;
      setTimeout(this.loopTabs,4000)
    }
  },
  mounted () {
    this.loopTabs();
  },

};
</script>


<style lang="scss" scoped>
.loop-tabs {
  overflow: hidden;
  color: var(--color-primary-lighter);
  
}

.loop-tabs__content {
  background: var(--color-primary);
}

.loop-tabs__controls {
  li {
    width: 100%;
  }
}

.aroma-loop__caption {
  color: var(--color-primary-lighter);
  // position: relative;
  // top: .2rem;
  // left: 19%;
}

.aroma-tab {
  width: 70%;
}
.aroma-tab::before {
  display: block;
  content: "";
  width: 100%;
  position: relative;
  left: -50%;
  height: 0.2rem;
  background: linear-gradient(90deg, transparent 0%, #fcbd33 100%) !important;
  
}

figure {
  height: 100%;
  width: 100%;
  img {
    object-fit: cover;
  }
}
.loop-tabs__control {
  width: 112%;
  color: var(--color-primary-lightest ) !important;
  &::before {
    
    background-color: transparent !important;
  }
  &::after {
    background-color: transparent !important;
  }
  &--selected {
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--color-primary-light) 100%
    ) !important;
  }
}

.loop-tabs__asset {
  height: 100%;
  width: 100%;
  }

.aroma-loop__image {
  height: 100%;
  width: 100%;
  background-size: cover;

}

@media (max-width: 1024px) {
.loop-tabs__control {
  text-align: center;

    &--selected {
    background: linear-gradient(
      -90deg,
      transparent 0%,
      var(--color-primary-light) 100%
    ) !important;
  }

}


  .loop-tabs__assets {
    width: 100%;
    height: 20rem;
  }
}
</style>