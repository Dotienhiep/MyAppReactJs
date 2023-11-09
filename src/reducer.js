import { combineReducers } from "redux";
import homeReducer from "./Container/Home/reducer";

const rootReducer = combineReducers({
  homeReducer,
});

export default rootReducer;
