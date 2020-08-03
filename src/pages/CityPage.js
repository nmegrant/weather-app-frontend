import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCityWeatherThunkCreator } from "../store/citypage/actions";
import { selectcityWeather } from "../store/citypage/selectors";

export default function CityPage() {
  const parameters = useParams();
  const dispatch = useDispatch();
  const weather = useSelector(selectcityWeather());

  console.log(weather);

  useEffect(() => {
    dispatch(fetchCityWeatherThunkCreator(parameters.cityId));
  }, [parameters.cityId, dispatch]);

  return (
    <div>
      <h1>{weather.name}</h1>
      <h2>Current Weather</h2>
      <h2>Forecast</h2>
    </div>
  );
}
