export function loggedIn(user) {
  return {
    type: "LOGS_IN",
    payload: user,
  };
}

export function logInThunkCreator(email, password) {
  return async function logIn(dispatch, getState) {
    try {
      dispatch(loggedIn({ email, password }));
    } catch (error) {
      console.log(`Log in error: ${error}`);
    }
  };
}
