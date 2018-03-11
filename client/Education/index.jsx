import React from 'react'

import './education.scss'

function Institution({ item }) {
  return (
    <div
      itemProp="alumniOf"
      itemScope
      itemType="http://schema.org/CollegeOrUniversity"
    >
      <strong>
        {item.studyType}, {item.area}
      </strong>
      <ul className="unstyled">
        <li className="italic">
          <span itemProp="name">{item.institution}</span>, {item.startDate} -{' '}
          {item.endDate}
        </li>
        <li>{item.details}</li>
      </ul>
    </div>
  )
}

Institution.propTypes = {
  item: React.PropTypes.object.isRequired,
}

/* Component */
function Education({ education }) {
  return (
    <div className="education">
      <h3>Education</h3>
      {education.map((e, i) => <Institution key={i} item={e} />)}
    </div>
  )
}

Education.propTypes = {
  education: React.PropTypes.array.isRequired,
}

export default Education
