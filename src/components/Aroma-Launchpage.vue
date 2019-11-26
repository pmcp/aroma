<template>
  <main class="margin-top-sm">
    
    <aroma-hero :expanded="true"></aroma-hero>
  
    <!-- What is Aroma: goal -->
    <section
      class="container max-width-lg padding-bottom-md text-component"
      id="learnmore"
    >
      <div
        class="flex justify-center height-100% max-width-s parent grid grid-gap-xxl "
        style="align-items: center;"
      >
        <div
          v-for="intro in content.content.content.intro_items"
          v-bind:key="intro._uid"
          v-editable="intro"
          class="col-6@sm  align-middle"
        >
          <p class="text-primary--lightest ">{{ intro.launch_language }}<p>
              <h2 class="text-primary">{{ intro.launch_title }}</h2>
              <div class="aroma-arrow"></div>
              <p class="text-primary">{{ intro.launch_text }} </p>
        </div>

      </div>
    </section>

    <section
      class="container max-width-lg padding-bottom-xxl text-component"
      id="partners"
    >
      <h2 class="text-primary align-center text-center">Partners</h2>

      <div class="parent grid grid-gap-xs">
        <aroma-partners></aroma-partners>
      </div>

    </section>
  </main>
</template>




<script>
import aromaPartners from "../components/Aroma-Partners";
export default {
  components: {
    aromaPartners,
  },
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>