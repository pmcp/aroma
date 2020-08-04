<template>
  <div class="text-component__block ">
    <!-- TEST {{ content.contacts }} -->
    <!-- <aroma-organisation-detail v-for="org in content.contacts" :key="org.node.uuid" :org="org.node">
    </aroma-organisation-detail> -->
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
    }
  },
  computed: {
    orgs() {
      return this.$static.allStoryblokEntry.edges.filter(story => story.node.lang === this.lang)
    }
  }
};
</script>
