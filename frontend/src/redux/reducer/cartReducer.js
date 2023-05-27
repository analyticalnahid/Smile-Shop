import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStroage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export const cartReducer = createSlice({
  name: "productList",
  initialState: {
    cartItems: cartItemsFromStroage,
  },
  reducers: {
    addToCartAction(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.productId === newItem.productId
      );

      if (existingItem) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.productId === existingItem.productId
            ? {
                ...item,
                qty: newItem.qty,
              }
            : item
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        const updatedItem = {
          ...newItem,
          totalQty: newItem.qty,
        };

        return {
          ...state,
          cartItems: [...state.cartItems, updatedItem],
        };
      }
    },

    removeFromCartAction(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload.productId
      );

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    },
  },
});

export const { addToCartAction, removeFromCartAction } = cartReducer.actions;
