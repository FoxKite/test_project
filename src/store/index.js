import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js'


const logger = createLogger();

export default configureStore({
    reducer: {
        users: userReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})