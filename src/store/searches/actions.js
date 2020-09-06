import axios from "axios";

export function searchedCitiesThunkCreator(location) {
  return async function searchedThunk(dispatch, getState) {
    try {
      await axios.post(`http://localhost:4000/searches`, {
        location,
      });
    } catch (error) {
      console.log(`Error saving search: ${error}`);
    }
  };
}
