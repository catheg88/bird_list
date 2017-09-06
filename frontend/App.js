import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './Store'
import BirdListContainer from './components/BirdListContainer'
import SearchBarContainer from './components/SearchBarContainer'
import Birds from '../data/birds'

class App extends React.Component {
  render() {
    return (
      <Provider store={Store} >
        <div>
          <SearchBarContainer />
          <BirdListContainer />
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
//     Store.dispatch({
//       type: 'BIRDS_LOADED',
//       birds: birds
//     })
//   }
// }
// xmlhttp.open("GET", "http://ebird.org/ws1.1/ref/taxa/ebird?cat=species&fmt=json", true)
// xmlhttp.send()

var birdNameArray = []
for (var key in Birds) {
  var birdObject = new Object()
  birdObject.comName = Birds[key].comName
  birdObject.sciName = Birds[key].sciName
  birdNameArray.push(birdObject)
}

Store.dispatch({
  type: 'BIRDS_LOADED',
  birds: Birds
})

window.Store = Store
