import React, { Component, PropTypes } from 'react'
import Section from './Section'
import FontFamilyItem from '../components/FontFamilyItem'

export default class FontFamilyList extends Component {
  static get propTypes() {
    families: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { families } = this.props

    const fontFamilyItems = families.map((font, key) => {
      return (
        <FontFamilyItem index={key}
          key={key}
          family={font.family}
          weight={font.weight}/>
        )
    })

    return (
      <Section title="Font Families">
        <div className="row">
          <div className="col-md-8">
            <ul className="row font-families list">
              {fontFamilyItems}
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 slz-section-code">
            <div>code</div>
          </div>
        </div>
      </Section>)
  }

}
