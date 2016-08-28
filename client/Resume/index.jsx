import React from 'react';
import './resume.scss';

/* Resources */
import skills from '../skills';

/* Component */
function Resume() {
  return (
    <div id="resume" className="root">
      <h1>Hello, world!</h1>
      <ul>
        {
          skills.map((skill, i) => (<li key={i}>{skill}</li>))
        }
      </ul>
    </div>
  );
}

export default Resume;
