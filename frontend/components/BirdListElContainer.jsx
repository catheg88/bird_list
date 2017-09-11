import React from 'react'
import { connect } from 'react-redux'
import BirdListEl from './BirdListEl'
import Actions from '../Actions'

const mapDispatchToProps = (dispatch) => ({
  addBird: bird => {
    dispatch(Actions.addBird(bird))
  }
})


const BirdListElContainer = connect(
  null,
  mapDispatchToProps
)(BirdListEl)

export default BirdListElContainer
