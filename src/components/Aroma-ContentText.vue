<template>
  <div
    v-html="richtext"
    class="text-component line-height-lg v-space-md"    
    :class="{ 'caption': caption }"
  >
  </div>
</template>

<script>
export default {
  data() {
    return {
      caption: false
    }
  },
  props: ["content"],
  computed: {
    richtext() {
      
      let text = null;
      
      if (this.content) {
        
        // Fix  for captions in carousel
        
        if(this.content.caption !== undefined) {
          if (typeof this.content.caption === 'string') {  
            return this.content.caption
          } else {
            text = this.$storyapi.richTextResolver.render(this.content.caption);
            return text;
          }
          
        }

        if (this.content.type === "doc") {
          
          text = this.content;
          if(text.type === "doc") {
            
            
            return this.$storyapi.richTextResolver.render(text);
          }
          if (text) return text ? this.$storyapi.richTextResolver.render(text) : "";
        } else {
          
          text = this.content.text;
          if (text) {
            if(typeof text === 'string') {
              return text;
            } else {
              return text ? this.$storyapi.richTextResolver.render(text) : "";
            }
          }
        }
        
      }
    }
  }
};
</script>
<style>

.aroma-loop__caption a {
  
  color: var(--color-white) !important;
}
</style>