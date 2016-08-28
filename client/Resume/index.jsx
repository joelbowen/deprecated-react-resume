import React from 'react';
import './resume.scss';

/* Resources */
import skills from '../skills';

/* Component */
function Resume() {
  return (
    <div id="resume" className="row resume">
      <div className="columns">
        <h1>Hello, world!</h1>
        <ul>
          {
            skills.map((skill, i) => (<li key={i}>{skill}</li>))
          }
        </ul>
      </div>
    </div>
  );
}

export default Resume;
