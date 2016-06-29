import React, { Component, PropTypes } from 'react'

export default class Section extends Component {
  static get propTypes() {
    title: PropTypes.string.isRequired
    children: PropTypes.element.isRequired
  }

  render() {
    const { title, children } = this.props;

    return (
      <section className="section">
        <h2 className="section__heading">
          <span className="section__title">{title}</span>
        </h2>
        <div className="content">
          {children}
        </div>
      </section>
    )
  }
}
