import React, { Component } from 'react';
import './App.module.css';

//import GetFunc from './hoc/getfunc/get.js';
import FormMain from './hoc/getform/forms';

//Live
import Live from '../live.js';


export default class WikiSearch extends Component {
  render() {
    return (
      <div>
        <Live type="preview" />
        <FormMain/>
      </div>
    );
  }
}
