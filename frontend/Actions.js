import * as T from './ActionConstants'
// import PouchBirdDb from '../data/PouchBirdDb'
// import PouchPinDb from '../data/PouchPinDb'
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
        // _id: bird.taxonID,
        _id: bird.taxonOrder.toString(),
        dataType: 'bird'
      })

      console.log('addBird _doc being stored to db')
      console.log('_doc')
      console.log(_doc)

      // PouchBirdDb.put(_doc).then(function (doc) {
      PouchAppDb.put(_doc).then(function (doc) {
        // PouchBirdDb.get(doc.id).then(function(retrievedBird){
        PouchAppDb.get(doc.id).then(function(retrievedBird){

          console.log('addBird retrievedBird (_doc retrieved from db):')
          console.log(retrievedBird)

          dispatch({
            type: T.ADD_BIRD_TO_MY_BIRDS,
            bird: retrievedBird
          })
          dispatch({type: T.LOADED})
        })
      }).catch(function (err) {
        // console.log("PouchBirdDb error: " + err.error + ": " + err.message)
        console.log("PouchAppDb error: " + err.error + ": " + err.message)
        dispatch({type: T.LOADED})
      })
    }
  ),

  removeBird: bird => (
    function(dispatch) {
      dispatch({type: T.LOADING})
      // PouchBirdDb.get(bird._id).then(function (retbird) {
      PouchAppDb.get(bird._id).then(function (retbird) {
        dispatch({type: T.LOADED})
        // return PouchBirdDb.remove(retbird)
        return PouchAppDb.remove(retbird)
      }).catch(function (err) {
        // console.log("PouchBirdDb error: " + err.conflict + ": " + err.message)
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

      console.log('addPin _doc being stored to db')
      console.log(_doc)

      // PouchPinDb.put(_doc).then(function (doc) {
      PouchAppDb.put(_doc).then(function (doc) {

        console.log('addPin doc (_doc) retrieved from db')
        console.log(doc)

        // PouchPinDb.get(doc.id).then(function(retrievedBird){
        PouchAppDb.get(doc.id).then(function(retrievedBird){
          dispatch({
            type: T.ADD_PIN,
            retrievedBird
          })
          dispatch({type: T.LOADED})
        })
      }).catch(function (err) {
        // console.log("PouchPinDb error: " + err.error + ": " + err.message)
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
