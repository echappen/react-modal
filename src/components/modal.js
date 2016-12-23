import React, { Component, PropTypes } from 'react';

export default class Modal extends Component {
  // I think it's good practice to declare PropTypes.
  // It's a small thing, but it makes life easier
  // for other developers using your component.
  static propTypes = {
    trigger: PropTypes.object.isRequired,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    // I'm not using customClass in my example, but I've added it
    // in case any modal styling needs to be overridden.
    customClass: PropTypes.string
  }
  // Use the constructor function to declare initial state
  constructor() {
    super()
    this.state = { isOpen: false }
  }

  open() {
    this.setState({ isOpen: true })
    this.props.onOpen()
  }

  close() {
    this.setState({ isOpen: false })
    this.props.onClose()
  }

  renderModal() {
    return (
      <div className="modal-fade-screen">
        <div className="modal-inner">
          <div
            className="modal-close"
            onClick={this.close.bind(this)}></div>
          <div className='modal-content'>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={`modal ${this.props.customClass || ''}`}>
        <span onClick={this.open.bind(this)}>
          { this.props.trigger }
        </span>
        { this.state.isOpen && this.renderModal() }
      </div>
    )
  }
}
