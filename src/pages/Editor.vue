<template>
  <Layout>

    <!-- <ClientOnly> -->
    <template v-if="story && story.content"> 
      <aroma-simplepage v-if="story.content.component == 'page'" :content="story.content"></aroma-simplepage>
      <aroma-launchpage v-else-if="story.content.component == 'page_launch'" :content="story.content"></aroma-launchpage>
      <component  class="padding-y-xxl" v-else :is="`aroma-${story.content.component}`" :content="story.content"></component>
    </template>
    <!-- </ClientOnly> -->
  </Layout>
</template>

<script>

// import config from '../../gridsome.config'
import aromaLaunchpage from '../components/Aroma-Launchpage'
import aromaSimplepage from '../components/Aroma-Simplepage'
import aromaTimeline from '../components/Aroma-Timeline'
import aromaCarousel from '../components/Aroma-Carousel'
import aromaUndefined from '../components/Aroma-Undefined'

const loadStoryblokBridge = function(cb) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=hkENPzbQoYvpZeNPpK6pQgtt`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

export default {
  components: {
    aromaUndefined,
    aromaLaunchpage,
    aromaSimplepage,
    aromaTimeline,
    aromaCarousel,
  },
  data() {
    return {
      story: {content: {}}
    }
  },
  mounted() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() })
    // window.cody = require("~/assets/js/cody-scripts-min.js");
  
  },
  methods: {
    loadStory() {
      window.storyblok.get({
        slug: window.storyblok.getParam('path'),
        version: 'draft'
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
        
        if (this.story && payload.story.id === this.story.id) {
          payload.story.content = sb.addComments(payload.story.content, payload.story.id)
          this.story = payload.story
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