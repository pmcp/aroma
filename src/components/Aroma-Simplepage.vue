<template>
  <article class="padding-y-lg margin-top-sm" >
  <aroma-hero :expanded="false"></aroma-hero>
  <header class="container max-width-xs margin-bottom-lg">
    <div class="text-component text-center line-height-lg v-space-md margin-bottom-md">
      <h1>{{ content.title }}</h1>
      <p class="color-contrast-medium text-md">{{ content.subtitle }}</p>
    </div>
  </header>



    <div class="container max-width-adaptive-sm">
      <div class="text-component line-height-lg v-space-md">
        <richtext :text="content.content" v-editable="content.content"></richtext>
      </div>
    </div>
  </article>

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