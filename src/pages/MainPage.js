import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMainPageWeatherThunkCreator } from "../store/mainpage/actions";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainPageWeatherThunkCreator());
  }, [dispatch]);

  return (
    <div>
      <h1>Weather App!</h1>
    </div>
  );
}
