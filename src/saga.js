import { all, fork } from "redux-saga/effects";

import watchAllHomeSaga from "./Container/Home/saga";
// import watchAllProductSaga from "./ProductPage/saga";
// import watchAllBattleSaga from "./BattlePage/saga";

export default function* rootSaga() {
  yield all([
    fork(watchAllHomeSaga),
    // fork(watchAllProductSaga),
    // fork(watchAllBattleSaga)
  ]);
}
