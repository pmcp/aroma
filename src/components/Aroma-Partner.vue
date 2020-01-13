<template>
  <div class="padding-sm">
    <template v-if="fetchedContent">
      
      <a v-if="fetchedContent.content.url" :href="fetchedContent.content.url.url" target="blank">
        
        
        <g-image :src="fetchedContent.content.logo | transformImage('400x0')" width="500"></g-image>
      </a>
      
      <g-image v-else :src="fetchedContent.content.logo.url | transformImage('400x0')" width="500"></g-image>
      
      
    </template>
  </div>
</template>

<static-query>
  query {
    allStoryblokEntry(filter: { full_slug: { regex: "partners" },  lang: { regex: "default" }}) {
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
    content: {
      type: [Object, String],
      default: () => ({})
    }
  },
  computed: {
    fetchedContent() {
      if(typeof this.content === Object ) {
        this.fetchedContent = content;
      } else {
        let partner = this.$static.allStoryblokEntry.edges.find(element => {
            return element.node.uuid == this.content
          })
          console.log(partner)
          if(partner) {
            return partner.node
          }
          
      }
      // return this.data 
    }
  },
  // data() {
  //   return {
  //     fetchedContent: null
  //   }
  // },
  
  // mounted () {
  //    if(typeof this.content === Object ) {
  //       this.fetchedContent = content;
  //     } else {
  //       console.log('here')
  //       // this.fetchPartner(this.content)
  //         return this.$static.allStoryblokEntry.edges.find(element => {
  //        console.log(element.node)
  //           return element.node.uuid == this.content
  //         }).node
  //     }
  // },
  methods: {
    fetchPartner(id) {
      if(window.storyblok) {
        window.storyblok.get({
          by_uuids: id,
          slug: "/",  // adding slug "/" will make queries work again
          version: 'draft',
        }, (data) => {
          this.fetchedContent = data.stories[0]
        })
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>