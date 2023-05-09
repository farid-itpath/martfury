import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";

export const reducers = combineReducers({
    counter: counterSlice,
})