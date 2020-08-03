import { combineReducers } from "redux";
import mainpage from "./mainpage/reducer";
import citypage from "./citypage/reducer";

export default combineReducers({
  mainpage,
  citypage,
});
