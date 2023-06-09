import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchOrderHistory = createAsyncThunk(
  "order/fetchOrderHistory",
  async (data) => {
    try {
      const response = await api.order.getOrderHistory(data);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
);

const initialState = {
  orderHistory: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderHistory.fulfilled, (state, action) => {
      state.orderHistory = action.payload.data.data;
    });
  },
});

export default orderSlice.reducer;
