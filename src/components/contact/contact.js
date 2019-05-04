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
    this.setState({
      buttonText: '...sending'
    })

    let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }

    axios.post('https://nodejs-express-99x7jvuf7.now.sh/', data)
    .then( res => {
        this.setState({ mailSent: true }, this.resetForm())
    })
    .catch( () => {
      console.log('Message not sent')
    })

    this.resetForm();
  }

  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent'
    })
}

  render(){
    console.log(this.state)

    let { name, email, message, buttonText } = this.state;
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
              <div><textarea className="form-control" placeholder="subject" name="message" type="text" onChange={this.onChange} value={message} required /></div>
              <button className="btn btn-primary" type="submit">{buttonText}</button>
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
