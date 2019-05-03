import React from 'react';

import './contact.scss';

export default class Contact extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      name: '',
      email: '',
      topic: '',
      subject: ''
    }
  }

  onChange =e => this.setState({[e.target.name]: e.target.value})

  render(){
    console.log(this.state)

    let { name, email, topic, subject } = this.state;
    return(
      <div id="contact">
        <h3>Contact</h3>
        <div className="flex-container">
          <div className="left"></div>
          <div className="right">
            <form action="">
              <div><input className="form-control" placeholder="Name" name="name" type="text" onChange={this.onChange} value={name} required /></div>
              <div><input className="form-control" placeholder="Email" name="email" type="email" onChange={this.onChange} value={email} required /></div>
              <div><input className="form-control" placeholder="Topic" name="topic" type="text" onChange={this.onChange} value={topic} required /></div>
              <div><textarea className="form-control" placeholder="Subject" name="subject" type="text" onChange={this.onChange} value={subject} required /></div>
              <button className="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
