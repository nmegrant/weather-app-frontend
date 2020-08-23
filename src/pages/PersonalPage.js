import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CityWeather from "../components/CityWeather";

import { selectUser } from "../store/user/selector";
import { getLoggedInUserThunkCreator } from "../store/user/actions";
import { fetchCityWeatherThunkCreator } from "../store/citypage/actions";
import { selectcityWeather } from "../store/citypage/selectors";
import { fetchUserFavouritesThunkCreator } from "../store/favourites/actions";
import { selectFavourites } from "../store/favourites/selectors";

export default function PersonalPage() {
  const user = useSelector(selectUser());
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites());

  console.log(favourites);

  useEffect(() => {
    dispatch(getLoggedInUserThunkCreator());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCityWeatherThunkCreator(user.location));
    dispatch(fetchUserFavouritesThunkCreator());
  }, [dispatch, user.location]);

  const locationWeather = useSelector(selectcityWeather());

  return (
    <div>
      <h1>{user.name}'s Page</h1>
      <h4>Location: {user.location}</h4>
      <CityWeather
        main={locationWeather.main}
        weather={locationWeather.weather}
        wind={locationWeather.wind}
      />
    </div>
  );
}
