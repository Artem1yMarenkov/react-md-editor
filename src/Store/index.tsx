import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import editSaga from './sagas/editSaga';
import editReducer from "./slices/editSlice";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        edit: editReducer
    },
    middleware: ([
        sagaMiddleware
    ])
})

sagaMiddleware.run(editSaga);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

