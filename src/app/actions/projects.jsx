import request from 'superagent'
import { push } from 'react-router-redux'
import * as types from '../types'
import Color from 'color'

// Actions
const fetchProjectsSuccess = (projects) => {
  return {
    type: types.FETCH_PROJECTS_SUCCESS,
    projects
  }
}

const fetchProjectsError = () => {
  return { type: types.FETCH_PROJECTS_ERROR }
}

const fetchProjectSuccess = (project) => {
  return {
    type: types.FETCH_PROJECT_SUCCESS,
    project
  }
}

const fetchProjectError = () => {
  return { type: types.FETCH_PROJECT_ERROR }
}

const saveProjectSuccess = (project) => {
  return {
    type: types.SAVE_PROJECT_SUCCESS,
    project
  }
}

const saveProjectError = () => {
  return { type: types.SAVE_PROJECT_ERROR }
}

const deleteProjectSuccess = (id) => {
  return {
    type: types.DELETE_PROJECT_SUCCESS,
    id
  }
}

const deleteProjectError = () => {
  return { type: types.DELETE_PROJECT_ERROR }
}


// Action Creators
export const fetchProjects = () => {
  return (dispatch, getState) => {
    const { user: { token } } = getState()

    return request
      .get(`/api/projects`)
      .set('Authorization', `Bearer ${token}`)
      .send()
      .end((err, res) => {
        if (res.status === 200) {
          dispatch(fetchProjectsSuccess(res.body))
        } else {
          dispatch(fetchProjectsError())
        }
      })
  }
}

export const fetchProject = (id) => {
  return (dispatch, getState) => {
    const { user: { token } } = getState()

    return request
      .get(`/api/projects/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .send()
      .end((err, res) => {
        if (res.status === 200) {
          dispatch(fetchProjectSuccess(res.body))
        } else {
          dispatch(fetchProjectError())
        }
      })
  }
}

export const saveProject = (project) => {
  return (dispatch, getState) => {
    const { user: { token } } = getState()
    const saveRequest = !project.id ? request.post(`/api/projects`) : request.put(`/api/projects/${project.id}`)

    return saveRequest
      .set('Authorization', `Bearer ${token}`)
      .send(project)
      .end((err, res) => {
        if (res.status === 200) {
          dispatch(saveProjectSuccess(res.body))
          dispatch(push('/projects'))
        } else {
          dispatch(saveProjectError())
        }
      })
  }
}

export const deleteProject = (id) => {
  return (dispatch, getState) => {
    const { user: { token } } = getState()

    return request
      .delete(`/api/projects/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .send()
      .end((err, res) => {
        if (res.status === 200) {
          dispatch(deleteProjectSuccess(id))
        } else {
          dispatch(deleteProjectError())
        }
      })
  }
}

export const canselProject = () => {
  return dispatch => {
    dispatch(push('/projects'))
  }
}
