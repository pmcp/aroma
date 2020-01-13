<template> 
  <section class="features-v3 padding-bottom-xxl ">
    <div class="features-v3__text">
      <div class="container max-width-adaptive-md">
        <div class="grid grid-gap-md justify-between@md">

          <div class="text-component col-6@md" v-if="content.title">
            <h2 class="text-xl">{{ content.title }}</h2>
          </div>
    
          <div class="text-component col-5@md" v-if="content.description">
            <p class="color-contrast-medium">{{ content.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container max-width-adaptive-md">
      <ul class="features-v3__cards grid grid-gap-lg">
        <li v-for="c in content.articles" :key="c.uuid" class="col-4@md">
          <aroma-preview-article :article="c">
          </aroma-preview-article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  // methods: {
  //   getItems(id) {
  //     // console.log(this.$static.allStoryblokEntry.edges)
      
  //     this.$static.allStoryblokEntry.edges.map((item, index)=>{
   
  //       if(item.node.uuid === id) {
  //               return item.node
  //             }
        
  //     });
  //     // this.$static.allStoryblokEntry.edges.filter(edge => {
        
  //     //   if(edge.node.uuid === id) {
  //     //     console.log(edge.node)
  //     //     return 'TEST'
  //     //   }
        
  //     // })
  //   }
  // }
};
</script>

<style scoped >
.features-v3__text {
  padding-top: var(--space-xl);
  padding-bottom: calc(var(--space-xl) * 2);
  background-color: var(--color-contrast-lower); 

 
}

 h2 {
    color: var(--color-primary);
  }
.card-v8 {
  border-radius: 0;
}
</style>