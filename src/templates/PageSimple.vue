
<template>
  <Layout>
    <aroma-simplepage :content="$page.page.content"></aroma-simplepage>
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