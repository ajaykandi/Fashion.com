import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const itemId = action.payload._id;

      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === itemId
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].amount += 1;
      } else {
        const product = { ...action.payload, amount: 1 };
        state.cartItems.push(product);
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems?.filter(
        (item) => item._id !== action.payload.id
      );
    },
    Increase: (state, action) => {
      const cartItem = state.cartItems?.find(
        (item) => item._id === action.payload.id
      );
      cartItem.amount = cartItem.amount + 1;
    },
    Decrease: (state, action) => {
      const cartItem = state.cartItems?.find(
        (item) => item._id === action.payload.id
      );
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.quantity = amount;
      state.total = total;
    },
  },
});

export const { addProduct, Increase, Decrease, removeItem, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
