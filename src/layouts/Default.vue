<template>
  <div class="layout">
    <aroma-header></aroma-header>
    <slot/>
  </div>
</template>

<script>
import AromaHeader from '~/components/Aroma-Header.vue'

export default {
  components: {
    AromaHeader
  }
}
</script>