import React from 'react';
import Intro from '../Intro';
import MyStack from '../MyStack';

import './resume.scss';

/* Component */
function Resume() {
  return (
    <div id="resume" className="resume" itemType="http://schema.org/Person">
      <Intro />
      <MyStack />
    </div>
  );
}

export default Resume;
