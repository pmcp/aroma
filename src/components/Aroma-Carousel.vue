<template>

  <div class="loop-tabs js-loop-tabs container max-width-adaptive-lg">





    <div class="grid grid-gap-md">
      <div class="loop-tabs__content col-6@md flex flex-column flex-column-reverse@md justify-center@md text-center text-left@md">
        <ul class="loop-tabs__controls js-loop-tabs__controls margin-bottom-lg flex flex-center flex-wrap flex-column@md items-start@md">
          <li
            v-for="(i, index) in content.items"
            :key="`text-${index}`"
          >
            <a
              :href="`#tab${index}`"
              class="loop-tabs__control "
              :class="{'loop-tabs__control--selected':(index === 0)}"
            >{{ i.text}}
            </a>
          </li>
        </ul>
        <div class="loop-tabs__panels js-loop-tabs__panels margin-bottom-md">
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
        class="loop-tabs__media col-6@md"
        aria-hidden="true"
      >
        <ul class="loop-tabs__assets js-loop-tabs__assets">
          <li
            v-for="(i, index) in content.items"
            :key="`images-${index}`"
            class="loop-tabs__asset loop-tabs__asset--selected"
            :class="{'loop-tabs__asset--selected':(index === 0)}"
          >
          <figure>
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
    // let frontEnd = document.createElement("script");
    // frontEnd.setAttribute("src", "./cody-scripts-min.js"); // 👈 make sure to use the correct path
    // document.body.appendChild(frontEnd);
    window.cody = require("~/assets/js/cody-scripts-min.js");
  }
};
</script>


<style scoped>

.loop-tabs {
  overflow: hidden;
  color: var(--color-primary-lighter)
}

.loop-tabs__content {
  position: relative;
  left: -40px;
  background: var(--color-primary);
  transform: skew(10deg);
}

.loop-tabs__controls {
  position: relative;
  left: 100px;
  transform: skew(-10deg);
}

.js .loop-tabs__control  {
  color: inherit;

}
</style>