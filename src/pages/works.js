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
    const {github} = data.site.siteMetadata.social
    const works = data.allMarkdownRemark.edges
    const githubProfile = `https://github.com/${github}`
    const blogRepo = `https://github.com/${github}/myblog`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Works" description="A view of projects and code built by Emeruche Cole"/>
        <Bio/>
        <div className='row text-center mb-5'>
          <div className='col-12'><h4>Here are a few of my projects.</h4></div>
        </div>
        <div className="row m-auto p-0" style={{ maxWidth: "900px", padding: "10px" }}>
          {works.map(({ node }) => {
            // console.log(node)
            const title = node.frontmatter.title || node.fields.slug
            const {description, tech, link, repo} = node.frontmatter
            return (
              <WorkCard repo={repo} github={github} title={title} description={description} tech={tech} link={link}/>
            )
          })}
          <div className='mt-4'>
            <p>The repo for this blog can be found <a href={blogRepo}>here</a>.</p>
            <p>Other projects can be found at my <a href={githubProfile}>github graveyard</a>.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Works

export const worksQuery = graphql`
  query{
  allMarkdownRemark(sort: {fields: frontmatter___position, order: ASC}, filter: {frontmatter: {published: {eq: true}, type: {eq: "work"}}}) {
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
          tech
          link
          repo
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
