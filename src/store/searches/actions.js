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

export function fetchSearchesThunkCreator() {
  return async function fetchSearchesThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/searches`);
      console.log(response.data);
    } catch (error) {
      console.log(`Error fetching searches: ${error}`);
    }
  };
}
