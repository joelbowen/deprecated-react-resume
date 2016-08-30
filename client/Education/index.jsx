import React from 'react';

import education from './data.js';

import './education.scss';

function Institution({ item }) {
  return (
    <div>
      <strong>{ item.degree }</strong>
      <ul className="unstyled">
        <li className="italic">
          { item.institution }, { item.startDate } - { item.endDate }
        </li>
        <li>
          { item.details }
        </li>
      </ul>
    </div>
  );
}

Institution.propTypes = {
  item: React.PropTypes.object,
};

/* Component */
function Education() {
  return (
    <div className="education">
      <h3>Education</h3>
      {
        education.map((e, i) => <Institution key={i} item={e} />)
      }
    </div>
  );
}

export default Education;
