export default [
  {
    path: "/article/title-of-an-article/",
    component: () => import(/* webpackChunkName: "page--src--templates--article-vue" */ "/Users/pmcp/dev/aroma/src/templates/Article.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/pmcp/dev/aroma/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/pmcp/dev/aroma/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/pmcp/dev/aroma/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/pmcp/dev/aroma/node_modules/gridsome/app/pages/404.vue")
  }
]

