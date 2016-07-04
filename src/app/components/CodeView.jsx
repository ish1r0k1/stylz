import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import hljs from 'highlight.js'

export default class CodeView extends Component {
  componentDidMount() {
    this.applyHighlight()
  }

  componentDidUpdate() {
    this.applyHighlight()
  }

  applyHighlight() {
    let { children } = this.props
    let className = 'scss'

    if (children.length < 1) {
      children.push('// Here in example code')
    }

    const childs = children.map((child, i) => {
      const $pre = document.createElement('pre')
      $pre.className = className
      $pre.textContent = child
      hljs.highlightBlock($pre)

      if( i === 0 ) className = $pre.className

      return $pre.innerHTML
    })

    const createMarkup = () => {
      let html = ''

      if (childs.length) {
        for (let i = 0; i < childs.length; i++) {
          html += childs[i]
        }
      }

      return { __html: html }
    }

    let codeDOM = React.createElement('code',
      {
        className,
        dangerouslySetInnerHTML: createMarkup()
      }
    )

    const domNode = ReactDOM.findDOMNode(this)

    ReactDOM.render(
      codeDOM,
      domNode
    )
  }

  render() {
    return (
      <pre className="hljs" />)
  }
}
