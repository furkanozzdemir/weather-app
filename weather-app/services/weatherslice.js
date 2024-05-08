import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
  },
  reducers: {
    addData(state, action) {
      state.data = action.payload;
    },
  },
});
export const { addData } = weatherSlice.actions;

export default weatherSlice.reducer;
