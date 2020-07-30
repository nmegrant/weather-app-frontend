import axios from "axios";

export function fetchMainPageWeatherThunkCreator() {
  return async function mainPageWeather(dispatch, getState) {
    try {
      const response = await axios.get(``);
    } catch (error) {
      console.log(error);
    }
  };
}
