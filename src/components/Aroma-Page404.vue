<template>
  <article>
    <header class="container max-width-xs margin-bottom-lg padding-y-xxl ">
      <div class="text-component text-center line-height-lg v-space-md margin-bottom-md">
        <h1>{{ content.title }}</h1>
        <p class="color-contrast-medium text-md">{{ content.text }}</p>
      </div>
    </header>
  </article>
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