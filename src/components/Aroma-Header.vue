<template>
  <div>
    <header
      class="f-header js-f-header hide-nav hide-nav--fixed js-hide-nav js-hide-nav--main aroma-nav"
      data-mobile-trigger='js-anim-menu-btn'
    >
      <div class="f-header__mobile-content container max-width-lg">
        <div></div>
        <button
          class="reset anim-menu-btn js-anim-menu-btn f-header__nav-control js-tab-focus"
          aria-label="Toggle menu"
        >
          <i
            class="anim-menu-btn__icon anim-menu-btn__icon--close"
            aria-hidden="true"
          ></i>
        </button>
      </div>

      <div
        class="f-header__nav"
        role="navigation"
      >

      
        <div class="f-header__nav-grid justify-end@md container max-width-lg" v-if="nav">
          <ul v-if="nav.content" class="f-header__list flex-grow flex-basis-0 ">
            <li
              v-for="l in nav.content.items"
              :key="l.uuid"
              class="f-header__item padding-x-xs"
            >
            
            <g-link :to="createUrl(l).link">  {{ l.name }}</g-link>
              
            </li>
          </ul>

          <ul class="f-header__list  flex-basis-0 justify-end@md">

            <li v-if="lang === 'default'" class="f-header__item">
              <g-link v-if="current.content.slug_de" :to="'/de/' + current.content.slug_de">DE</g-link>
              <g-link v-else-if="current.slug === 'home'" :to="'/de/'">DE</g-link>
              <g-link v-else :to="'/de/' + current.slug">DE</g-link>
            </li>
            <li v-else class="f-header__item">
              <g-link v-if="current.content.slug_fr" :to="current.content.slug_fr">FR</g-link>
              <g-link v-else-if="current.slug === 'home'" :to="'/'">FR</g-link>
              <g-link v-else :to="'/' + current.slug">FR</g-link>
            </li>
            <li class="f-header__item">

              <button
                class="btn btn--primary"
                aria-controls="modalForm1"
              >Newsletter</button>
            </li>

            <!-- <li class="f-header__item"><a
                href="#0"
              >
                <aroma-search></aroma-search>
              </a></li> -->

          </ul>
        </div>
      </div>
    </header>

    <aroma-modal-newsletter></aroma-modal-newsletter>
    <!-- <aroma-modal-search></aroma-modal-search> -->

  </div>
</template>


<static-query>
  query {
    allStoryblokEntry {
        edges {
          node {
            uuid
            id
            full_slug
            content
            lang
            slug
          }
        }
      }
  }
</static-query>


<script>
import AromaSearch from "~/components/Aroma-Search.vue";
import AromaModalNewsletter from "~/components/Aroma-ModalNewsletter.vue";
import AromaModalSearch from "~/components/Aroma-ModalSearch.vue";

export default {
  props: {
    nav: {
      type: Object,
      default: () => ({})
    },
    lang: {
      type: String,
      default: 'default'
    },
    current: {
      type: Object,
      default: () => ({})
    },
  },
  components: {
    AromaSearch,
    AromaModalNewsletter,
    AromaModalSearch
  },
  methods: {
    createUrl(l) {
      let slug = '/';
      return this.$static.allStoryblokEntry.edges.find(element => {
        if(element.node.uuid == l.url.id) {
          if(element.node.slug === 'home') {
            if(this.lang !== 'default') {    
              slug = `/${this.lang}`;
            }
        } else {
          slug = '/' + element.node.slug
          if(this.lang !== 'default') slug = `/de${slug}`;
          // If there is a slug chosen by the editor, use that one.
          if(this.lang === 'default' && element.node.content.slug_fr) slug = `/${element.node.content.slug_fr}`;
          if(this.lang !== 'default' && element.node.content.slug_de) slug = `/de/${element.node.content.slug_de}`;
          
        }
        element.link = slug;
        return element;
        
        }
      })

            
            
            
          
          
            
          


      // if(l.url.cached_url.substr(0, 4) === '/de/') {
      //   return l.url.cached_url.replace('/de/','');
      // } else {
      //   return l.url.cached_url
      // }
    }
  },
};
</script>

<style scoped>

.aroma-nav {
  z-index: 3;
  background-color: var(--color-primary-darker);
  color: var(--color-primary-lightest);
}

.f-header__nav {
  background-color: var(--color-primary-darker);
}
.f-header__nav::before {
  border-bottom: none;
}

.f-header__item {
  border-bottom: none;
  text-align: center;
}
  
.f-header__item a {
    text-decoration: none;
  }


.anim-menu-btn {
  color: var(--color-primary-lightest);
}
</style>
