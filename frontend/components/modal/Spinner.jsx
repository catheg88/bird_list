import React from 'react'
import { connect } from 'react-redux'

class Spinner extends React.Component {
  render() {
    // <img src="/Users/atheg/Desktop/programming/redux_workshop/bird/assets/spinner.gif" />
    return (
      <div id="spinner">
        <img src="../assets/spinner.gif" />
      </div>
    )
  }
}

export default Spinner
