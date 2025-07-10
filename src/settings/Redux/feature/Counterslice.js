import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    mode: 1,
  },
  reducers: {
    setCountInc: (state) => {
      state.count += 1;
    },
    setCountDec: (state) => {
      state.count -= 1;
    },
    setCountreset: (state) => {
      state.count = 1;
    },
    setCountrelated: (state) => {
      state.count = 1;
    },
    setCountinit: (state,action) => {
      state.count = action.payload;
    },
  }
});

export const { setCountInc, setCountDec, setCountreset,setCountrelated,setCountinit } = counterSlice.actions;
export default counterSlice.reducer;
