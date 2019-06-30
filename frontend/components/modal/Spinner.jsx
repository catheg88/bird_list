import React from 'react'
import { connect } from 'react-redux'

class Spinner extends React.Component {
  render() {
    return (
      <div id="spinner">
        <img src="../assets/spinner.gif" />
      </div>
    )
  }
}

export default Spinner
