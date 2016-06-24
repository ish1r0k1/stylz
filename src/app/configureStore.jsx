import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

export default function configureStore(initialState, history) {
  const middlewares = [routerMiddleware]

  middlewares.push(createLogger())

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ))

  return store
}
