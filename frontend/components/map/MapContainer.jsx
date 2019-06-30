import React from 'react'
import { connect } from 'react-redux'

import GoogleMapReact from 'google-map-react'
import GOOGLE_API_KEY from '../../../apiKey'

import MapMarker from './MapMarker'
import Actions from '../../Actions'

class MapContainer extends React.Component {

  render(){
    var pinComponents = []
    this.props.pins.forEach( pin => {
        pinComponents.push(
          <MapMarker
            lat={pin.lat}
            lng={pin.lng}
            id={pin._id}
            isActive={this.props.activePin === pin._id ? true : false}
            setActivePin={this.props.setActivePin}
            key={pin._id}
          />
        )
      }
    )

    return(
      <div id="mapContainerFlexWrapper">
        <div id="mapContainer">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: GOOGLE_API_KEY
            }}
            center={[37.760155, -122.4739743]}
            zoom={12}
            onClick={ coords => this.props.addPin(coords) }
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
  addPin: coords => {
    // drop x and y axis data from coords, since the pin will be written to db
    var _coords = {
      lat: coords.lat,
      lng: coords.lng
    }
    dispatch(Actions.addPin(_coords))
  },
  setActivePin: id => {
    dispatch(Actions.setActivePin(id))
  }
})

MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer)

export default MapContainer
