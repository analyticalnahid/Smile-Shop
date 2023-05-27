import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";

const rootReducer = combineReducers({
  productList: productListReducer.reducer,
  productDetails: productDetailsReducer.reducer,
  cart: cartReducer.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
