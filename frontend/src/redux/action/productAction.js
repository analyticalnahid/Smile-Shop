import axios from "axios";
import {
  productListRequest,
  productListSuccess,
  productListFail,
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} from "../reducer/productReducer";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(productListRequest());
    const { data } = await axios.get("http://localhost:8000/api/products/");
    dispatch(
      productListSuccess({
        products: data,
      })
    );
  } catch (error) {
    dispatch(
      productListFail({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};

export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch(productDetailsRequest());
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}/`
    );

    dispatch(
      productDetailsSuccess({
        product: data,
      })
    );
  } catch (error) {
    dispatch(
      productDetailsFail({
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    );
  }
};
