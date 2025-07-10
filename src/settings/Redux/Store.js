import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./feature/viewSlice";
import counterReducer from "./feature/Counterslice";
import cartReducer from "./feature/Cartslice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
    count: counterReducer,
    cart: cartReducer,
  },
});
