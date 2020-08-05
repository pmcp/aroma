<template>
  <div>
    <aroma-hero :expanded="false" :logos="false" :cover="content.cover" :video="content.cover_video">
      <template v-if="content.title" v-slot:title>
        {{ content.title }}
      </template>
      <template v-if="content.subtitle" v-slot:subtitle>
        {{ content.subtitle }}
      </template>
      <template v-if="content.subtext" v-slot:subtext>{{ content.subtext }}</template>
    </aroma-hero>
    <section class="container max-width-adaptive-sm margin-bottom-xl"> 
      <component class="padding-y-md text-component" :class="{'text-component__block--outset': c.component == 'images' ||  c.component == 'video'}" v-for="c in content.content" :key="c._uid" :is="`aroma-content-${c.component}`" :content="c" :lang="lang">
      </component>
    </section>
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
  },
  computed: {
    orgs() {
      console.log(this.$static.allStoryblokEntry.edges)
      return this.$static.allStoryblokEntry.edges.filter(story => story.node.lang === this.lang)
    }
  }
};
</script>

