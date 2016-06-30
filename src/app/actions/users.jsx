import request from 'superagent'
import { push } from 'react-router-redux'
import * as types from '../types'

// Actions
const beginLogin = () => {
  return { type: types.LOGIN }
}

const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    user
  }
}

const loginError = (message) => {
  return {
    type: types.LOGIN_ERROR,
    message
  }
}

const signUpSuccess = (user) => {
  return {
    type: types.SIGNUP_SUCCESS,
    user
  }
}

const signUpError = (message) => {
  return {
    type: types.SIGNUP_ERROR,
    message
  }
}

const logoutSuccess = () => {
  return { type: types.LOGOUT_SUCCESS }
}

const logoutError = () => {
  return { type: types.LOGOUT_ERROR }
}


// Action Creators
export const login = (data) => {
  return dispatch => {
    dispatch(beginLogin())

    return request
      .post('/api/login')
      .send(data)
      .end((err, res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.body.jsonWebToken)

          dispatch(loginSuccess(res.body))
          dispatch(push('/projects'))
        } else {
          dispatch(loginError('Oops! Something went wrong!'))
        }
      })
  }
}

export const fetchProfile = () => {
  const token = localStorage.getItem('token')

  return dispatch => {
    dispatch(beginLogin())

    if (token) {
      return request
        .get('/api/login')
        .set('Authorization', `Bearer ${token}`)
        .send()
        .end((err, res) => {
          if (res.status === 200) {
            const { username } = res.body;
            const jsonWebToken = token;

            dispatch(loginSuccess({username, jsonWebToken}))
          } else {
            dispatch(loginError('Oops! Something went wrong!'))
          }
        })
    } else {
      dispatch(loginError('Oops! Something went wrong!'))
      dispatch(push('/'))
    }
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('token')

    dispatch(logoutSuccess())
    dispatch(push('/'))
  }
}

export const signUp = (data) => {
  return dispatch => {
    return request
      .post('/api/signup')
      .send(data)
      .end((err, res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.body.jsonWebToken)

          dispatch(signUpSuccess(res.body))
          dispatch(push('/projects'))
        } else {
          dispatch(signUpError('Oops! Something went wrong!'))
        }
      })
  }
}
