<template>
  <Layout class="padding-y-lg" :nav="story.content.navigation"> 
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

const resolveRelations = {
  'preview-articles': 'articles',
  'page-map':'organisations',
  'existing_element':'element',
  'partners':['partners', 'poweredby'],
  '': 'navigation',
  }

export default {
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
    loadStory(resolveRelations) {
      let resolveRelationsArray = []
      if(resolveRelations) {
        Object.keys( resolveRelations ).forEach( key => {
          if(key !== '') {
            resolveRelationsArray = [...resolveRelationsArray, `${key}.${resolveRelations[key]}`]
          } else {
            resolveRelationsArray = [...resolveRelationsArray, resolveRelations[key]]
          }
          
        });
      }

      window.storyblok.get({
        slug: window.storyblok.getParam('path'),
        version: 'draft',
        resolve_links: 'story',
        resolve_relations: [resolveRelationsArray]
      }, (data) => {

        this.story = data.story
        
      })
    },
    initStoryblokEvents() {
      
      this.loadStory(resolveRelations)

      let sb = window.storyblok
  
      sb.on(['change', 'published'], (payload) => {
        this.loadStory(resolveRelations)
      })

      sb.on('input', (payload) => {
        if (this.story && payload.story.id === this.story.id) {
          payload.story.content = sb.addComments(payload.story.content, payload.story.id)
          // Check for resolve_relations
          if(resolveRelations) {
            Object.keys( resolveRelations ).forEach( (key, idx, array) => {

              if(payload.story.content.component === key) {
                payload.story.content[resolveRelations[key]] = this.story.content[resolveRelations[key]]
              }
               if (idx === Object.keys( resolveRelations ).length - 1){ 
                this.story = payload.story;
                window.cody = require("~/assets/js/cody-scripts-min.js");
               }  
            });
          } else {
            this.story = payload.story;
            window.cody = require("~/assets/js/cody-scripts-min.js");
          }

          
      


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