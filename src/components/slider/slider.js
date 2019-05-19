import React from 'react';
import './slider.scss';


const Slider = props => {
  if(props.type === "top"){
    return(
      <div className="active" id="home">
        <div id="particles-js"></div>
        <a className="scroll" href="#about">
          <p style={{ margin: '0' }}>Scroll down</p>
          <i className="fas fa-angle-double-down"></i>
        </a>
      </div>
    )
  } else {
    return(
      <div>
        <div id="particles"></div>
      </div>
    )
  }
}

export default Slider;
