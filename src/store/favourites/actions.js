import axios from "axios";
import { selectToken } from "../user/selector";

export function favouritesFetched(favs) {
  return {
    type: "FETCH_FAVOURITES",
    payload: favs,
  };
}

export function fetchUserFavouritesThunkCreator() {
  return async function fetchUserFavourites(dispatch, getState) {
    const tokenFunction = selectToken();
    const token = tokenFunction(getState());
    try {
      const response = await axios.get(`http://localhost:4000/favourites`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(favouritesFetched(response.data));
    } catch (error) {
      console.log(`Error fetch favourites: ${error}`);
    }
  };
}
