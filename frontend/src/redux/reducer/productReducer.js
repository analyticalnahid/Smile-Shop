import { createSlice } from "@reduxjs/toolkit";

export const productListReducer = createSlice({
  name: "productList",
  initialState: {
    loading: false,
    products: [],
    error: null,
  },
  reducers: {
    productListRequest (state, action) {
      state.loading = true;
      state.products = [];
    },
    productListSuccess(state, action)  {
      state.loading = false;
      state.products = action.payload.products;
    },
    productListFail (state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const productDetailsReducer = createSlice({
  name: "productDetails",
  initialState: {
    loading: false,
    product: { reviews: [] },
    error: null,
  },
  reducers: {
    productDetailsRequest(state, action)  {
      state.loading = true;
      state.product = { reviews: [] };
    },
    productDetailsSuccess (state, action) {
      state.loading = false;
      state.product = action.payload.product;
    },
    productDetailsFail (state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  productListRequest,
  productListSuccess,
  productListFail,
} = productListReducer.actions;

export const {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} = productDetailsReducer.actions;
