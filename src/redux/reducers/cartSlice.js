import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (data) => {
    try {
      const response = await api.cart.get(data);
      return response.data.usercart;
    } catch (e) {}
  }
);

export const addToCart = createAsyncThunk("cart/addToCart", async (data) => {
  try {
    const response = await api.cart.add(data);
    return response;
  } catch (e) {}
});

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (data) => {
    try {
      const response = await api.cart.remove(data);
      return response;
    } catch (e) {}
  }
);

export const updateCartItem = createAsyncThunk(
  "counter/updateCartItem",
  async (data) => {
    try {
      const response = await api.cart.update(data);
      return response;
    } catch (e) {}
  }
);

const initialState = {
  cartData: [],
  addedCartMessage: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      state.cartData = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.addedCartMessage = action.payload;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.addedCartMessage = action.payload;
    });
    builder.addCase(updateCartItem.fulfilled, (state, action) => {});
  },
});

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
