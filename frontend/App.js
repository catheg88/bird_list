import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './Store'
import BirdListContainer from './components/BirdListContainer'
import Birds from '../data/birdsFull'
import MapContainer from './components/MapContainer.jsx'
import MyBirdsListContainer from './components/MyBirdsListContainer'
import Actions from './Actions'
import db from '../data/pouchDb'
import ConnectedModal from './components/ConnectedModal'
import Spinner from './components/Spinner'


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

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('root'))
})

// var birds
// var xmlhttp = new XMLHttpRequest()
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     birds = JSON.parse(this.responseText)
//     var birdNameArray = []
//     for (var key in birds) {
//       var birdObject = new Object()
//       birdObject.comName = birds[key].comName
//       birdObject.sciName = birds[key].sciName
//       birdNameArray.push(birdObject)
//     }
//     Store.dispatch(Actions.birdsLoaded(birds))
//   }
// }
// xmlhttp.open("GET", "http://ebird.org/ws1.1/ref/taxa/ebird?cat=species&fmt=json", true)
// xmlhttp.send()

Store.dispatch(Actions.birdsLoaded(Birds))

db.allDocs({include_docs: true}).then(function(docs){
  var _myBirds = []
  docs.rows.forEach(function(bird){
    _myBirds.push(bird.doc)
  })
  Store.dispatch(Actions.setMyBirds(_myBirds))
})

window.Store = Store
