import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

// Initialize the cart state from localStorage or set default values
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, size, quantity } = action.payload;
      const existItem = state.cartItems.find(
        (x) => x._id === _id && x.size === size
      );

      if (existItem) {
        // Update quantity if item already exists
        state.cartItems = state.cartItems.map((x) =>
          x._id === _id && x.size === size ? { ...x, quantity: quantity } : x
        );
      } else {
        // Add new item to cart
        state.cartItems = [...state.cartItems, { ...action.payload, quantity }];
      }

      // Recalculate cart prices
      updateCart(state);
    },
    removeFromCart: (state, action) => {
      const { _id, size } = action.payload;
      state.cartItems = state.cartItems.filter(
        (x) => !(x._id === _id && x.size === size)
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
