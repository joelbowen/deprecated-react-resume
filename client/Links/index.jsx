import React from 'react'

import './links.scss'

/* Component */
function Links() {
  return (
    <div className="links">
      <div className="row">
        <ul className="menu">
          <li>
            <a
              href="https://github.com/joelbowen/live-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Links
