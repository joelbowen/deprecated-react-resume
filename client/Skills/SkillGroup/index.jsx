import React from 'react'
import Skill from '../Skill'

import './skill-group.scss'

/* Component */
function Technologies({ technologies, title, description }) {
  const proficient = technologies.filter(t => t.level === 'proficient')
  const learning = technologies.filter(t => t.level === 'learning')
  return (
    <div className="skill-group">
      <div className="row hide-for-medium">
        <div className="columns">
          <h4 className="mobile-title">
            {title}
            <br />
            <small>{description}</small>
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="columns stack-box">
          <div className="proficient">
            <h5>Proficient</h5>
            <ul className="technology-list">
              {proficient.map((t, i) => <Skill key={i} item={t} />)}
            </ul>
            <div className="stack hide-for-small-only">
              <div className="title">{title}</div>
              <div className="description">{description}</div>
            </div>
          </div>
          <div className="learning hide-for-small-only">
            <h5>Learning</h5>
            <ul className="technology-list">
              {learning.map((t, i) => <Skill key={i} item={t} />)}
            </ul>
          </div>
        </div>
      </div>
      <div className="row hide-for-medium">
        <div className="columns stack-box">
          <div className="learning">
            <h5>Learning</h5>
            <ul className="technology-list">
              {learning.map((t, i) => <Skill key={i} item={t} />)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

Technologies.propTypes = {
  technologies: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default Technologies
