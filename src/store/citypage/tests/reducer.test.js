import reducer from "../reducer";

describe("citypageReducer", () => {
  const initialState = {};

  describe("if given state === undefined and an action with unknown action type", () => {
    test("returns the initial state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a CITY_WEATHER_FETCHED action type", () => {
    test("returns a new state with the payload array included", () => {
      const city = { test: "test" };
      const action = { type: "CITY_WEATHER_FETCHED", payload: city };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(city);
      expect(newState.test).toBe("test");
    });
  });

  describe("if given state === undefined", () => {
    test("returns a new state with the payload array included", () => {
      const city = { test: "test" };
      const action = { type: "CITY_WEATHER_FETCHED", payload: city };
      const newState = reducer(undefined, action);
      expect(newState).toEqual(city);
      expect(newState.test).toBe("test");
    });
  });

  describe("if given an action with unknown action type", () => {
    test("returns the initial state", () => {
      const city = { test: "test" };
      const action = { type: "ANY", payload: city };
      const newState = reducer(undefined, action);
      expect(newState).toEqual(initialState);
    });
  });
});
