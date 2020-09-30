import { combineReducers } from "redux";
import mainpage from "./mainpage/reducer";
import citypage from "./citypage/reducer";
import user from "./user/reducer";
import favourites from "./favourites/reducer";
import searches from "./searches/reducer";

export default combineReducers({
  mainpage,
  citypage,
  user,
  favourites,
  searches,
});
