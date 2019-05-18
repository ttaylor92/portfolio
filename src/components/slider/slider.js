import React from 'react';
import './slider.scss';


const Slider = () => {
    return(
      <div className="active" id="home">
        <div id="particles-js"></div>
        <a className="scroll" href="#about">
          <p style={{ margin: '0' }}>Scroll down</p>
          <i className="fas fa-angle-double-down"></i>
        </a>
      </div>
    )
}

export default Slider;
