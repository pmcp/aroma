<template>
  <a
    :href="'/' + article.full_slug"
    class="card-v8"
    v-if="article.content"
  >
    <figure>
      <img
        :src="article.content.cover"
        alt="Image description"
      >
    </figure>

    <footer class="padding-sm">
      <p class="text-sm color-contrast-medium margin-bottom-sm">{{article.content.label }}</p>
      <div class="text-component">
        <h4><span class="card-v8__title">{{ article.content.title }}</span></h4>
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
    uuid: {
      type: String
    }
  },
  computed: {
    article() {
      return this.$static.allStoryblokEntry.edges.find(element => {
        return element.node.uuid == this.uuid;
      }).node;
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