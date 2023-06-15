import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (data) => {
    try {
      const response = await api.product.get(data);
      return response;
    } catch (error) {}
  }
);

export const fetchBestSellers = createAsyncThunk(
  "product/fetchBestSellers",
  async () => {
    try {
      const response = await api.product.getBestSeller();
      return response;
    } catch (error) {}
  }
);

const initialState = {
  products: [],
  bestSellers: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.data.data.product;
    });
    builder.addCase(fetchBestSellers.fulfilled, (state, action) => {
      state.bestSellers = action.payload.data.data;
      // console.log("action.payload", action.payload.data.data);
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
