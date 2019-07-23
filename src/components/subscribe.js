import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

class Subscribe extends Component {

  state = {
    email: "",
    FNAME: "",
    statusMsg: "",
    statusMsgColor: 'green',
    subscribing: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({statusMsg: '', subscribing: true})
    let {email, FNAME} = this.state;
    addToMailchimp(email, {FNAME} /*second parameter holds more info like FNAME. LNAME etc. optional*/)
      .then(data => {
        data.result === 'success' ? (this.setState({statusMsg: 'Your subscription was successful!', statusMsgColor: 'green', FNAME: '', email: '', subscribing: false})) : (this.setState({statusMsg: 'This email has already been subscribed.', statusMsgColor: 'red', subscribing: false}))
      })
      .catch(err => {
        this.setState({statusMsg: 'An error occured. Please re-try', statusMsgColor: 'red', subscribing: false})
      })
  };


  render() {
    let {statusMsg, subscribing} = this.state;
    let btnCTA = subscribing ? 'Subscribing' : 'Subscribe';
    return (
      <div className="subscribe text-center mt-5">
        <h6>Subscribe to receive updates on new posts</h6>
        <small>Both fields are required.</small>
        <form onSubmit={this.handleSubmit}>
          <div className="row text-center mx-auto">
            <div className="col-sm-12 mx-auto my-1 sub-input-cont">
              <input placeholder='Email' type="email" autoComplete='true' required value={this.state.email}
                     onChange={(e) => this.setState({ email: e.target.value })}/>
            </div>

            <div className="col-sm-12 mx-auto my-1 sub-input-cont">
              <input placeholder='First name' type="text" autoComplete='true' required value={this.state.FNAME}
                     onChange={(e) => this.setState({ FNAME: e.target.value })}/>
            </div>

            <div className="col-sm-12 mx-auto my-1 sub-button-cont">
              <button type="submit">{btnCTA}</button>
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