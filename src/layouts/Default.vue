<template>
  <div class="layout">
    <aroma-header></aroma-header>
    
    <transition
      name="fade"
      appear
    >
    <main>
      <slot />
    </main>
    </transition>

    <aroma-footer></aroma-footer>
  </div>
</template>

<script>
import AromaHeader from "~/components/Aroma-Header.vue";
import AromaFooter from "~/components/Aroma-Footer.vue";

export default {
  components: {
    AromaHeader,
    AromaFooter
  }
};
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>