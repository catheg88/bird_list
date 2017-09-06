import React from 'react'

class BirdList extends React.Component {
  render() {
    var filterText = this.props.filterText.toLowerCase()
    var birdEls = []
    var birdCounter = 0
    this.props.birds.forEach (function(bird) {
      if (filterText === '') {
        birdEls.push(<BirdListEl comName={bird.comName} />)
        birdCounter++
      } else {
        for (var index = 0; index < (bird.comName.length - filterText.length + 1 ); index++) {
          if (bird.comName.slice(index, index + filterText.length).toLowerCase() === filterText) {
            birdEls.push(<BirdListEl comName={bird.comName} />)
            birdCounter++
            break
           }
        }
      }

    })
    return (
      <div>
        <div>{birdCounter} results</div>
        <div>{birdEls}</div>
      </div>
    )
  }
}

class BirdListEl extends React.Component {
  render() {
    var searchComName = this.props.comName.replace(' ','+')
    // console.log(searchComName)
    var link = "https://www.google.com/search?tbm=isch&q=" + searchComName
    return (
      <div>
        <a href={link} target="blank">{this.props.comName}</a>
      </div>
    )
  }
}

export default BirdList
