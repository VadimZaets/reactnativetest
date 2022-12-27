import { createSlice } from "@reduxjs/toolkit";
import { getRolls, getSets } from "./userOperation";

const userMenuSlice = createSlice({
  name: "menu",
  initialState: {
    sets: [],
    roll: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getRolls.pending](state) {
      state.isLoading = true;
    },
    [getRolls.fulfilled](state, { payload }) {
      state.roll = [...payload];
      state.isLoading = false;
    },
    [getRolls.rejected](state) {
      state.isLoading = false;
    },
    [getSets.pending](state) {
      state.isLoading = true;
    },
    [getSets.fulfilled](state, { payload }) {
      state.sets = [...payload];
      state.isLoading = false;
    },
    [getSets.rejected](state) {
      state.isLoading = false;
    },
  },
});
// export const { setGoogleData, logoutUser } = authSlice.actions;
export default userMenuSlice.reducer;
