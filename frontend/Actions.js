import * as T from './ActionConstants'
import PouchAppDb from '../data/PouchAppDb'

const Actions = {
  birdsLoaded: birds => ({
    type: T.BIRDS_LOADED,
    birds: birds
  }),

  textChange: filterText => ({
    type: T.TEXT_CHANGE,
    text: filterText
  }),

  setMyBirds: birds => ({
    type: T.SET_MY_BIRDS,
    birds
  }),

  addBird: bird => (
    function(dispatch) {

      dispatch({type: T.LOADING})


      var _doc = Object.assign({}, bird, {
        _id: bird.taxonOrder.toString(),
        dataType: 'bird'
      })

      PouchAppDb.put(_doc).then(function (doc) {
        PouchAppDb.get(doc.id).then(function(retrievedBird){
          dispatch({
            type: T.ADD_BIRD_TO_MY_BIRDS,
            bird: retrievedBird
          })
          dispatch({type: T.LOADED})
        })
      }).catch(function (err) {
        console.log("PouchAppDb error: " + err.error + ": " + err.message)
        dispatch({type: T.LOADED})
      })
    }
  ),

  removeBird: bird => (
    function(dispatch) {
      dispatch({type: T.LOADING})
      PouchAppDb.get(bird._id).then(function (retbird) {
        dispatch({type: T.LOADED})
        return PouchAppDb.remove(retbird)
      }).catch(function (err) {
        console.log("PouchAppDb error: " + err.conflict + ": " + err.message)
        dispatch({type: T.LOADED})
      })

      dispatch({
        type: T.REMOVE_BIRD_FROM_MY_BIRDS,
        bird
      })

    }
  ),

  addPin: pin => (
    function(dispatch) {

      dispatch({type: T.LOADING})
      var _doc = Object.assign({}, pin, {
        _id: pin.lat.toString() + pin.lng.toString(),
        dataType: 'pin'
      })

      PouchAppDb.put(_doc).then(function (doc) {
        PouchAppDb.get(doc.id).then(function(retrievedBird){
          dispatch({
            type: T.ADD_PIN,
            retrievedBird
          })
          dispatch({type: T.LOADED})
        })
      }).catch(function (err) {
        console.log("PouchAppDb error: " + err.error + ": " + err.message)
        dispatch({type: T.LOADED})
      })
    }
  ),

  setActivePin: pinId => ({
    type: T.SET_ACTIVE_PIN,
    pinId
  }),

  setPins: pins => ({
    type: T.SET_PINS,
    pins
  })
}

export default Actions
