<template>
  <article class="padding-y-lg margin-top-sm" >
  <aroma-hero :expanded="false" :video="true"></aroma-hero>
  <header class="container max-width-xs margin-bottom-lg">
    <div class="text-component text-center line-height-lg v-space-md margin-bottom-md">
      <h1>{{ content.title }}</h1>
      <p class="color-contrast-medium text-md">{{ content.subtitle }}</p>
    </div>
  </header>

  

    
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

    <div class="container max-width-adaptive-sm">
      <div class="text-component line-height-lg v-space-md">
        <aroma-content-text :content="content.content" v-editable="content.content"></aroma-content-text>
      </div>
    </div>
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