import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        media: () => "Films and Actors!"
    },
});

export type RootState = ReturnType <typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


