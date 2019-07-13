import React from 'react';
import { Link } from 'react-scroll';

import { portfolio } from '../config.js';

const PanelLinks = () => {
  const amount = 500;

  return(
    portfolio.live.map((item, i) => (
        <Link
          activeClass="active"
          to={`${item.name}`}
          spy={true}
          smooth={true}
          duration= {amount}
          key={i}>
          <li>{item.name}</li>
        </Link>
    ))
  )
}

export default PanelLinks;
