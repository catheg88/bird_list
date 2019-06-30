import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './Store'
import Actions from './Actions'

import BirdList from './components/BirdList'
import MapContainer from './components/map/MapContainer.jsx'
import MyBirdsListContainer from './components/MyBirdsListContainer'
import ConnectedModal from './components/modal/ConnectedModal'
import Spinner from './components/modal/Spinner'


import PouchAppDb from '../data/PouchAppDb'

// local json bird taxonomy
import birdsShort from '../data/birdsShort'
// import birdsFull from '../data/birdsFull'


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
            <BirdList />
            <MyBirdsListContainer />
          </div>
        </div>
      </Provider >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// lazily, we'll just ask the store to dispatch some initial setup requests itself

// api request to ebird for bird taxonony
// fetch('https://ebird.org/ws2.0/ref/taxonomy/ebird?cat=species&fmt=json')
//   .then( res => res.json() )
//   .then( json => Store.dispatch(Actions.birdsLoaded(json)) )


// load bird taxonony from local json
Store.dispatch(Actions.birdsLoaded(birdsShort))
// Store.dispatch(Actions.birdsLoaded(birdsFull))

PouchAppDb.find({
  selector: { dataType: 'bird'}
}).then(function(docs){
  var _myBirds = []
  docs.docs.forEach(function(bird){
    _myBirds.push(bird)
  })
  Store.dispatch(Actions.setMyBirds(_myBirds))
})

PouchAppDb.find({
  selector: { dataType: 'pin' }
}).then(function(docs){
  var _pins = []
  docs.docs.forEach(function(pin){
    _pins.push(pin)
  })
  Store.dispatch(Actions.setPins(_pins))
})
