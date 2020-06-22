import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Logger from "redux-logger";
import rootReducer from './rootReducer';
import RootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, 
                        //Logger
                        ));

sagaMiddleware.run(RootSaga);

export default store;