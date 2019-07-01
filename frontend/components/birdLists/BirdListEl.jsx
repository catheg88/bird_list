import React from 'react'
import { connect } from 'react-redux'
import Actions from '../../Actions'

class BirdListEl extends React.Component {

  render() {
    let googleImgQueryString = this.props.comName.replace(' ','+')
    let link = "https://www.google.com/search?tbm=isch&q=" + googleImgQueryString
    return (
      <div className="listElRow">
        <a href={link} target="blank">{this.props.comName}</a>
        <button
          type="button"
          className="listElButton"
          onClick={() => this.props.addBird(this.props)}
        >Add to MyBirds</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBird: bird => {
    dispatch(Actions.addBird(bird))
  }
})

BirdListEl = connect(
  null,
  mapDispatchToProps
)(BirdListEl)

export default BirdListEl
