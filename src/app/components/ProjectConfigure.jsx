import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'

export default class ProjectConfigure extends Component {
  static get propTypes() {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Section title="Configuration">
        <form className="edit">
          <div className="input-field input-toggle">
            <div className="label">Publish</div>
            <div className="toggle">
              <input type="checkbox" name="" id="public"/>
              <div className="toggle-field">
                <label className="toggle-on" htmlFor="">Yes</label>
                <label className="toggle-off" htmlFor="">No</label>
                <span className="toggle-handle"></span>
              </div>
            </div>
          </div>
        </form>
      </Section>
      )
  }
}
