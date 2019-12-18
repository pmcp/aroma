<template>
  <div class="map-container">
    <div
      id="map"
      class="map"
    ></div>
    
  </div>
</template>
 
<script>
export default {
  data: function() {
    return {
      map: null,
      geoCoder: null
    };
  },
  mounted() {
    this.createMap();
  },
  props: {
    locations: {
      type: Array,
      default: []
    },
    currentStyle: {
      type: String,
      default: "mapbox://styles/mapbox/light-v9"
    },
    center: Array,
    zoom: Number
  },
  watch: {
    center: function(newVal, oldVal) {
      this.flyTo(newVal)
    },
    zoom: function(newVal, oldVal) {
      this.map.flyTo({ zoom: newVal });
    }
  },
  methods: {
    createMap() {
      const mapboxgl = require("mapbox-gl/dist/mapbox-gl");
      mapboxgl.accessToken = process.env.GRIDSOME_MAPBOX_API;
      const mapOptions = {
        container: "map",
        style: this.currentStyle,
        center: this.center,
        zoom: this.zoom,
        pitch: 0,
      };
      const map = (this.map = new mapboxgl.Map(mapOptions));

      var size = 100;

      var pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),

        // get rendering context for the map canvas when layer is added to the map
        onAdd: function() {
          var canvas = document.createElement("canvas");
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext("2d");
        },

        // called once before every frame where the icon will be used
        render: function() {
          var duration = 1000;
          var t = (performance.now() % duration) / duration;

          var radius = (size / 2) * 0.3;
          var outerRadius = (size / 2) * 0.7 * t + radius;
          var context = this.context;

          // draw outer circle
          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
          );
          context.fillStyle = "rgba(13, 64, 115," + (1 - t) + ")";
          context.fill();

          // draw inner circle
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = "rgba(13, 93, 165, 1)";
          context.strokeStyle = "rgba(13, 64, 115, 1)";
          context.lineWidth = 2 + 4 * (1 - t);
          context.fill();
          context.stroke();

          // update this image's data with data from the canvas
          this.data = context.getImageData(0, 0, this.width, this.height).data;

          // continuously repaint the map, resulting in the smooth animation of the dot
          map.triggerRepaint();

          // return `true` to let the map know that the image was updated
          return true;
        }
      };

      map.on("style.load", () => {
        map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });
        if (this.locations.length > 0) {
          this.addMarkers(this.locations);
        }
      });
    },
    addMarkers(locations) {
      this.map.addLayer({
        id: "points",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: locations
          }
        },
        layout: {
          "icon-image": "pulsing-dot"
        }
      });
    },
    flyTo(coordinates){
      this.map.flyTo({ center: coordinates });
    }
    
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
</style>

   
