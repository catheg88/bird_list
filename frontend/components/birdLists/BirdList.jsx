import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../SearchBar'
import BirdListEl from './BirdListEl'

class BirdList extends React.Component {
  render() {
    var filterText = this.props.filterText.toLowerCase()
    var birdEls = []
    this.props.birds.forEach (function(bird) {
      if (filterText === '***') {
        birdEls.push(<BirdListEl {...bird} key={bird.comName} />)
      } else if (!filterText) {
        birdEls = []
      } else {
        for (var index = 0; index < (bird.comName.length - filterText.length + 1 ); index++) {
          if (bird.comName.slice(index, index + filterText.length).toLowerCase() === filterText) {
            birdEls.push(<BirdListEl {...bird} key={bird.comName}/>)
           }
        }
      }
    })

    return (
      <div id="birdList">
        <h2>All Birds</h2>
        <SearchBar />
        <div>{filterText ? birdEls.length + ' results' : null}</div>
        <div>{birdEls}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  birds: state.birds,
  filterText: state.filterText
})

BirdList = connect(
  mapStateToProps,
  null
)(BirdList)

export default BirdList
