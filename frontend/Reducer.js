import db from '../data/pouchdb'

const initialState = {
  birds: [],
  filterText: '',
  myBirds: []
}

const Reducer = function ( state = initialState, action ) {

  switch (action.type) {
    case 'BIRDS_LOADED':
      return Object.assign({}, state, {
        birds: action.birds
      })
    case 'TEXT_CHANGE':
      return Object.assign({}, state, {
        filterText: action.text
      })
    case 'ADD_BIRD':
      console.log(action.bird)

      var doc = Object.assign({}, action.bird, {
        _id: action.bird.taxonID
      })

      db.put(doc).then(function (doc) {
        console.log("success writing to db")
      }).catch(function (err) {
        window.err = err
        console.log("error: ")
        console.log(err)
      })

      var alreadyInMyBirds = false
      state.myBirds.forEach(function(bird){
        if (bird.taxonID === action.bird.taxonID) {
          alreadyInMyBirds = true
        }
      })
      if (alreadyInMyBirds) {
        return state
      }

      return Object.assign({}, state, {
        myBirds: state.myBirds.concat(action.bird)
      })
    default:
      return state
  }
}

export default Reducer
