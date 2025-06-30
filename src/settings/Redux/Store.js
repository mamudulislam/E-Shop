import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./feature/viewSlice";
import counterReducer from "./feature/Counterslice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
    count: counterReducer,
  },
});
