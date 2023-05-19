import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (data) => {
    try {
      const response = await api.product.get(data);
      return response.data.productlist;
    } catch (error) {}
  }
);

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
