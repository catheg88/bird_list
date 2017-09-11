import * as T from './ActionConstants'

const Actions = {
  birdsLoaded: birds => ({
    type: T.BIRDS_LOADED,
    birds: birds
  }),

  textChange: filterText => ({
    type: T.TEXT_CHANGE,
    text: filterText
  }),

  addBird: bird => ({
    type: T.ADD_BIRD,
    bird: bird
  })
}

export default Actions
