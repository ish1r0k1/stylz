import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { saveProject } from '../../actions/projects'
import ColorList from '../../components/ColorList'
import FontSizesList from '../../components/FontSizeList'
import FontFamilyList from '../../components/FontFamilyList'

export class ProjectEdit extends Component {
  static get propTypes() {
    return {
      params: PropTypes.object,
      saveProject: PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this)
    this.onUpdate = this.onUpdate.bind(this)

    const { project: { items }, params: { id } } = this.props
    let project

    if (id) {
      project = items[id]
    } else {
      project = {
        name: 'untitled',
        colors: [],
        fontSizes: [],
        fontFamilies: []
      }
    }

    this.state = {
      project
    }
  }

  onUpdate(field, values) {
    this.setState({
      project: {
        ...this.state.project,
        [field]: values
      }
    })
  }

  onSave(project) {
    const { saveProject } = this.props
    saveProject(project)
  }

  render() {
    const { project } = this.state

    return (
      <div>
        <div className="page__heading">
          <h2 className="page__title">{project.name}</h2>
        </div>
        <ColorList colors={project.colors} onUpdate={this.onUpdate} />
        <FontSizesList sizes={project.fontSizes} />
        <FontFamilyList families={project.fontFamilies} />
      </div>)
  }
}

const mapStateToProps = ({ project }) => {
  return {
    project
  }
}

export default connect(
  mapStateToProps,
  { saveProject }
)(ProjectEdit)
