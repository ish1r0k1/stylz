import React, { Component, PropTypes } from 'react'
import Section from './Section'
import FontSizeItem from './FontSizeItem'

export default class FontSizesList extends Component {
  static get propTypes() {
    return {
      sizes: PropTypes.array.isRequired
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { sizes } = this.props

    const fontSizeItems = sizes.map((size, key) => {
      return (
        <FontSizeItem index={key}
          key={key}
          number={size.number}
          unit={size.unit}/>)
    })

    return (
      <Section title="Typography">
        <div className="row">
          <div className="col-md-8">
            <ul className="font-sizes list">
              {fontSizeItems}
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 slz-section-code">
            <div>code</div>
          </div>
        </div>
      </Section>)
  }
}
