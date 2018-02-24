import React from 'react'

import './skill.scss'

/* Component */
class Technology extends React.Component {
  render() {
    const item = this.props.item
    const name = item ? item.name : ''
    const subtitle = item ? item.subtitle : ''
    const style = {
      backgroundColor: item ? item.hue : '#c3c3c3',
      // backgroundImage: `url(${item.image})`,
      height: this.state && item ? `${item.proficiency}%` : '0%'
    }
    setTimeout(() => {
      this.setState({ animate: true })
    }, 25)
    return (
      <li className="skill">
        <hr />
        <hr />
        <hr />
        <div
          className={`knowledge ${item.class ? item.class : null}`}
          style={style}
        >
          <span className="title">{name}</span>
          <br />
          <span className="subtitle">{subtitle}</span>
        </div>
      </li>
    )
  }
}

Technology.propTypes = {
  item: React.PropTypes.object
}

export default Technology
