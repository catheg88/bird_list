import React from 'react'
import MyBirdsListEl from './MyBirdsListEl'

class MyBirds extends React.Component {
  render() {
    var myBirdsEls = []
    this.props.myBirds.forEach (function(bird) {
      myBirdsEls.push(<MyBirdsListEl comName={bird.comName} key={bird.comName} />)
    })
    return (
      <div>{myBirdsEls}</div>
    )
  }
}

export default MyBirds
