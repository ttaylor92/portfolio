import React from 'react';

import './sidebar.scss';
import { DP } from '../../config.js';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FasGitHub } from '@fortawesome/free-solid-svg-icons';
//
// library.add(FasGitHub)
export default class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="sidebar">
        <img className="dp" src={DP} alt="dp"/>

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
      </div>
    )
  }
}
