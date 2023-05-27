import axios from "axios";
import { addToCartAction, removeFromCartAction } from "../reducer/cartReducer";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}/`
    );

    dispatch(
      addToCartAction({
        countInStock: data.countInStock,
        image: data.image,
        name: data.name,
        price: data.price,
        productId: data._id,
        qty: qty,
      })
    );
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromCart = (rmId) => (dispatch, getState) => {
  try {
    dispatch(
      removeFromCartAction({
        productId: rmId,
      })
    );

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error.message);
  }
};
