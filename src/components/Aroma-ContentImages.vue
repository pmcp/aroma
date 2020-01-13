<template>
  <div>
    <template v-if="content.style === 'grid'">
     <div class="grid grid-gap-xs">
        <figure v-for="(image, key) in content.images" :key="'images-full-'+ key" class="col">
          
          <g-image :src="image.filename" :alt="image.name" width="500"/>
          <figcaption>{{ image.name }}</figcaption>
        </figure>
      </div>
    </template>

    <template v-else>
      <figure v-for="(image, key) in content.images" :key="'images-full-'+ key" class="text-component__block  padding-y-md">
        <g-image :src="image.filename" :alt="image.name" width="500"/>
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
</style>