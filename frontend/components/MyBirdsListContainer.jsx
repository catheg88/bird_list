import MyBirdsList from './MyBirdsList'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  myBirds: state.myBirds
})

const MyBirdsListContainer = connect(
  mapStateToProps,
  null
)(MyBirdsList)

export default MyBirdsListContainer
