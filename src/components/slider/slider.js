import React from 'react';
import './slider.scss';


const Slider = () => {
    return(
      <div className="active" id="home">
        <div id="particles-js"></div>
        <div className="scroll">
          <p style={{ margin: '0' }}>Scroll down</p>
          <i className="fas fa-angle-double-down"></i>
        </div>
      </div>
    )
}

export default Slider;
