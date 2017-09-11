import MyBirds from './MyBirds'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  myBirds: state.myBirds
})

const MyBirdsContainer = connect(
  mapStateToProps,
  null
)(MyBirds)

export default MyBirdsContainer
