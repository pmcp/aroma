<template>
  <div>
    <aroma-map
      :locations="locations"
      :center="center"
      :zoom="zoomMap"
    ></aroma-map>
    
    <div class="parent grid grid-gap-xs">
      <aroma-organisation-detail v-for="org in $static.allStoryblokEntry.edges" :key="org.node.uuid" :org="org.node" @click.native="flyTo(org.node.content.address_lat, org.node.content.address_long)">
      </aroma-organisation-detail>
    </div>
  </div>
</template>


<static-query>
  query {
    allStoryblokEntry(filter: { full_slug: { regex: "organisations" },  lang: { regex: "default" }}) {
        edges {
          node {
            lang
            id
            uuid
            full_slug
            name
            content
          }
        }
      }
  }
</static-query>

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
      return [this.content.long*1, this.content.lat*1]
    },
    zoomMap() {
      return this.content.zoom * 1;
    },
    locations() {
      let locations = [];
      this.$static.allStoryblokEntry.edges.forEach(el => {
        el = el.node;
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
      return locations;
    },
    
  },
  methods: {
    flyTo(lat, long) {
      this.content.lat = long;
      this.content.long = lat
    }
  },
  created () {
    // if (this.content.organisations[0].content) {
    //   this.lat = this.content.organisations[0].content.address_lat;
    //   this.long = this.content.organisations[0].content.address_long;
    // };
  },
};
</script>

