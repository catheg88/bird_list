import GOOGLE_API_KEY from '../../apiKey'
import React from 'react'
import GoogleMapReact from 'google-map-react'

class MapContainer extends React.Component {
  render(){
    return(
      <div id="mapContainerFlexWrapper">
        <div id="mapContainer">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: GOOGLE_API_KEY
            }}
            center={[37.760155, -122.4739743]}
            zoom={12}
            >
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default MapContainer
