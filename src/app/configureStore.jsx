import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

export default function configureStore(initialState, history) {
  const middlewares = [thunk, routerMiddleware(history)]

  middlewares.push(createLogger())

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ))

  return store
}
