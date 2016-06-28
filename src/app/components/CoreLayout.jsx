import React, { Component, PropTypes } from 'react'

import Header from './Header'
import Footer from './Footer'

export default class CoreLayout extends Component {
  static get propTypes() {
    children: PropTypes.element.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <div style={{height: '100%'}}>
        <Header />
          <div className="container">
            {children}
          </div>
        <Footer />
      </div>
    )
  }
}
