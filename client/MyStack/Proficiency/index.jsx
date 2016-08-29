import React from 'react';

import './proficiency.scss';

/* Component */
// function Technology({ item }) {
class Technology extends React.Component {
  render() {
    const item = this.props.item;
    const title = item ? item.title : '';
    const subtitle = item ? item.subtitle : '';
    const style = {
      backgroundColor: item ? item.hue : '#c3c3c3',
      backgroundImage: `url(${item.image})`,
      height: this.state && item ? `${item.proficiency}%` : '0%',
    };
    setTimeout(() => {
      this.setState({ animate: true });
    }, 25);
    return (
      <li className={`technology ${item.title.length ? null : 'hide-for-phone-only'}`}>
        <hr />
        <hr />
        <hr />
        <div className={`knowledge ${item.class ? item.class : null}`} style={style}>
          <span className="title">{title}</span><br />
          <span className="subtitle">{subtitle}</span>
        </div>
      </li>
    );
  }
}

Technology.propTypes = {
  item: React.PropTypes.object,
};

export default Technology;
