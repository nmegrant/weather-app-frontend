import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import CityWeather from "../components/CityWeather";

import { selectUser, selectToken } from "../store/user/selector";
import { getLoggedInUserThunkCreator } from "../store/user/actions";
import { fetchCityWeatherThunkCreator } from "../store/citypage/actions";
import { selectcityWeather } from "../store/citypage/selectors";
import { fetchUserFavouritesThunkCreator } from "../store/favourites/actions";
import { selectFavourites } from "../store/favourites/selectors";

export default function PersonalPage() {
  const user = useSelector(selectUser());
  const token = useSelector(selectToken());
  const favourites = useSelector(selectFavourites());
  const dispatch = useDispatch();
  const history = useHistory();

  if (token === null) {
    history.push("/");
  }

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
      <h1>Favourite Cities</h1>
      {favourites.map((favourite) => {
        return (
          <div key={favourite.id}>
            <Link to={favourite.location}>{favourite.location}</Link>
          </div>
        );
      })}
    </div>
  );
}
