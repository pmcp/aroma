<template>
  <div class="layout">

    <aroma-header :nav="nav" ></aroma-header>
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
    }
  },
  components: {
    AromaHeader,
    AromaFooter
  }
};
</script>