import React from 'react';

import './about.scss';

const About = props => {
  return(
    <div className="about">
      <h1>About</h1>
      <h3>{props.info.title}</h3>
      <p>{props.info.body}</p>
      <div className="flex-container">
        <div className="box one">
          <i className="fas fa-film"></i>
          <h4>Graphic Design</h4>
        </div>
        <div className="box two">
          <i className="fas fa-server"></i>
          <h4>Web Engineering</h4>
        </div>
      </div>
    </div>
  )
}

export default About;
