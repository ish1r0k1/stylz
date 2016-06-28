import * as types from '../types'

export const beginConnectApi = () => {
  return {
    type: types.BEGIN_CONNECTION
  }
}

export const endConnectApi = () => {
  return {
    type: types.END_CONNECTION
  }
}
