// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      
        craft {
          users {
            id
            username
          }
           entries(section: "articles", limit: 1, orderBy: "dateCreated DESC") {
            title
            id
          }
        
        }
    
    }`)

    // Articles
    data.craft.entries.forEach((el) => {
      createPage({
        path: `/article/${el.id}/`,
        component: './src/templates/Article.vue',
        context: {
          id: el.id,
          title: el.title,
        }
      })
    })
  })
}
