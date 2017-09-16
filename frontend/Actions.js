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
      var doc = Object.assign({}, bird, {
        _id: bird.taxonID
      })

      db.put(doc).then(function (doc) {
        console.log("success writing to db")
        dispatch({
          type: T.ADD_BIRD_TO_MY_BIRDS,
          bird
        })
      }).catch(function (err) {
        console.log("error: ")
        console.log(err)
      })
    }
  )

}

export default Actions
