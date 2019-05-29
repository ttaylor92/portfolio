import React from 'react';

import './sidebar.scss';

const SideBar = props => {

    return(
      <div id="sidebar">
        <img className="dp" src={props.dp} alt="dp"/>
        <div>
          <h1>Tyrone Taylor</h1>
          <a href="#contact"><span><i className="fas fa-envelope-open-text" /></span> tyronetaylorbiz@gmail.com</a>
          <p><small><i className="fas fa-phone" /> <span style={{ color: '#0099CD'}}>{props.contact}</span></small></p>
        </div>

          <ul className="nav-items" id="nav-section">
            <li className="active"><a className="nav-link" href="#home">Home</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#skills">Skills</a></li>
            <li><a className="nav-link" href="#experience">Experience</a></li>
            <li><a className="nav-link" href="#education">Education</a></li>
            <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
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
          <li><a href="https://www.behance.net/Tyronetaylor" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-behance"/>
          </a></li>
        </ul>

        <p style={{ marginBottom: '0', marginTop: '10px' }}>
          <small>Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></small>
        </p>
        <p><small>&copy; Copyright {props.year} All rights reserved</small></p>
      </div>
    )
  }

  export default SideBar;
