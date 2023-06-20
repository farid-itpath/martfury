import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";
import themeSlice from "./themeSlice";

export const reducers = combineReducers({
  auth: authSlice,
  product: productSlice,
  cart: cartSlice,
  order: orderSlice,
  theme: themeSlice,
});
