import React from 'react'

class BirdListEl extends React.Component {
  render() {
    var searchComName = this.props.comName.replace(' ','+')
    var link = "https://www.google.com/search?tbm=isch&q=" + searchComName
    return (
      <div className="listElRow">
        <a href={link} target="blank">{this.props.comName}</a>
        <button type="button" className="listElButton" onClick={() => this.props.addBird.bind(this)(this.props)}>Add to MyBirds</button>
      </div>
    )
  }
}

export default BirdListEl
