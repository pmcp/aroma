<template>
  


<section class="features-v3 padding-bottom-xxl">
  <div class="features-v3__text">
    <div class="container max-width-adaptive-lg">
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

  <div class="container max-width-adaptive-lg">
    <ul class="features-v3__cards grid grid-gap-lg">
      <li v-for="c in content.articles" :key="c.uuid" class="col-4@md">
        
        <a :href="c.full_slug" class="card-v8" v-if="c.content">
          <figure>
            <img :src="c.content.cover" alt="Image description">
          </figure>

          <footer class="padding-sm">
            <p class="text-sm color-contrast-medium margin-bottom-sm">{{c.content.label }}</p>
            <div class="text-component">
              <h4><span class="card-v8__title">{{ c.content.title }}</span></h4>
            </div>
          </footer>
        </a>
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