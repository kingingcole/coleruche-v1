import React from "react"
import FeatherIcon from "feather-icons-react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query BioLinksQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            email
            linkedin
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  return (
    <div>
      <div className="row text-center">
        <span className="col-3">
          <a target='_blank' href={`https://twitter.com/${social.twitter}`}>
            <FeatherIcon icon="twitter" size="20" />
          </a>
        </span>
        <span className="col-3">
          <a target='_blank' href={`https://github.com/${social.github}`}>
            <FeatherIcon icon="github" size="20" />
          </a>
        </span>
        <span className="col-3">
          <a target='_blank' href={`mailto:${social.email}`}>
            <FeatherIcon icon="mail" size="20" />
          </a>
        </span>
        <span className="col-3">
          <a target='_blank' href={`https://linkedin.com/in/${social.linkedin}`}>
            <FeatherIcon icon="linkedin" size="20" />
          </a>
        </span>
        <p className="col-12 text-center my-2">© {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer
