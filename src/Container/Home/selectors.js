import { createSelector } from "reselect";

const homeReducer = (state) => state.homeReducer;

export const selectIsLoading = createSelector(
  homeReducer,
  (state) => state.isLoading
);

export const selectListProduct = createSelector(homeReducer, (state) => {
  // console.log("stateeeeeeeeee====", state.listProduct);
  return state.listProduct;
});

// export const selectCountryDetail = createSelector(
//   homeReducer,
//   (state) => state.countryDetail
// );
