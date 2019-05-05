import React from 'react';

import './education.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const colors = ["32,106,133", "233, 30, 99","33, 150, 243","16, 204, 82","32,106,133", "233, 30, 99","33, 150, 243","16, 204, 82"]

const Education = props => {

  const elementMap = () =>{
    return props.info.map((item, i) => (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: `rgb(${colors[i]})`, color: '#fff' }}
        icon={<i className={`${item.icon}`} />}
        key={i}
      >
        <h3 className="vertical-timeline-element-title">{item.type}</h3>
        <p style={{ margin: '0'}}><small>{item.time}</small></p>
        <p>
          {item.description}
        </p>
      </VerticalTimelineElement>
    ))
  }

  return(
    <div className="education">
      <h3>Education</h3>
      <VerticalTimeline layout="1-column">
        {elementMap()}
      </VerticalTimeline>
    </div>
  )
}

export default Education;
