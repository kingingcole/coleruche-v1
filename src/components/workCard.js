import FeatherIcon from "feather-icons-react"
import React from "react"

const WorkCard = ({ title, description, tech, link, github, repo }) => {
  let githubRepo = repo ? `https://github.com/${github}/${repo}` : ''

  return (
    <div className="col-sm-12 col-md-6 px-2">
      <div className="work-card">
        <h5 style={{ fontWeight: 500, lineHeight: 1.6 }}>{title}</h5>
        <p style={{ fontSize: "1em", minHeight: "200px", color: 'grey' }} dangerouslySetInnerHTML={{ __html: description }}/>
        <small style={{ display: "inline-block", height: "40px" }}>
          {tech}
        </small>
        <div style={{ marginTop: "10px" }}>
          {githubRepo && (
            <span className="mr-2">
              <a target="_blank" href={githubRepo}>
                <FeatherIcon icon="github" size="17" />
              </a>
            </span>
          )}
          {
            link && (
              <span className="mr-2">
                <a target="_blank" href={link}>
                  <FeatherIcon icon="globe" size="17" />
                </a>
              </span>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default WorkCard
