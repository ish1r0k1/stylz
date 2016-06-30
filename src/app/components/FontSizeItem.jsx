import React, { Component, PropTypes } from 'react'


export default class FontSizeItem extends Component {
  static get propTypes() {
    return {
      number: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { number, unit } = this.props

    const styles = {
      fontSize: number + unit
    }

    return (
      <li className="item">
        <p className="font-size" style={styles}>
          <span className="size">{number + unit}</span>
          <span className="text">Lorem ipsum dolor sit amet.</span>
        </p>
      </li>)
  }
}
