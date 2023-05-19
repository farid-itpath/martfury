import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

export const reducers = combineReducers({
  auth: authSlice,
  product: productSlice,
  cart: cartSlice,
});
