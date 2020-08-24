import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCityWeatherThunkCreator } from "../store/citypage/actions";
import { selectcityWeather } from "../store/citypage/selectors";
import { fetchUserFavouritesThunkCreator } from "../store/favourites/actions";
import { addFavouriteThunkCreator } from "../store/favourites/actions";
import { selectFavourites } from "../store/favourites/selectors";
import CityWeather from "../components/CityWeather";
import CityForecast from "../components/CityForecast";
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
      console.log("remove favourite");
    } else {
      dispatch(addFavouriteThunkCreator(location));
    }
  }

  console.log(favourite);

  return (
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
      <CityForecast />
    </div>
  );
}
