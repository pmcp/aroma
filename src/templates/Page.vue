
<template>
  <Layout class="padding-y-lg" :nav="$page.page.content.navigation"> 
    <component v-if="$page.page && $page.page.content" :is="`aroma-${$page.page.content.component}`" :content="$page.page.content"></component>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Aroma"
  },
  mounted() {
    //require the full cody library
    window.cody = require("~/assets/js/cody-scripts.js");
  }
};
</script>

<page-query>
query StoryblokEntry ($id: ID) {
  page: storyblokEntry (id: $id) {
    id
    slug
    content
  }
}
</page-query>