import axios from "axios"; // for HTTP request
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

// makes a request to get products
export const listProducts = () => async (dispatch) => {
  try {
    // request products
    dispatch({ type: PRODUCT_LIST_REQUEST });

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
