import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import { Disqus, CommentCount } from 'gatsby-plugin-disqus'  //for disqus


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const url = this.props.data.site.siteMetadata.siteUrl
    const { previous, next } = this.props.pageContext

    //for disqus
    let disqusConfig = {
      url: `${url+this.props.location.pathname}`,
      identifier: post.id,
      title: siteTitle,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {post.frontmatter.title}
        </h1>

        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          {post.frontmatter.date}
          <span style={{marginLeft: '10px', color:'gray'}}><CommentCount config={disqusConfig} placeholder={'...'} /></span>
        </p>
        <Img  sizes={post.frontmatter.featuredImage.childImageSharp.sizes} style={{padding: '0'}}/>
        <br/><br/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} style={{maxWidth: '900px', margin: 'auto', textAlign: 'justify', lineHeight: '1.8em'}}/>
        <Disqus config={disqusConfig} />



        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage{
         childImageSharp{
          sizes(maxWidth: 1000, maxHeight: 600){
            ...GatsbyImageSharpSizes
          }
         }
        }
      }
    }
  }
`
