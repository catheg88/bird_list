import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

import Store from '../Store'
import Actions from '../Actions'

import BirdList from './birdLists/BirdList'
import MapContainer from './map/MapContainer'
import MyBirdsList from './birdLists/MyBirdsList'
import ConnectedModal from './modal/ConnectedModal'
import Spinner from './modal/Spinner'
import BirdSighting from './birdSighting/BirdSighting.jsx'

import PouchAppDb from '../../data/PouchAppDb'
// local json bird taxonomies (skip api call to ebird)
import birdsShort from '../../data/birdsShort'
// import birdsFull from '../../data/birdsFull'

class App extends React.Component {
  render() {
    return (
      <div>
        <ConnectedModal >
          <Spinner />
        </ConnectedModal >
        <MapContainer />
        {this.props.birdSightingForm ? <BirdSighting /> : null}
        <div id="columnFlexContainer">
          <BirdList />
          <MyBirdsList />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  birdSightingForm: state.birdSightingForm
})

App = connect(
  mapStateToProps,
  null
)(App)

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// class App extends React.Component {
//   render() {
//     console.log(this.state)
//     return (
//       <Provider store={Store} >
//         <div>
//           <ConnectedModal >
//             <Spinner />
//           </ConnectedModal >
//           <MapContainer />
//
//           <div id="columnFlexContainer">
//             <BirdList />
//             <MyBirdsList />
//           </div>
//         </div>
//       </Provider >
//     )
//   }
// }

// lazily, we'll just ask the store to dispatch some initial setup requests itself

// api call to ebird for bird taxonony
  // fetch('https://ebird.org/ws2.0/ref/taxonomy/ebird?cat=species&fmt=json')
  //   .then( res => res.json() )
  //   .then( json => Store.dispatch(Actions.birdsLoaded(json)) )
// load bird taxonomy (short or full) from local json (skip api call to ebird)
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
