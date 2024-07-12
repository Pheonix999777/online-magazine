"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/Cart.Slices";
import addCartReducer from "./Slices/Add.Slices";

export const store = configureStore({
  reducer: {
    cart: addCartReducer,
    add: cartReducer,
  },
});
