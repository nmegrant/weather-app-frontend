import axios from "axios";

export function searchedCitiesThunkCreator(city) {
  return async function searchedThunk(dispatch, getState) {
    try {
      await axios.post(` http://localhost:4000/searches`, city);
    } catch (error) {
      console.log(`Error saving search: ${error}`);
    }
  };
}
