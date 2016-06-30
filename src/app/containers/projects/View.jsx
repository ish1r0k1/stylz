import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchProject } from '../../actions/projects'
import ColorList from '../../components/ColorList'
import FontSizesList from '../../components/FontSizeList'
import FontFamilyList from '../../components/FontFamilyList'

export class ProjectView extends Component {
  static get propTypes() {
    return {
      params: PropTypes.object
    }
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchProject, params: { id } } = this.props

    fetchProject(id)
  }

  render() {
    const { project: { items }, params: { id } } = this.props
    const project = items[id]

    return (
      project ?
        <div>
          <div className="page__heading">
            <h2 className="page__title">{project.name}</h2>
          </div>
          <ColorList colors={project.colors} />
          <FontSizesList sizes={project.fontSizes} />
          <FontFamilyList families={project.fontFamilies} />
        </div>
      : null)
  }
}

const mapStateToProps = ({ project }) => {
  return {
    project
  }
}

export default connect(
  mapStateToProps,
  { fetchProject }
)(ProjectView)
