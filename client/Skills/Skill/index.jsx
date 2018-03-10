import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Skill = styled.li`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 50%;
  height: 8rem;
  margin-bottom: -0.05rem;
  max-width: 50%;
  padding: 0.5rem 0 0;
  position: relative;

  @media (min-width: 500px) {
    flex: 0 0 33.333333333%;
    max-width: 33.333333333%;
  } // 500 //

  @media (min-width: 640px) {
    flex: ${props =>
      props.data.level === 'proficient' ? '0 0 16.666666667%' : '0 0 33%'};
    height: 4.5rem;
    margin-bottom: 0;
    max-width: ${props =>
      props.data.level === 'proficient' ? '16.666666667%' : '33%'};
    padding: 0.3rem 0 0 0.3rem;
  } // medium //
`

const BackgroundLine = styled.hr`
  border-bottom: 1px solid rgba($gray-dark, 0.25);
  margin: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
  &:first-child {
    top: 15%;
  }
  &:nth-child(2) {
    top: 45%;
  }
  &:nth-child(3) {
    top: 75%;
  }
`

const Knowledge = styled.div`
  border: 0.05rem solid #e6e7e7; // gray-lightest
  border-bottom: none;
  background-color: ${props => (props.data.hue ? props.data.hue : '#c3c3c3')};
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: auto;
  color: rgba($black-absolute, 0.5);
  display: flex;
  flex-direction: column;
  height: 0;
  justify-content: center;
  line-height: 1.5rem;
  overflow: hidden;
  padding: 0.35rem 0.25rem 0.2rem;
  text-align: center;
  transition: 1s height;
  width: 100%;
  z-index: 9;

  @media (min-width: 640px) {
    background-size: 100%;
    line-height: 1rem;
  }
`

const KnowledgeTitle = styled.span`
  color: ${props => darken(0.35, props.baseColor)};
  font-size: 1rem;

  @media (min-width: 640px) {
    font-size: 0.85rem;
  }
`

const KnowledgeSubtitle = styled.span`
  color: ${props => darken(0.35, props.baseColor)};
  font-size: 0.75rem;
`

/* Component */
class Technology extends React.Component {
  render() {
    const item = this.props.item
    const name = item ? item.name : ''
    const subtitle = item ? item.subtitle : ''
    const style = {
      height: this.state && item ? `${item.proficiency}%` : '0%'
    }

    setTimeout(() => {
      this.setState({ animate: true })
    }, 25)

    return (
      <Skill data={item}>
        <BackgroundLine />
        <BackgroundLine />
        <BackgroundLine />
        <Knowledge className="knowledge" data={item} style={style}>
          <KnowledgeTitle baseColor={item.hue}>{name}</KnowledgeTitle>
          <KnowledgeSubtitle baseColor={item.hue}>{subtitle}</KnowledgeSubtitle>
        </Knowledge>
      </Skill>
    )
  }
}

Technology.propTypes = {
  item: React.PropTypes.object
}

export default Technology
