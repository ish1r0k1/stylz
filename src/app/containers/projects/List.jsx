import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchProjects } from '../../actions/projects'

export class ProjectList extends Component {
  static get propTypes() {
    return {}
  }

  constructor(props) {
    super(props)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
  }

  componentDidMount() {
    const { fetchProjects } = this.props
    fetchProjects()
  }

  onDeleteHandler(projectId) {
    console.log(`project delete: ${projectId}`)
  }

  render() {
    const { project: { list } } = this.props

    return (
      <div>
        <div className="page__heading">
          <h2 className="page__title">Project List</h2>
        </div>
        <ul className="projects">
          {list.map(item => (
            <li key={item.id} className="projects__item">
              <Link to={`/projects/view/${item.id}`}>{item.name}</Link>
              <div className="projects__item-ctrls">
                <Link to={`/projects/edit/${item.id}`}>Edit</Link>
                <a onClick={this.onDeleteHandler}>Delete</a>
              </div>
            </li>
          ))}
          <li className="projects__item">
              <Link to={`/projects/new`}>New Project...</Link>
          </li>
        </ul>
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
  { fetchProjects }
)(ProjectList)
