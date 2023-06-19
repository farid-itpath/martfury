import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (data) => {
    try {
      const response = await api.cart.get(data);
      return response;
    } catch (e) {}
  }
);

const initialState = {
  cartData: [],
  addedCartMessage: {},
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      state.cartData = action.payload.data.data;
      state.isLoading = false;
    });
    builder.addCase(fetchCartData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCartData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
