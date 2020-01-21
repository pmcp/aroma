<template>
  <div class="layout">
    <aroma-header v-if="!editor" :nav="nav" :lang="lang" :current="current"></aroma-header>
    <main>
      <slot />
    </main>
    <aroma-footer></aroma-footer>
  </div>
</template>


<script>
import AromaHeader from "~/components/Aroma-Header.vue";
import AromaFooter from "~/components/Aroma-Footer.vue";

export default {
  props: {
    nav: {
      type: Object,
      default: () => ({})
    },
    lang: {
      type: String,
      default: 'default'
    },
    editor: {
      type: Boolean,
      default: false
    },
    current: {
      type: Object,
      default: () => ({})
    },
  },
  components: {
    AromaHeader,
    AromaFooter
  }
};
</script>

<style scoped>
main {
  min-height: 80vh;
}
</style>