import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkCard from "../components/workCard"


class Works extends React.Component {

  render() {
    return (
      <Layout location={this.props.location} title={`siteTitle`}>
        <SEO title="Works"/>
        <Bio/>
        <div className="row m-auto p-0" style={{maxWidth: '700px', padding: '10px'}}>
          <WorkCard/>
          <WorkCard/>
          <WorkCard/>
          <WorkCard/>
        </div>
      </Layout>
    )
  }
}

export default Works