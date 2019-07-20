import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

class Subscribe extends Component {

  state = {
    email: "",

  }

  handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(this.state.email)
      .then(data => console.log(data))
  }

  render() {
    console.log(this.state.email)
    return (
      <div className="container subscribe text-center mt-5">
        <h5>Subscribe to recive updates on new posts</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="row text-center mx-auto">
            <div className="col-sm-12 col-lg-9 mx-auto my-1 ">
              <input type="email" autoComplete={true} required value={this.state.email}
                     onChange={(e) => this.setState({ email: e.target.value })}/>
            </div>
            <div className="col-sm-12 col-lg-3 mx-auto my-1">
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Subscribe