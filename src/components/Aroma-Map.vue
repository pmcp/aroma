<template>
  <!-- <ClientOnly> -->
    
    <div class="map-container">
      <div
        id="map"
        class="map"
      ></div>
    </div>
  <!-- </ClientOnly> -->
</template>
 
<script>
/**
 *  We have to keep the map reference outside vue 'data' object
 *  otherwise the mapbox styles break
 */
// let mapRef = {} // <--- HERE

export default {
  data: function() {
    return {
      map: null
    };
  },
  mounted() {
    
    
    //  const map = (this.map = new window.mapboxgl.Map(mapOptions));
    console.log('here')
    this.createMap();
  },
  props: {
    satView: {
      type: Boolean,
      default: false
    },
    currentStyle: {
      type: String,
      default: "mapbox://styles/mapbox/light-v9"
    },
    markers: {
      type: Array,
      default: () => []
    },
    ownMarkers: {
      type: Array,
      default: () => []
    },
    alerts: {
      type: Array,
      default: () => []
    },
    pin: Object,
    newPin: Object,
    locale: {
      type: String,
      default: "en"
    },
    center: Array,
    zoom: Number
  },

  methods: {
    createMap() {
      window.mapboxgl = require("mapbox-gl");
      // const mapboxgl = require("mapbox-gl");
      const mapboxgl = require("mapbox-gl/dist/mapbox-gl");
      // const MapboxGeocoder = require("@mapbox/mapbox-gl-geocoder");
      mapboxgl.accessToken = process.env.GRIDSOME_MAPBOX_API;
      const clusters = [
        [150, "rgba(28, 250, 212, 0.95)", 50],
        [20, "rgba(28, 250, 212, 0.95)", 40],
        [0, "rgba(28, 250, 212, 0.95)", 30]
      ];

      const mapOptions = {
        
        
        container: "map",
        style: this.currentStyle,
        // center: this.center,
        // zoom: this.zoom,
        pitch: 0,
        minZoom: 2,
        maxZoom: 20
      
      }
     const map = (this.map = new mapboxgl.Map(mapOptions));

      map.on("style.load", function() {
        addLayers(map); //add custom layer and source to the new map style
      });
      // const addLayers = map => {
      //   map.setLayoutProperty("country-label-lg", "text-field", "{name_nl}");
      //   map.addSource("point", {
      //     type: "geojson",
      //     data: {
      //       type: "Point",
      //       coordinates: []
      //     }
      //   });
      //   map.addSource("radius", {
      //     type: "geojson",
      //     data: {
      //       type: "Polygon",
      //       coordinates: [[[]]]
      //     }
      //   });
      //   map.addSource("highlight", {
      //     type: "geojson",
      //     data: {
      //       type: "Polygon",
      //       coordinates: [[[]]]
      //     }
      //   });
      //   map.addSource("markers", {
      //     type: "geojson",
      //     data: {
      //       type: "FeatureCollection",
      //       features: this.markers
      //     },
      //     cluster: true,
      //     clusterMaxZoom: 14, // Max zoom to cluster points on
      //     clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      //   });
      //   map.addSource("alerts", {
      //     type: "geojson",
      //     data: {
      //       type: "FeatureCollection",
      //       features: this.alerts
      //     }
      //   });
      //   map.addLayer({
      //     id: "highlight",
      //     type: "fill",
      //     source: "highlight",
      //     paint: {
      //       "fill-color": "#70DCC2",
      //       "fill-opacity": 0.6
      //     }
      //   });
      //   map.addLayer({
      //     id: "radius",
      //     type: "fill",
      //     source: "radius",
      //     paint: {
      //       "fill-color": "#f47777",
      //       "fill-opacity": 0.3
      //     }
      //   });
      //   map.addLayer({
      //     id: "point",
      //     type: "circle",
      //     source: "point",
      //     paint: {
      //       "circle-radius": 10,
      //       "circle-color": "#F47777",
      //       "circle-opacity": 1
      //     }
      //   });
      //   map.addLayer({
      //     id: "markers",
      //     type: "symbol",
      //     source: "markers",
      //     layout: {
      //       "icon-image": "needle",
      //       "icon-size": 1,
      //       "icon-ignore-placement": true,
      //       "icon-offset": [0, -12]
      //     }
      //   });
      //   map.addLayer({
      //     id: "alerts",
      //     type: "symbol",
      //     source: "alerts",
      //     layout: {
      //       "icon-image": "alert",
      //       "icon-size": 0.8,
      //       "icon-ignore-placement": true,
      //       "icon-offset": [0, -12]
      //     }
      //   });
      //   clusters.forEach((cluster, i) => {
      //     map.addLayer({
      //       id: `cluster-${i}`,
      //       type: "circle",
      //       source: "markers",
      //       paint: {
      //         "circle-color": cluster[1],
      //         "circle-radius": cluster[2]
      //       },
      //       filter:
      //         i === 0
      //           ? [">=", "point_count", cluster[0]]
      //           : [
      //               "all",
      //               [">=", "point_count", cluster[0]],
      //               ["<", "point_count", clusters[i - 1][0]]
      //             ]
      //     });
      //   });
      //   map.addLayer({
      //     id: "cluster-count",
      //     type: "symbol",
      //     source: "markers",
      //     paint: {
      //       "text-color": "white",
      //       "text-halo-width": 1,
      //       "text-halo-color": "rgb(255,255,255)"
      //     },
      //     layout: {
      //       "text-field": "{point_count}",
      //       "text-size": 21
      //     }
      //   });
      // };
      // map.on(
      //   "load",
      //   function(event) {
      //     document
      //       .querySelector(".style-toggle")
      //       .addEventListener("click", () => {
      //         if (!this.satView) {
      //           map.setStyle(
      //             "mapbox://styles/pinpartdev/cj59ir6v35avw2rp8tto4x8tn"
      //           );
      //           this.satView = true;
      //         } else {
      //           map.setStyle(
      //             "mapbox://styles/pinpartdev/cj39tpyje00002st23hsfvu8h"
      //           );
      //           this.satView = false;
      //         }
      //       });
      //     map.addControl(
      //       new MapboxGeocoder({
      //         accessToken: process.env.GRIDSOME_MAPBOX_API,
      //         placeholder: "site_search",
      //         mapboxgl: mapboxgl
      //       })
      //     );
      //   }.bind(this)
      // );
      // map.on(
      //   "click",
      //   function(event) {
      //     const { lngLat, point } = event;
      //     const features = map.queryRenderedFeatures(point, {
      //       layers: ["markers", "alerts", "highlight"]
      //     });
      //     const feature = features[0] || null;
      //     const isMarkerClick = feature && feature.layer.id === "markers";
      //     const isAlertClick = feature && feature.layer.id === "alerts";
      //     const isBuildingClick = feature && feature.layer.id === "highlight";
      //     const currentZoom = map.getZoom();
      //     const isNotZoomedInEnoughClick = currentZoom < MIN_ZOOM_LEVEL;
      //     // Clicked on an existing feature
      //     if (isMarkerClick || isAlertClick) {
      //       // Include all underlaying markers
      //       const markers = features
      //         .filter(
      //           feature =>
      //             feature.layer.id === "markers" ||
      //             feature.layer.id === "alerts"
      //         )
      //         // TODO this is super hacky
      //         // we should replace it by having an api call on show pin sidebar
      //         .map(feature => ({
      //           properties: {
      //             ...feature.properties,
      //             owner: JSON.parse(feature.properties.owner),
      //             tags: JSON.parse(feature.properties.tags)
      //           }
      //         }));
      //       this.$emit("marker", {
      //         id: feature.properties.id,
      //         features: markers
      //       });
      //     } else if (isNotZoomedInEnoughClick) {
      //       // Zoom in
      //       map.flyTo({
      //         center: lngLat,
      //         zoom: currentZoom + 2,
      //         speed: 1
      //       });
      //       map.setLayoutProperty("point", "visibility", "none");
      //       this.$emit("click");
      //       return;
      //       // } else if (isBuildingClick) {
      //     } else {
      //       axios({
      //         method: "get",
      //         url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${
      //           lngLat.lng
      //         },${lngLat.lat}.json`,
      //         params: {
      //           access_token: process.env.mapboxAccessToken,
      //           limit: 1,
      //           types: "address",
      //           language: this.locale
      //         }
      //       })
      //         .then(({ data: { features } }) => {
      //           const feature = features && features[0];
      //           if (feature) {
      //             // TODO Check to see if there is an existing marker on this point and
      //             // emit a marker event
      //             this.$emit("geocode", feature);
      //           }
      //         })
      //         .catch(err => {
      //           console.log(err);
      //         });
      //     }
      //   }.bind(this)
      // );
      // map.on("mousemove", event => {
      //   if (!map.loaded()) return;
      //   const zoomLevel = map.getZoom();
      //   let features;
      //   if (!this.satView) {
      //     features = map.queryRenderedFeatures(event.point, {
      //       layers: ["building", "highlight", "markers", "radius"]
      //     });
      //   } else {
      //     features = map.queryRenderedFeatures(event.point, {
      //       layers: ["markers", "radius"]
      //     });
      //   }
      //   const mainFeature = features && features[0];
      //   const mainFeatureType = mainFeature && mainFeature.layer.id;
      //   if (!mainFeatureType) {
      //     return;
      //   } else if (
      //     mainFeature &&
      //     mainFeatureType === "building" &&
      //     zoomLevel >= MIN_ZOOM_LEVEL
      //   ) {
      //     map.setLayoutProperty("highlight", "visibility", "visible");
      //     map.getSource("highlight").setData(features[0].geometry);
      //     map.getCanvas().style.cursor = "pointer";
      //   } else if (mainFeature && mainFeatureType === "markers") {
      //     map.getCanvas().style.cursor = "pointer";
      //   } else if (zoomLevel < MIN_ZOOM_LEVEL) {
      //     // map.getCanvas().style.cursor = 'zoom-in'
      //   } else if (!mainFeature) {
      //     map.setLayoutProperty("highlight", "visibility", "none");
      //     // map.getCanvas().style.cursor = ''
      //   }
      // });
      // const nav = new mapboxgl.NavigationControl();
      // map.addControl(nav, "bottom-right");
      // map.on("moveend", () => {
      //   this.$emit("move", {
      //     center: map.getCenter(),
      //     zoom: map.getZoom()
      //   });
      // });
    }
  },
  watch: {
    markers: function(newVal, oldVal) {
      if (!this.map.loaded()) return;
      this.map.getSource("markers").setData({
        type: "FeatureCollection",
        features: newVal
      });
    },
    alerts: function(newVal, oldVal) {
      if (!this.map.loaded()) return;
      this.map.getSource("alerts").setData({
        type: "FeatureCollection",
        features: newVal
      });
    },
    singlepin: function(newVal) {
      console.log("aaaa");
    },
    pin: function(newVal) {
      if (newVal) {
        const {
          properties: { radius, private: isPrivate },
          geometry
        } = newVal;
        // Hide point
        this.map.setLayoutProperty("point", "visibility", "none");
        // Show radius if needed
        if (radius) {
          const polygon = circle(
            geometry.coordinates,
            radius / 1000,
            102,
            "kilometers",
            {}
          );
          this.map.getSource("radius").setData(polygon);
          this.map.setLayoutProperty("radius", "visibility", "visible");
        } else {
          this.map.setLayoutProperty("radius", "visibility", "none");
        }
      } else {
        this.map.setLayoutProperty("radius", "visibility", "none");
      }
    },
    "newPin.private": function(newVal) {
      const color = newVal ? "#F6A623" : "#F47777";
      this.map.setPaintProperty("point", "circle-color", color);
      this.map.setPaintProperty("radius", "fill-color", color);
    },
    "newPin.geometry": function(newVal) {
      if (newVal) {
        const radius = this.newPin.radius;
        if (radius) {
          const polygon = circle(
            newVal.coordinates,
            50 / 1000,
            102,
            "kilometers",
            {}
          );
          this.map.setLayoutProperty("radius", "visibility", "visible");
          this.map.getSource("radius").setData(polygon);
        } else {
          this.map.setLayoutProperty("radius", "visibility", "none");
        }
        this.map.setLayoutProperty("point", "visibility", "visible");
        this.map.getSource("point").setData(newVal);
      } else {
        this.map.setLayoutProperty("point", "visibility", "none");
        this.map.setLayoutProperty("radius", "visibility", "none");
      }
    },
    "newPin.radius": function(newVal) {
      if (newVal) {
        const polygon = circle(
          this.newPin.geometry,
          newVal.id / 1000,
          32,
          "kilometers",
          {}
        );
        this.map.getSource("radius").setData(polygon);
        this.map.setLayoutProperty("radius", "visibility", "visible");
      } else {
        this.map.setLayoutProperty("radius", "visibility", "none");
      }
    },
    center: function(newVal) {
      if (newVal) {
        this.map.flyTo({
          center: newVal,
          zoom: 17
        });
      }
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

   
