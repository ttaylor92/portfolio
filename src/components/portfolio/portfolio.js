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
      github: null,
      commits: []
    }
  }

  //write the fetched data from git api to state
  data = () => {
    axios.get('https://api.github.com/users/ttaylor92/repos')
    .then(res => this.setState({ github: res.data }))
  }

  //fetch commits from individual repos and add to state
  commitCount = (url) => {
    let workingUrl = url.slice(0, url.length - 6)

    if(this.state.commits.length < 1){
      axios.get(workingUrl)
      .then(res => (this.setState({ commits: [...this.state.commits, res.data.length] })))
    }
  }

  loader = type =>{
    let template = (
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )

    switch (type) {
      case this.state.github:
        if(this.state.github){
          template = this.state.github.map((item, i) => (
            <div className="card"
                style={{
                  width: '18rem',
                  marginTop: '20px',
                  marginLeft: '20px'
                }}
                key={i}>
              <img src={item.owner.avatar_url} className="card-img-top" alt="Avatar" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="card-text">
                  <p>Created at: {item.created_at.slice(0, item.created_at.length - 10)}</p>
                  <p>Language used: {item.language}</p>
                  {this.commitCount(item.commits_url)}
                  <p>Commits: {this.state.commits[i]}</p>
                </div>
                <a href={item.svn_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View on Github   <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          ))

          return template
        } else {
          return template
        }
      default:
        return template
    }
  }

  //codepen info map
  penMap = () => {
    return this.props.codepen.map((item, i) => (
      <div className="card"
          style={{
            width: '18rem',
            marginTop: '20px',
            marginLeft: '20px'
          }}
          key={i}>
        <img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png" className="card-img-top codepen-img" alt="logo" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Language used: {item.language}</p>
          <a href={item.url} className="btn btn-primary">
            View on CodePen   <i className="fab fa-codepen"></i>
          </a>
        </div>
      </div>
    ))
  }

  componentDidMount(){
    if(!this.state.github){
      this.data()
    }
  }

  render(){
    let { github } = this.state;
    return(
      <div id="portfolio">
        <h3>Portfolio</h3>
        <Tabs
          defaultTab="one"
          onChange={(tabId) => { console.log(tabId) }}
        >
          <TabList>
            <Tab tabFor="one">Github</Tab>
            <Tab tabFor="two">CodePen</Tab>
          </TabList>
          <TabPanel tabId="one">
            <div className="row">
              {this.loader(github)}
            </div>
          </TabPanel>
          <TabPanel tabId="two">
            <div className="row">
              {this.penMap()}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
