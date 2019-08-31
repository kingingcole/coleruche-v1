const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
         allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "post"}, published: {eq: true} }}, limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            type
            published
          }
        }
      }
    }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.type==='post' && post.node.frontmatter.published)

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      let {slug} = post.node.fields;

      let path = `post${slug}`;

      createPage({
        path,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField(
      {
        name: `slug`,
        node,
        value,
      },

    )
  }
}
