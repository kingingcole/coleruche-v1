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
        featuredImg={data.avatar.childImageSharp.sizes.src}
      />
      <div className="row">
        <div className="col-sm-12 col-md-5 mb-5 my-auto">
          <Img
            sizes={data.avatar.childImageSharp.sizes}
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-sm-12 col-md-7 mt-3">
          <p>
            Hey there, the name's <b>Emeruche Ikenna</b>.
          </p>
          <p>
          I am a versatile and results-driven developer specializing in frontend development and emerging technologies such as smart contracts and dApps. With expertise in JavaScript/TypeScript, React, React Native, Next.js, Gatsby, Shopify, Solidity, Web3, and Truffle, I bring a holistic skill set to deliver innovative solutions. And as a published author and technical writer, I excel in conveying complex concepts with clarity.            <br />
          </p>
          <p>I currently work remotely as a Technical Consultant at <a href="https://ignitetech.com/" target="_blank">IgniteTech</a> where I solve real-world issues with some of the most brilliant developers as my teammates.
            You can find more of my professional experience on <a
              href="https://linkedin.com/in/emeruche">LinkedIn.</a>
          </p>

          <p>
            If you wish to reach me through a pretty form, I am sorry to disappoint
            you as there is none.{" "}
            <a target="_top" href="mailto:emeruchecole9@gmail.com">
              Just shoot me a mail
            </a>{" "}
            - it makes both our lives easier!
          </p>
          <p>
            <b>Cheers!</b>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Me
