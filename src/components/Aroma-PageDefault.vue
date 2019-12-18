<template>
  <article class=" " >
    
    <aroma-hero :expanded="content.header_expanded" :cover="content.cover_image" :video="content.cover_video" :showtitle="content.show_title">
      <template v-slot:title>{{ content.title }}</template>
      <template v-slot:subtitle>{{ content.subtitle }}</template>
      <template v-slot:subtext>{{ content.subtext }}</template>
    </aroma-hero>
  

  

    
    <template v-if="content.sections">
      <div v-for="section in content.sections" :key="section._uid">
        <template v-if="section.element || section.element != undefined">
          <template v-if="section.element.story || section.element.story != undefined">
            
            <component class="padding-y-xxl" :is="`aroma-${section.element.story.content.component}`" :content="section.element.story.content"></component>
          </template>
        </template>
        <template v-else>
          
          <component class="padding-y-xxl" :is="`aroma-${section.component}`" :content="section"></component>
          
        </template>
      </div>
    </template>

   
  </article>

</template>

<script>

export default {

  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>