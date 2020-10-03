import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMainPageWeatherThunkCreator } from "../store/mainpage/actions";
import { selectMainPageWeather } from "../store/mainpage/selectors";

import MainPageWeatherCard from "../components/MainPageWeatherCard/MainPageWeatherCard";
import SearchForm from "../components/SearchForm/SearchForm";

export default function MainPage() {
  const dispatch = useDispatch();
  const cityWeathers = useSelector(selectMainPageWeather());

  useEffect(() => {
    dispatch(fetchMainPageWeatherThunkCreator());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ color: "#F7717D" }}>Weather Around the World</h1>
      <SearchForm />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cityWeathers.map((city) => {
          return (
            <MainPageWeatherCard
              key={city.id}
              id={city.id}
              city={city.name}
              temp={parseInt(city.main.temp) - 273}
              weather={city.weather}
            />
          );
        })}
      </div>
    </div>
  );
}
