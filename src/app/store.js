import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./services/dummyData";


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer
    },
    //  Don't worry about it 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)