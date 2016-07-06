import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'

export default class ProjectConfigure extends Component {
  static get propTypes() {}

  constructor(props) {
    super(props)

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSaveHandler = this.onSaveHandler.bind(this)
    this.onCanselHandler = this.onCanselHandler.bind(this)
  }

  onChangeHandler(evt) {
    const { onUpdate } = this.props
    const node = ReactDOM.findDOMNode(this.refs.publish)
    node.checked = !node.checked

    onUpdate('publish', node.checked)
  }

  onSaveHandler(evt) {
    evt.preventDefault()

    const { onSave } = this.props
    onSave()
  }

  onCanselHandler(evt) {
    evt.preventDefault()

    const { onCansel } = this.props
    onCansel()
  }

  render() {
    const { publish } = this.props
    const toggleClassName = 'toggle pull-right ' + (publish ? 'is-on' : 'is-off')

    return (
      <Section title="Configuration">
        <form>
          <div className="row">
            <div className="col-md-4 input-field input-toggle">
              <div className="label">Publish</div>
              <div className={toggleClassName}>
                {publish ?
                  <input type="checkbox" ref="publish" defaultChecked/>
                  : <input type="checkbox" ref="publish"/>
                }
                <div className="toggle-field" onClick={this.onChangeHandler}>
                  <label className="toggle-on">Yes</label>
                  <label className="toggle-off">No</label>
                  <span className="toggle-handle"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group row">
            <div className="input-field input-field--compact col-md-4 pull-right">
              <div className="row">
                <div className="col-md-6">
                  <button className="cancel" onClick={this.onCanselHandler}>Cancel</button>
                </div>
                <div className="col-md-6">
                  <button onClick={this.onSaveHandler}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Section>)
  }
}
