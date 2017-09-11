import React from 'react'

class BirdListEl extends React.Component {
  render() {
    var searchComName = this.props.comName.replace(' ','+')
    // console.log(searchComName)
    var link = "https://www.google.com/search?tbm=isch&q=" + searchComName
    return (
      <div>
        <a href={link} target="blank">{this.props.comName}</a>
        <button type="button" onClick={() => this.props.addBird.bind(this)(this.props)}>add</button>
      </div>
    )
  }
}

export default BirdListEl
