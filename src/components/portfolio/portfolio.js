import React from 'react';
//import axios from 'axios';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import './portfolio.scss';

const axios = require('axios');

export default class Portfolio extends React.Component{
  constructor(props){
    super(props)

    this.state={
      data: null
    }
  }

  data =() => {
    axios.get('https://api.github.com/users/ttaylor92/repos')
    .then(res => this.setState({ data: res.data }))

    axios.get('https://api.github.com/repos/ttaylor92/FCC-Calculator/commits')
    .then(res => console.log(res.data.length))
  }

  render(){
    let { data } = this.state;
    console.log(this.state)
    return(
      <div className="portfolio">
        <h3>Portfolio</h3>
        <Tabs
          defaultTab="one"
          onChange={(tabId) => { console.log(tabId) }}
        >
          <TabList>
            <Tab tabFor="one">Tab 1</Tab>
            <Tab tabFor="two">Tab 2</Tab>
            <Tab tabFor="three">Tab 3</Tab>
          </TabList>
          <TabPanel tabId="one">
            <p>Tab 1 content</p>
          </TabPanel>
          <TabPanel tabId="two">
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel tabId="three">
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
        {data ? null : this.data()}
      </div>
    )
  }
}
