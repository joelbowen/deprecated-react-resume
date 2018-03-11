import React from 'react'

/* Resources */
import './intro.scss'

/* Component */
function Intro({ basics }) {
  return (
    <div className="intro row">
      <div className="photo columns small-10 align-center hide-for-medium">
        <img src={basics.picture} className="img-responsive" alt="Joel Bowen" />
      </div>
      <div className="small-10 medium-4 columns align-bottom">
        <h1 className="name" itemProp="name">
          {basics.name}
        </h1>
        <h2 className="title">
          <span itemProp="jobTitle">{basics.title}</span>
          <br />
          {basics.tagline}
        </h2>
        <p className="contact">
          <a
            href={`tel:${basics.phone.split('.').join('-')}`}
            itemProp="telephone"
          >
            {basics.phone}
          </a>
          <span> | </span>
          <a href={`mailto:${basics.email}`} itemProp="email">
            {basics.email}
          </a>
        </p>
      </div>
      <div className="photo columns medium-2 align-center hide-for-small-only">
        <img
          src={basics.picture}
          className="img-responsive"
          alt="Joel Bowen"
          itemProp="image"
        />
      </div>
      <div className="about columns small-10 medium-4 align-bottom">
        <h3>About Me</h3>
        {basics.highlights.map((h, i) => (
          <p key={i} className="highlight">
            {h}
          </p>
        ))}
      </div>
    </div>
  )
}

Intro.propTypes = {
  basics: React.PropTypes.object.isRequired,
}

export default Intro
