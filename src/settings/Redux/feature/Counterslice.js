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
  }
});

export const { setCountInc, setCountDec, setCountreset,setCountrelated } = counterSlice.actions;
export default counterSlice.reducer;
