import { configureStore } from "@reduxjs/toolkit";
import editReducer from "./slices/editSlice";

export const store = configureStore({
    reducer: {
        edit: editReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch