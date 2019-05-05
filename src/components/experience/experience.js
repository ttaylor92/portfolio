import React from 'react';

import './experience.scss';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';

const colors = ["32,106,133", "233, 30, 99","33, 150, 243","16, 204, 82","32,106,133", "233, 30, 99","33, 150, 243","16, 204, 82"]

const Experience = props => {

  const elementMap = () =>{
    return props.info.map((item, i) => (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: `rgb(${colors[i]})`, color: '#fff' }}
        icon={<i className={`${item.icon}`} />}
        key={i}
      >
        <h3 className="vertical-timeline-element-title">{item.job}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
        <p style={{ margin: '0'}}><small>{item.time}</small></p>
        <p>
          {item.description}
        </p>
      </VerticalTimelineElement>
    ))
  }

  return(
    <div id="experience">
      <h3>Experience</h3>
      <VerticalTimeline>
        {elementMap()}
      </VerticalTimeline>
    </div>
  )
}

export default Experience;
