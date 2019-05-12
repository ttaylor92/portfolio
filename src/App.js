import React from 'react';
import './App.scss';
import sal from 'sal.js';

import { dp, year, about, skills, contact, experience, education, portfolio } from './config.js';

//components
import Slider from './components/slider/slider.js';
import SideBar from './components/sidebar/sidebar.js';
import About from './components/about/about.js';
import Skills from './components/skills/skills.js';
import Portfolio from './components/portfolio/portfolio.js';
import Contact from './components/contact/contact.js';
import Experience from './components/experience/experience.js';
import Education from './components/education/education.js';
import Nav from './components/nav/nav.js';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <SideBar dp={dp} year={year} contact={contact.number}/>
      <div className="main">
        <Slider />
        <About info={about}/>
        <Skills info={skills}/>
        <Experience info={experience} />
        <Education info={education} />
        <Portfolio codepen={portfolio.codepen}/>
        <Contact info={contact} />
        <div className="arrow-top btn btn-primary">
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
