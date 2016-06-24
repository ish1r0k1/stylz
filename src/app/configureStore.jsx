import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

export default function configureStore(initialState, history) {
  const middlewares = []

  middlewares.push(createLogger())

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ))

  return store
}
