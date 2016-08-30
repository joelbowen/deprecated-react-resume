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
      <div className="row small-collapse built-with">
        <div className="columns">
          <p>
            Lovingly built with with ReactJS, Babel + ESLint, Webpack, SASS, and hosted on S3 <br />
            See the code <a href="https://github.com/joelbowen/react-resume">here</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
