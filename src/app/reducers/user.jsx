import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../types'

export default function user(state = {
  meta: { username: '' },
  token: '',
  isWaiting: true,
  authenticated: false
}, action = {}) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isWaiting: true,
        message: ''
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: true,
        meta: { username: action.user.username },
        token: action.user.jsonWebToken
      })
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: false,
        message: action.message
      })
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
        token: action.user.jsonWebToken
      })
    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        message: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false
      })
    case LOGOUT_ERROR:
      return Object.assign({}, state, {
        authenticated: true
      })
    default:
      return state
  }
}
