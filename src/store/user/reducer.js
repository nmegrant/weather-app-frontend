const initialState = {};

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
      return initialState;
    default:
      return state;
  }
}
