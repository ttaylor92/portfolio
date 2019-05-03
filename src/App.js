import React from 'react';
import './App.scss';
import sal from 'sal.js';

import { dp, year, about, skills } from './config.js';

//components
import Slider from './components/slider/slider.js';
import SideBar from './components/sidebar/sidebar.js';
import About from './components/about/about.js';
import Skills from './components/skills/skills.js';
import Portfolio from './components/portfolio/portfolio.js';
import Contact from './components/contact/contact.js';

function App() {
  return (
    <div className="App">
      <SideBar dp={dp} year={year}/>
      <div className="main">
        <Slider />
        <About info={about}/>
        <Skills info={skills}/>
        <Portfolio />

        <Contact />
      </div>
    </div>
  );
}

export default App;
