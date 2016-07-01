import React, { Component, PropTypes } from 'react'
import Color from 'color'

export default class ColorItem extends Component {
  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
      data: PropTypes.string.isRequired
    }
  }

  constructor(props) {
    super(props)
    this.onRemoveHandler = this.onRemoveHandler.bind(this)
  }

  onRemoveHandler(index, evt) {
    evt.preventDefault()

    const { onRemove } = this.props
    onRemove(index)
  }

  render() {
    const { index, name, data } = this.props
    const color = Color(data)

    const styles = {
      backgroundColor: color.hexString()
    }

    return (
      <li className="col-md-4 col-sm-4 col-xs-6 item">
        <div className="row no-gutter color">
          <div className="col-md-4 col-xs-4 color__example">
            <span style={styles}></span>
          </div>
          <div className="col-md-8 col-xs-8 color__data">
            <div className="color__name">${name}</div>
            <div className="color__hex">{color.hexString()}</div>
            <div className="color__rgb">{color.rgbString()}</div>
          </div>
          <a onClick={this.onRemoveHandler.bind(this, index)} className="item__remove">×</a>
        </div>
      </li>
    )
  }
}
