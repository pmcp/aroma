<template>
  <div class="text-component__block ">

    <figure
      v-if="content.id"
      class="media-wrapper"
    >
      <iframe
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${content.id}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </figure>
    <video controls v-if="content.upload">
      <source
        :src="content.upload.filename"
        type="video/mp4"
      >

    </video>
  </div>
</template>


<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
