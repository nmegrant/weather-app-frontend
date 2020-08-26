import axios from "axios";
import { selectToken } from "../user/selector";

export function favouritesFetched(favs) {
  return {
    type: "FETCH_FAVOURITES",
    payload: favs,
  };
}

export function addNewFavourites(favs) {
  return {
    type: "ADD_NEW_FAVOURITES",
    payload: favs,
  };
}

export function updatedFavourites(newFavs) {
  return {
    type: "REMOVE_FAVOURITE",
    payload: newFavs,
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

export function addFavouriteThunkCreator(location) {
  return async function addFavourites(dispatch, getState) {
    const tokenFunction = selectToken();
    const token = tokenFunction(getState());
    try {
      const response = await axios.post(
        `http://localhost:4000/favourites`,
        { location },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(addNewFavourites(response.data));
    } catch (error) {
      console.log(`Error adding new favourite: ${error}`);
    }
  };
}

export function removeFavouriteThunkCreator(id) {
  return async function removeFavourite(dispatch, getState) {
    const tokenFunction = selectToken();
    const token = tokenFunction(getState());
    try {
      const newFavouritesList = await axios.delete(
        `http://localhost:4000/favourites`,
        { headers: { Authorization: `Bearer ${token}` }, data: { id } }
      );
      dispatch(updatedFavourites(newFavouritesList.data));
    } catch (error) {
      console.log(`Error removing a favourite: ${error}`);
    }
  };
}
