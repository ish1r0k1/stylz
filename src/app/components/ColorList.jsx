import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'
import ColorItem from './ColorItem'

export default class ColorList extends Component {
  static get propTypes() {
    colors: PropTypes.array.isRequired
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

    const { onUpdate, colors } = this.props
    const { index } = this.state
    const name = `color${index}`
    const node = ReactDOM.findDOMNode(this.refs.color)
    const data = node.value

    node.value = ''

    this.setState({ index: index + 1 })

    onUpdate('colors', [{ name, data }, ...colors])
  }

  onRemove(index) {
    const { onUpdate, colors } = this.props

    colors.splice(index, 1)

    onUpdate('colors', colors)
  }

  render() {
    const { colors } = this.props

    const colorItems = colors.map((color, key) => {
      return (
        <ColorItem index={key}
          key={key}
          name={color.name}
          data={color.data}
          onRemove={this.onRemove}/>)
    })

    return (
      <Section title="Colors">
        <form className="edit" onSubmit={this.onAddHandler}>
          <div className="input-group">
            <div className="input-field">
              <input type="text" placeholder="Input adding color" ref="color"/>
            </div>
            <div className="input-field">
              <input type="submit" value=""/>
            </div>
          </div>
        </form>
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
