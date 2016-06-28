import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/users'

import Header from '../components/Header'
import Footer from '../components/Footer'

export class CoreLayout extends Component {
  static get propTypes() {
    return {
      user: PropTypes.object.isRequired,
      children: PropTypes.element.isRequired,
      logout: PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogout() {
    logout()
  }

  render() {
    const { user: { authenticated }, children, logout } = this.props

    return authenticated ? (
      <div style={{height: '100%'}}>
        <Header onLogout={logout} />
          <div className="container">
            {children}
          </div>
        <Footer />
      </div>
    ) : (
      <div style={{height: '100%'}}>
        {children}
      </div>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  { logout }
)(CoreLayout)
