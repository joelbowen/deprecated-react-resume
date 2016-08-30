import React from 'react';
import Technologies from './Technologies';

import technologies from './data';
import { other } from './skills';

import './my-stack.scss';

/* Component */
function MyStack() {
  return (
    <div className="my-stack">
      <Technologies technologies={technologies.frontEnd} />
      <Technologies technologies={technologies.serverSide} />
      <Technologies technologies={technologies.databases} />
      <p className="other-skills">
        OTHER SKILLS: { other.join(', ') }
      </p>
    </div>
  );
}

export default MyStack;
