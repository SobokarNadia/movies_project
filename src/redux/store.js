import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slice";



let rootReducer = combineReducers({
    movies: movieReducer
});

let setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}