import React from 'react';

import accomplishments from './data';

import './accomplishments.scss';

function Item({ item }) {
  return (
    <div className="item">
      <strong>{ item.title }</strong>
      <ul className="unstyled">
        {
          item.details.map((d, i) => <li key={i}>{d}</li>)
        }
      </ul>
    </div>
  );
}

Item.propTypes = {
  item: React.PropTypes.object,
};

/* Component */
function Accomplishments() {
  return (
    <div className="accomplishments">
      <h3>Training & Accomplishments</h3>
      {
        accomplishments.map((a, i) => <Item key={i} item={a} />)
      }
    </div>
  );
}

export default Accomplishments;
