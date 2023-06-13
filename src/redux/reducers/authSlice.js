import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

// export const getProfile = createAsyncThunk("auth/getProfile", async (data) => {
//   try {
//     const response = await api.auth.profile(data);
//     return response;
//   } catch (e) {}
// });

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
  // extraReducers: (builder) => {
  //   builder.addCase(getProfile.fulfilled, (state, action) => {
  //     // console.log('action.payload.data.status', action.payload.data.status)
  //   });
  // },
});

export const { createUser } = authSlice.actions;

export default authSlice.reducer;
