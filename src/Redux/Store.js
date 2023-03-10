// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./RootReducer";
import ProductSaga from './ProductSaga';
import createSagaMiddleware from '@redux-saga/core';
// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});
sagaMiddleware.run(ProductSaga)
export default store