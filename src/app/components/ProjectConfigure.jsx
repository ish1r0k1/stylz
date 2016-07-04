import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'

export default class ProjectConfigure extends Component {
  static get propTypes() {}

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(evt) {
    const { onUpdate } = this.props
    const node = ReactDOM.findDOMNode(this.refs.publish)
    node.checked = !node.checked

    onUpdate('publish', node.checked)
  }

  render() {
    const { publish } = this.props
    const toggleClassName = 'toggle ' + (publish ? 'is-on' : 'is-off')

    return (
      <Section title="Configuration">
        <form className="edit">
          <div className="input-field input-toggle">
            <div className="label">Publish</div>
            <div className={toggleClassName}>
              {publish ?
                <input type="checkbox" ref="publish" defaultChecked/>
                : <input type="checkbox" ref="publish"/>
              }
              <div className="toggle-field" onClick={this.onChange}>
                <label className="toggle-on">Yes</label>
                <label className="toggle-off">No</label>
                <span className="toggle-handle"></span>
              </div>
            </div>
          </div>
        </form>
      </Section>
      )
  }
}
