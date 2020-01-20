// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    // load data from Storyblok API
    const { data } = await graphql(`{
      allStoryblokEntry {
        edges {
          node {
            id
            slug
            uuid
            full_slug
            content
            lang
          }
        }
      }
    }`)
    // for each content found create a page

    
    data.allStoryblokEntry.edges.forEach(({ node }) => {

      let slug = '';
      if(node.slug === 'home') {
        slug = '/'
      } else {
        slug = '/' + node.slug
      }
      
      if(node.lang !== 'default') slug = `/${node.lang}${slug}`;

      // If there is a slug chosen by the editor, use that one.
      
      if(node.lang === 'de' && node.content.slug_de !== undefined ) slug = `/${node.lang}/${node.content.slug_de}`;
      
      if(node.lang === 'default' && node.content.slug_fr !== undefined) slug = `/${node.content.slug_fr}`;
  
      
      console.log(slug)
      
      createPage({
        path: slug,
        component: './src/templates/Page.vue',
        context: {
          id: node.id
        }
      })


      
      


      // if(node.slug === 'home') {
      //   createPage({
      //     path: '/',
      //     component: './src/templates/Page.vue',
      //     context: {
      //       id: node.id
      //     }
      //   })
      // } else {
      //   createPage({
      //     path: `/${node.slug}`,
      //     component: './src/templates/Page.vue',
      //     context: {
      //       id: node.id
      //     }
      //   })
      // }
    })
  })

  
}