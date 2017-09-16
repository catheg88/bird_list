import * as T from './ActionConstants'
import db from '../data/pouchDb'

const initialState = {
  birds: [],
  filterText: '',
  myBirds: []
}

const Reducer = function ( state = initialState, action ) {
  console.log(action.type)
  switch (action.type) {
    case T.BIRDS_LOADED:
      return Object.assign({}, state, {
        birds: action.birds
      })
    case T.TEXT_CHANGE:
      return Object.assign({}, state, {
        filterText: action.text
      })

    case T.SET_MY_BIRDS:
      return Object.assign({}, state, {
        myBirds: action.birds
      })

    case T.ADD_BIRD_TO_MY_BIRDS:
      var alreadyInMyBirds = false
      state.myBirds.forEach(function(bird){
        if (bird.taxonID === action.bird.taxonID) {
          alreadyInMyBirds = true
          console.log('already in MyBirds')
        }
      })
      if (alreadyInMyBirds) {
        return state
      }
      return Object.assign({}, state, {
        myBirds: state.myBirds.concat(action.bird)
      })

    case T.REMOVE_BIRD_FROM_MY_BIRDS:
      var _myBirds = []
      state.myBirds.forEach(function(bird){
        if (bird.taxonID === action.bird.taxonID) {
          return
        }
        _myBirds.push(bird)
      })
      return Object.assign({}, state, {
        myBirds: _myBirds
      })

    default:
      return state
  }
}

export default Reducer
