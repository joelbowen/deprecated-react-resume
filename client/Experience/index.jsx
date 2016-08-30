import React from 'react';

import experience from './data.js';

import './experience.scss';

function Position({ position }) {
  return (
    <div className="position" itemScope itemProp="worksFor" itemType="http://schema.org/Organization">
      <strong>{ position.title }, <span itemProp="name">{ position.company }</span></strong>
      <ul className="unstyled">
        <li className="italic">
          { position.startDate } - { position.endDate }, { position.shortDescription}
        </li>
        <li>{ position.description }</li>
      </ul>
    </div>
  );
}

Position.propTypes = {
  position: React.PropTypes.object,
};

/* Component */
function Experience() {
  return (
    <div className="experience">
      <h3>Experience</h3>
      {
        experience.map((p, i) => <Position key={i} position={p} />)
      }
    </div>
  );
}

export default Experience;
