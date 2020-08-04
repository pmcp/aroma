<template>
 
  
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
      console.log(this.article)
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