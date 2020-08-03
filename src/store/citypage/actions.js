import axios from "axios";

export function cityWeatherFetched(weather) {
  return {
    type: "CITY_WEATHER_FETCHED",
    payload: weather,
  };
}

export function fetchCityWeatherThunkCreator(cityId) {
  return async function fetchCityWeather(dispatch, getState) {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${process.env.REACT_APP_API_KEY}`
      );
      dispatch(cityWeatherFetched(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
