import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    mode: "grid",
  },
  reducers: {
    setGridView: (state) => {
      state.mode = "grid";
    },
    setListView: (state) => {
      state.mode = "list";
    },
  },
});

export const { setGridView, setListView } = viewSlice.actions;
export default viewSlice.reducer;