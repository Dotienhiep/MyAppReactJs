import {
  GET_LIST_PRODUCT_HOME,
  GET_LIST_PRODUCT_HOME_SUCCESS,
  GET_LIST_PRODUCT_HOME_FAILED,
} from "./constants";

const initialState = {
  isLoading: false,
  listProduct: [],
  // PRODUCTDetail: {}
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT_HOME: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_LIST_PRODUCT_HOME_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        listProduct: action.payload,
      };
    }

    case GET_LIST_PRODUCT_HOME_FAILED: {
      return {
        ...state,
        isLoading: false,
        listProduct: [],
      };
    }
    default:
      return state;
  }
};
export default reducer;
