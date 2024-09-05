import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducers } from "./reducer";
import { thunk } from "redux-thunk";

export const store = createStore(combineReducers(reducers), applyMiddleware(thunk))