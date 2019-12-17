<template>
  <div>
    <aroma-map
      :locations="locations"
      :lat="lat"
      :long="long"
      :zoom="zoomMap"
    ></aroma-map>
    <div class="parent grid grid-gap-xs">
      <aroma-organisation-detail v-for="org in content.organisations" :key="org.uuid" :org="org" @click.native="setCoordinates(org.content.address_lat, org.content.address_long)">
      </aroma-organisation-detail>
    </div>
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
  data() {
    return {
      lat: '',
      long: ''
    }
  },
  computed: {
    zoomMap() {
      return this.content.zoom * 1;
    },
    locations() {
      let locations = [];
      
      this.content.organisations.forEach(el => {
        if (el.content) {
          locations.push({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [el.content.address_lat, el.content.address_long]
            },
            properties: {
              title: el.content.name,
              icon: "monument"
            }
          });
        }
      });
      console.log(locations)
      return locations;
    },
    
  },
  methods: {
    setCoordinates(lat, long) {
      this.lat = lat;
      this.long = long
    }
  },
  created () {
    if (this.content.organisations[0].content) {
      this.lat = this.content.organisations[0].content.address_lat;
      this.long = this.content.organisations[0].content.address_long;
    };
  },
};
</script>