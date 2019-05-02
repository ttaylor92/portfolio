import React from 'react';

import './skills.scss';

const Skills = props => {

const skillMap = () => {
    return  props.info.map ( item => (
      <div key={item.type.length} className="bar-container">
        <p>{item.type}</p>
        <div className="progress">
          <div
            class="progress-bar progress-bar-striped"
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
      {skillMap()}
    </div>
  )
}

export default Skills
