/* Modules */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Links from './Links'
import Resume from './Resume'
import { install } from 'offline-plugin/runtime'

import './app.scss'

/* Components */
const App = function() {
  return (
    <div className="app-wraper">
      <Links />
      <Resume />
    </div>
  )
}

install()

/* render */
render(<App />, document.getElementById('app'))
