import React from 'react'
import { connect } from 'react-redux'
import Actions from '../../Actions'

class MyBirdsListEl extends React.Component {
  render() {
    let googleImgQueryString = this.props.comName.replace(' ','+')
    let link = "https://www.google.com/search?tbm=isch&q=" + googleImgQueryString
    return (
      <div className="listElRow">
        <a href={link} target="_blank" >{this.props.comName}</a>
        <button
          type="button"
          onClick={() => this.props.removeBird(this.props)}
        >remove</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeBird: bird => {
    dispatch(Actions.removeBird(bird))
  }
})

MyBirdsListEl = connect(
  null,
  mapDispatchToProps
)(MyBirdsListEl)

export default MyBirdsListEl
