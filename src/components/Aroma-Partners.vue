<template>
  <div class="parent grid  padding-y-xl justify-center">
    
    <div  class="col-12" >
       <g-image alt="logos partners" src="~/assets/img/logos.jpg"/>
    </div>
    <!-- <div v-for="partner in $static.partners.edges" v-bind:key="partner.id" class="col-2" >
      
      
      <a v-if="partner.node.content.url" :href="partner.node.content.url.url" target="_blank" :title="partner.node.name">
        <g-image :src="partner.node.content.logo" :alt="partner.node.name" width="500"/>
      </a>
      <g-image v-else :src="partner.node.content.logo" :alt="partner.node.name" width="500"/>
    </div> -->
  </div>
</template>

<static-query>
query {
  partners: allStoryblokEntry(filter: { full_slug: { regex: "partners" },  lang: { regex: "default" }}) {
      edges {
        node {
          lang
          id
          full_slug
          name
        content
      }
    }
  }
}
</static-query>

<script>

</script>