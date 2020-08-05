import reducer from "../reducer";

describe("mainpageReducer", () => {
  const initialState = [];

  describe("if given state === undefined and an action with unknown action type", () => {
    test("returns the initial state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a MAINPAGE_WEATHER_FETCHED action type", () => {
    test("returns a new state with the payload array included", () => {
      const cities = [{}, {}];
      const action = { type: "MAINPAGE_WEATHER_FETCHED", payload: cities };
      const newState = reducer(initialState, action);
      expect(newState).toHaveLength(cities.length);
      expect(newState).toEqual(cities);
    });
  });
  describe("if given state === undefined ", () => {
    test("returns a new state with the payload array included", () => {
      const cities = [{}, {}];
      const action = { type: "MAINPAGE_WEATHER_FETCHED", payload: cities };
      const newState = reducer(undefined, action);
      expect(newState).toHaveLength(cities.length);
      expect(newState).toEqual(cities);
    });
  });
  describe("if given an action with unknown action type", () => {
    test("returns the initial state", () => {
      const cities = [{}, {}];
      const action = { type: "ANY", payload: cities };
      const newState = reducer(undefined, action);
      expect(newState).toEqual(initialState);
    });
  });
});
