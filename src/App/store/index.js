import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import RootReducers from './RootReducer'
import RootSaga from './RootSaga'

const middlewares = []
const sagaMiddleware = createSagaMiddleware()

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middlewares.push(logger, sagaMiddleware)
} else {
  middlewares.push(sagaMiddleware)
}

const store = createStore(
  RootReducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(RootSaga)

export default store