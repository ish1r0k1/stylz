import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export class NewProject extends Component {
  static get propTypes() {
    return {}
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2 className="project__heading">
          <div className="project__name">Untitled</div>
        </h2>
      </div>)
  }
}

const mapStateToProps = ({}) => {
  return {}
}

export default connect(
  mapStateToProps
)(NewProject)
