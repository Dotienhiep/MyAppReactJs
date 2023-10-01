import { call, put, all, takeLatest, fork } from "redux-saga/effects";
import { GET_LIST_PRODUCT_HOME } from "./constants";
import { getListProductHomeAPI } from "./services";
import {
  getListProductHomeSuccess,
  getListProductHomeFailed,
  //   getCoutryByNameSuccess
} from "./actions";
import { take } from "lodash";

// const searchParams = new URLSearchParams(this.props.search);
//   console.log("searchParam====",searchParams.get(`productType`));
function* getListProductHomeProcess(params) {
  // console.log("param",params.props.location);
  const key = params.payload;
  console.log("key", key);
  try {
    // BUOC 1: goi api thong qua ham call(tenHamBatDongBo, thamso1, thamso2, ..thamson)
    // thamso1, thamso2...la cac tham so cua ham service

    const response = yield call(getListProductHomeAPI, key);
    console.log("response =====", response);
    console.log("111111111111");

    const { status, data } = response;
    // console.log("data",data.products);
    if (status === 200) {
      console.log("==============call here ========");
      /// BUOC 2: DIspacth action cap nhat list PRODUCT trrong reducer
      yield put(getListProductHomeSuccess(data.products));
    } else {
      yield put(
        getListProductHomeFailed({
          error: "Hello error",
        })
      );
    }
    // const res2 = yield call(getListPRODUCTByNameAPI, 'vietnam')
  } catch (err) {
    // handle err
    yield put(getListProductHomeFailed(err));
  }
}

function* watchGetListProductHome() {
  yield takeLatest(GET_LIST_PRODUCT_HOME, getListProductHomeProcess);
}

// function* getPRODUCTByNameProcess(params) {
//
//   try {
//     const name = params.payload;
//     const response = yield call(getListPRODUCTByNameAPI, name);
//     console.log("response ====", response);
//     if (
//       response &&
//       response.status === 200 &&
//       response.data &&
//       response.data.length
//     ) {
//       const data = response.data[0];
//       yield put(getCoutryByNameSuccess(data));
//     } else {
//       // put action failed
//     }
//   } catch (err) {
//     // handle err
//     // put action failed
//   }
// }

// function* watchGetPRODUCTByName() {
//   yield takeLatest(GET_PRODUCT_BY_NAME, getPRODUCTByNameProcess);
// }

export default function* watchAll() {
  yield all([fork(watchGetListProductHome)]);
}
