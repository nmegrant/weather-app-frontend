import axios from "axios";

export function mainPageWeatherFetched(cities) {
  return {
    type: "MAINPAGE_WEATHER_FETCHED",
    payload: cities,
  };
}

export function fetchMainPageWeatherThunkCreator() {
  return async function mainPageWeather(dispatch, getState) {
    try {
      const cities = [
        "Wellington,nz",
        "Halifax,ca",
        "Amsterdam,nl",
        "Tokyo,jp",
        "Buenos Aires,ar",
        "Sydney,au",
      ];
      const response = await Promise.all(
        cities.map(async (city) => {
          return await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`
          );
        })
      );
      const responseData = response.map((response) => response.data);
      console.log(responseData);
      dispatch(mainPageWeatherFetched(responseData));
    } catch (error) {
      console.log(error);
    }
  };
}
