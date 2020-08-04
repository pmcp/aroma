<template>
  <div
    id="map"
    class="map"
  ></div>
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
      this.flyTo(newVal);
    },
    zoom: function(newVal, oldVal) {
      this.map.flyTo({ zoom: newVal });
    }
  },
  methods: {
    createMap() {
      const mapboxgl = require("mapbox-gl/dist/mapbox-gl");
      mapboxgl.accessToken = process.env.GRIDSOME_MAPBOX_API;
      console.log(this.center)
      const mapOptions = {
        container: "map",
        style: this.currentStyle,
        // center: [ 49.5018055, 5.9505773 ],
        center: [5.943450, 49.500450],
        zoom: 6,
        pitch: 0
      };
      const map = (this.map = new mapboxgl.Map(mapOptions));

      var size = 100;

      var pulsingDotOne = {
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

      var pulsingDotTwo = {
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
          context.fillStyle = "rgba(252, 189, 51," + (1 - t) + ")";
          context.fill();

          // draw inner circle
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = "rgba(252, 93, 165, 1)";
          context.strokeStyle = "rgba(252, 189, 51, 1)";
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
        map.addImage("pulsing-dot-one", pulsingDotOne, { pixelRatio: 2 });
        map.addImage("pulsing-dot-two", pulsingDotTwo, { pixelRatio: 2 });
        if (this.locations.length > 0) {
        
          // Make the icon available to the mao
          this.addMarkerIcon(this.locations);
        }
      });

      map.on("click", "partenairs", function(e) {
        
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      map.on("click", "acheteurs", function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

            map.on("click", "producteurs", function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

    },
    addMarkerIcon(locations) {
      let groupedLocations = {};

      locations.forEach(function(el) {
        
        if (el.type) {
          if (groupedLocations[el.content.type]) {
            groupedLocations[el.content.type].push(el);
          } else {
            groupedLocations[el.content.type] = [el];
          }
        }
      });
    
      this.map.addLayer({
        id: "partenairs",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: groupedLocations.partenairs
          }
        },
        layout: {
          "icon-image": "pulsing-dot-one"
        }
      });

      // this.map.addLayer({
      //   id: "producteurs",
      //   type: "symbol",
      //   source: {
      //     type: "geojson",
      //     data: {
      //       type: "FeatureCollection",
      //       features: groupedLocations.producteur
      //     }
      //   },
      //   layout: {
      //     "icon-image": "pulsing-dot-one"
      //   }
      // });

      // this.map.addLayer({
      //   id: "acheteurs",
      //   type: "symbol",
      //   source: {
      //     type: "geojson",
      //     data: {
      //       type: "FeatureCollection",
      //       features: groupedLocations.acheteur
      //     }
      //   },
      //   layout: {
      //     "icon-image": "pulsing-dot-two"
      //   }
      // });
    },
    flyTo(coordinates) {
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

   
