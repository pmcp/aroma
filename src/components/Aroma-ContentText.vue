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
      let text = {};
      
      if (this.content) {
        // Fix  for captions in carousel
        console.log('true 1', typeof this.content.caption)
        if(typeof this.content.caption === 'string') {
          return;
        } else if(this.content.caption && this.content.caption.content) {
          console.log(this.content.caption)
          return this.$storyapi.richTextResolver.render(this.content.caption);
        }
        
        if (this.content.type === "doc") text = this.content;
        else {
          text = this.content.text;
          console.log(this.content)
          if (text) return text ? this.$storyapi.richTextResolver.render(text) : "";
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