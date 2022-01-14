import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducers'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(rootReducer , applyMiddleware())
// sagaMiddleWare.run()