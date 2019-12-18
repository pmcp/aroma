// Added this only because of mapboxgl (look down at "configureWebpack")
// const webpack = require('webpack');
// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


// SCSS Mixins & Variables Part 1
const path = require('path')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './node_modules/codyhouse-framework/main/assets/css/base/*.scss'),
        path.resolve(__dirname, './src/assets/scss/custom-style/*.scss'),
        path.resolve(__dirname, './src/assets/scss/aroma-style/*.scss'),
        path.resolve(__dirname, './src/assets/scss/style.scss'),
        path.resolve(__dirname, './src/assets/scss/components/**/*.scss'),
        path.resolve(__dirname, './src/assets/scss/custom-components/**/*.scss')
      ],
      injector: 'append'
    })
}

// module.exports = {
//   siteName: 'Storyblok Boilerplate',
//   plugins: [
//     {
//       use: 'gridsome-source-storyblok',
//       options: {
//         client: {
//           accessToken: 'hkENPzbQoYvpZeNPpK6pQgtt'
//         }
//       }
//     }
//   ]
// }


module.exports = {
  // SCSS Mixins & Variables Part 2
  chainWebpack (config) {
    config.resolve.symlinks(false)
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: 'hkENPzbQoYvpZeNPpK6pQgtt' // you must be replace with your token

        },
        params: {
          resolve_links: 'story',
          resolve_relations: ['preview-articles.articles', 'page-map.organisations']
        }
      }
    }
  ],

}

