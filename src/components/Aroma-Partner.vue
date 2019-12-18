<template>
  <div class="padding-sm">
    <a v-if="content.content.url" :href="content.content.url.url" target="blank">
      <g-image :src="content.content.logo"></g-image>
    </a>
      <g-image v-else :src="content.content.logo"></g-image>

  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>

</style>