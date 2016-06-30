import React, { Component, PropTypes } from 'react'
import Section from './Section'
import ColorItem from './ColorItem'

export default class ColorList extends Component {
  static get propTypes() {
    colors: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { colors } = this.props

    const colorItems = colors.map((color, key) => {
      return (
        <ColorItem index={key}
          key={key}
          name={color.name}
          data={color.data}/>)
    })

    return (
      <Section title="Colors">
        <div className="row">
          <div className="col-md-8 col-sm12">
            <ul className="row colors list">
              {colorItems}
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 slz-section-code">
            <div>code</div>
          </div>
        </div>
      </Section>
    )
  }
}
