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

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: process.env.CRAFT_API_URL,
        fieldName: 'craft',
        typeName: 'craft',
        headers: {
          Authorization: 'Bearer ' + process.env.CRAFT_API_TOKEN
        }
      }
    }
  ],
  // SCSS Mixins & Variables Part 2
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
}

