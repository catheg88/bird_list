import React from 'react'
import SearchBarContainer from './SearchBarContainer'
import BirdListElContainer from './BirdListElContainer'

class BirdList extends React.Component {
  render() {
    var filterText = this.props.filterText.toLowerCase()
    var birdEls = []
    var birdCounter = 0
    this.props.birds.forEach (function(bird) {
      if (filterText === '') {
        birdEls.push(<BirdListElContainer {...bird} key={bird.comName} />)
        birdCounter++
      } else {
        for (var index = 0; index < (bird.comName.length - filterText.length + 1 ); index++) {
          if (bird.comName.slice(index, index + filterText.length).toLowerCase() === filterText) {
            birdEls.push(<BirdListElContainer {...bird} key={bird.comName}/>)
            birdCounter++
            break
           }
        }
      }
    })

    return (
      <div id="birdList">
        <h2>All Birds</h2>
        <SearchBarContainer />
        <div>{birdCounter} results</div>
        <div>{birdEls}</div>
      </div>
    )
  }
}

export default BirdList
