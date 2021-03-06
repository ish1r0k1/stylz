import React, { Component, PropTypes } from 'react'


export default class FontFamilyItem extends Component {
  static get propTypes() {
    return {
      family: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired
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
    const { index, family, weight } = this.props

    const styles = {
      fontFamily: family,
      fontWeight: weight
    }

    return (
      <li className="col-md-4 col-sm-4 col-xs-6 item">
        <p className="font-family">
          <span className="font-family__name" style={styles}>{family}</span>
          <span className="font-family__weight">font-weight: {weight}</span>
        </p>
        <a onClick={this.onRemoveHandler.bind(this, index)} className="item__remove">×</a>
      </li>)
  }
}
