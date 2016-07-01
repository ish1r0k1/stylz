import React, { Component, PropTypes } from 'react'


export default class FontSizeItem extends Component {
  static get propTypes() {
    return {
      number: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      onRemove: PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super(props)
  }

  onRemoveHandler(index, evt) {
    evt.preventDefault()

    const { onRemove } = this.props
    onRemove(index)
  }

  render() {
    const { index, number, unit } = this.props

    const styles = {
      fontSize: number + unit
    }

    return (
      <li className="item">
        <p className="font-size" style={styles}>
          <span className="size">{number + unit}</span>
          <span className="text">Lorem ipsum dolor sit amet.</span>
        </p>
        <a onClick={this.onRemoveHandler.bind(this, index)} className="item__remove">×</a>
      </li>)
  }
}
