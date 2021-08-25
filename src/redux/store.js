import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import { watcherSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [ sagaMiddleware ]; // there may be more middlewares

const store = createStore(reducer, {}, applyMiddleware(...middleware)); // {} - 2nd param is the enhancer (we dont use it here)

//initiating a watcher (that will listen to any redux actions to be mapped into handlers):
sagaMiddleware.run(watcherSaga)

export default store;