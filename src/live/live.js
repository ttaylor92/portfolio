import React from 'react';
import { Link } from 'react-router-dom';

const Live = props =>{
  if(props.panel){
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
          <Link to={item.path} className="btn btn-primary">
            View Live   <i className="fab fa-react"></i>
          </Link>
        </div>
      </div>
    ))
  }
  return(
    <div>
      Live
    </div>
  )
}

export default Live;
