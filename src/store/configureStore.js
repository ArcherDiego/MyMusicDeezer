import { combineReducers, configureStore } from "@reduxjs/toolkit"
import searchBar from "./searchBar"

const reducers = combineReducers({ searchBar })

const store = configureStore(reducers)

export default store
