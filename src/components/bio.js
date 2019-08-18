/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import FeatherIcon from "feather-icons-react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            email
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      className="bio"
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ maxWidth: "600px" }}>
        Written and maintained by <Link to="/me">{author}</Link> who lives in
        Enugu, Nigeria trying to build useful things.
        {` `}
        <div className="bio-links">
          <a href={`https://twitter.com/${social.twitter}`}>
            <FeatherIcon icon="twitter" size="17" />
          </a>
          <a href={`https://github.com/${social.github}`}>
            <FeatherIcon icon="github" size="17" />
          </a>
          <a href={`mailto:${social.email}`}>
            <FeatherIcon icon="mail" size="17" />
          </a>
        </div>
      </p>
    </div>
  )
}

export default Bio
