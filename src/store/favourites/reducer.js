const initialState = [];

export default function favouritesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_FAVOURITES":
      return [...action.payload];
    case "ADD_NEW_FAVOURITES":
      return [...state, ...action.payload];
    case "REMOVE_FAVOURITE":
      return [...action.payload];
    default:
      return state;
  }
}
