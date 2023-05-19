import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { createUser } = authSlice.actions;

export default authSlice.reducer;
