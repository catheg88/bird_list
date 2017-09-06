import React from 'react'
import { connect } from 'react-redux'
import BirdList from './BirdList'

const mapStateToProps = state => ({
  birds: state.birds,
  filterText: state.filterText
})

const BirdListContainer = connect(
  mapStateToProps,
  null
)(BirdList)

export default BirdListContainer
