import React from 'react';

import './skills.scss';

const Skills = props => {

const skillMap = () => {
    return  props.info[1].map ( (item, i) => (
      <div key={i} className="bar-container">
        <p>{item.type}</p>
        <label htmlFor="progress"><small>{item.level}%</small></label>
        <div className="progress" id="progress">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{width: `${item.level}%`}}
            aria-valuenow={item.level}
            aria-valuemin="0"
            aria-valuemax="100">
          </div>
        </div>
      </div>
  ))
}

  console.log(skillMap())

  return(
    <div className="skills">
      <h3>Skills</h3>
      <p>{props.info[0]}</p>
      <div className="grid-container">
        {skillMap()}
      </div>
    </div>
  )
}

export default Skills
