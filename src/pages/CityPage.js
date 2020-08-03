import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCityWeatherThunkCreator } from "../store/citypage/actions";
import { selectcityWeather } from "../store/citypage/selectors";
import CityWeather from "../components/CityWeather";
import CityForecast from "../components/CityForecast";

export default function CityPage() {
  const parameters = useParams();
  const dispatch = useDispatch();
  const weather = useSelector(selectcityWeather());

  useEffect(() => {
    dispatch(fetchCityWeatherThunkCreator(parameters.cityId));
  }, [parameters.cityId, dispatch]);

  return (
    <div>
      <h1>{weather.name}</h1>
      <CityWeather main={weather.main} weather={weather.weather} />
      <CityForecast />
    </div>
  );
}
