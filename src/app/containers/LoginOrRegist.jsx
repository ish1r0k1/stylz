import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { login, signUp } from '../actions/users'

export class LoginOrRegist extends Component {
  static get propTypes() {
    return {
      user: PropTypes.object,
      login: PropTypes.func.isRequired,
      signUp: PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super(props)
    // this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  // handleOnSubmit(evt) {
  //   evt.preventDefault()

  //   const { login } = this.props

  //   const username = this.refs.username.value
  //   const password = this.refs.password.value

  //   login({username, password})
  // }

  render() {
    return (
      <div className="login-form">
        <h1 className="login__header">Stylz</h1>
        <form onSubmit={evt => {
          evt.preventDefault()

          const { login } = this.props

          const username = ReactDOM.findDOMNode(this.refs.username).value
          const password = ReactDOM.findDOMNode(this.refs.password).value

          login({ username, password })
        }}>
          <div className="input-group">
            <div className="input-field">
              <input type="text" placeholder="Username" ref="username"/>
            </div>
            <div className="input-field">
              <input type="password" placeholder="Password" ref="password"/>
            </div>
            <div className="input-field">
              <input type="submit" value=""/>
            </div>
          </div>
        </form>
        <form onSubmit={evt => {
          evt.preventDefault()

          const { signUp } = this.props

          const email = ReactDOM.findDOMNode(this.refs.rEmail).value
          const username = ReactDOM.findDOMNode(this.refs.rUsername).value
          const password = ReactDOM.findDOMNode(this.refs.rPassword).value

          signUp({ email, username, password })
        }}>
          <div className="input-group">
            <div className="input-field">
              <input type="text" placeholder="Email" ref="rEmail"/>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Username" ref="rUsername"/>
            </div>
            <div className="input-field">
              <input type="password" placeholder="Password" ref="rPassword"/>
            </div>
            <div className="input-field">
              <input type="submit" value=""/>
            </div>
          </div>
        </form>
      </div>)
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  { login, signUp }
)(LoginOrRegist)
