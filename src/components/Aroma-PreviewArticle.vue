<template>
  <a
    :href="fetchedArticle.generatedSlug"
    class="card-v8"
    v-if="fetchedArticle.content">
  
    <figure>
      <img
        v-if="typeof fetchedArticle.content.cover === 'string'"
        :src="fetchedArticle.content.cover | transformImage('00x0')"
        alt="Image description"
      >
      <img
        v-else-if="typeof fetchedArticle.content.cover === 'object'"
        :src="fetchedArticle.content.cover.url | transformImage('400x0')"
        alt="Image description"
      >
    </figure>

    <footer class="padding-sm">
      <p class="text-sm color-contrast-medium margin-bottom-sm">{{fetchedArticle.content.label }}</p>
      <div class="text-component">
        <h4><span class="card-v8__title">{{ fetchedArticle.content.title }}</span></h4>
      </div>
    </footer>
  </a>

     <article
            v-else-if="fetchedArticle.content && size === 'xl'"
            class="story story--featured"
          >
          
            <a
             
              :href="'/' +  fetchedArticle.full_slug"
            >
              <figure class="media-wrapper media-wrapper--4:3">
                <g-image
                  :src=" fetchedArticle.content.cover"
                  width="500"
                />
              </figure>
            </a>

            <div class="story__content">
              <div class="margin-bottom-xs">
                <a
                  :href="'/' +  fetchedArticle.full_slug"
                  class="story__category"
                >
                  <!-- <svg class="icon margin-right-xxxs" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width='1' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><circle cx='8' cy='7' r='1.5'></circle><path d='M12.121,14.263a7.5,7.5,0,1,0-8.242,0'></path><path d='M12.377,11.32a5.5,5.5,0,1,0-8.754,0'></path><path d='M6.605,10.5H9.4a1,1,0,0,1,1,1.1L10,15.5H6l-.39-3.9A1,1,0,0,1,6.605,10.5Z'></path></g></svg> -->
                  <i>{{  fetchedArticle.content.label }}</i>
                </a>
              </div>

              <div class="text-component">
                <h2 class="story__title"><a :href="'/' +  fetchedArticle.full_slug">{{  fetchedArticle.content.title }}</a></h2>
                <p>{{  fetchedArticle.content.subtitle }}</p>
              </div>

            </div>
          </article>
  
</template>

<static-query>
  query {
    allStoryblokEntry(filter: { full_slug: { regex: "projects" },  lang: { regex: "default" }}) {
        edges {
          node {
            lang
            id
            uuid
            full_slug
            name
            slug
            content
          }
        }
      }
  }
</static-query>

<script>
export default {
  props: {
    article: {
      type: [Object, String],
      default: () => ({})
    },
    lang: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'md'
    },
  },
  computed: {
    fetchedArticle() {
      if (typeof this.article == "object") {
        this.article.generatedSlug = this.createUrl(this.article);
        return this.article;
      } else {
        return this.$static.allStoryblokEntry.edges.find(element => {
          if (element.node.uuid == this.article) {
            element.node.generatedSlug = this.createUrl(element.node);
            return element.node;
          }
        }).node;
      }
    }
  },
  methods: {
    createUrl(l) {
      let slug = "/";
      if (l.slug === "home") {
        if (this.lang !== "default") {
          slug = `/${this.lang}`;
        }
      } else {
        slug = "/" + l.slug;
        if (this.lang !== "default") slug = `/de${slug}`;
        // If there is a slug chosen by the editor, use that one.
        if (
          this.lang === "default" &&
          l.content.slug_fr &&
          l.content.slug_fr !== ""
        )
          slug = `/${l.content.slug_fr}`;
        if (
          this.lang !== "default" &&
          l.content.slug_de &&
          l.content.slug_de !== ""
        )
          slug = `/de/${l.content.slug_de}`;
      }
      // console.log(slug)
      return slug;
    }
  }
};
</script>

<style scoped >
.features-v3__text {
  padding-top: var(--space-xl);
  padding-bottom: calc(var(--space-xl) * 2);
  background-color: var(--color-contrast-lower);
}

h2 {
  color: var(--color-primary);
}
.card-v8 {
  border-radius: 0;
}
</style>