const initialState = [];

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SEARCH_DATA":
      return [...action.payload];
    default:
      return state;
  }
}
