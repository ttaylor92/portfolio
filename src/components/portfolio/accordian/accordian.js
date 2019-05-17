import React from 'react';

import './accordian.scss';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      arrow: 'fas fa-chevron-up',
      style: {
        color: '#0a5fa3'
      },
      display: 'none',
      grey: '#fff'
    }
  }

  clickHandle = () => (this.state.display === 'none') ?
        this.setState({
          arrow: 'fas fa-chevron-down',
          style:{
            background: '#0a5fa3',
            color: '#fff'
          },
          display: 'block',
          grey: 'lightgrey'
         })
        :
        this.setState({
          arrow: 'fas fa-chevron-up',
          style: {
            background: '#fff',
            color: '#0a5fa3'
          },
          display: 'none',
          grey: '#fff'
         });

  render(){
    let { arrow, style, display, grey } = this.state;

    return(
      <div className="accordian">
        <div className="accordianHead" onClick={this.clickHandle} style={style}>
          <h3>{this.props.title}</h3>
          <div style={{ background: `${grey}` }}>
            <i className={arrow} style={{ fontSize: '18px' }}></i>
          </div>
        </div>
        <div style={{ display: `${display}` }} className="info">
          {this.props.created && <p>Created at: {this.props.created}</p>}
          <p>Language used: {this.props.language}</p>
          {this.props.commits && <p>Commits: {this.props.commits}</p>}
          <div className="flex">
            <img src={this.props.avatar} style={{ width: '50px' }} alt="logo"/>
            <a href={this.props.gitUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View on {this.props.type}   <i className={this.props.icon}></i>
            </a>
          </div>
        </div>
        {/* <hr style={{ margin: '20px 0 0 0', borderTop: `${border}` }}/> */}
      </div>
    )
  }
}
