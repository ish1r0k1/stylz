import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'
import FontSizeItem from './FontSizeItem'
import CodeView from './CodeView'

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

    const codeLines = sizes.map((size, key) => {
      const { number, unit } = size
      const index = sizes.length - key

      return (
        `$fontSize${index}: ${number + unit};\n`)
    })

    return (
      <Section title="Typography">
        <form className="edit" onSubmit={this.onAddHandler}>
          <div className="input-group">
            <div className="input-field input-field--compact">
              <input type="text" placeholder="Input adding font-size" ref="size"/>
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
          <div className="col-md-4 col-sm-12 code">
            <CodeView>
              {codeLines}
            </CodeView>
          </div>
        </div>
      </Section>)
  }
}
