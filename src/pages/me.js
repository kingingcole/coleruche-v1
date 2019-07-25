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
        <div className="col-sm-12 col-md-5 mb-5 my-auto">
          <Img sizes={data.avatar.childImageSharp.sizes} style={{maxHeight: '400px'}}/>
        </div>
        <div className="col-sm-12 col-md-7">
          <p>Hey there, the name's <b>Emeruche "Cole" Ikenna</b>.</p>
          <p>A front-end web and mobile developer from Nigeria. <br/> During the few years I have been coding, I have picked up relevant languages, skills and frameworks - HTML, CSS, React JS, React Native, vanilla JavaScript, Python (Django and DRF) and some of the cool collaborative tools like git and Slack.
          I use Heroku and Netlify as choice of deployments.</p>
          <p>I try to build cool web apps to keep my skillsets and <a target='_blank' href="https://github.com/kingingcole">github</a> as "updated" as possible. I consider the internet the greatest learning environment, and solving challenges the best teacher.</p>
          <p>When I'm  not coding, I am either reading medical books, <a target='_blank' href="https://twitter.com/cole_ruche">tweeting</a>, or playing video games. I do not joke with naps and breakfast.</p>
          <p>If you wish to reach  through a pretty form, I am sorry to disappoint you as there is none. <a target='_top' href="mailto:emeruchecole9@gmail.com">Just shoot me a mail</a> - it makes both our lives easier!</p>
          <p><b>Cheers!</b></p>
        </div>
      </div>
    </Layout>
  )
}

export default Me