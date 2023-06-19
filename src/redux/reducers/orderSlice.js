import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchOrderHistory = createAsyncThunk(
  "order/fetchOrderHistory",
  async (data) => {
    try {
      const response = await api.order.getOrderHistory(data);
      return response;
    } catch (error) {}
  }
);

const initialState = {
  orderHistory: null,
  isLoading: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderHistory.fulfilled, (state, action) => {
      state.orderHistory = action.payload.data.data;
      state.isLoading = false;
    });
    builder.addCase(fetchOrderHistory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrderHistory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default orderSlice.reducer;
