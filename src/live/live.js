import React from 'react';
import { Link } from 'react-router-dom';

import './live.scss';

const Live = props =>{
  switch (props.type) {
    case "panel":
      return props.live.map((item, i) => (
        <div className="card"
            style={{
              width: '18rem',
              marginTop: '20px',
              marginLeft: '20px'
            }}
            key={i}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            className="card-img-top codepen-img"
            alt="logo"
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">{item.name}</h5>
            <div className="card-text">
              {item.dependencie && <p>Dependencies: {item.dependencie}</p>}
            </div>
            <Link to={item.path} className="btn btn-primary">
              View Live   <i className="fab fa-react"></i>
            </Link>
          </div>
        </div>
      ))
    case "preview":
      return(
        <div className="live-main">
          <nav className="navbar fixed-top navbar-dark bg-primary">
            <Link to="/">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="logo"
                height="30"
                width="30"
              />
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Homepage</Link>
              </li>
              <li className="nav-item">
                <Link to="/live" className="nav-link">Live Homepage</Link>
              </li>
            </ul>
          </nav>
        </div>
      )
    default:
      return null

  }
}

export default Live;
