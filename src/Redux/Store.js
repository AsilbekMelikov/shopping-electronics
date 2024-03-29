import {configureStore} from "@reduxjs/toolkit";
import SmartphoneReducer from "./Reducer";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";


const persistConfig = {
    key: 'root',
    storage
}


const persistedReducer = persistReducer(persistConfig, SmartphoneReducer)


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store