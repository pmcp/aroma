<template>
  <div>

    <header
      class="f-header js-f-header hide-nav hide-nav--fixed js-hide-nav js-hide-nav--main aroma-nav"
      data-mobile-trigger='js-anim-menu-btn'
    >

      <div class="f-header__mobile-content container max-width-lg">

       

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
        <div class="f-header__nav-grid justify-end@md container max-width-lg">
         

          <ul class="f-header__list flex-grow flex-basis-0 justify-center@md">
            <li
              v-for="l in $static.craft.entries"
              :key="l.uid"
              class="f-header__item"
            >
              <a
                :href="'/article/' + l.slug"
                
              >
                {{ l.title }}
              </a>
            </li>

          </ul>

          <ul class="f-header__list  flex-basis-0 justify-end@md">

            <li class="f-header__item">

              <button
                class="btn btn--primary"
                aria-controls="modalForm1"
              >Newsletter</button>

            </li>

            <li class="f-header__item"><a
                href="#0"
              >
                <aroma-search></aroma-search>
              </a></li>

          </ul>
        </div>
      </div>

    </header>

    <aroma-modal-newsletter></aroma-modal-newsletter>
    <aroma-modal-search></aroma-modal-search>

  </div>
</template>


<static-query>
query {
  craft {
    entries(section: "articles", limit: 1, orderBy: "dateCreated DESC") {
      title,
      slug,
      uid 
    }
  }
}
</static-query>


<script>
import AromaSearch from "~/components/Aroma-Search.vue";
import AromaModalNewsletter from "~/components/Aroma-ModalNewsletter.vue";
import AromaModalSearch from "~/components/Aroma-ModalSearch.vue";

export default {
  components: {
    AromaSearch,
    AromaModalNewsletter,
    AromaModalSearch
  }
};
</script>

<style >
.aroma-nav {
  z-index:3;
  background-color: var(--color-primary-darker);
  color: var(--color-primary-lightest);
}
</style>