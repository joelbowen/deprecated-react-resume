import React from 'react';
import Proficiency from '../Proficiency';

import './technologies.scss';

/* Component */
function Technologies({ technologies }) {
  return (
    <div className="technologies">
      <div className="row hide-for-medium">
        <div className="columns">
          <h4 className="mobile-title">
            { technologies.title } <br />
            <small>{ technologies.description }</small>
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="columns stack-box">
          <div className="proficient">
            <h5>Proficient</h5>
            <ul className="technology-list">
              { technologies.proficient.map((t, i) => <Proficiency key={i} item={t} />) }
            </ul>
            <div className="stack hide-for-small-only">
              <div className="title">
                { technologies.title }
              </div>
              <div className="description">
                { technologies.description }
              </div>
            </div>
          </div>
          <div className="learning hide-for-small-only">
            <h5>Learning</h5>
            <ul className="technology-list">
              { technologies.learning.map((t, i) => <Proficiency key={i} item={t} />) }
            </ul>
          </div>
        </div>
      </div>
      <div className="row hide-for-medium">
        <div className="columns stack-box">
          <div className="learning">
            <h5>Learning</h5>
            <ul className="technology-list">
              { technologies.learning.map((t, i) => <Proficiency key={i} item={t} />) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Technologies.propTypes = {
  technologies: React.PropTypes.object,
};

export default Technologies;
