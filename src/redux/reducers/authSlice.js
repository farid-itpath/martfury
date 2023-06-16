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
    updateUser: (state, action) => {
      state.user.user.firstName = action.payload.firstName;
      state.user.user.lastName = action.payload.lastName;
    },
  },
});

export const { createUser, updateUser } = authSlice.actions;

export default authSlice.reducer;
