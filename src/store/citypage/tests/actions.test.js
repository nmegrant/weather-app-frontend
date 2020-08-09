import axios from "axios";
import { cityWeatherFetched, fetchCityWeatherThunkCreator } from "../actions";

describe("#cityWeatherFetched", () => {
  describe("if given a city object", () => {
    test("should return an action object", () => {
      const city = { test: "test" };
      const expected = {
        type: "CITY_WEATHER_FETCHED",
        payload: city,
      };
      expect(cityWeatherFetched(city)).toEqual(expected);
    });
    test("action.payload should contain the same information", () => {
      const city = { test: "test" };
      const expected = {
        type: "CITY_WEATHER_FETCHED",
        payload: city,
      };
      expect(cityWeatherFetched(city).payload).toEqual(city);
    });
  });
  describe("if given a null argument", () => {
    test("action.payload should be null", () => {
      const expected = {
        type: "CITY_WEATHER_FETCHED",
        payload: null,
      };
      expect(cityWeatherFetched(null)).toEqual(expected);
    });
  });
});

jest.mock("axios");

describe("#fetchCityWeatherThunkCreator", () => {
  describe("when called", () => {
    test("should dispatch an action cityWeatherFetched", async () => {
      const fakeCity = {};
      const response = { data: {} };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await fetchCityWeatherThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(cityWeatherFetched(fakeCity));
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
