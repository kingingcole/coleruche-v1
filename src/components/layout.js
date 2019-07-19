  import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Subscribe from "../components/subscribe"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <header><Navbar /></header>
        <div style={{background: `rgba(0,186,186,0.020)`}}>
          <div className='container content'
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(40),
              padding: `${rhythm(1.5)} 10px`,
            }}
          >
            <main>{children}</main>
            <Subscribe/>
          </div>
        </div>
        <footer>
            <Footer />
        </footer>
      </div>
    )
  }
}

export default Layout
