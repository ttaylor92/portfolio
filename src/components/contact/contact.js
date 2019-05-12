import React from 'react';

import './contact.scss';

export default class Contact extends React.Component{
    render(){
      return(
        <div id="contact">
          <h3>Contact</h3>
          <div className="flex-container">
              <div>
                <i className="fas fa-phone" />
                <p>{this.props.info.number}</p>
              </div>
              <div>
                <i className="fas fa-map-marked-alt" />
                <p>{this.props.info.address}</p>
              </div>
              <div>
                <i className="fas fa-envelope-open-text" />
                <p>{this.props.info.email}</p>
              </div>
            </div>
          </div>
        )
      }
}
