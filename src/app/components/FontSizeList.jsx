import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
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
    this.onAddHandler = this.onAddHandler.bind(this)
    this.onRemove = this.onRemove.bind(this)

    this.state = {
      index: 1
    }
  }

  onAddHandler(evt) {
    evt.preventDefault()

    const { onUpdate, sizes } = this.props
    const { index } = this.state
    const node = ReactDOM.findDOMNode(this.refs.size)
    const number = parseInt(node.value)
    const unit = 'px'

    node.value = ''

    this.setState({ index: index + 1 })

    onUpdate('fontSizes', [{ number, unit }, ...sizes])
  }

  onRemove(index) {
    const { onUpdate, sizes } = this.props

    sizes.splice(index, 1)

    onUpdate('fontSizes', sizes)
  }

  render() {
    const { sizes } = this.props

    const fontSizeItems = sizes.map((size, key) => {
      return (
        <FontSizeItem index={key}
          key={key}
          number={size.number}
          unit={size.unit}
          onRemove={this.onRemove}/>)
    })

    return (
      <Section title="Typography">
        <form className="edit" onSubmit={this.onAddHandler}>
          <div className="input-group">
            <div className="input-field">
              <input type="text" placeholder="Input adding font-size" ref="size"/>
            </div>
            <div className="input-field">
              <input type="submit" value=""/>
            </div>
          </div>
        </form>
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