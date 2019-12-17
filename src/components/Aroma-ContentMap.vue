<template>
  
    <aroma-map
      :locations="locations"
      :lat="content.lat"
      :long="content.long"
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