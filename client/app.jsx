/* Modules */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Resume from './Resume';

/* Components */
const App = function () {
  return (
    <Resume />
  );
};

/* render */
render(
  <App />,
  document.getElementById('app')
);
