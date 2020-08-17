const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGS_IN":
      return {
        ...action.payload,
      };
    case "LOGS_OUT":
      return initialState;
    default:
      return initialState;
  }
}
