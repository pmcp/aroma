
<template>
  <Layout>
    <component v-if="$page.page && $page.page.content" :is="`aroma-${$page.page.content.component}`" :content="$page.page.content"></component>

  </Layout>
</template>



<page-query>
query StoryblokEntry ($id: ID) {
  page: storyblokEntry (id: $id) {
    id
    slug
    content
  }
}
</page-query>