import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// import root reducer and root saga
import rootReducer from "./reducer";
import rootSaga from "./saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
