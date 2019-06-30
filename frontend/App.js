import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './Store'
import Actions from './Actions'

import BirdListContainer from './components/BirdListContainer'
import MapContainer from './components/map/MapContainer.jsx'
import MyBirdsListContainer from './components/MyBirdsListContainer'
import ConnectedModal from './components/modal/ConnectedModal'
import Spinner from './components/modal/Spinner'


import PouchAppDb from '../data/PouchAppDb'
import birdsShort from '../data/birdsShort'


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

// lazily, we'll just ask the store to dispatch some initial setup requests itself
fetch('https://ebird.org/ws2.0/ref/taxonomy/ebird?cat=species&fmt=json')
  .then( res => res.json() )
  .then( json => Store.dispatch(Actions.birdsLoaded(json)) )

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
