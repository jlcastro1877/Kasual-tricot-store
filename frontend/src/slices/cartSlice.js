import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

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
      const item = action.payload;
      const existItem = state.cartItems.find(
        (x) => x._id === item._id && x.size === item.size
      );

      if (existItem) {
        // Update quantity if item already exists
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id && x.size === item.size
            ? { ...x, quantity: x.quantity + item.quantity }
            : x
        );
      } else {
        // Add new item to cart
        state.cartItems = [
          ...state.cartItems,
          { ...item, quantity: item.quantity },
        ];
      }

      // Call updateCart to recalculate prices and update state
      updateCart(state);
    },
    // Add other reducers if necessary
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
