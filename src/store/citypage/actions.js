import axios from "axios";
import { searchedCitiesThunkCreator } from "../searches/actions";

export function cityWeatherFetched(weather) {
  return {
    type: "CITY_WEATHER_FETCHED",
    payload: weather,
  };
}

export function clearCityWeather() {
  return {
    type: "CLEAR_CITY_WEATHER",
  };
}

export function fetchCityWeatherThunkCreator(city) {
  return async function fetchCityWeather(dispatch, getState) {
    try {
      const query = isNaN(city) ? "q" : "id";
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?${query}=${city}&APPID=${process.env.REACT_APP_API_KEY}`
      );
      dispatch(cityWeatherFetched(response.data));
      if (isNaN(city)) {
        searchedCitiesThunkCreator(city);
      }
    } catch (error) {
      console.log(`Error fetching city weather: ${error}`);
      dispatch(clearCityWeather());
    }
  };
}
