import React from 'react';
import Intro from '../Intro';

import './resume.scss';

/* Component */
function Resume() {
  return (
    <div id="resume" className="resume" itemType="http://schema.org/Person">
      <Intro />
    </div>
  );
}

export default Resume;
