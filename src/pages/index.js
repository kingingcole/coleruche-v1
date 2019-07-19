import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import PostCard from "../components/postCard"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog"/>
        <Bio />
          <div className='row'>
          {posts.map(({ node }) => {
          console.log(node)
          const title = node.frontmatter.title || node.fields.slug
          return (
            <PostCard title={title} url={node.fields.slug} image={node.frontmatter.featuredImage.childImageSharp.fluid} date={node.frontmatter.date}/>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp{
                fluid(quality: 90, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
