import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import logger from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({reducer: rootReducer,middleware:[...getDefaultMiddleware({thunk: false}), sagaMiddleware]} );

sagaMiddleware.run(rootSaga);

export default store;
