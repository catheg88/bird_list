import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './Store'
import BirdListContainer from './components/BirdListContainer'
import MapContainer from './components/map/MapContainer.jsx'
import MyBirdsListContainer from './components/MyBirdsListContainer'

import Actions from './Actions'

import birdsShort from '../data/birdsShort'

import PouchAppDb from '../data/PouchAppDb'

import ConnectedModal from './components/modal/ConnectedModal'
import Spinner from './components/modal/Spinner'

class App extends React.Component {
  render() {
    return (
      <Provider store={Store} >
        <div>
          <ConnectedModal >
            <Spinner />
          </ConnectedModal >
          <MapContainer />
          <div id="columnFlexContainer">
            <BirdListContainer />
            <MyBirdsListContainer />
          </div>
        </div>
      </Provider >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

var birds
var xmlhttp = new XMLHttpRequest()
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    birds = JSON.parse(this.responseText)
    var birdNameArray = []
    for (var key in birds) {
      var birdObject = new Object()
      birdObject.comName = birds[key].comName
      birdObject.sciName = birds[key].sciName
      birdNameArray.push(birdObject)
    }
    Store.dispatch(Actions.birdsLoaded(birds))
  }
}
// xmlhttp.open("GET", "https://ebird.org/ws2.0/ref/taxonomy/ebird?cat=species&fmt=json", true)
// xmlhttp.send()

Store.dispatch(Actions.birdsLoaded(birdsShort))

PouchAppDb.find({
  selector: { dataType: 'bird'}
}).then(function(docs){
  console.log('find birds')
  var _myBirds = []
  docs.docs.forEach(function(bird){
    _myBirds.push(bird)
  })
  Store.dispatch(Actions.setMyBirds(_myBirds))
})

PouchAppDb.find({
  selector: { dataType: 'pin' }
}).then(function(docs){
  console.log('find pins')
  console.log(docs)
  var _pins = []
  docs.docs.forEach(function(pin){
    _pins.push(pin)
  })
  Store.dispatch(Actions.setPins(_pins))
})
