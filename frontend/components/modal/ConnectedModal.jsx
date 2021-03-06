import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'

Modal.defaultStyles.overlay = {
  position: "fixed",
  top: "0px",
  left: "0px",
  right: "0px",
  bottom: "0px",
  background: "rgba(255, 255, 255, 0.25)"
}

Modal.defaultStyles.content = {
  WebkitOverflowScrolling:"touch",
  background: "rgba(255, 255, 255, .25)",
  position:"absolute",
  left:"50%",
  top:"50%",
  transform: "translate(-50%, -50%)",
  outline:"none",
  overflow:"auto",
}

const mapStateToProps = state => ({
  isOpen: state.modalOpen,
  contentLabel: "Modal"
})

const ConnectedModal = connect(
  mapStateToProps,
  null
)(Modal)

export default ConnectedModal
