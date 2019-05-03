import React from 'react';

import './contact.scss';

export default class Contact extends React.Component{
  render(){
    return(
      <div id="contact">
        <h3>Contact</h3>
        <div className="flex-container">
          <div className="left"></div>
          <div className="right">
            <form action="">
              <div><input className="form-control" placeholder="Name" type="text" required /></div>
              <div><input className="form-control" placeholder="Email" type="email" required /></div>
              <div><input className="form-control" placeholder="Topic" type="text" required /></div>
              <div><textarea className="form-control" placeholder="Subject" type="text" required /></div>
              <button className="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
