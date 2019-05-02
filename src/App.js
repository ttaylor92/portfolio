import React from 'react';
import './App.scss';
import sal from 'sal.js';

import { dp, year, about } from './config.js';

//components
import Slider from './components/slider/slider.js';
import SideBar from './components/sidebar/sidebar.js';
import About from './components/about/about.js';

function App() {
  return (
    <div className="App">
      <SideBar dp={dp} year={year}/>
      <div className="main">
        <Slider />
        <About info={about}/>
      </div>
    </div>
  );
}

export default App;
