<template>
  <div>
    <!-- {{ content.credit.content }} -->
    
    <template v-if="content.style === 'grid'">
      
     <div class="grid grid-gap-xs">
       
        <figure v-for="(image, key) in content.images" :key="'images-full-'+ key" class="col">
          <g-image v-if="image.filename.url" :src="image.filename.url" :alt="image.name" width="500"/>
          <g-image v-else :src="image.filename" :alt="image.name" width="500"/>
          <figcaption>{{ image.name }}</figcaption>
        </figure>
      </div>
      <span class="text-component aroma-credit"><aroma-content-text v-if="content.credit" :content="content.credit"></aroma-content-text></span>
      
    </template>

    <template v-else>
      <figure v-for="(image, key) in content.images" :key="'images-full-'+ key" class="text-component__block  padding-y-md">
        <g-image v-if="image.filename.url" :src="image.filename.url" :alt="image.name" width="500"/>
        <g-image v-else :src="image.filename" :alt="image.name" width="500"/>
        <!-- <img :src="image.filename" :alt="image.name"> -->
        <figcaption>{{ image.name }}</figcaption>
      </figure>

    </template>
    
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

<style scoped>
.col {
  min-width: 22%;
  flex-grow: 1;
}
.arom-credit {
  font-size: var(--text-sm);
  color: var(--color-contrast-medium);
}
</style>