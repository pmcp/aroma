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
        if(this.content.caption) {
          this.caption = true;
          return text ? this.$storyapi.richTextResolver.render(this.content.caption) : "";
        }
        
        if (this.content.type === "doc") text = this.content;
        else {
          console.log(this.content.text)
          text = this.content.text;
        }
        if (text)
        
      
          return text ? this.$storyapi.richTextResolver.render(text) : "";
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