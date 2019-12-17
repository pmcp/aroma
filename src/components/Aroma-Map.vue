<template>
        <ClientOnly>
  <div id="app">
    <mapbox
      access-token="pk.eyJ1IjoicG1jcCIsImEiOiJjazQ5bGNiMzMwNXljM21yb3ZtMzN4cG9sIn0.E9PfoikaHtDRNTE_a18_vg"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3,
      }"
            @map-init="mapInited"
      @map-load="mapLoaded"
    />
  </div>
        </ClientOnly>
</template>
<script>
import Mapbox from 'mapbox-gl-vue'

export default {
  components: { Mapbox },
  methods: {
    mapInited(map) {
      console.log('inited', map)
    },
    mapLoaded(map) {
      console.log('loaded', map)
    }
  }
}
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
</style>