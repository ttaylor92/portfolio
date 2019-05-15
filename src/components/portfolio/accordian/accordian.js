import React from 'react';

import './accordian.scss';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      open: "none",
      border: '1px solid grey',
      arrow: 'fas fa-chevron-up'
    }
  }

  clickHandle = () => (this.state.open === 'none') ?
        this.setState({ open: 'block', border: "4px solid lightblue", arrow: 'fas fa-chevron-down' })
        :
        this.setState({ open: 'none', border: "1px solid grey", arrow: 'fas fa-chevron-up' });

  render(){
    let { open, border, arrow } = this.state;
    console.log(open, border)

    return(
      <div className="accordian">
        <div className="accordianHead" onClick={this.clickHandle}>
          <h3><i className={arrow} style={{ fontSize: '18px' }}></i> {this.props.title}</h3>
        </div>
        <div style={{ display: `${open}`}}>
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
        <hr style={{ margin: '20px 0 0 0', borderTop: `${border}` }}/>
      </div>
    )
  }
}
