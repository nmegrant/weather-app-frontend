import axios from "axios";

export function cityWeatherFetched(weather) {
  return {
    type: "CITY_WEATHER_FETCHED",
    payload: weather,
  };
}

export function fetchCityWeatherThunkCreator(city) {
  return async function fetchCityWeather(dispatch, getState) {
    try {
      const query = isNaN(city) ? "q" : "id";
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?${query}=${city}&APPID=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response.data);
      dispatch(cityWeatherFetched(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
