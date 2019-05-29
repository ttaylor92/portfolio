import React from 'react';

import './nav.scss';

export default class Nav extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      display: 'none'
    }
  }

  handleToggle = () => (this.state.display === 'none') ? this.setState({ display: 'block'}) : this.setState({ display: 'none'});

  render(){
    let { display } = this.state;

    return(
      <div id="nav" className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent" style={{ display }}>
          <div className="bg-dark p-4">
            <ul className="nav-items">
              <li><a className="nav-link" href="#home">Home</a></li>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#skills">Skills</a></li>
              <li><a className="nav-link" href="#experience">Experience</a></li>
              <li><a className="nav-link" href="#education">Education</a></li>
              <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand justify-content-left" href="#home">
            <img src="/images/1.jpg" style={{ borderRadius: '50px',  width:"35px", height:"35px"  }}alt=""/>
          </a>
          <button className="navbar-toggler" type="button" onClick={this.handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    )
  }
}
