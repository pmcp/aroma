<template>
  <div class="parent grid grid-gap-md padding-y-xl justify-center">
    <div v-for="partner in $static.partners.edges" v-bind:key="partner.id" class="col-2" >
      <g-image :src="partner.node.content.logo" width="500"/>
    </div>
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