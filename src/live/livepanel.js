import React from 'react';
import { Link } from 'react-router-dom';

import './livepanel.scss';

const LivePanel = () =>{
  return(
    <div className="livepanel">
      <div className="panel">
      </div>
      <div className="body">
        <Link to="/clock">
          Clock
        </Link>
      </div>
    </div>
  )
}

export default LivePanel;
