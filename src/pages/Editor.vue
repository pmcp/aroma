<template>
  <Layout class="padding-y-xl">
    <component v-if="story && story.content" :is="`aroma-${story.content.component}`" :content="story.content"></component>
  </Layout>
</template>

<script>




const loadStoryblokBridge = function(cb) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=hkENPzbQoYvpZeNPpK6pQgtt`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

export default {
  data() {
    return {
      story: {content: {}}
    }
  },
  mounted() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() })
    window.cody = require("~/assets/js/cody-scripts-min.js");
  
  },
  methods: {
    loadStory() {
      window.storyblok.get({
        slug: window.storyblok.getParam('path'),
        version: 'draft',
        resolve_links: 'story',
        resolve_relations: ['preview-articles.articles', 'page-map.organisations']
      }, (data) => {
        this.story = data.story
        
      })
    },
    initStoryblokEvents() {
      
      this.loadStory()

      let sb = window.storyblok
  
  
      sb.on(['change', 'published'], (payload) => {
        this.loadStory()
      })

      sb.on('input', (payload) => {
        this.story = payload.story
        if (this.story && payload.story.id === this.story.id) {
          payload.story.content = sb.addComments(payload.story.content, payload.story.id)
          this.story = payload.story;
          
        }
      })

      sb.pingEditor(() => {
        if (sb.inEditor) {
          sb.enterEditmode()
        }
      })
    }
  }
}
</script>