import React from 'react'
import MyBirdsListElContainer from './MyBirdsListElContainer'

class MyBirdsList extends React.Component {
  render() {
    var myBirdsEls = []
    this.props.myBirds.forEach (function(bird) {
      myBirdsEls.push(<MyBirdsListElContainer {...bird} key={bird.comName} />)
    })
    return (
      <div>
        <h2>MyBirds</h2>
        <div>{myBirdsEls}</div>
      </div>
    )
  }
}

export default MyBirdsList
