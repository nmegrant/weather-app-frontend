const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  location: null,
  darkMode: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGS_IN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
      };
    case "LOGS_OUT":
      localStorage.removeItem("token");
      return { ...initialState, token: null };
    case "STILL_LOGGED_IN":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
