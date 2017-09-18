import React from 'react'

class MyBirdsListEl extends React.Component {
  render() {
    return (
      <div className="listElRow">
        <span>{this.props.comName}</span>
        <button type="button" onClick={() => this.props.removeBird.bind(this)(this.props)}>remove</button>
      </div>
    )
  }
}

export default MyBirdsListEl
