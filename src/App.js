import React from 'react';
import './App.scss';
import sal from 'sal.js';

//components
import Slider from './components/slider/slider.js';
import SideBar from './components/sidebar/sidebar.js';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="main">
        <Slider />
      </div>
    </div>
  );
}

export default App;
