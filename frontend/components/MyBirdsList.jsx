import React from 'react'
import MyBirdsListElContainer from './MyBirdsListElContainer'

class MyBirdsList extends React.Component {
  render() {
    console.log(this.props)
    var myBirdsEls = []
    this.props.myBirds.forEach (function(bird) {
      myBirdsEls.push(<MyBirdsListElContainer {...bird} key={bird.comName} />)
    })
    return (
      <div>{myBirdsEls}</div>
    )
  }
}

export default MyBirdsList
