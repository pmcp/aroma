<template>
  <div class="container max-width-lg  margin-bottom-xxl">
   {{ nav }}
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>

</style>