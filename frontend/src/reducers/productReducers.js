// a function with a state and an action type, manipulates the state and returns a copy to the store
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

// retreives list of products
export const productListReducer = (state = { products: [] }, action) => {
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

// retreives a product based on the id of the product
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    // loading the product list
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state, // due to the array(reviews) within the product object
      };

    // data(products) gotten from the server
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    // error retriving data(products) from the server

    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    // returns the initial state
    default:
      return state;
  }
};
