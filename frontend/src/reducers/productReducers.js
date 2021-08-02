// a function with a state and an action type, manipulates the state and returns a copy to the store
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    // loading the product list
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };

    // data(products) gotten from the server
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    // error retriving data(products) from the server
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    // returns the initial state
    default:
      return state;
  }
};
