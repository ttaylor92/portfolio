import React from 'react';
import './App.scss';

//components
import Slider from './components/slider/slider.js';

function App() {
  return (
    <div className="App">
      <div className="sidebar"> Hello </div>
      <div className="main">
        <Slider />
      </div>
    </div>
  );
}

export default App;
