<template>
  <div class="articles margin-bottom-xxl">
    <aroma-hero
      :logos="!content.hide_logos"
      :expanded="content.header_expanded"
      :cover="content.cover_image"
      :video="content.cover_video"
      :showtitle="content.show_title"
    >
      <template v-slot:title>{{ content.title }}</template>
      <template v-slot:subtitle>{{ content.subtitle }}</template>
      <template v-slot:subtext>{{ content.subtext }}</template>
    </aroma-hero>
    
    <div class="container max-width-adaptive-lg padding-top-xl">
      <div class="grid grid-gap-lg">
        <aroma-preview-article
          :article="content.articles[0]"
          size="xl"
          class="col-4@md article-list"
        >
        </aroma-preview-article>
<!-- {{ $static.allStoryblokEntry.edges }} -->
<!-- <div v-for="article in $static.allStoryblokEntry.edges">
  {{ article.node }}
</div> -->

        <aroma-preview-article
          v-for="article in articles"
          :key="article.node.uuid"
          :article="article.node"
          :lang="lang"
          class="col-4@md article-list"
        >
        </aroma-preview-article>
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
    allStoryblokEntry(filter: { full_slug: { regex: "articles" }}) {
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
      default: () => ({}),
    },
    lang: {
      type: String,
      default: "default",
    },
  },
  computed: {
    articles() {
      return this.$static.allStoryblokEntry.edges.filter(article => article.node.lang === this.lang)
    }
  },
};
</script>

<style lang="scss" scoped>
.article-list:first-of-type {
  display: none;
}
</style>