<template>

  <div class="author author--featured col-4@sm ">

    <a
      href="#0"
      class="author__img-wrapper"
    >
      <img
        :src="org.content.photo | transformImage('100x0')"
        alt="Author picture"
      >
    </a>
    <!-- <div v-if="org.content" class="author__content text-component aroma-organisation__link">
      <h2>{{ org.content.name }}</h2>
      <p>{{ org.content.street }} {{ org.content.number }}
      <br>{{ org.content.number }} {{ org.content.city }}
      </p>
    </div> -->

    <div
      v-if="org.content"
      class="author__content text-component aroma-organisation__link"
    >
      <h2 style="font-weight:800">{{ org.content.organisation }}</h2>
      <div>{{ org.content.name }}</div>
        <div>{{ org.content.city }}, {{ org.content.country }}</div>
    </div>

    <ul class="flex flex-gap-xs flex-wrap justify-center">
      <!-- <li v-if="org.content.email">
        <a :href="'mailto:' + org.content.email" target="_blank" class="author__social">
          <svg class="icon" viewBox="0 0 32 32"><title></title><g><path d="M28,3H4A3.957,3.957,0,0,0,0,7V25a3.957,3.957,0,0,0,4,4H28a3.957,3.957,0,0,0,4-4V7A3.957,3.957,0,0,0,28,3Zm.6,6.8-12,9a1,1,0,0,1-1.2,0l-12-9A1,1,0,0,1,4.6,8.2L16,16.75,27.4,8.2a1,1,0,1,1,1.2,1.6Z"></path></g></svg>        </a>
      </li>
      <li v-if="org.content.email">
        <a :href="'mailto:' + org.content.email" target="_blank" class="author__social">
          <svg class="icon" viewBox="0 0 32 32"><title></title><g><path d="M28,3H4A3.957,3.957,0,0,0,0,7V25a3.957,3.957,0,0,0,4,4H28a3.957,3.957,0,0,0,4-4V7A3.957,3.957,0,0,0,28,3Zm.6,6.8-12,9a1,1,0,0,1-1.2,0l-12-9A1,1,0,0,1,4.6,8.2L16,16.75,27.4,8.2a1,1,0,1,1,1.2,1.6Z"></path></g></svg>        </a>
      </li> -->

      <!-- <li v-if="org.content.facebook">
        <a :href="org.content.facebook" target="_blank" class="author__social">
          <svg class="icon" viewBox="0 0 32 32"><title></title><path d="M32,16A16,16,0,1,0,13.5,31.806V20.625H9.438V16H13.5V12.475c0-4.01,2.389-6.225,6.043-6.225a24.644,24.644,0,0,1,3.582.312V10.5H21.107A2.312,2.312,0,0,0,18.5,13v3h4.438l-.71,4.625H18.5V31.806A16,16,0,0,0,32,16Z"></path></svg>
        </a>
      </li>

      <li v-if="org.content.instagram">
        <a :href="org.content.instagram" target="_blank" class="author__social">
          <svg class="icon" viewBox="0 0 32 32"><title></title><path d="M16,3.7c4,0,4.479.015,6.061.087a6.426,6.426,0,0,1,4.51,1.639,6.426,6.426,0,0,1,1.639,4.51C28.282,11.521,28.3,12,28.3,16s-.015,4.479-.087,6.061a6.426,6.426,0,0,1-1.639,4.51,6.425,6.425,0,0,1-4.51,1.639c-1.582.072-2.056.087-6.061.087s-4.479-.015-6.061-.087a6.426,6.426,0,0,1-4.51-1.639,6.425,6.425,0,0,1-1.639-4.51C3.718,20.479,3.7,20.005,3.7,16s.015-4.479.087-6.061a6.426,6.426,0,0,1,1.639-4.51A6.426,6.426,0,0,1,9.939,3.79C11.521,3.718,12,3.7,16,3.7M16,1c-4.073,0-4.584.017-6.185.09a8.974,8.974,0,0,0-6.3,2.427,8.971,8.971,0,0,0-2.427,6.3C1.017,11.416,1,11.927,1,16s.017,4.584.09,6.185a8.974,8.974,0,0,0,2.427,6.3,8.971,8.971,0,0,0,6.3,2.427c1.6.073,2.112.09,6.185.09s4.584-.017,6.185-.09a8.974,8.974,0,0,0,6.3-2.427,8.971,8.971,0,0,0,2.427-6.3c.073-1.6.09-2.112.09-6.185s-.017-4.584-.09-6.185a8.974,8.974,0,0,0-2.427-6.3,8.971,8.971,0,0,0-6.3-2.427C20.584,1.017,20.073,1,16,1Z"></path><path d="M16,8.3A7.7,7.7,0,1,0,23.7,16,7.7,7.7,0,0,0,16,8.3ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"></path><circle cx="24.007" cy="7.993" r="1.8"></circle></svg>
        </a>
      </li> -->
    </ul>
  </div>

</template>


<static-query>
  query {
    allStoryblokEntry(filter: { full_slug: { regex: "organisations" },  lang: { regex: "default" }}) {
        edges {
          node {
            lang
            id
            uuid
            full_slug
            name
            content
          }
        }
      }
  }
</static-query>


<script>
export default {
  props: {
    org: {
      type: [Object, String],
      default: () => ({})
    }
  }
};
</script>


<style scoped>
.aroma-organisation__link {
  cursor: pointer;
}
</style>