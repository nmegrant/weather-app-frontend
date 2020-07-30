const initialState = [];

export default function mainpageReducer(state = initialState, action) {
  switch (action.type) {
    case "MAINPAGE_WEATHER_FETCHED":
      return [...action.payload];
    default:
      return state;
  }
}
