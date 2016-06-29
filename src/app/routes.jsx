import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HelloWorld from './components/HelloWorld'
import LoginOrRegist from './containers/LoginOrRegist'
import CoreLayout from './containers/CoreLayout'
import NewProject from './containers/NewProject'

export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState()
    if (!authenticated) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
    }
    callback()
  }

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState()
    if (authenticated) {
      replace({
        pathname: '/dashboard'
      })
    }
    callback()
  }

  return (
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={LoginOrRegist} onEnter={redirectAuth} />
      <Route path="/dashboard" component={HelloWorld} onEnter={requireAuth} />
      <Route path="/new-project" component={NewProject} onEnter={requireAuth} />
    </Route>)
}
