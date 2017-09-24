import { connect } from 'react-redux'
import MapMarker from './MapMarker'
import Actions from '../Actions'

const mapDispatchToProps = dispatch => ({
  handleClick: pin => {
    dispatch(Actions.setActivePin(pin))
  }
})

const MapMarkerContainer = connect(
  null,
  mapDispatchToProps
)(MapMarker)

export default MapMarkerContainer
