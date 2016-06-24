import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'

const store = configureStore({})

render(
  <div>Hello, World</div>, document.getElementById('app'))
