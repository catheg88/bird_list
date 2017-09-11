const initialState = {
  birds: [],
  filterText: '',
  myBirds: []
}

const Reducer = function ( state = initialState, action ) {
  console.log('dispatch: ' + action.type)

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
      console.log(action)
      return state
    default:
      return state
  }
}

export default Reducer
