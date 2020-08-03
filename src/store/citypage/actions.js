import axios from "axios";

export function fetchCityWeatherThunkCreator(cityId) {
  return async function fetchCityWeather(dispath, getState) {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
