import React from 'react';
import axios from 'axios';

import './contact.scss';

export default class Contact extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      name: '',
      email: '',
      topic: '',
      subject: '',
      mailSent: false,
      error: null
    }
  }

  onChange =e => this.setState({[e.target.name]: e.target.value})

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${this.props.path}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render(){
    console.log(this.state)

    let { name, email, topic, subject } = this.state;
    return(
      <div id="contact">
        <h3>Contact</h3>
        <div className="flex-container">
          <div className="left">
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
              <p>tyronetaylorbiz@gmail.com</p>
            </div>
          </div>
          <div className="right">
            <form onSubmit={this.handleFormSubmit}>
              <div><input className="form-control" placeholder="Name" name="name" type="text" onChange={this.onChange} value={name} required /></div>
              <div><input className="form-control" placeholder="Email" name="email" type="email" onChange={this.onChange} value={email} required /></div>
              <div><input className="form-control" placeholder="Topic" name="topic" type="text" onChange={this.onChange} value={topic} required /></div>
              <div><textarea className="form-control" placeholder="Subject" name="subject" type="text" onChange={this.onChange} value={subject} required /></div>
              <button className="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div>
          { this.state.mailSent && <p>Thank you for contcting me.</p> }
        </div>
      </div>
    )
  }
}
