const Reducer = function ( state = { birds: [], filterText: '' }, action ) {

  switch (action.type) {
    case 'BIRDS_LOADED':
      return Object.assign({}, state, {
        birds: action.birds
      })
    case 'TEXT_CHANGE':
      return Object.assign({}, state, {
        filterText: action.text
      })
    default:
      return state
  }
}

export default Reducer
