import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addcart: (state, action) => {
      const { product, qty } = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.items.push({ ...product, qty });
      }
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.qty = qty;
      }
    },
    removecart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addcart, updateQty, removecart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;