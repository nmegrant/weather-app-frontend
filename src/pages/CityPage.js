import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCityWeatherThunkCreator } from "../store/citypage/actions";
import { selectcityWeather } from "../store/citypage/selectors";
import CityWeather from "../components/CityWeather";
import CityForecast from "../components/CityForecast";
import Favourites from "../components/Favourites";

export default function CityPage() {
  const parameters = useParams();
  const dispatch = useDispatch();
  const weather = useSelector(selectcityWeather());
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    dispatch(fetchCityWeatherThunkCreator(parameters.cityId));
  }, [parameters.cityId, dispatch]);

  function changeFavourite() {
    setFavourite(!favourite);
  }

  return (
    <div>
      <h1>{weather.name}</h1>
      <Favourites changeFavourite={changeFavourite} favourite={favourite} />
      <CityWeather
        main={weather.main}
        weather={weather.weather}
        wind={weather.wind}
      />
      <CityForecast />
    </div>
  );
}
