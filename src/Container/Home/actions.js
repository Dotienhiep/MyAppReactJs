import {
  GET_LIST_PRODUCT_HOME,
  GET_LIST_PRODUCT_HOME_FAILED,
  GET_LIST_PRODUCT_HOME_SUCCESS,
} from "./constants";

export const getListProductHome = () => {
  return {
    type: GET_LIST_PRODUCT_HOME,
  };
};

export const getListProductHomeSuccess = (payload) => {
  return {
    type: GET_LIST_PRODUCT_HOME_SUCCESS,
    payload,
  };
};

export const getListProductHomeFailed = (payload) => {
  return {
    type: GET_LIST_PRODUCT_HOME_FAILED,
    payload,
  };
};
