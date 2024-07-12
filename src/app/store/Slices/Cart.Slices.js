import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const { productId, quantity } = action.payload;
      const IndexProduct = state.item.findIndex(
        (item) => item.productId === productId
      );
      if (IndexProduct !== -1) {
        state.item[IndexProduct].quantity += quantity;
      } else {
        state.item.push({ productId, quantity });
      }
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const IndexProduct = state.item.findIndex(
        (item) => item.productId === productId
      );
      if (IndexProduct !== -1) {
        state.item[IndexProduct].quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const { productId } = action.payload;
      state.item = state.item.filter((item) => item.productId !== productId);
    },
  },
});

export const { addCart, changeQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
