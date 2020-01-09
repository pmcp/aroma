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
          <article
            
            class="story story--featured"
          >
          
            <a
             
              :href="'/' +  content.articles[0].full_slug"
            >
              <figure class="media-wrapper media-wrapper--4:3">
                <g-image
                  :src=" content.articles[0].content.cover"
                  width="500"
                />
              </figure>
            </a>

            <div class="story__content">
              <div class="margin-bottom-xs">
                <a
                  :href="'/' +  content.articles[0].full_slug"
                  class="story__category"
                >
                  <!-- <svg class="icon margin-right-xxxs" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width='1' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><circle cx='8' cy='7' r='1.5'></circle><path d='M12.121,14.263a7.5,7.5,0,1,0-8.242,0'></path><path d='M12.377,11.32a5.5,5.5,0,1,0-8.754,0'></path><path d='M6.605,10.5H9.4a1,1,0,0,1,1,1.1L10,15.5H6l-.39-3.9A1,1,0,0,1,6.605,10.5Z'></path></g></svg> -->
                  <i>{{  content.articles[0].content.label }}</i>
                </a>
              </div>

              <div class="text-component">
                <h2 class="story__title"><a :href="'/' +  content.articles[0].full_slug">{{  content.articles[0].content.title }}</a></h2>
                <p>{{  content.articles[0].content.subtitle }}</p>
              </div>

            </div>
          </article>
          <aroma-preview-article
            v-for="article in content.articles"
            :key="article.uuid"
            :article="article"
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
    }
  }
};
</script>

<style lang="scss" scoped>
.article-list:first-of-type {
  display: none;
}
</style>