import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HelloWorld from './components/HelloWorld'

export default (store) => {
  return (
    <Route path="/">
      <IndexRoute component={HelloWorld} />
    </Route>)
}
