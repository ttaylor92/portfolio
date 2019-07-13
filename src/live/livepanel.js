import React from 'react';
import { Link } from 'react-router-dom';

import './livepanel.scss';
import PanelLinks from './panelLinks.js';
import { portfolio } from '../config.js';
import $ from 'jquery';

export default class LivePanel extends React.Component{
  constructor(props){
    super(props)

    this.state={
      display: 'block'
    }
  }

  handleClick = () => (this.state.display === 'none') ? this.setState({ display: 'block' }) : this.setState({ display: 'none' })

  bodyRender = () =>{
    return portfolio.live.map((item, i) =>(
      <div key={i} id={item.name} className='livePanels' style={{ marginTop: '30px' }}>
        <h2 style={{ fontWeight: '500' }}>{item.name}</h2>
        <hr/>
        <img src="https://via.placeholder.com/800" alt="screenshot" style={{ margin: 'auto', display: 'block' }}/>
        <div style={{ width: '800px', margin: '15px auto' }}>
          <Link to={`${item.path}`}>Veiw Live</Link>
        </div>
      </div>
    ))
  }

  disabled(){
    $(".livePanels").attr("disabled", "disabled").off('click');
  }

  render(){
    let { display } = this.state;

    console.log(display)
    return(
      <div className="livepanel">
        <div className="icon bars" onClick={() => this.handleClick()}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="panel" style={{ display }}>
          <ul>
            <PanelLinks />
          </ul>
        </div>
        <div className="icon home">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </div>

        <div className="body">
          {this.bodyRender()}
          {this.disabled()}
        </div>
      </div>
    )
  }
}
