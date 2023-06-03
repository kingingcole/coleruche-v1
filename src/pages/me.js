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
          I am a highly skilled and accomplished frontend developer specializing in smart contract and dApps development. With a solid foundation in web technologies, I bring a wealth of experience to contribute to cutting-edge blockchain projects. Passionate about leveraging my expertise in frontend development and driving innovation in the realm of decentralized applications.
            <br />
          </p>
          <p>I currently work remotely as a Technical Consultant at <a href="https://ignitetech.com/" target="_blank">IgniteTech</a> where I solve real-world issues with some of the most brilliant developers as my teammates.
            You can find more of my professional experience on <a
              href="https://linkedin.com/in/emeruche">LinkedIn.</a>
          </p>

         <p>
            In addition to my front-end prowess, I have a strong command of Java, Solidity, and Ethereum, enabling me to excel in blockchain development. I am highly proficient in technical writing, translating complex concepts into clear and engaging documentation. My remote working experience has honed my communication skills and self-motivation, allowing me to effectively collaborate across geographically dispersed teams. Passionate about creating exceptional digital experiences, I stay up-to-date with industry trends, pushing the boundaries of web development to deliver outstanding results.
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
