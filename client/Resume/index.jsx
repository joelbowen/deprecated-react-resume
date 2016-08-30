import React from 'react';
import Intro from '../Intro';
import MyStack from '../MyStack';
import Experience from '../Experience';
import Accomplishments from '../Accomplishments';
import Education from '../Education';
import './resume.scss';

/* Component */
function Resume() {
  return (
    <div id="resume" className="resume" itemType="http://schema.org/Person">
      <Intro />
      <MyStack />
      <div className="row small-collapse">
        <div className="small-10 medium-5 columns fill-stack">
          <Experience />
        </div>
        <div className="small-10 medium-5 columns fill-stack">
          <Accomplishments />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default Resume;
