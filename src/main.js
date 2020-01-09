// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import '~/assets/scss/style.scss'


// Main components Aroma

// LAYOUTS
import DefaultLayout from '~/layouts/Default.vue'

// PAGES
import AromaPageDefault from '~/components/Aroma-PageDefault.vue'
import AromaPageLaunch from '~/components/Aroma-PageLaunch.vue'
import AromaPageProject from '~/components/Aroma-PageProject.vue'
import AromaPageMap from '~/components/Aroma-PageMap.vue'
import AromaPageArticles from '~/components/Aroma-PageArticles.vue'

// COMPONENTS
import AromaHero from '~/components/Aroma-Hero.vue'
import AromaTimeLine from '~/components/Aroma-Timeline'
import AromaTimeLineEvent from '~/components/Aroma-TimelineEvent'
import AromaCarousel from '~/components/Aroma-Carousel'
import AromaPreviewArticles from '~/components/Aroma-PreviewArticles'
import AromaPreviewArticle from '~/components/Aroma-PreviewArticle'
import AromaUndefined from '~/components/Aroma-Undefined'
import AromaPartners from "~/components/Aroma-Partners";
import AromaPartner from "~/components/Aroma-Partner";
import AromaOrganisation from "~/components/Aroma-Organisation";
import AromaOrganisationDetail from "~/components/Aroma-OrganisationDetail";
import AromaMap from "~/components/Aroma-Map";
import AromaForm from "~/components/Aroma-Form";
import AromaNavigation from "~/components/Aroma-Navigation";

import AromaContentText from '~/components/Aroma-ContentText.vue'
import AromaContentImages from '~/components/Aroma-ContentImages'
import AromaContentVideo from '~/components/Aroma-ContentVideo'
import AromaContentMap from '~/components/Aroma-ContentMap'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout),
  Vue.component('aroma-page-default', AromaPageDefault)
  Vue.component('aroma-page-launch', AromaPageLaunch)
  Vue.component('aroma-page-project', AromaPageProject)
  Vue.component('aroma-page-map', AromaPageMap)
  Vue.component('aroma-page-articles', AromaPageArticles)
  
  Vue.component('aroma-hero', AromaHero)
  Vue.component('aroma-timeline', AromaTimeLine)
  Vue.component('aroma-timeline-event', AromaTimeLineEvent)
  Vue.component('aroma-carousel', AromaCarousel)
  Vue.component('aroma-preview-articles', AromaPreviewArticles)
  Vue.component('aroma-preview-article', AromaPreviewArticle)
  Vue.component('aroma-undefined', AromaUndefined)
  Vue.component('aroma-partners', AromaPartners)
  Vue.component('aroma-partner', AromaPartner)
  Vue.component('aroma-organisation', AromaOrganisation)
  Vue.component('aroma-organisation-detail', AromaOrganisationDetail)
  Vue.component('aroma-map', AromaMap)
  Vue.component('aroma-form', AromaForm)
  Vue.component('aroma-navigation', AromaNavigation)

  Vue.component('aroma-content-text', AromaContentText)
  Vue.component('aroma-content-images', AromaContentImages)
  Vue.component('aroma-content-video', AromaContentVideo)
  Vue.component('aroma-content-map', AromaContentMap)

  
  
  // Vue.prototype.mapboxgl = mapboxgl;

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css'
  })
  
  // Add an external Javascript before the closing </body> tag
  head.script.push({
    innerHTML: 'document.getElementsByTagName("html")[0].className += " js";',
    type: 'text/javascript', charset: 'utf-8',
    body: false
  }),
  head.script.push({
    src: '/cody-scripts-min.js',
    body: true
  })


}