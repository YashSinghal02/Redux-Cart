import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name: "counterReducer",
  initialState: 0,
  reducers: {
    increase: (state) => state + 1,
    decrease: (state) => state - 1,
  },
});


export const { increase, decrease } = counterReducer.actions;
export default counterReducer.reducer;
