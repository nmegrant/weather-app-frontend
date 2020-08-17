import axios from "axios";

export function loggedIn(user) {
  return {
    type: "LOGS_IN",
    payload: user,
  };
}

export function logInThunkCreator(email, password) {
  return async function logIn(dispatch, getState) {
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email,
        password,
      });
      dispatch(loggedIn(response.data));
    } catch (error) {
      console.log(`Log in error: ${error}`);
    }
  };
}

export function signUpThunkCreator(newUser) {
  return async function singUp(dispatch, getState) {
    try {
      const response = await axios.post(
        `http://localhost:4000/signup`,
        newUser
      );
      dispatch(loggedIn(response.data));
    } catch (error) {
      console.log(`Sign up error: ${error}`);
    }
  };
}
