import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchProject, saveProject, canselProject } from '../../actions/projects'
import ColorList from '../../components/ColorList'
import FontSizesList from '../../components/FontSizeList'
import FontFamilyList from '../../components/FontFamilyList'
import ProjectConfigure from '../../components/ProjectConfigure'

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
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onCansel = this.onCansel.bind(this)

    const { project: { items }, params: { id } } = this.props
    let project

    if (id && !!items[id]) {
      project = items[id]
    } else {
      project = {
        name: 'untitled',
        colors: [],
        fontSizes: [],
        fontFamilies: [],
        publish: true
      }
    }

    this.state = {
      project
    }
  }

  componentWillReceiveProps(nextProps) {
    const { project: { items }, params: { id } } = nextProps

    this.setState({
      project: items[id]
    })
  }

  componentDidMount() {
    const { fetchProject, params: { id } } = this.props

    if (!id) return

    fetchProject(id)
  }

  onUpdate(field, values) {
    this.setState({
      project: {
        ...this.state.project,
        [field]: values
      }
    })
  }

  onChangeTitle(evt) {
    const { project } = this.state
    const name = evt.target.value

    this.setState({
      project: {
        ...project,
        name
      }
    })
  }

  onCansel() {
    const { canselProject } = this.props
    canselProject()
  }

  onSave() {
    const { project } = this.state
    const { saveProject } = this.props

    saveProject(project)
  }

  render() {
    const { project } = this.state

    return (
      <div>
        <div className="page__heading">
          <h2 className="page__title"><input type="text" placeholder="untitled" defaultValue={project.name} onChange={this.onChangeTitle}/></h2>
        </div>
        <ColorList colors={project.colors} onUpdate={this.onUpdate} editable="true"/>
        <FontSizesList sizes={project.fontSizes} onUpdate={this.onUpdate} editable="true"/>
        <FontFamilyList families={project.fontFamilies} onUpdate={this.onUpdate} editable="true"/>
        <ProjectConfigure publish={project.publish} onUpdate={this.onUpdate} onSave={this.onSave} onCansel={this.onCansel} />
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
  { fetchProject, saveProject, canselProject }
)(ProjectEdit)
