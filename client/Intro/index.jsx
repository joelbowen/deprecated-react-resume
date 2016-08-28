import React from 'react';

/* Resources */
import my from './data.js';

import './intro.scss';

/* Component */
function Intro() {
  return (
    <div className="intro row">
      <div className="photo columns small-10 align-center hide-for-medium">
        <img src={my.photo} className="img-responsive" alt="Joel Bowen" />
      </div>
      <div className="small-10 medium-4 columns align-bottom">
        <h1 className="name" itemProp="name">{my.name}</h1>
        <h2 className="title">
          <span itemProp="jobTitle">{my.title}</span><br />
          {my.tagline}
        </h2>
        <p className="contact">
          <a href={`tel:${my.contact.phone.split('.').join('-')}`} itemProp="telephone">
            {my.contact.phone}
          </a>
          <span> | </span>
          <a href={`mailto:${my.contact.email}`} itemProp="email">
            {my.contact.email}
          </a>
        </p>
      </div>
      <div className="photo columns medium-2 align-center hide-for-small-only">
        <img src={my.photo} className="img-responsive" alt="Joel Bowen" itemProp="image" />
      </div>
      <div className="about columns small-10 medium-4 align-bottom">
        <h3>About Me</h3>
        {
          my.takeaways.map((takeaway, i) => (<p key={i} className="takeaway">{takeaway}</p>))
        }
      </div>
    </div>
  );
}

export default Intro;
