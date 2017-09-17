import * as T from './ActionConstants'
import db from '../data/pouchDb'

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

      var _doc = Object.assign({}, bird, {
        _id: bird.taxonID
      })
      dispatch({type: T.LOADING})
      db.put(_doc).then(function (doc) {
        db.get(doc.id).then(function(retrievedBird){
          dispatch({
            type: T.ADD_BIRD_TO_MY_BIRDS,
            bird: retrievedBird
          })
          dispatch({type: T.LOADED})
        })
      }).catch(function (err) {
        console.log("db error: " + err.error + ": " + err.message)
        dispatch({type: T.LOADED})
      })
    }
  ),

  removeBird: bird => (
    function(dispatch) {
      dispatch({type: T.LOADING})
      db.get(bird._id).then(function (retbird) {
        dispatch({type: T.LOADED})
        return db.remove(retbird)
      }).catch(function (err) {
        console.log("db error : " + err.conflict + ": " + err.message)
        dispatch({type: T.LOADED})
      })

      dispatch({
        type: T.REMOVE_BIRD_FROM_MY_BIRDS,
        bird
      })

    }
  )

}

export default Actions
