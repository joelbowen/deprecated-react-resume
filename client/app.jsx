/* Modules */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

/* Resources */
import skills from './skills';

/* Components */
const App = function () {
  return (
    <div id="resume">
      <h1>Hello, world!</h1>
      <ul>
        {
          skills.map((skill, i) => (<li key={i}>{skill}</li>))
        }
      </ul>
    </div>
  );
};

/* render */
render(
  <App />,
  document.getElementById('app')
);
