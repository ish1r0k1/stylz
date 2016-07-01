import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'
import FontFamilyItem from '../components/FontFamilyItem'

export default class FontFamilyList extends Component {
  static get propTypes() {
    families: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)

    this.onAddHandler = this.onAddHandler.bind(this)
    this.onRemove = this.onRemove.bind(this)

    this.state = {
      index: 1
    }
  }

  onAddHandler(evt) {
    evt.preventDefault()

    const { onUpdate, families } = this.props
    const { index } = this.state
    const node = ReactDOM.findDOMNode(this.refs.family)
    const family = node.value
    const weight = '300'

    node.value = ''

    this.setState({ index: index + 1 })

    onUpdate('fontFamilies', [{ family, weight }, ...families])
  }

  onRemove(index) {
    const { onUpdate, families } = this.props

    families.splice(index, 1)

    onUpdate('fontFamilies', families)
  }

  render() {
    const { families } = this.props

    const fontFamilyItems = families.map((font, key) => {
      return (
        <FontFamilyItem index={key}
          key={key}
          family={font.family}
          weight={font.weight}
          onRemove={this.onRemove}/>)
    })

    return (
      <Section title="Font Families">
        <form className="edit" onSubmit={this.onAddHandler}>
          <div className="input-group">
            <div className="input-field">
              <input type="text" placeholder="Input adding font-family" ref="family"/>
            </div>
            <div className="input-field">
              <input type="submit" value=""/>
            </div>
          </div>
        </form>
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
