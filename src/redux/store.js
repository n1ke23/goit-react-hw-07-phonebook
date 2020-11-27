import { reduceContacts } from './reduce/reduceContacts';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loger } from "redux-logger";
const defaultMiddleware = getDefaultMiddleware()
const store = configureStore({
    reducer: reduceContacts,
    middleware: [...defaultMiddleware]
});

export default store;

