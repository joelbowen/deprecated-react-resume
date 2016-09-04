import React from 'react';

import './experience.scss';

function Position({ position }) {
  return (
    <div className="position" itemScope itemProp="worksFor" itemType="http://schema.org/Organization">
      <strong>{ position.position }, <span itemProp="name">{ position.company }</span></strong>
      <ul className="unstyled">
        <li className="italic">
          { position.startDate } - { position.endDate }, { position.summary }
        </li>
        <li>{ position.highlights ? position.highlights.join(', ') : null }</li>
      </ul>
    </div>
  );
}

Position.propTypes = {
  position: React.PropTypes.object.isRequired,
};

/* Component */
function Experience({ work }) {
  return (
    <div className="experience">
      <h3>Experience</h3>
      {
        work.map((p, i) => <Position key={i} position={p} />)
      }
    </div>
  );
}

Experience.propTypes = {
  work: React.PropTypes.array.isRequired,
};

export default Experience;
