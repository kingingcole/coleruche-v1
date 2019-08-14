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
    const {text} = this.props.data.markdownRemark.fields.readingTime // from  gatsby-remark-reading-time.
    const siteTitle = this.props.data.site.siteMetadata.title
    const url = this.props.data.site.siteMetadata.siteUrl
    const { previous, next } = this.props.pageContext
    const featuredImg = post.frontmatter.featuredImage.childImageSharp.sizes
    const featuredImgUrl = post.frontmatter.featuredImage.childImageSharp.sizes.src

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
          featuredImg={featuredImgUrl}
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
          <span className="d-block">
            {text}
            <span style={{marginLeft: '10px', color:'gray'}}><CommentCount config={disqusConfig} placeholder={'...'} /></span>
          </span>
           </p>
        <Img alt={post.frontmatter.altText} sizes={featuredImg}/>
        <small style={{fontSize: '0.8rem', display: 'block', textAlign: 'center', marginTop: '3px'}}>{post.frontmatter.altText}</small>
        <br/><br/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} style={{maxWidth: '700px', margin: 'auto', textAlign: 'justify', lineHeight: '1.5em', fontSize: '1rem'}}/>
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
              <Link to={`post${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`post${next.fields.slug}`} rel="next">
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
        altText
        featuredImage{
         childImageSharp{
          sizes(maxWidth: 1000, maxHeight: 600){
            ...GatsbyImageSharpSizes
          }
         }
        }
      }
      fields{
        slug
        readingTime{
          text
        }
      }
    }
  }
`
