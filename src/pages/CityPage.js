import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCityWeatherThunkCreator } from "../store/citypage/actions";
import { selectcityWeather } from "../store/citypage/selectors";
import { fetchUserFavouritesThunkCreator } from "../store/favourites/actions";
import {
  addFavouriteThunkCreator,
  removeFavouriteThunkCreator,
} from "../store/favourites/actions";
import { selectFavourites } from "../store/favourites/selectors";
import CityWeather from "../components/CityWeather";
import WeatherAdvice from "../components/WeatherAdvice";
import Favourites from "../components/Favourites";

export default function CityPage() {
  const parameters = useParams();
  const dispatch = useDispatch();
  const weather = useSelector(selectcityWeather());
  const [favourite, setFavourite] = useState(false);
  const listOfFavouritesObjects = useSelector(selectFavourites());

  const listOfFavourites = listOfFavouritesObjects.map((city) => city.location);

  useEffect(() => {
    dispatch(fetchCityWeatherThunkCreator(parameters.cityId));
    dispatch(fetchUserFavouritesThunkCreator());
  }, [parameters.cityId, dispatch]);

  useEffect(() => {
    setFavourite(listOfFavourites.includes(weather.name));
  }, [listOfFavourites, weather.name]);

  function changeFavourite(location) {
    if (favourite) {
      const cityToRemove = listOfFavouritesObjects.find(
        (favourite) => favourite.location === weather.name
      );
      dispatch(removeFavouriteThunkCreator(cityToRemove.id));
    } else {
      dispatch(addFavouriteThunkCreator(location));
    }
  }

  console.log(weather);

  return (
    <div>
      {Object.keys(weather).length !== 0 ? (
        <div>
          <h1>{weather.name}</h1>
          <Favourites
            changeFavourite={changeFavourite}
            favourite={favourite}
            location={weather.name}
          />
          <CityWeather
            main={weather.main}
            weather={weather.weather}
            wind={weather.wind}
          />
          <WeatherAdvice
            main={weather.main}
            weather={weather.weather}
            wind={weather.wind}
          />
        </div>
      ) : (
        <h1>Sorry, no such place on record</h1>
      )}
    </div>
  );
}
