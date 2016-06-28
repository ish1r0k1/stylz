import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  static get propTypes() {
    return {
      onLogout: PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogout() {
    const { onLogout } = this.props
    onLogout()
  }

  render() {
    return (
      <header className="header">
        <h1 className="header__logo">stylz</h1>
        <div className="header__ctrls">
          <a onClick={this.onLogout}>Logout</a>
        </div>
      </header>
    )
  }
}
