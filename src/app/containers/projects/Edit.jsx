import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { saveProject } from '../../actions/projects'

export class ProjectEdit extends Component {
  static get propTypes() {
    return {
      params: PropTypes.object
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { saveProject } = this.props

    return (
      <div>
        <h2 className="project__heading">
          <div className="project__name">Untitled</div>
        </h2>
        <div onClick={saveProject}>save dummy project</div>
      </div>)
  }
}

export default connect(state => ({}), {
  saveProject
})(ProjectEdit)
