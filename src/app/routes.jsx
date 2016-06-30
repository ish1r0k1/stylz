import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HelloWorld from './components/HelloWorld'
import LoginOrRegist from './containers/LoginOrRegist'
import CoreLayout from './containers/CoreLayout'
import * as Projects from './containers/projects'

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
        pathname: '/projects'
      })
    }
    callback()
  }

  return (
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={LoginOrRegist} onEnter={redirectAuth} />

      <Route path="/projects" component={Projects.List} onEnter={requireAuth} />
      <Route path="/projects/new" component={Projects.Edit} onEnter={requireAuth} />
      <Route path="/projects/view/:id" component={Projects.View} />
      <Route path="/projects/edit/:id" component={Projects.Edit} onEnter={requireAuth} />
    </Route>)
}
