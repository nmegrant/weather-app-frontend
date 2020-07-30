import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMainPageWeatherThunkCreator } from "../store/mainpage/actions";
import { selectMainPageWeather } from "../store/mainpage/selectors";

export default function MainPage() {
  const dispatch = useDispatch();
  const cityWeathers = useSelector(selectMainPageWeather());

  useEffect(() => {
    dispatch(fetchMainPageWeatherThunkCreator());
  }, [dispatch]);

  return (
    <div>
      <h1>Weather App!</h1>
      {cityWeathers.map((city) => {
        return (
          <div key={city.id}>
            <h1>{city.name}</h1>
            <p>{parseInt(city.main.temp) - 273} C</p>
          </div>
        );
      })}
    </div>
  );
}
