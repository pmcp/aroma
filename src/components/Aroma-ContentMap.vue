<template>
  
    <aroma-map
      :locations="locations"
      :center="center"
      :zoom="zoomMap"
    ></aroma-map>
  
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    center() {
      return [this.content.lat, this.content.long]
    },
    zoomMap() {
      return this.content.zoom * 1;
    },
    locations() {
      return [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [this.content.lat, this.content.long]
          },
          properties: {
            // title: content.name,
            icon: "monument"
          }
        }
      ];
    }
  }
};
</script>

<style scoped>
</style>