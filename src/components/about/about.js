import React from 'react';

import './about.scss';

const About = props => {
  return(
    <div className="about">
      <h1>About</h1>
      <h3>{props.info.title}</h3>
      <p>{props.info.body}</p>
      <div className="box">
        <i class="fas fa-film"></i>
        <h4>Graphic Design</h4>
      </div>
      <div className="box">
        <i class="fas fa-server"></i>
        <h4>Web Engineering</h4>
      </div>
    </div>
  )
}

export default About;
