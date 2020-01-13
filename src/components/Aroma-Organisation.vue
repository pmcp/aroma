<template>
  <div>
    <aroma-map :locations="locations" :center="[content.address_lat, content.address_long]" :zoom="14"></aroma-map>
    <aroma-organisation-detail :org="orgForProp" @click.native="flyTo(content.address_lat, content.address_long)">
    </aroma-organisation-detail>
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
    orgForProp() {
      let org = {
        content : this.content
      }
      
      return org
    },

    locations() {
      return [{
          content: this.content,
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