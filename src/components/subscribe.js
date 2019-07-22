import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

class Subscribe extends Component {

  state = {
    email: "",
    FNAME: "",
    statusMsg: "",
    statusMsgColor: 'green'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({statusMsg: ''})
    let {email, FNAME} = this.state;
    addToMailchimp(email, {FNAME} /*second parameter holds more info like FNAME. LNAME etc. optional*/)
      .then(data => {
        data.result === 'success' ? (this.setState({statusMsg: 'Your subscription was successful!', statusMsgColor: 'green', FNAME: '', email: ''})) : (this.setState({statusMsg: 'This email has already been subscribed.', statusMsgColor: 'red'}))
      })
      .catch(err => {
        this.setState({statusMsg: 'An error occured. Please re-try', statusMsgColor: 'red'})
      })
  };


  render() {
    let {statusMsg, FNAME} = this.state;
    // console.log(statusMsg, FNAME)
    return (
      <div className="subscribe text-center mt-5">
        <h6>Subscribe to receive updates on new posts</h6>
        <form onSubmit={this.handleSubmit}>
          <div className="row text-center mx-auto">
            <div className="col-sm-12 col-lg-5 mx-auto my-1 ">
              <input placeholder='Email Address (required)' type="email" autoComplete='true' required value={this.state.email}
                     onChange={(e) => this.setState({ email: e.target.value })}/>
            </div>

            <div className="col-sm-12 col-lg-4 mx-auto my-1 ">
              <input placeholder='First Name (required)' type="text" autoComplete='true' required value={this.state.FNAME}
                     onChange={(e) => this.setState({ FNAME: e.target.value })}/>
            </div>

            <div className="col-sm-12 col-lg-3 mx-auto my-1">
              <button type="submit">Subscribe</button>
            </div>
            {statusMsg && 
                <div className='col-12'>
                  <p className='text-left' style={{color: this.state.statusMsgColor}}>{statusMsg}</p>
                </div>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default Subscribe