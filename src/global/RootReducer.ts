import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { MediaAPI } from "./MediaAPI";

export const Reducer = configureStore({
    reducer: {
        [MediaAPI.reducerPath]: MediaAPI.reducer,
    },      // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(MediaAPI.middleware),
});

setupListeners(Reducer.dispatch);
export type RootState = ReturnType <typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


