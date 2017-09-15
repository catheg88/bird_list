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
    bird
  }),

  addMyBirdToDB: bird => {
    return function(dispatch) {


      {
        type: T.ADD_MY_BIRD_TO_DB,
        bird
      }

    }
  }

}

export default Actions
