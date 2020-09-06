const initialState = {};

export default function citypageReducer(state = initialState, action) {
  switch (action.type) {
    case "CITY_WEATHER_FETCHED":
      return { ...action.payload };
    case "CLEAR_CITY_WEATHER":
      return initialState;
    default:
      return state;
  }
}
