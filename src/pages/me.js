import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const Me = () => {

  const data = useStaticQuery(graphql`
    query ImageQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          sizes(maxWidth: 5000) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={`Me`}
        description={`About Emeruche Cole`}
      />
      <div className="row">
        <div className="col-4">
          <Img sizes={data.avatar.childImageSharp.sizes} style={{maxHeight: '300px'}}/>
        </div>
        <div className="col-8">About me</div>
      </div>
    </Layout>
  )
}

export default Me