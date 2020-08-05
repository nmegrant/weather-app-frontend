import axios from "axios";
import {
  mainPageWeatherFetched,
  fetchMainPageWeatherThunkCreator,
} from "../actions";

describe("#mainPageWeatherFetched", () => {
  describe("if given an array of city objects", () => {
    test("should return an action object", () => {
      const cities = [{}, {}];
      const expected = {
        type: "MAINPAGE_WEATHER_FETCHED",
        payload: cities,
      };
      expect(mainPageWeatherFetched(cities)).toEqual(expected);
    });
    test("action.payload should have same length as given arguement", () => {
      const cities = [{}, {}];
      const expected = {
        type: "MAINPAGE_WEATHER_FETCHED",
        payload: cities,
      };
      expect(mainPageWeatherFetched(cities).payload).toHaveLength(
        cities.length
      );
    });
  });
  describe("if given a null argument", () => {
    test("action.payload should be null", () => {
      const expected = {
        type: "MAINPAGE_WEATHER_FETCHED",
        payload: null,
      };
      expect(mainPageWeatherFetched(null)).toEqual(expected);
    });
  });
});

jest.mock("axios");

describe("#fetchMainPageWeatherThunkCreator", () => {
  describe("when called", () => {
    test("should dispatch an action mainPageWeatherFetched", async () => {
      const fakeCities = [{}, {}, {}, {}, {}, {}];
      const response = { data: {} };
      axios.get.mockImplementation(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce([]);
      await fetchMainPageWeatherThunkCreator()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(mainPageWeatherFetched(fakeCities));
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
