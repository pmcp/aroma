// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import '~/assets/scss/style.scss'
import DefaultLayout from '~/layouts/Default.vue'

// Main components Aroma
import AromaRichtext from '~/components/Aroma-Richtext.vue'
import AromaHero from '~/components/Aroma-Hero.vue'
import AromaSimplepage from '~/components/Aroma-Simplepage.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),

  Vue.component('Richtext', AromaRichtext)
  Vue.component('aroma-hero', AromaHero)
  Vue.component('aroma-simplepage', AromaSimplepage)

  // Add an external Javascript before the closing </body> tag
  head.script.push({
    innerHTML: 'document.getElementsByTagName("html")[0].className += " js";',
    type: 'text/javascript', charset: 'utf-8',
    body: false
  },
 ) 
}