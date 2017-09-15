import { createStore, applyMiddleware } from 'redux'
import Reducer from './Reducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const Store = createStore(
  Reducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
)

export default Store
