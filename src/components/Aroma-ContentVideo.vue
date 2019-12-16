<template>
  <div class="text-component__block ">
    <figure class="media-wrapper">
      <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${content.id}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </figure>
  </div>
</template>


<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
};
</script>
