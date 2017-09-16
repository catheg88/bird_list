import React from 'react'
import MyBirdsListEl from './MyBirdsListEl'
import { connect } from 'react-redux'
import Actions from '../Actions'

const mapDispatchToProps = (dispatch) => ({
  removeBird: bird => {
    dispatch(Actions.removeBird(bird))
  }
})

const MyBirdsListElContainer = connect(
  null,
  mapDispatchToProps
)(MyBirdsListEl)

export default MyBirdsListElContainer
