const initialState = {};

export default function citypageReducer(state = initialState, action) {
  switch (action.type) {
    case "CITY_WEATHER_FETCHED":
      return { ...action.payload };
    default:
      return state;
  }
}
