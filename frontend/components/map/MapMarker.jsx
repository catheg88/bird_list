import React from 'react'
import { connect } from 'react-redux'

class MapMarker extends React.Component {
  render(){
    let isActive = this.props.isActive
    return (
      <div
        className={isActive ? 'activeMapMarker' : 'mapMarker'}
        onClick={() => this.props.setActivePin(this.props.id)}
      >{isActive ? '@' : '*'}</div>
    )
  }
}

export default MapMarker
