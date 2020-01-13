<template>
  <a
    :href="'/' + fetchedArticle.full_slug"
    class="card-v8"
    v-if="fetchedArticle.content"
  >
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
    }
  },
  computed: {
    fetchedArticle() {
      
       if(typeof this.article == 'object' ) {
         console.log()
        return this.article;
      } else {
        return this.$static.allStoryblokEntry.edges.find(element => {
          return element.node.uuid == this.article;
      }).node;
    }
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