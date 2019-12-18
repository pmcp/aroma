<template>
  <div
    v-html="richtext"
    class="text-component line-height-lg v-space-md"
  >
  </div>
</template>

<script>
export default {
  props: ["content"],
  computed: {
    richtext() {
      let text = {};
      if (this.content) {
        if (this.content.type === "doc") text = this.content;
        else text = this.content.text;
        if (text)
          return text ? this.$storyapi.richTextResolver.render(text) : "";
      }
    }
  }
};
</script>