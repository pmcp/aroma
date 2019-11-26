<template>
  <Layout>
    <aroma-launchpage :content="$page.content.content"></aroma-launchpage>
  </Layout>
</template>

<page-query>
query {
  content: storyblokEntry(id: "story-4122641-default") {
    id
    content
  },
  partners: allStoryblokEntry(filter: { full_slug: { regex: "partners" },  lang: { regex: "default" }}) {
      edges {
        node {
          lang
          id
          full_slug
          name
        content
      }
    }
  }
  
}
</page-query>

<script>
import aromaLaunchpage from "../components/Aroma-Launchpage";
export default {
  components: {
    aromaLaunchpage
  },
  metaInfo: {
    title: "Aroma"
  },
  mounted() {
    //require the full cody library
    window.cody = require("~/assets/js/cody-scripts.js");
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

