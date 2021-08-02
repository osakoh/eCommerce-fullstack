import axios from "axios"; // for HTTP request
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

// makes a request to get products
export const listProducts = () => async (dispatch) => {
  try {
    // sets loading to true, and products to []
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // request products
    const { data } = await axios.get("/api/products/");
    // successful request
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // unsuccessful request
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    // sets loading to true, and products to {}
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    // request product
    const { data } = await axios.get(`/api/products/${id}`);

    // successful request
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // unsuccessful request
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
