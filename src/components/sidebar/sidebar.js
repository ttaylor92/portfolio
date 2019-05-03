import React from 'react';

import './sidebar.scss';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="sidebar">
        <img className="dp" src={this.props.dp} alt="dp"/>
        <div>
          <h1>Tyrone Taylor</h1>
          <a href="#contact"><span><i className="fas fa-envelope-open-text" /></span> tyronetaylorbiz@gmail.com</a>
        </div>

        <ul className="nav-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <ul className="sm-icons">
          <li><a href="https://www.freecodecamp.org/ttaylor" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-free-code-camp" />
          </a></li>
          <li><a href="https://twitter.com/chaz_ster" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square" />
          </a></li>
          <li><a href="https://www.instagram.com/kidditofficial/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a></li>
          <li><a href="https://www.linkedin.com/in/tyrone-taylor7115/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a></li>
          <li><a href="https://github.com/ttaylor92" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a></li>
          <li><a href="https://codepen.io/curlybraces/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-codepen"/>
          </a></li>
        </ul>

        <p><small>&copy; Copyright {this.props.year} All rights reserved</small></p>
      </div>
    )
  }
}
