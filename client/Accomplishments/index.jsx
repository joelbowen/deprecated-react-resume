import React from 'react';

import './accomplishments.scss';

function Item({ item }) {
  return (
    <div className="item">
      <strong>
        { item.name ? item.name : null }
        { item.organization ? item.organization : null }
        { item.position ? ` ${item.position}` : null }
      </strong>
      <ul className="unstyled">
        { item.summary ? item.summary : null }
        { item.highlights ? item.highlights.map((d, i) => <li key={i}>{d}</li>) : null }
      </ul>
    </div>
  );
}

Item.propTypes = {
  item: React.PropTypes.object,
};

/* Component */
function Accomplishments({ volunteer, training, accomplishments }) {
  return (
    <div className="accomplishments">
      <h3>Training & Accomplishments</h3>
      { volunteer.map((a, i) => <Item key={i} item={a} />) }
      { training.map((a, i) => <Item key={i} item={a} />) }
      { accomplishments.map((a, i) => <Item key={i} item={a} />) }
    </div>
  );
}

Accomplishments.propTypes = {
  volunteer: React.PropTypes.array,
  training: React.PropTypes.array,
  accomplishments: React.PropTypes.array,
};

export default Accomplishments;
