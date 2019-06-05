import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Provider } from 'react-redux';

//Store for wikisearch
import store from './live/wikisearch/redux/store.js';

import './index.scss';

//Routes
import Home from './App';
import Live from './live/live.js'
import Calculator from './live/calculator/calculator.js';
import Clock from './live/clock/clock.js';
import Drummachine from './live/drummachine/drummachine.js';
import Markdown from './live/markdown/markdown.js';
import WikiSearch from './live/wikisearch/App.js';

const App = () =>{
  return(
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/live" exact component={Live} />
      <Route path="/calculator" exact component={Calculator} />
      <Route path="/clock" exact component={Clock} />
      <Route path="/drummachine" exact component={Drummachine} />
      <Route path="/markdown" exact component={Markdown} />
      <Route path="/wikisearch" exact component={WikiSearch} />
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
