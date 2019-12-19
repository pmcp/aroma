<template>
  <div class="loop-tabs js-loop-tabs ">
    <div class="grid ">
      <div class="loop-tabs__content col-7@md flex flex-column justify-start@md text-center text-left@md">
        <ul class="loop-tabs__controls js-loop-tabs__controls  flex flex-center flex-wrap flex-column@md items-start@md padding-xl">
          <li
            v-for="(i, index) in content.items"
            :key="`text-${index}`"
            class="aroma-tab"
          >

            <a
              :href="`#tab${index}`"
              class="loop-tabs__control "
              :class="{'loop-tabs__control--selected':(index === 0)}"
            >{{ i.text}}
            </a>
          </li>
        </ul>
        <div class="loop-tabs__panels js-loop-tabs__panels ">
          <section
            v-for="(i, index) in content.items"
            :key="`section-${index}`"
            :id="`tab${index}`"
            class="loop-tabs__panel js-loop-tabs__panel text-component"
            :class="{'loop-tabs__panel--selected':(index === 0)}"
          >
            <!-- <h1>Panel 1</h1> -->
            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam!</p> -->
          </section>

        </div>
      </div>
      <div
        class="loop-tabs__media col-5@md"
        aria-hidden="true"
      >
        <ul class="loop-tabs__assets js-loop-tabs__assets">
          <li
            v-for="(i, index) in content.items"
            :key="`images-${index}`"
            class="loop-tabs__asset loop-tabs__asset--selected"
            :class="{'loop-tabs__asset--selected':(index === 0)}"
          >
            <figure class="padding-y-md">
              <g-image
                :src="i.image"
                width="500"
              />
              <figcaption>{{ i.caption }}</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>



<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    window.cody = require("~/assets/js/cody-scripts-min.js");
  },
  content: {
    data(newValue, oldValue) {
      window.cody = require("~/assets/js/cody-scripts-min.js");
    }
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

.js .loop-tabs__control {
  color: var(--color-primary-lightest) !important;
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
    width: 150%;
  }
}

@media (min-width: 1024px) {
  .loop-tabs__content {
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
  }

  .loop-tabs__assets {
    min-width: 140%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20.5% 100%);
    figcaption {
      text-indent: 20%;
    }
  }
}
</style>