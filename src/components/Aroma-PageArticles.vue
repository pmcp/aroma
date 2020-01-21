<template>
  <div class="articles margin-bottom-xxl">
    <aroma-hero
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

          <aroma-preview-article
            v-for="article in content.articles"
            :key="article.uuid"
            :article="article"
            :lang="lang"
            class="col-4@md article-list"


          >
          </aroma-preview-article>
        </div>

      </div>
    </div>
  </div>
</template>
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
  }
};
</script>

<style lang="scss" scoped>
.article-list:first-of-type {
  display: none;
}
</style>