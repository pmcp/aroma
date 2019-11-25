<template>
  <Layout>
    <aroma-simplepage v-if="story.content.component == 'page'" :content="story.content"></aroma-simplepage>
    <aroma-launchpage v-else :content="story.content"></aroma-launchpage>
  </Layout>
</template>

<script>

// import config from '../../gridsome.config'
import aromaLaunchpage from '../components/Aroma-Launchpage'
import aromaSimplepage from '../components/Aroma-Simplepage'


const loadStoryblokBridge = function(cb) {
  
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=hkENPzbQoYvpZeNPpK6pQgtt`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

export default {
  components: {
    aromaLaunchpage,
    aromaSimplepage,
  },
  data() {
    return {
      story: {content: {}}
    }
  },
  mounted() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() })
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