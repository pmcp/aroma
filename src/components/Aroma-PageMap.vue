<template>
  <div>
    <aroma-map
      :locations="locations"
      :center="center"
      :zoom="zoomMap"
    ></aroma-map>  
    <div class="container max-width-md  margin-top-xxl margin-bottom-xxl">
      <div class="parent grid grid-gap-xs  ">
        <aroma-organisation-detail v-for="org in orgs" :key="org.node.uuid" :org="org.node" @click.native="flyTo(org.node.content.address_lat, org.node.content.address_long)">
        </aroma-organisation-detail>
      </div>
    </div>
  </div>
</template>


<static-query>
  query {
    allStoryblokEntry(filter: { full_slug: { regex: "organisations" }}) {
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
    },
    lang: {
      type: String,
      default: 'default'
    },
  },
  computed: {
    orgs() {
      console.log(this.$static.allStoryblokEntry.edges)
      return this.$static.allStoryblokEntry.edges.filter(story => story.node.lang === this.lang)
    },
    center() {
      return [this.content.long*1, this.content.lat*1]
    },
    zoomMap() {
      return this.content.zoom * 1;
    },
    locations() {
      let locations = [];
      const filteredLocations = this.$static.allStoryblokEntry.edges.filter(story => story.node.lang === this.lang)
      filteredLocations.forEach(el => {
        el = el.node;
        if (el.content) {
          
          locations.push({
            content: el.content,
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [el.content.address_lat, el.content.address_long]
            },
            properties: {
              title: el.content.name,
              icon: el.content.type,
              description: `<strong>${el.content.name}</strong><p>${el.content.street} ${el.content.number}<br>${el.content.zip} ${el.content.city}</p>`
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

