import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./feature/viewSlice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
  },
});