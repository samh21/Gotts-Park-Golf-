const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'ContentfulGolfNews') {
        const slug = node.slug
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

    }

}


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const newsTemplate = path.resolve('./src/templates/news.js')
    const res = await graphql(`
    query {
        allContentfulGolfNews {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

    res.data.allContentfulGolfNews.edges.forEach(edge => {
        createPage({
            component: newsTemplate,
            path: `/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}