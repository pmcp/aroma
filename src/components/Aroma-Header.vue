<template>
  <div>

    <header
      class="f-header js-f-header hide-nav hide-nav--fixed js-hide-nav js-hide-nav--main"
      data-mobile-trigger='js-anim-menu-btn'
      style="z-index:3;background-color: rgba(250,250,250,1);"
    >

      <div class="f-header__mobile-content container max-width-lg">

        <a
          href="#0"
          class="f-header__logo"
        >
          <svg
            width="130"
            height="32"
            viewBox="0 0 130 32"
          >
            <title>Go to homepage</title>
            <circle
              fill="var(--color-primary)"
              cx="16"
              cy="16"
              r="16"
            />
            <rect
              fill="var(--color-contrast-higher)"
              x="41"
              y="11"
              width="89"
              height="10"
            />
          </svg>
        </a>

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
        <div class="f-header__nav-grid justify-between@md container max-width-lg">
          <div class="f-header__nav-logo-wrapper flex-grow flex-basis-0">
            <a
              href="/"
              class="f-header__logo"
            >
              <svg
                width="130"
                height="32"
                viewBox="0 0 130 32"
              >
                <title>Go to homepage</title>
                <circle
                  fill="var(--color-primary)"
                  cx="16"
                  cy="16"
                  r="16"
                />
                <rect
                  fill="var(--color-contrast-higher)"
                  x="41"
                  y="11"
                  width="89"
                  height="10"
                />
              </svg>
            </a>
          </div>

          <ul class="f-header__list flex-grow flex-basis-0 justify-center@md">
            <li
              v-for="l in $static.craft.entries"
              :key="l.uid"
              class="f-header__item"
            >
              <a
                :href="'/article/' + l.slug"
                class="f-header__link"
              >
                {{ l.title }}
              </a>
            </li>

          </ul>

          <ul class="f-header__list flex-grow flex-basis-0 justify-end@md">

            <li class="f-header__item">

              <button
                class="btn btn--primary"
                aria-controls="modalForm1"
              >Newsletter</button>

            </li>

            <li class="f-header__item"><a
                href="#0"
                class="f-header__link"
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