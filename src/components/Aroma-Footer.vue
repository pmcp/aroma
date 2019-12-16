<template>
  <footer class="footer-v5 aroma-footer ">
    <div class="container max-width-lg padding-bottom-md">

      <div class="footer-v5__body grid">
        <div class="col-8@lg">
          <div class="footer-v5__nav grid">
            <div class="footer-v5__nav-group col-10@md">
              <h2 class="footer-v5__nav-title">{{ $static.index.content.footer_title }}</h2>
              <aroma-content-text :content="$static.index.content.footer_text"></aroma-content-text>
            </div>
          </div>
        </div>

        <!-- <div class="col-4@lg">
          <div class="footer-v5__news max-width-xxxs">
            <h4 class="footer-v5__news-title">Subscribe to our newsletter</h4>
            <p class="footer-v5__news-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt nostrum numquam.</p>
            <form class="footer-v5__form">
              <input
                aria-label="Email address"
                class="form-control"
                type="email"
                placeholder="Your email address"
              >
              <button class="btn btn--primary">Subscribe</button>
            </form>
          </div>
        </div> -->
      </div>

      <!-- <div class="footer-v5__colophon">
        <p class="footer-v5__print">&copy; Copyright myCompany</p>

        <div class="footer-v5__socials">
          <a href="#0">
            <svg
              class="icon"
              viewBox="0 0 16 16"
            >
              <title>Follow us on Twitter</title>
              <g>
                <path d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"></path>
              </g>
            </svg>
          </a>

          <a href="#0">
            <svg
              class="icon"
              viewBox="0 0 16 16"
            >
              <title>Follow us on Youtube</title>
              <g>
                <path d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z"></path>
              </g>
            </svg>
          </a>

          <a href="#0">
            <svg
              class="icon"
              viewBox="0 0 16 16"
            >
              <title>Follow us on Github</title>
              <g>
                <path d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"></path>
              </g>
            </svg>
          </a>
        </div>

        <p class="footer-v5__print">
          <a
            href="#0"
            class="footer-v5__print-link"
          >Terms</a>
          <a
            href="#0"
            class="footer-v5__print-link"
          >Privacy</a>
          <a
            href="#0"
            class="footer-v5__print-link"
          >Cookies</a>
        </p>
      </div> -->
    </div>
    <div class="aroma-footer__bottom padding-y-md">
      <p class="container max-width-lg ">{{ $static.index.content.footer_bottombar }}</p>
    </div>
  </footer>

</template>


<static-query>
query {
  index: storyblokEntry(id: "story-4122641-default") {
    content 
  }
}
</static-query>

<script>
export default {
  props: {
    footer: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>


<style scoped>
.aroma-footer {
  background-color: var(--color-primary-darker);
  color: var(--color-primary-lightest);
}
h2 {
  color: var(--color-primary-lightest);
}

.aroma-footer__bottom {
  background-color: var(--color-primary-dark);
}
/* 
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

.anim-menu-btn {
  color: var(--color-primary-lightest);
} */
</style>