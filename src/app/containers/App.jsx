import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router } from 'react-router'
import CoreLayout from '../components/CoreLayout'
import { fetchState } from '../actions/users'

export class App extends Component {
  static get propTypes() {
    return {
      user: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
      routes: PropTypes.object.isRequired,
      store: PropTypes.object.isRequired
    }
  }

  componentWillMount() {
    const { fetchState } = this.props

    fetchState()
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { user, store, history, routes } = this.props

    return !user.isWaiting ? (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    ) : <div>Loading</div>
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  { fetchState }
)(App)
