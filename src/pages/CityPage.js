import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCityWeatherThunkCreator } from "../store/citypage/actions";

export default function CityPage() {
  const parameters = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCityWeatherThunkCreator(parameters.cityId));
  }, [parameters.cityId, dispatch]);

  return (
    <div>
      <h1>City</h1>
    </div>
  );
}
