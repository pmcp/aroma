<template>
  <div>
    <aroma-map :locations="locations" :lat="content.address_lat" :long="content.address_long"></aroma-map>
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
  computed: {
    locations() {
      return [{
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [this.content.address_lat, this.content.address_long]
          },
          properties: {
            title: this.content.name,
            icon: "monument"
          }
        }];
    }

  }
};
</script>