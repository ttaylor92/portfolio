import React from 'react';
import axios from 'axios';

import './contact.scss';

export default class Contact extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      name: '',
      email: '',
      message: '',
      mailSent: false,
      buttonText: 'Send Message'
    }
  }

  onChange =e => this.setState({[e.target.name]: e.target.value})

  handleFormSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: 'Sending...'
    })

    let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }

    axios.post('https://nodejs-express-99x7jvuf7.now.sh/', data)
    .then( res => {
        this.setState({ mailSent: true, buttonText: 'Message sent' }, this.resetForm())
    })
    .catch( () => {
      this.setState({ buttonText: 'Message not sent' })
    })
  }

  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: ''
    })
  }

  buttonAnimation = () => {
    switch (this.state.buttonText) {
      case 'Send Message':
        return(
          <i className="fas fa-angle-double-right"></i>
        )
      case 'Sending...':
        return(
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        )
      case 'Message not sent':
        return(
          <i className="fas fa-exclamation-triangle"></i>
        )
      case 'Message sent':
        return(
          <i className="fas fa-check-circle"></i>
        )
      default:
        return null
    }
  }

  notSentAlert = () => {
    if(this.state.buttonText === 'Message not sent'){
      return(
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> We've hit a snag when sending the email :(
          <button type="button" className="close" onClick={this.closeAlert}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
    } else if(this.state.buttonText === 'Message sent'){
      return(
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Woohoo!</strong> Thanks for your contact :)
          <button type="button" className="close" onClick={this.closeAlert}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
    }
  }

  closeAlert = () => {
    this.setState({ buttonText: 'Send Message' })
  }

  render(){
    console.log(this.state)

    let { name, email, message, buttonText, mailSent } = this.state;
    return(
      <div id="contact">
        <h3>Contact</h3>
        { this.notSentAlert() }
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
              <p>{this.props.info.email}</p>
            </div>
          </div>
          <div className="right">
            <form onSubmit={this.handleFormSubmit}>
              <div><input className="form-control" placeholder="Name" name="name" type="text" onChange={this.onChange} value={name} required /></div>
              <div><input className="form-control" placeholder="Email" name="email" type="email" onChange={this.onChange} value={email} required /></div>
              <div><textarea className="form-control" placeholder="subject" name="message" type="text" onChange={this.onChange} value={message} required /></div>
              <button className="btn btn-primary" type="submit">
                {this.buttonAnimation()}
                <span style={{ marginLeft: '20px' }}>{buttonText}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
