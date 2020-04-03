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
        console.log(this.content)
        // Fix  for captions in carousel
        if(this.content.caption) {
          if (typeof this.content.caption === 'string') {
            text = "";
          } else {
            text = this.$storyapi.richTextResolver.render(this.content.caption);
          }
          
        }

        if (this.content.type === "doc") {
          text = this.content;
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

.caption p a {
  
  color: var(--color-primary-lighter) !important;
}
</style>