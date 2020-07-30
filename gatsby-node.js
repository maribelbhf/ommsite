const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
            title
            slug
        }
      }
    }
  `).then(result => {
        //highlight-start
        result.data.allWpPost.nodes.forEach((node) => {

            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/project.js`),
                context: {
                    // This is the $slug variable
                    // passed to blog-post.js
                    slug: node.slug,
                },
            })
        })
        //highlight-end
    })
}