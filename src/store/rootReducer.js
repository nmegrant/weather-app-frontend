import { combineReducers } from "redux";
import mainpage from "./mainpage/reducer";
import citypage from "./citypage/reducer";
import user from "./user/reducer";

export default combineReducers({
  mainpage,
  citypage,
  user,
});
