// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import 'codyhouse-framework/main/assets/css/_base.scss'
// import '~/assets/scss/_custom-style.scss'
import '~/assets/scss/style.scss'
// import '~/assets/scss/components/**/*.scss'
// import '~/assets/scss/custom-components/**/*.scss'


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
   // Add an external Javascript before the closing </body> tag
   head.script.push({
    src: 'https://some-server.com/external-script.js',
    body: true
  })
}
