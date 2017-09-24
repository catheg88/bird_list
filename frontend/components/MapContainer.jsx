import GOOGLE_API_KEY from '../../apiKey'
import React from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarkerContainer from './MapMarkerContainer'
import ActiveMapMarker from './ActiveMapMarker'
import { connect } from 'react-redux'
import Actions from '../Actions'

class MapContainer extends React.Component {

  render(){
    var pinComponents = []
    this.props.pins.forEach( pin => {
      if (pin._id === this.props.activePin) {
        pinComponents.push(<ActiveMapMarker lat={pin.lat} lng={pin.lng} id={pin._id}/>)
      } else {
      pinComponents.push(<MapMarkerContainer lat={pin.lat} lng={pin.lng} id={pin._id}/>)
      }
    })

    return(
      <div id="mapContainerFlexWrapper">
        <div id="mapContainer">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: GOOGLE_API_KEY
            }}
            center={[37.760155, -122.4739743]}
            zoom={12}
            onClick={ (coords) => this.props.handleClick(coords) }
            >
            {pinComponents}
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pins: state.pins,
  activePin: state.activePin
})

const mapDispatchToProps = dispatch => ({
  handleClick: coords => {
    var _coords = {
      lat: coords.lat,
      lng: coords.lng
    }
    dispatch(Actions.addPin(_coords))
  }
})

MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer)

export default MapContainer
