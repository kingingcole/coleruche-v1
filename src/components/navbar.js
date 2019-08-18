import React, { Component } from "react"
import { Link } from "gatsby"

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container text-center">
          <ul className="row">
            <li className="col-4 text-center my-auto">
              <Link
                activeClassName="active"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to="/"
              >
                Blog
              </Link>
            </li>
            <li className="col-4 text-center my-auto">
              <Link
                activeClassName="active"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/me/`}
              >
                Me
              </Link>
            </li>
            <li className="col-4 text-center my-auto">
              <Link
                activeClassName="active"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/works`}
              >
                Works
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
