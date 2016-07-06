import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_ERROR,
  SAVE_PROJECT_SUCCESS,
  SAVE_PROJECT_ERROR,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_ERROR
} from '../types'

export default function project(state = {
  list: [],
  items: {}
}, action = {}) {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      const list = action.projects.map(item => {
        return {
          id: item.id,
          name: item.name
        }
      })
      const items = {}

      action.projects.forEach(project => { items[project.id] = project })

      return { list, items }
    case FETCH_PROJECT_SUCCESS:
    case SAVE_PROJECT_SUCCESS:
      return {
        items: {
          ...state.items,
          [action.project.id]: action.project
        },
        list: [action.project.id, ...state.list]
      }
    case DELETE_PROJECT_SUCCESS:
      let index

      state.list.forEach((project, key) => {
        if (project.id === action.id) index = key
      })
      delete state.items[action.id]
      state.list.splice(index, 1)

      return {
        items: {...state.items},
        list: [...state.list]
      }
    default:
      return state
  }
}
