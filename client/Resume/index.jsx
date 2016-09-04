import React from 'react';
import Intro from '../Intro';
import Skills from '../Skills';
import Experience from '../Experience';
import Accomplishments from '../Accomplishments';
import Education from '../Education';

import './resume.scss';

const ResumeData = require('../assets/resume.json');

/* Component */
function Resume() {
  return (
    <div id="resume" className="resume" itemType="http://schema.org/Person">
      <Intro basics={ResumeData.basics} />
      <Skills skills={ResumeData.skills} />
      <div className="row small-collapse">
        <div className="small-10 medium-5 columns fill-stack">
          <Experience work={ResumeData.work} />
        </div>
        <div className="small-10 medium-5 columns fill-stack">
          <Accomplishments
            volunteer={ResumeData.volunteer}
            training={ResumeData.training}
            accomplishments={ResumeData.accomplishments}
          />
          <Education education={ResumeData.education} />
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
