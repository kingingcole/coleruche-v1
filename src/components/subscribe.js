import React, {Component} from 'react';

class Subscribe extends Component{
  render() {
    return(
      <div className="container subscribe text-center mt-5">
        <h5>Subscribe to recive updates on new posts</h5>
        <form>
          <div className="row">
            <div className="col-9 pr-0">
              <input type="text"/>
            </div>
            <div className="col-3 text-left pl-0">
              <button type={`submit`}>Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Subscribe