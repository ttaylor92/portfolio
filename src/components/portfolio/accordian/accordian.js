import React from 'react';
import { Link } from 'react-router-dom';

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
    let { title, created, language, commits, avatar, gitUrl, path, type, icon, dependencie } = this.props;
  
    return(
      <div className="accordian">
        <div className="accordianHead" onClick={this.clickHandle} style={style}>
          <h3>{title}</h3>
          <div style={{ background: `${grey}` }}>
            <i className={arrow} style={{ fontSize: '18px' }}></i>
          </div>
        </div>
        <div style={{ display: `${display}` }} className="info">
          {created && <p>Created at: {created}</p>}
          {language && <p>Language used: {language}</p>}
          {dependencie && <p>Dependencies: {dependencie}</p>}
          {commits && <p>Commits: {commits}</p>}
          <div className="flex">
            <img src={avatar} style={{ width: '50px' }} alt="logo"/>
            {type === 'Live' ?
              <Link to={path} className="btn btn-primary">
                View on {type}   <i className={icon}></i>
              </Link>
              :
              <a href={gitUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View on {type}   <i className={icon}></i>
              </a>
            }
          </div>
        </div>
        {/* <hr style={{ margin: '20px 0 0 0', borderTop: `${border}` }}/> */}
      </div>
    )
  }
}
