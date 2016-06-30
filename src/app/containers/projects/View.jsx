import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export class ProjectView extends Component {
  static get propTypes() {
    return {}
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Project Viewer</div>)
  }
}

export default connect(state => ({}), {

})(ProjectView)
