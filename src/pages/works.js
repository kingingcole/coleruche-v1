import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkCard from "../components/workCard"
import PostCard from "./index"


class Works extends React.Component {

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const works = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Works"/>
        <Bio/>
        <div className="row m-auto p-0" style={{ maxWidth: "800px", padding: "10px" }}>
          {works.map(({ node }) => {
            // console.log(node)
            const title = node.frontmatter.title || node.fields.slug
            const description = node.frontmatter.description
            return (
              <WorkCard title={title} description={description} />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Works

export const worksQuery = graphql`
  query{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {published: {eq: true}, type: {eq: "work"}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          description
          tech
          title
        }
      }
    }
  }
  site {
    siteMetadata {
      title
      social {
        github
      }
    }
  }
}

`