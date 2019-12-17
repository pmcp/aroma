<template>
        <!-- <ClientOnly> -->
  <div id="app">
    <mapbox
      access-token="pk.eyJ1IjoicG1jcCIsImEiOiJjazQ5bGNiMzMwNXljM21yb3ZtMzN4cG9sIn0.E9PfoikaHtDRNTE_a18_vg"
      :map-options="options"
      @map-load="loaded"
      @map-click:points="clicked"
      @map-mouseenter:points="mouseEntered"
      @map-mouseleave:points="mouseLeft"
    />
  </div>
  
        <!-- </ClientOnly> -->
</template>
<script>
import Mapbox from 'mapbox-gl-vue'

/**
 *  We have to keep the map reference outside vue 'data' object
 *  otherwise the mapbox styles break 
 */
let mapRef = {} // <--- HERE


export default {
  components: { Mapbox },
  props: {
    lat: {
      type: String,
    },
    long: {
      type: String
    },
    locations: {
      type: Array
    },
    zoom: {
      type: Number,
      default: 8
    }
  },
  computed: {
    options() {
      return {
        style: 'mapbox://styles/mapbox/light-v9',
        center: [this.lat, this.long],
        zoom: this.zoom,
      } 
    }
  },
   watch: {
    lat: function (val) {
      this.flyMap(this.lat, this.long)
      return val;

    },
    long: function (val) {
      this.flyMap(this.lat, this.long)
      return val;
      
    }
  },
  methods: {
     loaded(map) {
      
      mapRef = map;
      mapRef.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: this.locations,
          },
        },
        layout: {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top',
        },
      })
      // this.map = map
    },
    clicked(map, e) {
      if (e.features) {
        const coordinates = e.features[0].geometry.coordinates.slice()

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }

        new mapboxgl.Popup()
          .setLngLat({ lng: coordinates[0], lat: coordinates[1] })
          .setHTML('<div id="vue-popup-content"></div>')
          .addTo(map)

        new PopupContent({
          propsData: { feature: e.features[0] },
        }).$mount('#vue-popup-content')
      }
    },
    mouseEntered(map) {
      mapRef = map
      mapRef.getCanvas().style.cursor = 'pointer'
    },
    mouseLeft(map) {
      mapRef = map
      mapRef.getCanvas().style.cursor = ''
    },
    flyMap(lat, long){
      mapRef.flyTo({
      center: [lat, long],
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  
  },
}
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
</style>

   
