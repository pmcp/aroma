<template>
  <div class="padding-sm">
    
    <template v-if="fetchedContent">
    <a v-if="fetchedContent.content.url" :href="fetchedContent.content.url.url" target="blank">
      <g-image :src="fetchedContent.content.logo"></g-image>
    </a>
      <g-image v-else :src="fetchedContent.content.logo"></g-image>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: [Object, String],
      default: () => ({})
    }
  },
  data() {
    return {
      fetchedContent: null
    }
  },
  mounted () {
     if(typeof this.content === Object ) {
        this.fetchedContent = content;
      } else {
        this.fetchPartner(this.content)
      }
  },
  methods: {
    fetchPartner(id) {
     window.storyblok.get({
        by_uuids: id,
        slug: "/",  // adding slug "/" will make queries work again
        version: 'draft',
      }, (data) => {
        this.fetchedContent = data.stories[0]
      })
    },
  },
};
</script>

<style lang="scss" scoped>

</style>