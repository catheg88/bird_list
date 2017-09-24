import React from 'react'

class MapMarker extends React.Component {

  render(){
    return <div className='mapMarker' onClick={() => this.props.handleClick.bind(this)(this.props)}>*</div>
  }
}

export default MapMarker
