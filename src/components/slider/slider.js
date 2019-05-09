import React from 'react';
import Slick from 'react-slick';
import './slider.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slider = () => {

    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return(
      <div className="active" id="home">
        <Slick {...settings}>
          <div><div className='slider-img' style={{ background: 'url(https://via.placeholder.com/1366)'}}><h1>1</h1></div></div>
          <div><div className='slider-img' style={{ background: 'url(https://via.placeholder.com/1366)'}}><h1>1</h1></div></div>
          <div><div className='slider-img' style={{ background: 'url(https://via.placeholder.com/1366)'}}><h1>1</h1></div></div>
        </Slick>
      </div>
    )
}

export default Slider;
