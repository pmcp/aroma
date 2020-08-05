<template>
  <div class="text-component__block grid">
    <div class="col-3">
      <h2 v-if="content.title" class=" padding-right-md">{{ content.title }}:</h2>
      <p v-if="content.description" class=" padding-right-md">{{ content.description }}</p>
    </div>
    <aroma-content-contact-detail class="col-9" :org="org[0].node">
    </aroma-content-contact-detail>
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
    org() {
      // return this.$static.allStoryblokEntry.edges.filter(story => story.node.lang === this.lang)
      return this.$static.allStoryblokEntry.edges.filter(story => story.node.uuid === this.content.contact)
    }
  }
};
</script>
